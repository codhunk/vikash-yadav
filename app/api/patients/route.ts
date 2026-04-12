import { NextResponse } from 'next/server';
import connectDB from '@/server/mongodb';
import Patient from '@/server/models/Patient';

export async function GET(req: Request) {
  try {
    await connectDB();
    const patients = await Patient.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: patients });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    
    // Check if patient already exists by email
    const existing = await Patient.findOne({ email: body.email });
    if (existing) {
      return NextResponse.json({ success: false, message: 'Patient with this email already exists' }, { status: 400 });
    }

    const patient = await Patient.create(body);
    return NextResponse.json({ success: true, data: patient }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
