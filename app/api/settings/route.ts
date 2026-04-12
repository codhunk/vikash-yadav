import { NextResponse } from 'next/server';
import connectDB from '@/server/mongodb';
import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
  drName: { type: String, default: "Dr. Vikash Yadav" },
  specialty: { type: String, default: "Chief Surgeon • Surgical Oncology Specialist" },
  email: { type: String, default: "yadav.v@manipal.edu" },
  phone: { type: String, default: "+91 99999 88888" },
  bio: { type: String, default: "Senior Consultant Laparoscopic and General Surgery with 15+ years of experience at Manipal Hospitals." },
}, { timestamps: true });

const Setting = mongoose.models.Setting || mongoose.model('Setting', SettingsSchema);

export async function GET() {
  try {
    await connectDB();
    let settings = await Setting.findOne();
    if (!settings) {
      settings = await Setting.create({});
    }
    return NextResponse.json({ success: true, data: settings });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    let settings = await Setting.findOne();
    if (settings) {
      settings = await Setting.findOneAndUpdate({}, body, { new: true });
    } else {
      settings = await Setting.create(body);
    }
    return NextResponse.json({ success: true, data: settings });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
