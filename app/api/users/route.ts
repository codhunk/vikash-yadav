import { NextResponse } from 'next/server';
import connectDB from '@/server/mongodb';
import User from '@/server/models/User';

export async function GET() {
  try {
    await connectDB();
    const users = await User.find({}, '-password').sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: users });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
