"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Phone, Mail, Clock, Calendar as CalIcon, User } from "lucide-react";

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      if (data.success) {
        setBookings(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        fetchBookings();
        if (selectedBooking?._id === id) {
          setSelectedBooking({ ...selectedBooking, status: newStatus });
        }
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const openBookingDetails = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const stats = {
    total: bookings.length,
    new: bookings.filter(b => {
      const createdDate = new Date(b.createdAt);
      const today = new Date();
      return createdDate.toDateString() === today.toDateString();
    }).length,
    pending: bookings.filter(b => b.status === 'pending').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    utilization: bookings.length > 0 ? Math.round((bookings.filter(b => b.status === 'completed' || b.status === 'confirmed').length / bookings.length) * 100) : 0
  };

  return (
    <div className="space-y-8 ">
      {/* Header Inside Dashboard guerheiugh ijgniue ijrgnhiuer iureghsriu */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 ">
        <div>
          <h1 className="text-3xl font-extrabold text-primary font-manrope capitalize">Welcome, Dr. Yadav</h1>
          <p className="text-on-surface-variant text-sm font-medium">Monitoring the sanctuary's surgical flow today.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-3 bg-white rounded-xl shadow-sm text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-black text-primary capitalize">Dr. Vikash Yadav</p>
              <p className="text-[10px] text-secondary font-bold capitalize">Chief Surgeon</p>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-8 rounded-[1rem] shadow-sm border border-outline-variant/5 group hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">event_available</span>
            </div>
            <span className="text-secondary font-bold text-[10px] capitalize bg-secondary/10 px-3 py-1 rounded-full">Lifetime</span>
          </div>
          <h3 className="text-on-surface-variant text-xs font-bold capitalize mb-1">Total Appointments</h3>
          <p className="text-3xl font-manrope font-black text-primary ">{stats.total}</p>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-[1rem] shadow-sm border border-outline-variant/5 group hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-secondary/10 text-secondary rounded-2xl group-hover:bg-secondary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <span className="text-secondary font-bold text-[10px] capitalize bg-secondary/10 px-3 py-1 rounded-full">Today</span>
          </div>
          <h3 className="text-on-surface-variant text-xs font-bold capitalize mb-1">New Bookings</h3>
          <p className="text-3xl font-manrope font-black text-primary ">{stats.new}</p>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-[1rem] shadow-sm border border-outline-variant/5 group hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-error/10 text-error rounded-2xl group-hover:bg-error group-hover:text-white transition-all">
              <span className="material-symbols-outlined">assignment_late</span>
            </div>
            <span className="text-error font-bold text-[10px] capitalize bg-error/10 px-3 py-1 rounded-full">Urgent</span>
          </div>
          <h3 className="text-on-surface-variant text-xs font-bold capitalize mb-1">Pending Requests</h3>
          <p className="text-3xl font-manrope font-black text-primary ">{stats.pending}</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-manrope font-black text-primary capitalize">Upcoming Appointments</h3>
              <button
                onClick={fetchBookings}
                className="text-[10px] font-bold text-secondary capitalize hover:text-primary transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">refresh</span> Refresh
              </button>
            </div>
            <div className="space-y-4">
              {isLoading ? (
                <p className="text-center py-10 text-slate-400 font-bold">Loading appointments...</p>
              ) : bookings.length === 0 ? (
                <p className="text-center py-10 text-slate-400 font-bold">No appointments found.</p>
              ) : (
                bookings.map((apt) => (
                  <div key={apt._id} className="group bg-white p-6 rounded-3xl flex items-center justify-between transition-all border border-transparent hover:border-slate-100 hover:shadow-md">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center font-black text-primary font-manrope text-lg group-hover:bg-primary group-hover:text-white transition-all uppercase">
                        {apt.name.substring(0, 2)}
                      </div>
                      <div>
                        <h4 className="font-bold text-on-surface text-sm">{apt.name}</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[10px] font-bold text-secondary capitalize flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">schedule</span> {apt.date} at {apt.time}
                          </span>
                          <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                          <span className="text-[10px] font-bold text-slate-400 capitalize">{apt.service}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "hidden sm:inline-flex px-4 py-2 text-[9px] font-black rounded-xl capitalize border tracking-widest",
                        apt.status === 'confirmed' ? "bg-secondary/10 text-secondary border-secondary/20" :
                          apt.status === 'completed' ? "bg-green-100 text-green-600 border-green-200" :
                            "bg-slate-50 text-slate-500 border-slate-100"
                      )}>
                        {apt.status}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openBookingDetails(apt)}
                          className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                        >
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                        <button
                          onClick={() => apt.status === 'confirmed' ? handleStatusUpdate(apt._id, 'completed') : handleStatusUpdate(apt._id, 'confirmed')}
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm",
                            apt.status === 'confirmed' ? "bg-green-50 text-green-600 hover:bg-green-600 hover:text-white" : "bg-secondary/10 text-secondary hover:bg-secondary hover:text-white"
                          )}
                        >
                          <span className="material-symbols-outlined text-lg">
                            {apt.status === 'confirmed' ? 'check_circle' : 'done_all'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          <section>
            <div className="mb-8">
              <h3 className="text-xl font-manrope font-black text-primary capitalize">Clinical Quick Actions</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link href="/booking" className="flex items-center gap-6 p-4 bg-white rounded-[2rem] transition-all border border-slate-50 group text-left">
                <div className="w-16 h-16 rounded-[1.5rem] bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl font-light">add_circle</span>
                </div>
                <div>
                  <p className="font-manrope font-black text-primary capitalize text-sm">New Appointment</p>
                  <p className="text-[10px] text-slate-400 font-bold capitalize mt-1">Schedule patient visit</p>
                </div>
              </Link>
              <Link href="/admin/settings?tab=clinical" className="flex items-center gap-6 p-4 bg-white rounded-[2rem] transition-all border border-slate-50 group text-left shadow-sm hover:shadow-md">
                <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl font-light">edit_calendar</span>
                </div>
                <div>
                  <p className="font-manrope font-black text-primary capitalize text-sm">Manage Hours</p>
                  <p className="text-[10px] text-slate-400 font-bold capitalize mt-1">Update clinical schedule</p>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-manrope font-black text-primary capitalize">Recent Patients</h3>
              <Link href="/admin/patients" className="text-[10px] font-bold text-secondary capitalize hover:text-primary transition-colors">Directory</Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {bookings.slice(0, 3).map((apt) => (
                <div key={apt._id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 flex items-center gap-4 group hover:shadow-sm transition-all text-xs">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-primary uppercase">
                    {apt.name[0]}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-primary text-sm">{apt.name}</h4>
                    <p className="text-[9px] text-slate-400 font-bold capitalize mt-1">{apt.phone}</p>
                  </div>
                  <Link href={`/admin/consultation/${apt._id}`} className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-secondary/10 to-transparent p-8 rounded-[2rem] border border-secondary/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 className="font-manrope font-black text-secondary text-sm mb-6 capitalize">Operational Pulse</h4>
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-secondary rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm font-black text-primary capitalize">{bookings.length} Registered Bookings</span>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary transition-all duration-1000"
                  style={{ width: `${stats.utilization}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-black text-slate-400 capitalize">
                <span>Capacity Utilized</span>
                <span className="text-secondary">{stats.utilization}%</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Booking Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedBooking && (
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
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary text-2xl font-black uppercase shadow-inner">
                      {selectedBooking.name.substring(0, 2)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-manrope font-black text-primary tracking-tight capitalize">{selectedBooking.name}</h3>
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[9px] font-black capitalize tracking-widest inline-block mt-1",
                        selectedBooking.status === 'confirmed' ? "bg-secondary/10 text-secondary" :
                          selectedBooking.status === 'completed' ? "bg-green-100 text-green-600" :
                            "bg-slate-50 text-slate-500"
                      )}>{selectedBooking.status}</span>
                    </div>
                  </div>
                  <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-error hover:text-white transition-all group">
                    <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-10">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-secondary shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</p>
                      <p className="text-sm font-bold text-primary">{selectedBooking.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</p>
                      <p className="text-sm font-bold text-primary">{selectedBooking.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 shadow-sm">
                        <CalIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</p>
                        <p className="text-sm font-bold text-primary">{selectedBooking.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 shadow-sm">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Time</p>
                        <p className="text-sm font-bold text-primary">{selectedBooking.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-4 bg-primary/5 border border-primary/5 rounded-2xl">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Requested Service</p>
                    <p className="text-lg font-manrope font-black text-primary">{selectedBooking.service}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedBooking.status === 'confirmed' ? (
                    <button
                      onClick={() => handleStatusUpdate(selectedBooking._id, 'completed')}
                      className="flex-1 py-4 bg-green-600 text-white rounded-2xl font-black text-[10px] capitalize tracking-[0.2em] shadow-xl shadow-green-600/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Complete Consultation
                    </button>
                  ) : selectedBooking.status === 'pending' ? (
                    <button
                      onClick={() => handleStatusUpdate(selectedBooking._id, 'confirmed')}
                      className="flex-1 py-4 bg-secondary text-white rounded-2xl font-black text-[10px] capitalize tracking-[0.2em] shadow-xl shadow-secondary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Confirm Appointment
                    </button>
                  ) : null}
                  <button
                    onClick={handlePrint}
                    className="px-6 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black text-[10px] capitalize tracking-[0.2em] hover:bg-slate-200 transition-all"
                  >
                    Print Receipt
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hidden Print Template */}
      <div id="print-area" className="hidden print:block p-12 bg-white text-black font-serif">
        <div className="text-center border-b-2 border-black pb-8 mb-8">
          <h1 className="text-3xl font-bold uppercase tracking-widest">Clinical Sanctuary</h1>
          <p className="text-sm">Dr. Vikash Yadav - Chief Surgeon</p>
          <p className="text-xs">Manipal Hospitals, New Delhi</p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="font-bold">Receipt No:</span>
            <span>#CS-{selectedBooking?._id.slice(-6).toUpperCase()}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="font-bold">Patient Name:</span>
            <span className="capitalize">{selectedBooking?.name}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="font-bold">Service:</span>
            <span>{selectedBooking?.service}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="font-bold">Appointment Date:</span>
            <span>{selectedBooking?.date}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="font-bold">Time Slot:</span>
            <span>{selectedBooking?.time}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="font-bold">Status:</span>
            <span className="uppercase">{selectedBooking?.status}</span>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-black text-center text-[10px] space-y-1">
          <p>This is a computer-generated clinical appointment receipt.</p>
          <p>For emergencies, please contact +91 99999 88888</p>
          <div className="mt-8 flex justify-between items-end italic opacity-50">
            <div>
              <p className="text-[8px]">Scan for records</p>
              <div className="w-12 h-12 bg-black/5 border border-black/10 rounded"></div>
            </div>
            <div className="text-right border-t border-black/20 pt-2 min-w-[150px]">
              <p>Authorized Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
