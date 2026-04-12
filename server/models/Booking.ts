import mongoose, { Schema, model, models } from 'mongoose';

const BookingSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String },
  status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'cancelled'] },
}, { timestamps: true });

const Booking = models.Booking || model('Booking', BookingSchema);

export default Booking;
