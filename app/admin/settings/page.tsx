"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  ShieldCheck,
  Bell,
  Activity,
  Monitor,
  Lock,
  Mail,
  Phone,
  Camera,
  CheckCircle2,
  AlertCircle,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "profile", name: "Professional Profile", icon: User, description: "Public identity & credentials" },
  { id: "clinical", name: "Clinical Operations", icon: Activity, description: "Hours & emergency tracks" },
  { id: "security", name: "Security & Access", icon: ShieldCheck, description: "Passwords & data safety" },
  { id: "notifications", name: "Notification Hub", icon: Bell, description: "Alerts & patient updates" },
  { id: "admins", name: "System Administrators", icon: Monitor, description: "Manage access & permissions" },
];

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [admins, setAdmins] = useState<any[]>([]);
  
  const [settings, setSettings] = useState({
    drName: "Dr. Vikash Yadav",
    specialty: "Chief Surgeon • Surgical Oncology Specialist",
    email: "yadav.v@manipal.edu",
    phone: "+91 99999 88888",
    bio: "Senior Consultant Laparoscopic and General Surgery with 15+ years of experience at Manipal Hospitals. Expertise in Robotic, Bariatric, and complex Oncology surgeries.",
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const [settingsRes, adminsRes] = await Promise.all([
        fetch("/api/settings"),
        fetch("/api/users")
      ]);
      const settingsData = await settingsRes.json();
      const adminsData = await adminsRes.json();
      
      if (settingsData.success && settingsData.data) {
        setSettings(settingsData.data);
      }
      if (adminsData.success) {
        setAdmins(adminsData.data);
      }
    } catch (err) {
      console.error("Failed to load settings or admins");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings)
      });
      const data = await res.json();
      if (data.success) {
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
      }
    } catch (err) {
      alert("Failed to save settings");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8 min-h-[85vh]">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-0.5 bg-secondary rounded-full"></span>
            <span className="text-[10px] font-black text-secondary capitalize">System Configuration</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-manrope font-black text-primary">Administrative Hub</h2>
          <p className="text-on-surface-variant text-sm font-medium opacity-70">Orchestrate your clinical digital environment.</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-500 font-bold text-xs hover:bg-slate-50 transition-all capitalize">
            Discard
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-primary text-white font-black text-xs capitalize shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : (isSaved ? <CheckCircle2 className="w-4 h-4" /> : null)}
            {isSaved ? "Settings Saved" : (isSaving ? "Saving..." : "Save Changes")}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all group relative overflow-hidden",
                activeTab === tab.id
                  ? "bg-white shadow-xl shadow-slate-200/50 border border-slate-100"
                  : "hover:bg-white/50 border border-transparent"
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-secondary rounded-full"
                />
              )}
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                activeTab === tab.id
                  ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                  : "bg-slate-100 text-slate-600 group-hover:bg-white group-hover:text-primary shadow-inner"
              )}>
                <tab.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 truncate">
                <p className={cn(
                  "font-black text-sm capitalize mb-0.5",
                  activeTab === tab.id ? "text-primary" : "text-slate-500"
                )}>
                  {tab.name}
                </p>
                <p className="text-sm text-slate-600 font-medium truncate">{tab.description}</p>
              </div>
            </button>
          ))}
        </aside>

        <main className="lg:col-span-9 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-sm p-2">
          <div className="bg-white rounded-[2.3rem] shadow-inner-light h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-8 md:p-12"
              >
                {activeTab === "profile" && (
                  <div className="space-y-12">
                    <div className="flex flex-col sm:flex-row items-center gap-8 border-b border-slate-50 pb-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-secondary/20 rounded-[2.5rem] blur-xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-32 h-32 rounded-[2.5rem] bg-slate-100 flex items-center justify-center text-primary text-4xl font-black shadow-2xl relative z-10 border-4 border-white">
                          {settings.drName.substring(0, 2)}
                        </div>
                        <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all z-20 group">
                          <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </button>
                      </div>
                      <div className="text-center sm:text-left space-y-2">
                        <h4 className="text-xl font-manrope font-black text-primary">{settings.drName}</h4>
                        <p className="text-xs text-slate-600 font-medium max-w-xs leading-relaxed capitalize">{settings.specialty}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Professional Identity</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-secondary transition-colors" />
                          <input
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                            value={settings.drName}
                            onChange={(e) => setSettings({ ...settings, drName: e.target.value })}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Specialty Listing</label>
                        <div className="relative group">
                          <Activity className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-secondary transition-colors" />
                          <input
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                            value={settings.specialty}
                            onChange={(e) => setSettings({ ...settings, specialty: e.target.value })}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Clinical Biography</label>
                      <textarea
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-[2rem] px-6 py-6 text-sm font-medium text-slate-600 outline-none transition-all shadow-inner resize-none min-h-[160px]"
                        value={settings.bio}
                        onChange={(e) => setSettings({ ...settings, bio: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-50 pt-12">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Official Email</label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-secondary transition-colors" />
                          <input
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                            value={settings.email}
                            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Emergency Track</label>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-secondary transition-colors" />
                          <input
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                            value={settings.phone}
                            onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                            type="tel"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "admins" && (
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <h4 className="text-xl font-manrope font-black text-primary capitalize flex items-center gap-3">
                        <User className="w-6 h-6 text-secondary" />
                        System Administrators
                      </h4>
                      <p className="text-sm font-medium text-slate-400">The following users have administrative access to the Clinical Sanctuary dashboard.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                        {admins.map((admin) => (
                          <div key={admin._id} className="p-8 rounded-[2rem] bg-slate-50 border border-transparent hover:border-secondary transition-all group flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-all uppercase">
                              {admin.username.substring(0, 2)}
                            </div>
                            <div className="flex flex-col flex-1 space-y-1">
                              <p className="text-sm font-black text-primary capitalize">{admin.username}</p>
                              <p className="text-[10px] font-bold text-slate-400 capitalize tracking-widest">
                                Role: Super Admin • Joined {new Date(admin.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 self-start">
                              <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                                <span className="material-symbols-outlined text-sm">visibility</span>
                              </button>
                               <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm">
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {/* Other tabs remain largely the same for UI purposes */}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
