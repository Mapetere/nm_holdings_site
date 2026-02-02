import mongoose, { Schema, Document } from 'mongoose';

export interface IOnboarding extends Document {
    // 1. Business Identity
    companyName: string;
    hasBranding: 'Yes' | 'No';
    tagline?: string;
    contactPerson: string;
    email: string;
    phone: string;

    // 2. The Goal
    primaryPurpose: string; // e.g., Bookings, Sales, Information, Portfolio
    idealCustomer: string;

    // 3. Technical Requirements
    hasDomain: 'Yes' | 'No';
    domainName?: string;
    expectedPages: string; // Home, About, Services, etc.
    specialFeatures: string[]; // WhatsApp, Payments, Login, etc.

    // 4. Design Inspiration
    designInspiration: string[]; // 2 links

    // 5. Timeline
    idealLaunchDate: string;

    // Metadata
    createdAt: Date;
    status: 'pending' | 'reviewed' | 'active';
}

const OnboardingSchema: Schema = new Schema({
    // 1. Business Identity
    companyName: { type: String, required: true },
    hasBranding: { type: String, enum: ['Yes', 'No'], required: true },
    tagline: { type: String },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },

    // 2. The Goal
    primaryPurpose: { type: String, required: true },
    idealCustomer: { type: String, required: true },

    // 3. Technical Requirements
    hasDomain: { type: String, enum: ['Yes', 'No'], required: true },
    domainName: { type: String },
    expectedPages: { type: String, required: true },
    specialFeatures: [{ type: String }],

    // 4. Design Inspiration
    designInspiration: [{ type: String }],

    // 5. Timeline
    idealLaunchDate: { type: String, required: true },

    createdAt: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'active'],
        default: 'pending'
    }
});

export default mongoose.models.Onboarding ||
    mongoose.model<IOnboarding>('Onboarding', OnboardingSchema);
