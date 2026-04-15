import mongoose from "mongoose";

const PrescriptionSchema = new mongoose.Schema({
  patientId: {
    type: String, // Can be Booking ID or a Unique Patient ID
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientPhone: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  medicines: [{
    name: String,
    dosage: String,
    duration: String,
    timing: String, // e.g., Before Food, After Food
  }],
  vitals: {
    weight: String,
    bp: String,
    temp: String,
    sugar: String,
  },
  diagnosis: String,
  notes: String,
  date: {
    type: Date,
    default: Date.now,
  },
  nextVisit: Date,
}, { timestamps: true });

export default mongoose.models.Prescription || mongoose.model("Prescription", PrescriptionSchema);
