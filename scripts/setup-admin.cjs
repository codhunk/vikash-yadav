const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = "mongodb+srv://jalandhar143184_db_user:tVbqyHOH4xq6oAGq@vikash.oda7yza.mongodb.net/?appName=vikash";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function createAdmin() {
  await mongoose.connect(MONGODB_URI);
  const username = "admin";
  const password = "password123"; // Change this!
  const hashedPassword = await bcrypt.hash(password, 12);
  
  await User.create({ username, password: hashedPassword });
  console.log("Admin user created successfully!");
  process.exit();
}

createAdmin().catch(err => {
  console.error(err);
  process.exit(1);
});
