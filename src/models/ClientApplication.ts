import mongoose, { Schema, Document } from 'mongoose';

export interface IClientApplication extends Document {
    fullName: string;
    businessName: string;
    email: string;
    description: string;
    problem?: string;
    timeline: string;
    whyFounding?: string;
    createdAt: Date;
}

const ClientApplicationSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    businessName: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    problem: { type: String },
    timeline: { type: String },
    whyFounding: { type: String },
    createdAt: { type: Date, default: Date.now }
});

// Use the existing model if it's already defined to avoid OverwriteModelError in Next.js dev mode
export default mongoose.models.ClientApplication ||
    mongoose.model<IClientApplication>('ClientApplication', ClientApplicationSchema);
