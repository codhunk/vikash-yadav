"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X, CheckCircle2, Phone, Mail, Clock, Calendar as CalIcon, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

// Deterministic date formatter to match the database storage format
const formatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export default function AdminAppointments() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      if (data.success) {
        // Sort by date and time
        const sorted = data.data.sort((a: Booking, b: Booking) => {
          if (a.date !== b.date) return a.date.localeCompare(b.date);
          return a.time.localeCompare(b.time);
        });
        setBookings(sorted);
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
        fetchBookings(); // Refresh the list
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

  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthYearString = currentDate.toLocaleString("default", { month: "long", year: "numeric" });
  const monthDays = daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
  const startDay = firstDayOfMonth(currentDate.getMonth(), currentDate.getFullYear());

  const today = new Date();
  const isToday = (day: number) => {
    return today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear();
  };

  // Previous month padding
  const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  const prevMonthDaysToShow = Array.from({ length: startDay }, (_, i) => prevMonth.getDate() - startDay + i + 1);

  // Use the standardized date format for filtering (matching database storage)
  const selectedDateKey = formatDate(currentDate);
  const selectedDateStr = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  
  const dailySchedule = bookings.filter(b => b.date === selectedDateKey);

  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || b.phone.includes(searchQuery);
    const matchesStatus = statusFilter === "All Status" || b.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Group upcoming bookings for List View
  const todayKey = formatDate(new Date());
  const groupedUpcoming = filteredBookings.reduce((acc: any, booking) => {
    const date = booking.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(booking);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-manrope font-black text-primary tracking-tight capitalize">Appointment Scheduler</h2>
          <p className="text-on-surface-variant text-sm font-medium">Manage patient bookings and clinical availability.</p>
        </div>
        <div className="flex items-center gap-4 bg-white/50 p-2 border border-outline-variant/10 shadow-sm rounded-2xl">
          <div className="flex bg-slate-50 rounded-xl p-1">
            <button 
              onClick={() => setViewMode("calendar")}
              className={cn(
                "px-6 py-2 text-[10px] font-black capitalize tracking-widest rounded-lg transition-all",
                viewMode === "calendar" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-on-surface-variant hover:text-primary"
              )}
            >
              Calendar
            </button>
            <button 
              onClick={() => setViewMode("list")}
              className={cn(
                "px-6 py-2 text-[10px] font-black capitalize tracking-widest rounded-lg transition-all",
                viewMode === "list" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-on-surface-variant hover:text-primary"
              )}
            >
              List View
            </button>
          </div>
          <div className="h-8 w-px bg-slate-200"></div>
          <button className="flex items-center gap-2 text-primary font-black text-[10px] capitalize tracking-widest px-4 py-2 hover:bg-slate-50 rounded-xl transition-all">
            <span className="material-symbols-outlined text-lg">today</span>
            {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-10">
          <section className="bg-white p-6 rounded-[1rem] shadow-sm border border-outline-variant/5">
            <div className="flex flex-wrap items-end gap-8">
              <div className="flex-grow min-w-[200px]">
                <label className="block text-[10px] font-black capitalize tracking-[0.2em] text-slate-400 mb-3 ml-1">Search Patient</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors">search</span>
                  <input 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-primary/20  text-sm font-medium outline-none transition-all" 
                    placeholder="Patient Name or Phone..." 
                    type="text" 
                  />
                </div>
              </div>
              <div className="w-48">
                <label className="block text-[10px] font-black capitalize tracking-[0.2em] text-slate-400 mb-3 ml-1">Status</label>
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20  px-6 py-4 text-[10px] font-black capitalize tracking-widest outline-none cursor-pointer text-primary"
                >
                  <option>All Status</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
          </section>

          {viewMode === "calendar" ? (
            <section className="bg-white rounded-[1rem] p-6 shadow-sm border border-outline-variant/5">
              <div className="flex justify-between items-center mb-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-manrope font-black text-primary capitalize">{monthYearString}</h3>
                  <div className="flex h-1 w-12 bg-secondary rounded-[1rem]"></div>
                </div>
                <div className="flex gap-4">
                  <button onClick={handlePrevMonth} className="w-12 h-12 flex items-center justify-center bg-slate-50 hover:bg-primary hover:text-white  transition-all shadow-sm rounded-xl">
                    <span className="material-symbols-outlined font-light">chevron_left</span>
                  </button>
                  <button onClick={handleNextMonth} className="w-12 h-12 flex items-center justify-center bg-slate-50 hover:bg-primary hover:text-white  transition-all shadow-sm rounded-xl">
                    <span className="material-symbols-outlined font-light">chevron_right</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto pb-4 custom-scrollbar">
                <div className="grid grid-cols-7 gap-4 min-w-[600px] lg:min-w-0">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-[10px] font-black capitalize text-slate-400 pb-6 text-center tracking-[0.2em]">{day}</div>
                  ))}

                  {prevMonthDaysToShow.map(d => (
                    <div key={`prev-${d}`} className="h-24 md:h-32 p-4 text-slate-200 text-xs font-bold opacity-30">{d}</div>
                  ))}

                  {Array.from({ length: monthDays }, (_, i) => i + 1).map(day => {
                    const dayObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                    const bookingDateKey = formatDate(dayObj);
                    const bookingsCount = bookings.filter(b => b.date === bookingDateKey).length;

                    return (
                      <div
                        key={day}
                        onClick={() => setCurrentDate(dayObj)}
                        className={cn(
                          "h-18 md:h-20 p-4 rounded-[1.5rem] md:rounded-[1rem] relative border-2 transition-all cursor-pointer group flex flex-col justify-between",
                          isToday(day)
                            ? 'bg-primary text-white shadow-2xl shadow-primary/30 ring-4 ring-primary-container/10 border-primary'
                            : 'bg-slate-50 border-transparent hover:border-secondary'
                        )}
                      >
                        <span className={cn("text-xs font-black", isToday(day) ? 'text-white' : 'text-primary')}>
                          {day < 10 ? `0${day}` : day}
                        </span>
                        {bookingsCount > 0 && !isToday(day) && (
                          <div className="flex h-1.5 w-1.5 bg-secondary rounded-full mx-auto mt-1 animate-pulse"></div>
                        )}
                        {isToday(day) && (
                          <div className="mt-auto text-[8px] md:text-[9px] leading-tight font-black capitalize tracking-[0.1em] md:tracking-[0.2em] opacity-80 decoration-secondary underline decoration-2 underline-offset-4">Today</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {Object.keys(groupedUpcoming).length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-slate-100">
                  <span className="material-symbols-outlined text-4xl text-slate-200 mb-2">person_search</span>
                  <p className="text-slate-400 font-bold text-sm">No upcoming appointments found</p>
                </div>
              ) : (
                Object.entries(groupedUpcoming).map(([dateKey, dayBookings]: [string, any]) => (
                  <div key={dateKey} className="space-y-4">
                    <div className="flex items-center gap-4 px-2">
                       <h4 className="text-sm font-black text-primary uppercase tracking-[0.2em]">
                        {dateKey === todayKey ? 'TODAY' : new Date(dateKey).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                      </h4>
                      <div className="h-px bg-slate-100 flex-1"></div>
                      <span className="text-[10px] font-black text-slate-400">{dayBookings.length} Patients</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {dayBookings.map((appt: any) => (
                        <div 
                          key={appt._id}
                          onClick={() => openBookingDetails(appt)}
                          className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-secondary hover:shadow-xl hover:shadow-secondary/5 transition-all cursor-pointer group relative overflow-hidden"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary font-black text-xs uppercase group-hover:bg-primary group-hover:text-white transition-colors">
                                {appt.name.substring(0, 2)}
                              </div>
                              <div>
                                <h5 className="font-manrope font-black text-primary group-hover:text-secondary transition-colors truncate max-w-[120px]">{appt.name}</h5>
                                <p className="text-[10px] font-bold text-slate-400 capitalize">{appt.time}</p>
                              </div>
                            </div>
                            <span className={cn(
                              "px-3 py-1 rounded-full text-[8px] font-black capitalize tracking-widest",
                              appt.status === 'confirmed' ? 'bg-secondary/10 text-secondary' : 
                              appt.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-slate-50 text-slate-400'
                            )}>{appt.status}</span>
                          </div>
                          <div className="flex items-center justify-between mt-auto pt-2">
                             <span className="text-[9px] font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{appt.service}</span>
                             <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link onClick={(e) => e.stopPropagation()} href={`/admin/consultation/${appt._id}`} className="w-8 h-8 rounded-lg bg-secondary text-white flex items-center justify-center hover:scale-110 transition-transform">
                                  <span className="material-symbols-outlined text-sm">medical_services</span>
                                </Link>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <div className="lg:col-span-4 h-full">
          <div className="bg-white rounded-[1rem] p-6 h-full flex flex-col shadow-sm border border-outline-variant/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(3,192,192,0.5)]"></div>
                <h3 className="text-lg font-manrope font-black text-primary capitalize tracking-tight">Schedule for {selectedDateStr}</h3>
              </div>
            </div>

            {/* Next Patient Highlight */}
            {!isLoading && dailySchedule.some(b => b.status === 'confirmed') && (
              <div className="mb-8 p-6 bg-primary text-white rounded-[1.5rem] shadow-xl shadow-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-6xl">person_play</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-2 block">Next Patient Up</span>
                {(() => {
                  const nextPatient = dailySchedule.find(b => b.status === 'confirmed');
                  return (
                    <>
                      <h4 className="text-xl font-black font-manrope mb-1">{nextPatient?.name}</h4>
                      <p className="text-xs font-bold opacity-80 mb-4">{nextPatient?.time} - {nextPatient?.service}</p>
                      <button 
                        onClick={() => handleStatusUpdate(nextPatient!._id, 'completed')}
                        className="bg-white text-primary px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-lg"
                      >
                        Mark as Completed
                      </button>
                    </>
                  );
                })()}
              </div>
            )}

            <div className="space-y-6 flex-grow overflow-y-auto pr-2 custom-scrollbar">
              {isLoading ? (
                <p className="text-center py-10 text-slate-400 font-bold">Loading schedule...</p>
              ) : dailySchedule.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 opacity-40">
                  <span className="material-symbols-outlined text-4xl mb-2">event_busy</span>
                  <p className="text-center text-xs font-bold text-slate-400">No appointments</p>
                </div>
              ) : (
                dailySchedule.map((appt, i) => (
                  <div key={appt._id} className={cn(
                    "group bg-slate-50 p-4 rounded-[1rem] hover:shadow-xl transition-all cursor-pointer border-l-4",
                    appt.status === 'confirmed' ? 'border-secondary' : 'border-primary'
                  )}>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-black text-slate-400 capitalize tracking-widest">{appt.time}</span>
                      <div className="flex flex-col items-end gap-2">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[9px] font-black capitalize tracking-widest",
                          appt.status === 'cancelled' ? 'bg-error/10 text-error' :
                          appt.status === 'pending' ? 'bg-primary/10 text-primary' : 
                          appt.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-secondary/10 text-secondary'
                        )}>{appt.status}</span>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              openBookingDetails(appt);
                            }}
                            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                          >
                            <span className="material-symbols-outlined text-sm">visibility</span>
                          </button>
                           <Link href={`/admin/consultation/${appt._id}`} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm">
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </Link>
                        </div>

                        {appt.status === 'confirmed' && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusUpdate(appt._id, 'completed');
                            }}
                            className="bg-green-600 text-white px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-sm shadow-green-600/20 mt-2"
                          >
                            Consult Completed
                          </button>
                        )}
                        {appt.status === 'pending' && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusUpdate(appt._id, 'confirmed');
                            }}
                            className="bg-secondary text-white px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-sm shadow-secondary/20 mt-2"
                          >
                            Confirm Now
                          </button>
                        )}
                      </div>
                    </div>
                    <h4 className="font-black text-primary font-manrope tracking-tight leading-tight group-hover:text-secondary transition-colors">{appt.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 mt-2 capitalize tracking-widest">{appt.service}</p>
                  </div>
                ))
              )}
            </div>

            <button className="mt-10 w-full py-6 px-4 bg-white border-2 border-dashed border-slate-200 rounded-[1rem] text-slate-400 font-black text-[10px] capitalize tracking-[0.2em] hover:bg-slate-50 hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-3">
              <span className="material-symbols-outlined text-lg">more_time</span>
              Update Availability
            </button>
          </div>
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
