import { NextResponse } from "next/server";
import connectDB from "@/server/mongodb";
import Prescription from "@/server/models/Prescription";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const newPrescription = await Prescription.create(data);
    return NextResponse.json({ success: true, data: newPrescription });
  } catch (error) {
    console.error("Prescription saving error:", error);
    return NextResponse.json({ success: false, error: "Failed to save prescription" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json({ success: false, error: "Phone number is required" }, { status: 400 });
    }

    await connectDB();
    const history = await Prescription.find({ patientPhone: phone }).sort({ date: -1 });
    return NextResponse.json({ success: true, data: history });
  } catch (error) {
    console.error("Prescription fetch error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch history" }, { status: 500 });
  }
}
