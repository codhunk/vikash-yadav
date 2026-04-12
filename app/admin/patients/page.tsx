"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X, UserPlus, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Patient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  age?: number;
  gender?: string;
  status: string;
  registeredBy: string;
  lastVisit?: string;
  createdAt: string;
}

export default function PatientsDirectory() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const [broadcastData, setBroadcastData] = useState({
    subject: "Clinical Update - Dr. Vikash Yadav",
    message: ""
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "Male"
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/patients");
      const data = await res.json();
      if (data.success) {
        setPatients(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch patients:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreatePatient = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch("/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age)
        })
      });

      const data = await res.json();
      if (data.success) {
        setMessage({ type: 'success', text: 'Patient record created successfully!' });
        fetchPatients();
        setTimeout(() => {
          setIsModalOpen(false);
          setFormData({ name: "", email: "", phone: "", age: "", gender: "Male" });
          setMessage(null);
        }, 2000);
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to create patient' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch("/api/notifications/broadcast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(broadcastData)
      });

      const data = await res.json();
      if (data.success) {
        setMessage({ type: 'success', text: data.message });
        setTimeout(() => {
          setIsBroadcastOpen(false);
          setBroadcastData({ subject: "Clinical Update - Dr. Vikash Yadav", message: "" });
          setMessage(null);
        }, 3000);
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to send broadcast' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredPatients = useMemo(() => {
    if (!searchQuery) return patients;
    return patients.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.phone.includes(searchQuery)
    );
  }, [patients, searchQuery]);

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-3xl font-manrope font-black text-primary tracking-tight capitalize">Patient Directory</h2>
          <p className="text-on-surface-variant text-sm font-medium mt-2">Managing {patients.length} formal clinical profiles.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-secondary transition-colors">search</span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-6 py-4 bg-white border-2 border-transparent focus:border-secondary/20 w-full sm:w-80 transition-all text-sm rounded-xl outline-none shadow-sm"
              placeholder="Search patients..."
              type="text"
            />
          </div>
          <button 
            onClick={() => setIsBroadcastOpen(true)}
            className="px-8 py-4 rounded-xl font-black text-[10px] capitalize tracking-widest flex items-center justify-center gap-3 border-2 border-primary/10 text-primary hover:bg-primary/5 transition-all"
          >
            <span className="material-symbols-outlined text-lg">campaign</span>
            Broadcast Mail
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white px-8 py-4 rounded-xl font-black text-[10px] capitalize tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all"
          >
            <UserPlus className="w-5 h-5" />
            Add New Patient
          </button>
        </div>
      </header>

      {/* Patients Table */}
      <div className="bg-white rounded-[1rem] overflow-hidden shadow-sm border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Patient Profile</th>
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Contact / Age</th>
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Registered Date</th>
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Origin</th>
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Status</th>
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {isLoading ? (
                <tr><td colSpan={5} className="px-10 py-20 text-center text-slate-400 font-bold italic">Loading records...</td></tr>
              ) : filteredPatients.length === 0 ? (
                <tr><td colSpan={5} className="px-10 py-20 text-center text-slate-400 font-bold">No patient profiles found.</td></tr>
              ) : (
                filteredPatients.map((patient, idx) => (
                  <tr key={patient._id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center font-black text-secondary group-hover:bg-secondary group-hover:text-white transition-all uppercase">
                          {patient.name.substring(0, 2)}
                        </div>
                        <div>
                          <div className="font-manrope font-black text-primary text-sm group-hover:text-secondary transition-colors capitalize tracking-tight">{patient.name}</div>
                          <div className="text-[10px] font-bold text-slate-400 capitalize tracking-widest mt-1">{patient.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black text-slate-500 tracking-widest">{patient.phone}</span>
                        <span className="text-[10px] font-bold text-slate-400 mt-1">{patient.age ? `${patient.age} Yrs / ${patient.gender}` : 'N/A'}</span>
                      </div>
                    </td>
                    <td className="px-10 py-8 text-on-surface-variant font-medium">
                      {new Date(patient.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-10 py-8">
                      <span className="text-[10px] font-black text-primary/60 capitalize tracking-widest bg-slate-100 px-3 py-1 rounded-lg">
                        {patient.registeredBy || 'System'}
                      </span>
                    </td>
                    <td className="px-10 py-8">
                      <span className={cn(
                        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-black capitalize tracking-widest",
                        patient.status === 'Active' ? 'bg-secondary/10 text-secondary' : 'bg-slate-100 text-slate-400'
                      )}>
                        <span className={cn("w-2 h-2 rounded-full", patient.status === 'Active' ? 'bg-secondary shadow-[0_0_8px_rgba(3,192,192,0.5)]' : 'bg-slate-300')}></span>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-10 py-8 text-right">
                       <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Patient Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-10">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-manrope font-black text-primary tracking-tight">Register New Patient</h3>
                    <p className="text-sm font-medium text-slate-400">Add a new clinical record to the sanctuary database.</p>
                  </div>
                  <button onClick={() => setIsModalOpen(false)} className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-error hover:text-white transition-all group">
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                  </button>
                </div>

                <form onSubmit={handleCreatePatient} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Full Name</label>
                      <input 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                        placeholder="e.g. Rahul Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Official Email</label>
                      <input 
                        required
                        type="email"
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Phone Number</label>
                      <input 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Patient Age</label>
                      <input 
                        type="number"
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                        placeholder="Age"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Gender</label>
                      <select 
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-black text-primary outline-none transition-all shadow-inner appearance-none cursor-pointer"
                        value={formData.gender}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {message && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "p-4 rounded-xl text-xs font-black capitalize tracking-widest flex items-center gap-3",
                        message.type === 'success' ? 'bg-secondary/10 text-secondary' : 'bg-error/10 text-error'
                      )}
                    >
                      {message.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : null}
                      {message.text}
                    </motion.div>
                  )}

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-6 bg-primary text-white rounded-[1.5rem] font-black text-[10px] capitalize tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                    ) : 'Register Patient Certificate'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Broadcast Modal */}
      <AnimatePresence>
        {isBroadcastOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBroadcastOpen(false)}
              className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-10">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-manrope font-black text-primary tracking-tight">Broadcast Outreach</h3>
                    <p className="text-sm font-medium text-slate-400">Send a priority email notification to all active patient records.</p>
                  </div>
                  <button onClick={() => setIsBroadcastOpen(false)} className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-error hover:text-white transition-all group">
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                  </button>
                </div>

                <form onSubmit={handleBroadcast} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Email Subject</label>
                    <input 
                      required
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-2xl text-sm font-bold text-primary outline-none transition-all shadow-inner"
                      placeholder="e.g. Schedule Change or Health Alert"
                      value={broadcastData.subject}
                      onChange={(e) => setBroadcastData({...broadcastData, subject: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 capitalize ml-1">Outreach Message</label>
                    <textarea 
                      required
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-secondary/20 focus:bg-white rounded-[2rem] px-6 py-6 text-sm font-medium text-slate-600 outline-none transition-all shadow-inner resize-none min-h-[200px]"
                      placeholder="Type your clinical update here..."
                      value={broadcastData.message}
                      onChange={(e) => setBroadcastData({...broadcastData, message: e.target.value})}
                    />
                  </div>

                  {message && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "p-4 rounded-xl text-xs font-black capitalize tracking-widest flex items-center gap-3 border-2",
                        message.type === 'success' ? 'bg-secondary/10 text-secondary border-secondary/20' : 'bg-error/10 text-error border-error/20'
                      )}
                    >
                      {message.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : null}
                      {message.text}
                    </motion.div>
                  )}

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-6 bg-secondary text-white rounded-[1.5rem] font-black text-[10px] capitalize tracking-[0.2em] shadow-2xl shadow-secondary/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-lg">send</span>
                        Dispatch Broadcast Email
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
