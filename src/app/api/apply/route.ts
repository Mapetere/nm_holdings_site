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

        // 1. Verify required fields
        if (!fullName || !businessName || !email || !description || !timeline) {
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

        // 4. Send Email Notification
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
                    
                    <h3 style="color: #0e1628; margin-top: 20px;">Business Focus</h3>
                    <p>${description}</p>
                    
                    <h3 style="color: #0e1628; margin-top: 20px;">Current Challenges</h3>
                    <p>${problem || 'Not specified'}</p>
                    
                    <p><strong>Timeline:</strong> ${timeline}</p>
                    
                    <h3 style="color: #0e1628; margin-top: 20px;">Motivation</h3>
                    <p>${motivation || 'Not specified'}</p>
                    
                    <div style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 10px;">
                        This application was submitted via the NM Solutions website.
                    </div>
                </div>
            `,
        };

        // Reuse the transporter object significantly speeds up the process.
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('General Error:', error);
        return NextResponse.json({ error: 'Failed to process application' }, { status: 500 });
    }
}
