import { NextResponse } from 'next/server';
import connectDB from '@/server/mongodb';
import Booking from '@/server/models/Booking';
import { sendBookingReceipt } from '@/server/lib/notifications';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { date, time, name, email, phone, service } = body;

    console.log('[Booking POST] Incoming:', { date, time, name, email, phone, service });

    // Validate required fields
    if (!date || !time || !name || !email || !phone || !service) {
      const missing = ['date','time','name','email','phone','service'].filter(f => !body[f]);
      console.warn('[Booking POST] Missing fields:', missing);
      return NextResponse.json({ success: false, message: `Missing required fields: ${missing.join(', ')}` }, { status: 400 });
    }

    // Check if slot is already booked
    const existing = await Booking.findOne({ date, time, status: { $ne: 'cancelled' } });
    console.log('[Booking POST] Existing booking for slot:', existing ? `YES (id: ${existing._id})` : 'NO');

    if (existing) {
      return NextResponse.json({ success: false, message: 'This time slot is already booked. Please choose another.' }, { status: 409 });
    }

    const booking = await Booking.create(body);
    console.log('[Booking POST] Created booking:', booking._id);

    // Send receipt email to patient immediately (non-blocking)
    sendBookingReceipt({ name, email, date, time, service }).catch(err =>
      console.error('[Booking POST] Receipt email failed:', err)
    );

    // Automatically create/update Patient record
    try {
      const Patient = (await import('@/server/models/Patient')).default;
      const existingPatient = await Patient.findOne({ email });
      if (!existingPatient) {
        await Patient.create({ name, email, phone, status: 'Active' });
        console.log('[Booking POST] New patient record created for:', email);
      }
    } catch (err) {
      console.error('[Booking POST] Failed to sync patient record:', err);
    }

    return NextResponse.json({ success: true, data: booking }, { status: 201 });
  } catch (error: any) {
    console.error('[Booking POST] FATAL ERROR:', error);
    return NextResponse.json({ success: false, message: error.message || 'Server error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const date = searchParams.get('date');

    console.log('[Booking GET] Fetching slots for date:', date);

    let query: Record<string, any> = {};
    if (date) {
      query = { date };
    }

    const bookings = await Booking.find(query).sort({ createdAt: -1 });
    console.log(`[Booking GET] Found ${bookings.length} booking(s) for date: ${date}`);
    return NextResponse.json({ success: true, data: bookings });
  } catch (error: any) {
    console.error('[Booking GET] Error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
