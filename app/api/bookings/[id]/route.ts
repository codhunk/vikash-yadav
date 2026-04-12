import { NextResponse } from 'next/server';
import connectDB from '@/server/mongodb';
import Booking from '@/server/models/Booking';
import { sendBookingConfirmation } from '@/server/lib/notifications';

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }   // Next.js 16: params is a Promise
) {
  try {
    await connectDB();
    const { status } = await req.json();

    // ✅ Fix: await params before destructuring (Next.js 16 requirement)
    const { id } = await context.params;

    console.log(`[Booking PATCH] id=${id}, status=${status}`);

    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!booking) {
      console.warn(`[Booking PATCH] Booking not found: ${id}`);
      return NextResponse.json({ success: false, message: 'Booking not found' }, { status: 404 });
    }

    if (status === 'confirmed') {
      console.log(`[Booking PATCH] Sending confirmation email to: ${booking.email}`);
      await sendBookingConfirmation(booking);
    }

    return NextResponse.json({ success: true, data: booking });
  } catch (error: any) {
    console.error('[Booking PATCH] Error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
