"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Booking() {
  const today = new Date();
  const [selectedService, setSelectedService] = useState("Follow-up");
  const [selectedDate, setSelectedDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
  const [selectedTime, setSelectedTime] = useState("11:15 AM");
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const services = [
    { id: "Consultation", title: "Consultation", icon: "medical_information", desc: "General assessment and expert health strategy." },
    { id: "Follow-up", title: "Follow-up", icon: "event_repeat", desc: "Continuous care and adjustment of existing plans." },
    { id: "Diagnostic", title: "Diagnostic", icon: "biotech", desc: "In-depth clinical analysis and specialized tests." },
  ];

  // Define some slots as "booked" for realism
  const timeSlots = [
    { time: "09:00 AM", available: true },
    { time: "10:30 AM", available: false },
    { time: "11:15 AM", available: true },
    { time: "01:00 PM", available: true },
    { time: "02:30 PM", available: false },
    { time: "04:00 PM", available: true },
  ];

  // Calendar Helpers
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);
    const prevMonthTotalDays = daysInMonth(year, month - 1);

    const days = [];
    // Padding from previous month
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({ day: prevMonthTotalDays - i, currentMonth: false });
    }
    // Days of current month
    for (let i = 1; i <= totalDays; i++) {
      days.push({ day: i, currentMonth: true });
    }
    return days;
  }, [viewDate]);

  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));

  const monthName = viewDate.toLocaleString('default', { month: 'long' });

  return (
    <main className="bg-surface font-inter text-on-surface antialiased">
      <Navbar />

      <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12 max-w-3xl">
          <h1 className="font-manrope text-2xl md:text-3xl font-extrabold text-primary leading-tight mb-6 tracking-tight">
            Your Health Journey <br />Begins in Our <span className="text-secondary">Sanctuary</span>
          </h1>
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-xl font-medium opacity-70">
            Schedule your personalized clinical consultation with Dr. Vikash Yadav. Experience medical care designed with sophisticated precision and human warmth.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-12">
            {/* Step 1: Select Service */}
            <section className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-manrope font-bold text-lg shadow-lg shadow-secondary/20">1</span>
                <h2 className="font-manrope text-2xl font-black text-primary capitalize tracking-tight">Select Service</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={cn(
                      "group p-6 rounded-[1rem] bg-white border-2 transition-all text-left shadow-sm",
                      selectedService === service.id
                        ? "border-secondary ring-4 ring-secondary/5 shadow-md scale-[1.02]"
                        : "border-slate-50 hover:border-secondary/30"
                    )}
                  >
                    <span className="material-symbols-outlined text-secondary text-3xl mb-4" style={{ fontVariationSettings: selectedService === service.id ? "'FILL' 1" : "" }}>{service.icon}</span>
                    <h3 className="font-manrope font-black text-sm capitalize text-primary mb-2">{service.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-medium opacity-60">{service.desc}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Step 2 & 3: Calendar & Time Slots */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-manrope font-bold text-lg">2</span>
                  <h2 className="font-manrope text-2xl font-black text-primary capitalize tracking-tight">Select Date</h2>
                </div>
                <div className="bg-white p-8 rounded-[1rem] shadow-xl shadow-blue-900/5 border border-slate-50">
                  <div className="flex justify-between items-center mb-10">
                    <h4 className="font-manrope font-black text-primary text-xl tracking-tighter">{monthName} {viewDate.getFullYear()}</h4>
                    <div className="flex gap-2">
                      <button
                        onClick={prevMonth}
                        className="w-10 h-10 flex items-center justify-center bg-slate-50 hover:bg-primary hover:text-white rounded-xl transition-all shadow-sm"
                      >
                        <span className="material-symbols-outlined font-light">chevron_left</span>
                      </button>
                      <button
                        onClick={nextMonth}
                        className="w-10 h-10 flex items-center justify-center bg-slate-50 hover:bg-primary hover:text-white rounded-xl transition-all shadow-sm"
                      >
                        <span className="material-symbols-outlined font-light">chevron_right</span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm font-black text-slate-600 mb-6">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => <div key={d}>{d}</div>)}
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {calendarDays.map((d, i) => {
                      const dateObj = new Date(viewDate.getFullYear(), viewDate.getMonth(), d.day);
                      const isToday = d.currentMonth &&
                        today.getDate() === d.day &&
                        today.getMonth() === viewDate.getMonth() &&
                        today.getFullYear() === viewDate.getFullYear();

                      const isSelected = d.currentMonth &&
                        selectedDate.getDate() === d.day &&
                        selectedDate.getMonth() === viewDate.getMonth() &&
                        selectedDate.getFullYear() === viewDate.getFullYear();

                      return (
                        <button
                          key={i}
                          disabled={!d.currentMonth}
                          onClick={() => d.currentMonth && setSelectedDate(dateObj)}
                          className={cn(
                            "aspect-square relative flex items-center justify-center rounded-xl text-xs font-bold transition-all",
                            !d.currentMonth && "text-slate-200 cursor-not-allowed",
                            d.currentMonth && !isSelected && "hover:bg-slate-50 text-primary",
                            isSelected && "bg-secondary text-white shadow-lg shadow-secondary/30 scale-110",
                            isToday && !isSelected && "border-2 border-secondary/20 bg-secondary/5"
                          )}
                        >
                          {d.day}
                          {isToday && (
                            <span className={cn(
                              "absolute bottom-2 w-1 h-1 rounded-full",
                              isSelected ? "bg-white" : "bg-secondary"
                            )} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-manrope font-bold text-lg">3</span>
                  <h2 className="font-manrope text-2xl font-black text-primary capitalize tracking-tight">Available Slots</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      className={cn(
                        "py-4 px-4 rounded-xl border transition-all font-manrope font-black text-xs relative overflow-hidden",
                        selectedTime === slot.time && slot.available
                          ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20 scale-[1.02]"
                          : slot.available
                            ? "bg-white border-slate-100 text-primary hover:border-secondary/30"
                            : "bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed"
                      )}
                    >
                      {slot.time}
                      {!slot.available && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/20 border border-red-600">
                          <span className="text-[10px] font-black text-red-600">BOOKED</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-3 text-slate-500 text-sm font-black bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <span className="material-symbols-outlined text-secondary text-lg">info</span>
                  <span>Slots shown in GMT+5:30 (India Standard Time)</span>
                </div>
              </div>
            </section>

            {/* Step 4: Patient Information */}
            <section className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-manrope font-bold text-lg">4</span>
                <h2 className="font-manrope text-2xl font-black text-primary capitalize tracking-tight">Patient Information</h2>
              </div>
              <form className="space-y-8 bg-white p-10 rounded-[1rem] shadow-xl shadow-blue-900/5 border border-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-slate-600">Full Name</label>
                    <input className="w-full bg-slate-50 border-2 border-transparent focus:border-secondary focus:bg-white rounded-xl px-6 py-4 transition-all outline-none font-medium text-sm" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-slate-600">Phone Number</label>
                    <input className="w-full bg-slate-50 border-2 border-transparent focus:border-secondary focus:bg-white rounded-xl px-6 py-4 transition-all outline-none font-medium text-sm" placeholder="+91 999 000 0000" type="tel" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-black text-slate-600">Email Address</label>
                  <input className="w-full bg-slate-50 border-2 border-transparent focus:border-secondary focus:bg-white rounded-xl px-6 py-4 transition-all outline-none font-medium text-sm" placeholder="john.doe@email.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-black text-slate-600">Reason for Visit</label>
                  <textarea className="w-full bg-slate-50 border-2 border-transparent focus:border-secondary focus:bg-white rounded-xl px-6 py-4 transition-all outline-none font-medium text-sm min-h-[120px]" placeholder="Briefly describe your symptoms or concern..." rows={3}></textarea>
                </div>
              </form>
            </section>
          </div>

          {/* Right Column: Booking Summary Card */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-white rounded-[1rem] overflow-hidden shadow-2xl shadow-primary/10 border border-slate-100">
              <div className="h-56 relative">
                <img
                  alt="Modern Medical Office"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRA5MjsfLmyJRc7fyAQu3gTv9wXxoVEAAWInkuaQlwD4TXaYPvUMcjMzfupIX-djW1BmgXSb82scSCqK8GNJ0X-su_rlXm-ZjaEzIGJXCcpHpRMHN_CWOhOsWUMRyI_0gTe2kbneZMYzPDldjVlskUepJxcbtDWBLA2QHk-Z4qHYKB6VcuWnd2yNlEo22E_GJc6J_Rrg5npd1pfG3j8YSf0fO3PDkwv8YOck3sIt8rTj28i9VwivJtyQIAo73WGysPpab1NvX8Mw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-primary/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl border-4 border-white shadow-2xl overflow-hidden">
                    <img
                      alt="Dr. Yadav"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT1c3ACMSagX04bNROcpF4Z2BIye4HO5aLJCqgJBxpSThsjVfHz6MwpgvwBPqkQEXeFRLmVOBN3G9dgobRsG8geWriHDHQIvKbZyBxVwIqjjekOuYMYvPbWy2roF3UzvEB4gWS47Duu0OsUwmtUEXyygFR7GU7EpoCcfy4BXKZxEmaG5ARn0dyw6he4fOSLlzvjN558qOxnEQIWDBteya9ocVV3Rhhe4htgMjtZ6YLoVxz7ow4hfDHzT5w92Z14iG0hvrPvsFpyw"
                    />
                  </div>
                  <div className="text-primary">
                    <h3 className="font-manrope font-black text-xl leading-none">Dr. Vikash Yadav</h3>
                    <p className="text-sm font-black text-secondary mt-1">Lead Surgical Specialist</p>
                  </div>
                </div>
              </div>
              <div className="p-10 space-y-4">
                <h4 className="font-manrope font-bold text-2xl text-primary border-b border-slate-50 pb-6 tracking-tighter">Reservation Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-600">Surgical Service</span>
                    <span className="font-manrope font-bold text-primary text-sm">{selectedService}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-600">Scheduled Date</span>
                    <span className="font-manrope font-bold text-primary text-sm">
                      {selectedDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-600">Appointment Time</span>
                    <span className="font-manrope font-bold text-primary text-sm">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                    <span className="text-sm font-bold text-slate-600">Consultation Fee</span>
                    <span className="font-manrope font-bold text-secondary text-xl">₹1,200.00</span>
                  </div>
                </div>
                <button className="w-full bg-primary hover:bg-blue-800 text-white py-5 rounded-[1.5rem] font-manrope font-bold text-lg transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95">
                  Confirm Booking
                  <span className="material-symbols-outlined text-white">check_circle</span>
                </button>
                <p className="text-[12px] text-center text-slate-600 leading-relaxed font-bold">
                  Patient privacy as per clinical standards. <br />Cancellations available 24h prior.
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-50 shadow-sm">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-[12px] font-bold text-slate-600">Secure Clinical<br />Portal</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                <span className="text-[12px] font-bold text-slate-600">Medical Data<br />Encryption</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
