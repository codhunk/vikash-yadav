import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  securityLevel: { type: String, default: 'Level 1', enum: ['Level 1', 'Level 2', 'Level 3'] },
}, { timestamps: true });

const User = models.User || model('User', UserSchema);

export default User;
