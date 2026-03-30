"use client";
import React, { useState } from "react";
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
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "profile", name: "Professional Profile", icon: User, description: "Public identity & credentials" },
  { id: "clinical", name: "Clinical Operations", icon: Activity, description: "Hours & emergency tracks" },
  { id: "security", name: "Security & Access", icon: ShieldCheck, description: "Passwords & data safety" },
  { id: "notifications", name: "Notification Hub", icon: Bell, description: "Alerts & patient updates" },
];

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-8 min-h-[85vh]">
      {/* Dynamic Page Header */}
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
            className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-primary text-white font-black text-xs capitalize shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {isSaved ? <CheckCircle2 className="w-4 h-4" /> : null}
            {isSaved ? "Settings Saved" : "Save Changes"}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Settings Secondary Sidebar */}
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

          <div className="mt-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[2rem] border border-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                <AlertCircle className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-black text-primary capitalize leading-relaxed">Storage: 82% Used</p>
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "82%" }}
                  className="h-full bg-secondary"
                />
              </div>
              <button className="text-[9px] font-black text-secondary capitalize hover:text-primary transition-colors underline underline-offset-4">Upgrade Drive</button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
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
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-center gap-8 border-b border-slate-50">
                      <div className="relative">
                        <div className="absolute inset-0 bg-secondary/20 rounded-[2.5rem] blur-xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img
                          alt="Dr. Vikash Yadav"
                          className="w-32 h-32 rounded-[2.5rem] object-cover ring-8 ring-slate-50 shadow-2xl relative z-10"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYggyUuwBuTe6OHs-pYy9OZLrKu49ncgxt8PIMNZe1MX7pOLENdyoQxsZN7dtAy-NlwA4A6HX3zseFqm2gpaSaNjq2W13ysdfCkkG5X5jQckdpzPa35gE9MRFJdIgESxckOrs52wwk1MvXZm7vFMHCMSof53MgjAjR43SgAuc1f2tXGJ4EdQEobJfjHeDDWRDKdm4RByoAURoSI3NKZx4Q9VBI1JMqlhVi2SRpCAz6u0rgQKKVxaiOOIY2ypOagwMqzEonzA89ig"
                        />
                        <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all z-20 group">
                          <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </button>
                      </div>
                      <div className="text-center sm:text-left space-y-2">
                        <h4 className="text-xl font-manrope font-black text-primary">Dr. Vikash Yadav</h4>
                        <p className="text-xs text-slate-600 font-medium max-w-xs leading-relaxed capitalize">Chief Surgeon • Surgical Oncology Specialist</p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[9px] font-black capitalize">FNB Minimal Access</span>
                          <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[9px] font-black capitalize">MS General Surgery</span>
                        </div>
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Professional Identity</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-secondary transition-colors" />
                          <input
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                            defaultValue="Dr. Vikash Yadav"
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
                            defaultValue="Senior Laparoscopic Surgeon"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Clinical Biography</label>
                      <textarea
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-[2rem] px-6 py-6 text-sm font-medium text-slate-600 outline-none transition-all shadow-inner resize-none min-h-[160px]"
                        defaultValue="Senior Consultant Laparoscopic and General Surgery with 15+ years of experience at Manipal Hospitals. Expertise in Robotic, Bariatric, and complex Oncology surgeries."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-50 pt-12">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Official Email</label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-secondary transition-colors" />
                          <input
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                            defaultValue="yadav.v@manipal.edu"
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
                            defaultValue="+91 99999 88888"
                            type="tel"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "clinical" && (
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <h4 className="text-lg font-manrope font-black text-primary capitalize flex items-center gap-3">
                        <Activity className="w-5 h-5 text-secondary" />
                        Operating Cycles
                      </h4>
                      <div className="grid grid-cols-1 gap-6">
                        {[
                          { day: "Standard Weekdays", hours: "09:00 AM - 04:00 PM", active: true },
                          { day: "Weekend Rounds", hours: "10:00 AM - 01:00 PM", active: true },
                          { day: "Holiday Response", hours: "Emergency Only", active: false },
                        ].map((cycle, i) => (
                          <div key={i} className={cn(
                            "group p-8 rounded-[2rem] border-2 flex items-center justify-between transition-all cursor-pointer",
                            cycle.active
                              ? "bg-white border-slate-50 hover:border-secondary shadow-sm hover:shadow-xl"
                              : "bg-slate-50/50 border-transparent opacity-60 pointer-events-none"
                          )}>
                            <div className="flex items-center gap-6">
                              <div className={cn(
                                "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                                cycle.active ? "bg-secondary/10 text-secondary" : "bg-slate-200 text-slate-600"
                              )}>
                                <Monitor className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <p className="text-xs font-black text-primary capitalize">{cycle.day}</p>
                                <p className="text-sm font-bold text-slate-600">{cycle.hours}</p>
                              </div>
                            </div>
                            <div className={cn(
                              "w-12 h-6 rounded-full relative transition-colors p-1",
                              cycle.active ? "bg-secondary" : "bg-slate-300"
                            )}>
                              <div className={cn(
                                "w-4 h-4 bg-white rounded-full transition-transform shadow-sm",
                                cycle.active ? "translate-x-6" : "translate-x-0"
                              )} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-error/5 to-transparent border-2 border-error/5 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-error/10 text-error flex items-center justify-center">
                          <AlertCircle className="w-5 h-5" />
                        </div>
                        <h5 className="font-manrope font-black text-primary capitalize text-sm">Active Emergency Redirection</h5>
                      </div>
                      <p className="text-xs text-on-surface-variant font-medium leading-relaxed opacity-70">Automated redirection system for incoming calls when the chief surgeon is in active OT. Enter alternate registrar contact.</p>
                      <input
                        className="w-full bg-white border-2 border-error/10 rounded-2xl px-6 py-4 text-sm font-bold text-error outline-none shadow-sm focus:border-error transition-all"
                        placeholder="Redirection Number (+91...)"
                        type="tel"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="space-y-12">
                    <div className="space-y-8">
                      {[
                        { title: "Universal Encryption", desc: "Data is encrypted at-rest using AES-256 standard protocols.", icon: Lock, status: "Secure" },
                        { title: "2-Factor Authentication", desc: "Forced SMS verification for all clinical dashboard access.", icon: ShieldCheck, status: "Enabled" },
                        { title: "Session Watchdog", desc: "Automatic session expiration after 15 minutes of inactivity.", icon: Activity, status: "Active" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-8 rounded-[2rem] bg-white border border-slate-50 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                          <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                              <item.icon className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-black text-primary capitalize">{item.title}</p>
                              <p className="text-sm text-slate-600 font-bold capitalize leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                          <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-xl text-[10px] font-black capitalize">{item.status}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center sm:text-left">
                        <p className="font-manrope font-black text-primary capitalize text-sm">Advanced Data Portability</p>
                        <p className="text-sm text-slate-600 font-bold capitalize">Export all patient records in clinical JSON format.</p>
                      </div>
                      <button className="px-8 py-4 bg-white border-2 border-slate-200 rounded-xl text-primary font-black text-sm capitalize hover:bg-primary hover:text-white hover:border-primary transition-all">
                        Initiate Export
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div className="space-y-12">
                    <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                      <div className="w-24 h-24 rounded-[2rem] bg-slate-50 flex items-center justify-center text-slate-200 animate-pulse border-2 border-dashed border-slate-100">
                        <Bell className="w-10 h-10" />
                      </div>
                      <div className="space-y-2">
                        <p className="font-manrope font-black text-primary capitalize text-xl">Notification Channels</p>
                        <p className="text-xs text-slate-600 font-medium max-w-xs mx-auto">Configure how the sanctuary communicates critical updates and patient intakes.</p>
                      </div>
                      <button className="px-8 py-4 bg-secondary text-white rounded-xl font-black text-[10px] capitalize shadow-xl shadow-secondary/20 hover:scale-105 transition-all">
                        Connect WebSocket
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
