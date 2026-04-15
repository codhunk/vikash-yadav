"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  X, CheckCircle2, Phone, Mail, Clock, Calendar as CalIcon,
  User, Plus, Trash2, Printer, Save, History, Activity,
  Thermometer, HeartPulse, Scale, Beaker
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Medicine {
  name: string;
  dosage: string;
  duration: string;
  timing: string;
}

interface Prescription {
  _id?: string;
  symptoms: string;
  diagnosis: string;
  medicines: Medicine[];
  vitals: {
    weight: string;
    bp: string;
    temp: string;
    sugar: string;
  };
  notes: string;
  date: string;
}

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export default function ConsultationPage() {
  const { id } = useParams();
  const router = useRouter();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [history, setHistory] = useState<Prescription[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<"current" | "history">("current");

  // Form State
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [notes, setNotes] = useState("");
  const [medicines, setMedicines] = useState<Medicine[]>([
    { name: "", dosage: "", duration: "", timing: "After Food" }
  ]);
  const [vitals, setVitals] = useState({
    weight: "", bp: "", temp: "", sugar: ""
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    if (!id) return;
    try {
      const idStr = Array.isArray(id) ? id[0] : (id as string);
      const isHistoryMode = idStr.startsWith("history-");
      const cleanId = isHistoryMode ? idStr.split("-")[1] : idStr;
      const endpoint = isHistoryMode ? `/api/patients/${cleanId}` : `/api/bookings/${cleanId}`;

      const bRes = await fetch(endpoint);
      const bData = await bRes.json();
      if (bData.success) {
        setBooking(bData.data);
        if (isHistoryMode) setActiveTab("history");
        // Once we have phone, fetch history
        fetchHistory(bData.data.phone);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchHistory = async (phone: string) => {
    try {
      const res = await fetch(`/api/prescriptions?phone=${phone}`);
      const data = await res.json();
      if (data.success) {
        setHistory(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  const addMedicine = () => {
    setMedicines([...medicines, { name: "", dosage: "", duration: "", timing: "After Food" }]);
  };

  const updateMedicine = (index: number, field: keyof Medicine, value: string) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);
  };

  const removeMedicine = (index: number) => {
    setMedicines(medicines.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!booking) return;
    setIsSaving(true);
    try {
      const res = await fetch("/api/prescriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientId: booking._id,
          patientName: booking.name,
          patientPhone: booking.phone,
          symptoms,
          diagnosis,
          medicines,
          vitals,
          notes
        })
      });
      const data = await res.json();
      if (data.success) {
        alert("Prescription saved successfully!");
        fetchHistory(booking.phone);
      }
    } catch (error) {
      alert("Failed to save prescription.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div className="p-20 text-center font-black text-slate-400">Loading Clinical Session...</div>;
  if (!booking) return <div className="p-20 text-center font-black text-error">Patient Record Not Found</div>;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header with Patient Details */}
      <header className="bg-white p-4 rounded-[1rem] shadow-xl shadow-slate-200/50 border border-slate-100 no-print">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-3xl font-black uppercase">
              {booking.name.substring(0, 2)}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-primary capitalize">{booking.name}</h1>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest">Active Consultation</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {booking.phone}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span className="flex items-center gap-1.5"><CalIcon className="w-3.5 h-3.5" /> {booking.date} at {booking.time}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span className="text-primary">{booking.service}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => window.print()}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-slate-50 text-slate-600 rounded-xl font-black text-[10px] capitalize tracking-[0.2em] hover:bg-slate-100 transition-all"
            >
              <Printer className="w-4 h-4" /> Print Letter Head
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-black text-[10px] capitalize tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
            >
              <Save className="w-4 h-4" /> {isSaving ? "Saving..." : "Save Record"}
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-slate-100 w-fit rounded-xl no-print">
        <button
          onClick={() => setActiveTab("current")}
          className={cn(
            "px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
            activeTab === 'current' ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-primary"
          )}
        >
          New Prescription
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={cn(
            "px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
            activeTab === 'history' ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-primary"
          )}
        >
          Visit History ({history.length})
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 no-print">
        {activeTab === 'current' ? (
          <>
            {/* Left Section: Inputs */}
            <div className="lg:col-span-8 space-y-8">
              {/* Vitals Form */}
              <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-50">
                <div className="flex items-center gap-3 mb-8">
                  <Activity className="w-5 h-5 text-secondary" />
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.2em]">Patient Vitals</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><Scale className="w-3 h-3" /> Weight</label>
                    <input value={vitals.weight} onChange={e => setVitals({ ...vitals, weight: e.target.value })} placeholder="70 kg" className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm font-bold border-2 border-transparent focus:border-secondary/20 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><HeartPulse className="w-3 h-3" /> Blood Pressure</label>
                    <input value={vitals.bp} onChange={e => setVitals({ ...vitals, bp: e.target.value })} placeholder="120/80" className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm font-bold border-2 border-transparent focus:border-secondary/20 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><Thermometer className="w-3 h-3" /> Temp</label>
                    <input value={vitals.temp} onChange={e => setVitals({ ...vitals, temp: e.target.value })} placeholder="98.6 °F" className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm font-bold border-2 border-transparent focus:border-secondary/20 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><Beaker className="w-3 h-3" /> Sugar (RBS)</label>
                    <input value={vitals.sugar} onChange={e => setVitals({ ...vitals, sugar: e.target.value })} placeholder="110 mg/dL" className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm font-bold border-2 border-transparent focus:border-secondary/20 outline-none" />
                  </div>
                </div>
              </section>

              {/* Symptoms & Diagnosis */}
              <section className="bg-white p-8 rounded-[1rem] shadow-sm border border-slate-50 space-y-8">
                <div className="space-y-4">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Symptoms & Chief Complaints</label>
                  <textarea
                    value={symptoms}
                    onChange={e => setSymptoms(e.target.value)}
                    rows={3}
                    placeholder="Describe patient's symptoms..."
                    className="w-full p-6 bg-slate-50 rounded-[1rem] text-sm font-bold border-2 border-transparent focus:border-primary/10 outline-none resize-none"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Clinical Diagnosis</label>
                  <textarea
                    value={diagnosis}
                    onChange={e => setDiagnosis(e.target.value)}
                    rows={2}
                    placeholder="Enter final or provisional diagnosis..."
                    className="w-full p-6 bg-slate-50 rounded-[1rem] text-sm font-bold border-2 border-transparent focus:border-secondary/10 outline-none resize-none"
                  />
                </div>
              </section>

              {/* Medicines Grid */}
              <section className="bg-white p-8 rounded-[1rem] shadow-sm border border-slate-50">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Beaker className="w-5 h-5 text-primary" />
                    <h3 className="text-sm font-black text-primary uppercase tracking-[0.2em]">Medication (Rx)</h3>
                  </div>
                  <button onClick={addMedicine} className="p-2 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {medicines.map((med, index) => (
                    <div key={index} className="grid grid-cols-12 gap-4 items-end bg-slate-50/50 p-4 rounded-xl relative group">
                      <div className="col-span-12 md:col-span-5 space-y-2">
                        <label className="text-[8px] font-black text-slate-400 uppercase">Medicine Name</label>
                        <input value={med.name} onChange={e => updateMedicine(index, 'name', e.target.value)} placeholder="e.g. Paracetamol 650mg" className="w-full px-4 py-3 bg-white rounded-xl text-sm font-bold border border-slate-100 outline-none" />
                      </div>
                      <div className="col-span-4 md:col-span-2 space-y-2">
                        <label className="text-[8px] font-black text-slate-400 uppercase">Dosage</label>
                        <input value={med.dosage} onChange={e => updateMedicine(index, 'dosage', e.target.value)} placeholder="1-0-1" className="w-full px-4 py-3 bg-white rounded-xl text-sm font-bold border border-slate-100 outline-none text-center" />
                      </div>
                      <div className="col-span-4 md:col-span-2 space-y-2">
                        <label className="text-[8px] font-black text-slate-400 uppercase">Duration</label>
                        <input value={med.duration} onChange={e => updateMedicine(index, 'duration', e.target.value)} placeholder="5 days" className="w-full px-4 py-3 bg-white rounded-xl text-sm font-bold border border-slate-100 outline-none" />
                      </div>
                      <div className="col-span-3 md:col-span-2 space-y-2">
                        <label className="text-[8px] font-black text-slate-400 uppercase">Timing</label>
                        <select value={med.timing} onChange={e => updateMedicine(index, 'timing', e.target.value)} className="w-full px-2 py-3 bg-white rounded-xl text-[10px] font-black border border-slate-100 outline-none cursor-pointer">
                          <option>After Food</option>
                          <option>Before Food</option>
                          <option>Empty Stomach</option>
                          <option>At Night</option>
                        </select>
                      </div>
                      <div className="col-span-1 flex justify-center pb-1">
                        <button onClick={() => removeMedicine(index)} className="p-2 text-slate-300 hover:text-error transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Section: Notes */}
            <div className="lg:col-span-4 space-y-8">
              <section className="bg-white p-8 rounded-[1rem] shadow-sm border border-slate-50 h-full">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-4 block">Special Instructions</label>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  rows={20}
                  placeholder="Additional advice for patient..."
                  className="w-full p-6 bg-slate-50 rounded-[1rem] text-sm font-bold border-2 border-transparent focus:border-primary/10 outline-none resize-none h-[calc(100%-2rem)]"
                />
              </section>
            </div>
          </>
        ) : (
          /* History Section */
          <div className="lg:col-span-12 space-y-6">
            {history.length === 0 ? (
              <div className="p-20 text-center bg-white rounded-[1rem] border border-dashed border-slate-200">
                <History className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <p className="text-slate-400 font-bold">No previous clinical history found for this patient.</p>
              </div>
            ) : (
              history.map((record, i) => (
                <div key={record._id} className="bg-white p-8 rounded-[1rem] shadow-sm border border-slate-50 group hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">{new Date(record.date).toLocaleDateString()} Visit</p>
                      <h4 className="text-lg font-black text-primary font-manrope mt-1">{record.diagnosis || "General Consultation"}</h4>
                    </div>
                    <button className="p-2 bg-slate-50 rounded-xl text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100">
                      <Printer className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-[9px] font-black text-slate-400 uppercase mb-3">Symptoms</h5>
                      <p className="text-sm font-bold text-primary italic leading-relaxed">{record.symptoms}</p>
                    </div>
                    <div>
                      <h5 className="text-[9px] font-black text-slate-400 uppercase mb-3">Medications Provided</h5>
                      <div className="space-y-2">
                        {record.medicines.map((m, mi) => (
                          <div key={mi} className="flex justify-between p-3 bg-slate-50 rounded-xl text-xs font-bold text-primary">
                            <span>{m.name}</span>
                            <span className="text-slate-400">{m.dosage} • {m.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* PRINT TEMPLATE: Clinical Letter Head */}
      <div id="prescription-print" className="hidden print:block p-12 bg-white text-black font-serif min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-start border-b-4 border-primary pb-8 mb-10">
          <div>
            <h1 className="text-4xl font-black text-primary font-manrope uppercase tracking-tight">Dr. Vikash Yadav</h1>
            <p className="text-sm font-bold text-secondary uppercase tracking-widest mt-1">Chief Surgeon & Clinical Specialist</p>
            <p className="text-[10px] font-bold mt-4 space-y-1">
              MBBS, MS, MCh (Surgical Oncology)<br />
              Manipal Hospitals, New Delhi<br />
              Contact: +91 99999 88888 | info@drvikash.com
            </p>
          </div>
          <div className="text-right">
            <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black ml-auto mb-4">logo</div>
            <p className="text-xs font-black uppercase tracking-widest">Clinical Prescription</p>
          </div>
        </div>

        {/* Patient Info Row */}
        <div className="grid grid-cols-4 gap-8 py-6 border-b border-slate-200 mb-10 text-xs font-bold">
          <div className="space-y-1">
            <p className="text-slate-400 text-[8px] uppercase">Patient Name</p>
            <p className="capitalize">{booking.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-slate-400 text-[8px] uppercase">Age / Gender</p>
            <p>-- / --</p>
          </div>
          <div className="space-y-1">
            <p className="text-slate-400 text-[8px] uppercase">Date of Visit</p>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-slate-400 text-[8px] uppercase">Patient ID</p>
            <p>ID-{booking._id.slice(-6).toUpperCase()}</p>
          </div>
        </div>

        {/* Vitals Column */}
        <div className="grid grid-cols-4 gap-4 py-4 mb-10 bg-slate-50 rounded-xl px-6 text-[10px] font-bold border border-slate-100">
          <p><span className="text-slate-400 uppercase text-[8px] block">BP</span> {vitals.bp || '---'}</p>
          <p><span className="text-slate-400 uppercase text-[8px] block">Weight</span> {vitals.weight || '---'}</p>
          <p><span className="text-slate-400 uppercase text-[8px] block">Temp</span> {vitals.temp || '---'}</p>
          <p><span className="text-slate-400 uppercase text-[8px] block">Sugar</span> {vitals.sugar || '---'}</p>
        </div>

        {/* symptoms & Findings */}
        <div className="grid grid-cols-1 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-sm font-black text-primary uppercase border-l-4 border-primary pl-4">Clinical Findings & Symptoms</h3>
            <p className="text-sm leading-relaxed italic pr-12">{symptoms}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-black text-primary uppercase border-l-4 border-primary pl-4">Diagnosis</h3>
            <p className="text-sm leading-relaxed font-bold">{diagnosis}</p>
          </div>
        </div>

        {/* Prescription Table */}
        <div className="space-y-6 pt-6 mb-20">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-primary">Rx</span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 text-slate-400">
                <th className="py-4 uppercase text-[9px]">Medicine Name</th>
                <th className="py-4 uppercase text-[9px] text-center">Dosage</th>
                <th className="py-4 uppercase text-[9px] text-center">Duration</th>
                <th className="py-4 uppercase text-[9px] text-right">Timing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {medicines.map((med, i) => (
                <tr key={i} className="font-bold text-primary">
                  <td className="py-4">{med.name}</td>
                  <td className="py-4 text-center">{med.dosage}</td>
                  <td className="py-4 text-center">{med.duration}</td>
                  <td className="py-4 text-right capitalize">{med.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        {notes && (
          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h4 className="text-[10px] uppercase text-slate-400 font-bold mb-2">Special Instructions / Advice</h4>
            <p className="text-xs font-bold leading-relaxed">{notes}</p>
          </div>
        )}

        {/* Footer / Signature */}
        <div className="mt-auto pt-20 flex justify-between items-end border-t border-slate-200 opacity-50 text-[10px]">
          <div>
            <p>Digital Prescription ID: {booking._id.toUpperCase()}</p>
            <p>Generated via Sanctuary v2.0</p>
          </div>
          <div className="text-center min-w-[200px]">
            <div className="h-20 flex items-end justify-center pb-2 opacity-10">
              {/* Space for stamp/sign */}
              <h2 className="text-lg font-black tracking-tighter">DR. VIKASH YADAV</h2>
            </div>
            <p className="border-t border-slate-400 pt-2 font-bold uppercase tracking-widest text-[8px]">Authorized Clinic Signature</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body * { visibility: hidden !important; }
          #prescription-print, #prescription-print * { visibility: visible !important; }
          #prescription-print {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            display: block !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}
