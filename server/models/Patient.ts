import mongoose, { Schema, model, models } from 'mongoose';

const PatientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  age: { type: Number },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  address: { type: String },
  status: { type: String, default: 'Active', enum: ['Active', 'Inactive'] },
  registeredBy: { type: String, default: 'System' },
  medicalHistory: { type: String },
}, { timestamps: true });

const Patient = models.Patient || model('Patient', PatientSchema);

export default Patient;
