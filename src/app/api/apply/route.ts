import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import connectDB from '@/lib/mongodb';
import ClientApplication from '@/models/ClientApplication';

// Configure Nodemailer transporter once outside the handler to reuse the connection pool
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { fullName, businessName, email, description, problem, timeline, motivation } = data;

        // 1. Verify required fields (Note: timeline removed from required for package inquiries)
        if (!fullName || !businessName || !email || !description) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 2. Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        // 3. Save to MongoDB
        try {
            await connectDB();
            await ClientApplication.create({
                fullName,
                businessName,
                email,
                description,
                problem,
                timeline,
                motivation
            });
            console.log('Application saved to MongoDB successfully');
        } catch (dbError) {
            console.error('Database Error:', dbError);
            // We'll continue with the email even if DB fails, so we don't block the user
            // but in a production app you might want to handle this differently.
        }

        // 4. Send Email Notification to Team
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'support@nmsolutions.co.zw',
            subject: `New Project Inquiry: ${businessName}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #c29f52; border-bottom: 2px solid #c29f52; padding-bottom: 10px;">New Project Inquiry</h2>
                    
                    <p><strong>Full Name:</strong> ${fullName}</p>
                    <p><strong>Business / Brand:</strong> ${businessName}</p>
                    <p><strong>Email Address:</strong> ${email}</p>
                    
                    ${data.selectedPackageName ? `
                    <div style="margin: 20px 0; padding: 15px; background: #fdfaf3; border: 1px solid #c29f52; border-radius: 6px;">
                        <h4 style="margin: 0 0 10px; color: #c29f52;">Selected Package</h4>
                        <p style="margin: 0;"><strong>Package:</strong> ${data.selectedPackageName}</p>
                        <p style="margin: 0;"><strong>Category:</strong> ${data.selectedPackageCategory || 'Not specified'}</p>
                        <p style="margin: 0;"><strong>Price:</strong> ${data.selectedPackagePrice || 'Not specified'}</p>
                    </div>
                    ` : ''}

                    <h3 style="color: #0e1628; margin-top: 20px;">Business Focus / Project Vision</h3>
                    <p>${description}</p>
                    
                    <h3 style="color: #0e1628; margin-top: 20px;">Current Challenges</h3>
                    <p>${problem || 'Not specified'}</p>
                    
                    <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
                    
                    <h3 style="color: #0e1628; margin-top: 20px;">Motivation</h3>
                    <p>${motivation || 'Not specified'}</p>
                    
                    <div style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 10px;">
                        This application was submitted via the NM Solutions website.
                    </div>
                </div>
            `,
        };

        // 5. Send Auto-Reply to Customer
        const autoReplyOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `We've received your inquiry - NM Solutions`,
            html: `
                <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 12px; overflow: hidden;">
                    <div style="background: #0e1628; padding: 30px; text-align: center;">
                        <h1 style="color: #c29f52; margin: 0; font-size: 24px; letter-spacing: 2px;">NM SOLUTIONS</h1>
                        <p style="color: rgba(244, 241, 231, 0.6); margin: 5px 0 0; text-transform: uppercase; font-size: 10px; letter-spacing: 3px;">Digital Engineering</p>
                    </div>
                    
                    <div style="padding: 40px; background: #ffffff;">
                        <h2 style="color: #0e1628; margin-top: 0;">Hello ${fullName},</h2>
                        <p>Thank you for reaching out to NM Solutions. We have received your inquiry for <strong>${businessName}</strong> and our senior engineering team is already reviewing your details.</p>
                        
                        ${data.selectedPackageName ? `
                        <div style="margin: 25px 0; padding: 20px; background: #f9f9f9; border-left: 4px solid #c29f52; border-radius: 4px;">
                            <h4 style="margin: 0 0 10px; color: #c29f52; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Selected Package</h4>
                            <p style="margin: 0; font-size: 16px;"><strong>${data.selectedPackageName}</strong></p>
                            <p style="margin: 5px 0 0; font-size: 14px; color: #666;">${data.selectedPackageCategory || ''} Development • ${data.selectedPackagePrice || ''}</p>
                        </div>
                        ` : ''}

                        <p><strong>What's next?</strong></p>
                        <ol style="padding-left: 20px; color: #444;">
                            <li style="margin-bottom: 10px;">A senior engineer will perform a technical assessment of your requirements.</li>
                            <li style="margin-bottom: 10px;">We will prepare a tailored technical brief for your project.</li>
                            <li>We will contact you within 48 hours to schedule a discovery meeting.</li>
                        </ol>

                        <div style="margin-top: 35px; padding-top: 25px; border-top: 1px solid #eee; text-align: center;">
                            <p style="margin-bottom: 10px; font-size: 14px; color: #666;">In the meantime, feel free to explore our latest work.</p>
                            <a href="https://nmsolutions.co.zw" style="display: inline-block; padding: 12px 30px; background: #c29f52; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; text-transform: uppercase; font-size: 13px; letter-spacing: 1px;">Visit Our Website</a>
                        </div>
                    </div>
                    
                    <div style="background: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #888;">
                        &copy; ${new Date().getFullYear()} NM Solutions. All rights reserved.<br>
                        This is an automated response to your inquiry.
                    </div>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(autoReplyOptions)
        ]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('General Error:', error);
        return NextResponse.json({ error: 'Failed to process application' }, { status: 500 });
    }
}
