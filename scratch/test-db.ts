import connectDB from './server/mongodb.ts';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function testConnection() {
  console.log('Testing MongoDB connection...');
  try {
    await connectDB();
    console.log('SUCCESS: Connected to database.');
    process.exit(0);
  } catch (err: any) {
    console.error('FAILURE: Could not connect to MongoDB.');
    console.error('ERROR MESSAGE:', err.message);
    if (err.message.includes('IP address')) {
      console.log('\nHINT: It looks like your current IP address is not whitelisted on MongoDB Atlas.');
    }
    process.exit(1);
  }
}

testConnection();
