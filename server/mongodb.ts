import mongoose from 'mongoose';

// ─── Bug fix: Do NOT throw at module level ────────────────────────────────
// A module-level throw crashes the entire route before any try/catch can
// handle it, causing Next.js to return `{}` with no useful error message.
// Instead, we throw inside connectDB() so the route's try/catch handles it.

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

// Use a globalThis cache so the connection persists across hot reloads in dev.
if (!global._mongooseCache) {
  global._mongooseCache = { conn: null, promise: null };
}

async function connectDB(): Promise<typeof mongoose> {
  const MONGODB_URI = process.env.MONGODB_URI;

  // Throw inside the function — route try/catch will handle it properly.
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in .env.local');
  }

  const cached = global._mongooseCache;

  // Already connected — reuse the existing connection.
  if (cached.conn) {
    return cached.conn;
  }

  // No in-flight connection — create one.
  if (!cached.promise) {
    console.log('[MongoDB] Connecting to Atlas...');
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000, // fail fast instead of hanging 30s
      socketTimeoutMS: 45000,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log('[MongoDB] Connected successfully.');
    return cached.conn;
  } catch (err: any) {
    // ─── Bug fix: Reset promise on failure ─────────────────────────────────
    // Without this, every subsequent request immediately re-awaits the same
    // rejected promise and fails permanently with no chance to retry.
    cached.promise = null;
    console.error('[MongoDB] Connection failed:', err.message);
    throw err;
  }
}

export default connectDB;
