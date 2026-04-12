"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

export default function AdminAppointments() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

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
        fetchBookings(); // Refresh the list
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
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

  // Filter daily schedule for the selected/current date
  const selectedDateStr = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  const dailySchedule = bookings.filter(b => b.date === selectedDateStr);

  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || b.phone.includes(searchQuery);
    const matchesStatus = statusFilter === "All Status" || b.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-manrope font-black text-primary tracking-tight capitalize">Appointment Scheduler</h2>
          <p className="text-on-surface-variant text-sm font-medium">Manage patient bookings and clinical availability.</p>
        </div>
        <div className="flex items-center gap-4 bg-white/50 p-2  border border-outline-variant/10 shadow-sm">
          <div className="flex bg-slate-50 rounded-xl p-1">
            <button className="px-6 py-2 text-[10px] font-black capitalize tracking-widest bg-primary text-white rounded-lg shadow-lg shadow-primary/20 transition-all">Calendar</button>
            <button className="px-6 py-2 text-[10px] font-black capitalize tracking-widest text-on-surface-variant hover:text-primary transition-colors">List View</button>
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
                </select>
              </div>
            </div>
          </section>

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
                  const dateStr = dayObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
                  const bookingsCount = bookings.filter(b => b.date === dateStr).length;

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
        </div>

        <div className="lg:col-span-4 h-full">
          <div className="bg-white rounded-[1rem] p-6 h-full flex flex-col shadow-sm border border-outline-variant/10">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(3,192,192,0.5)]"></div>
                <h3 className="text-lg font-manrope font-black text-primary capitalize tracking-tight">Schedule for {selectedDateStr}</h3>
              </div>
            </div>

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
                          appt.status === 'pending' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                        )}>{appt.status}</span>
                        {appt.status === 'pending' && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusUpdate(appt._id, 'confirmed');
                            }}
                            className="bg-secondary text-white px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-sm shadow-secondary/20"
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
    </div>
  );
}
