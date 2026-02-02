import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import connectDB from '@/lib/mongodb';
import Onboarding from '@/models/Onboarding';

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

        // Basic validation for critical fields
        const requiredFields = ['companyName', 'contactPerson', 'email', 'phone', 'primaryPurpose', 'idealLaunchDate'];
        for (const field of requiredFields) {
            if (!data[field]) {
                return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
            }
        }

        // 1. Save to MongoDB
        try {
            await connectDB();
            await Onboarding.create(data);
        } catch (dbError) {
            console.error('Database Error:', dbError);
        }

        // 2. Send Notification Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'mapeterenyasha@gmail.com',
            subject: `PROJECT DISCOVERY: ${data.companyName}`,
            html: `
                <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #0e1628; max-width: 700px; margin: 0 auto; border: 1px solid #c29f52; padding: 40px; border-radius: 12px; background-color: #f4f1e7;">
                    <h2 style="color: #c29f52; border-bottom: 2px solid #c29f52; padding-bottom: 15px; text-transform: uppercase; letter-spacing: 2px;">NM SOLUTIONS | PROJECT DISCOVERY</h2>
                    
                    <div style="margin-bottom: 25px;">
                        <h3 style="color: #c29f52;">1. Business Identity</h3>
                        <p><strong>Official Name:</strong> ${data.companyName}</p>
                        <p><strong>Branding/Colors:</strong> ${data.hasBranding}</p>
                        <p><strong>Tagline:</strong> ${data.tagline || 'N/A'}</p>
                        <p><strong>Contact Person:</strong> ${data.contactPerson}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Phone:</strong> ${data.phone}</p>
                    </div>
                    
                    <div style="margin-bottom: 25px;">
                        <h3 style="color: #c29f52;">2. The Goal</h3>
                        <p><strong>Primary Purpose:</strong> ${data.primaryPurpose}</p>
                        <p><strong>Ideal Customer:</strong> ${data.idealCustomer}</p>
                    </div>
                    
                    <div style="margin-bottom: 25px;">
                        <h3 style="color: #c29f52;">3. Technical Requirements</h3>
                        <p><strong>Has Domain:</strong> ${data.hasDomain}</p>
                        <p><strong>Domain Name:</strong> ${data.domainName || 'N/A'}</p>
                        <p><strong>Envisioned Pages:</strong> ${data.expectedPages}</p>
                        <p><strong>Specialized Features:</strong> ${data.specialFeatures?.join(', ') || 'None'}</p>
                    </div>
                    
                    <div style="margin-bottom: 25px;">
                        <h3 style="color: #c29f52;">4. Design Inspiration</h3>
                        <p><strong>Links:</strong> ${data.designInspiration?.join(', ') || 'None provided'}</p>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h3 style="color: #c29f52;">5. Timeline</h3>
                        <p><strong>Ideal Launch Date:</strong> ${data.idealLaunchDate}</p>
                    </div>

                    <div style="margin-top: 40px; font-size: 12px; color: #888; border-top: 1px solid #c29f52; padding-top: 20px; text-align: center;">
                        This discovery form was submitted via NM Solutions.
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Onboarding Error:', error);
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
}
