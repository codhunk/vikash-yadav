"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityLevel, setSecurityLevel] = useState("Level 1");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin/dashboard";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, securityLevel }),
      });
      const data = await res.json();
      if (data.success) {
        router.push(callbackUrl);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 pt-24 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-slate-100 p-10"
      >
        <div className="text-center mb-10">
          <h1 className="font-manrope text-3xl font-black text-primary mb-2">Admin Portal</h1>
          <p className="text-sm text-on-surface-variant font-medium opacity-70">
            Access the clinical management system
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <label className="block text-xs font-black text-slate-600 uppercase tracking-wider">Username</label>
            <input
              required
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-slate-50 border-2 border-transparent focus:border-secondary focus:bg-white rounded-2xl px-6 py-4 transition-all outline-none font-medium text-sm"
              placeholder="Enter your username"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-black text-slate-600 uppercase tracking-wider">Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border-2 border-transparent focus:border-secondary focus:bg-white rounded-2xl px-6 py-4 transition-all outline-none font-medium text-sm"
              placeholder="••••••••"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-black text-slate-600 uppercase tracking-wider">Security Level</label>
            <select
              value={securityLevel}
              onChange={(e) => setSecurityLevel(e.target.value)}
              className="w-full bg-slate-50 border-2 border-transparent focus:border-secondary focus:bg-white rounded-2xl px-6 py-4 transition-all outline-none font-medium text-sm cursor-pointer"
            >
              <option>Level 1</option>
              <option>Level 2</option>
              <option>Level 3</option>
            </select>
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-primary hover:bg-blue-800 disabled:bg-slate-400 text-white py-5 rounded-2xl font-manrope font-bold text-lg transition-all shadow-xl shadow-primary/20 active:scale-95"
          >
            {isLoading ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        <p className="mt-8 text-[11px] text-center text-slate-500 font-bold leading-relaxed">
          Authorized access only. All activities are monitored for clinical compliance and security.
        </p>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-surface font-inter text-on-surface antialiased flex flex-col">
      <Navbar />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center font-black text-slate-200">Loading Portal...</div>}>
        <LoginForm />
      </Suspense>
      <Footer />
    </main>
  );
}
