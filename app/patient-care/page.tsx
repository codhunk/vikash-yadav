"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Activity, ClipboardCheck, PhoneCall, BedDouble, Thermometer, MapPin, Search } from "lucide-react";

export default function PatientCare() {
  const journeySteps = [
    {
      title: "Diagnostic Intake",
      icon: <ClipboardCheck className="w-10 h-10" size={32} />,
      content: "Starting with a high-fidelity clinical inquiry and comprehensive medical history evaluation for targeted surgical precision."
    },
    {
      title: "The Surgery Sanctuary",
      icon: <Activity className="w-10 h-10" size={32} />,
      content: "State-of-the-art surgical execution at Manipal Hospital Dwarka, prioritizing patient safety and minimal-access mastery."
    },
    {
      title: "Restorative Recovery",
      icon: <Heart className="w-10 h-10" size={32} />,
      content: "Dedicated post-operative tracking with clinical guidance in English and Hindi to ensure seamless restorative success."
    }
  ];

  const quicklinks = [
    { title: "Manipal Hospital Dwarka", desc: "Our primary surgical sanctuary in Sector 6, Delhi.", icon: <MapPin className="w-5 h-5 text-secondary" /> },
    { title: "24/7 Triage Support", desc: "Immediate clinical coordination via our surgical desk.", icon: <PhoneCall className="w-5 h-5 text-secondary" /> },
    { title: "Facility Protocol", desc: "World-class inpatient facilities and medical standards.", icon: <Search className="w-5 h-5 text-secondary" /> }
  ];

  return (
    <main className="bg-surface font-inter text-on-surface antialiased">
      <Navbar />

      <section className="relative py-32 bg-gradient-to-br from-[#001B3D] via-[#00478D] to-[#0d9488] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-white/5 skew-x-12 -translate-x-1/4 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
              <span className="text-[12px] font-black text-secondary-fixed tracking-[0.2em] uppercase">Human-Centric Care</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-manrope font-black text-white leading-tight tracking-tight uppercase">
              The Path to <br /> <span className="text-secondary-fixed italic">Full Restoration</span>
            </h1>
            <p className="text-base text-blue-100/80 font-medium leading-relaxed max-w-xl font-inter">
              Beyond surgical mastery, we provide a holistic clinical sanctuary where patient comfort and rapid recovery are the primary coordinates of excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-secondary font-black uppercase text-xs tracking-widest leading-none">The Patient Journey</span>
                <h2 className="text-3xl md:text-4xl font-manrope font-black text-primary leading-tight uppercase tracking-tight">Structured For Your <br /> <span className="text-secondary">Peace of Mind</span></h2>
              </div>
              <div className="space-y-10 relative">
                <div className="absolute left-6 top-6 bottom-6 w-2 bg-slate-100 hidden md:block"></div>
                {journeySteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-10 group relative z-10"
                  >
                    <div className="w-[60px] h-[60px] shrink-0 text-sm rounded-full bg-white shadow-xl flex items-center justify-center text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-manrope font-black text-primary uppercase tracking-tight">{step.title}</h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed opacity-80">{step.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4"></div>
              <div className="rounded-[1.5rem] overflow-hidden relative z-10">
                <img
                  src="/restorative-success.png"
                  alt="Surgical recovery sanctuary"
                  className="w-full h-full object-cover transition-all duration-700 p-2"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div> */}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quicklinks.map((link, i) => (
              <div key={i} className="p-8 rounded-[1.5rem] bg-slate-50 border border-slate-100 space-y-6 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all">
                  {link.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-manrope font-black text-primary uppercase text-md tracking-tight">{link.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{link.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 rounded-[2rem] bg-gradient-to-br from-[#001B3D] to-primary text-center space-y-10 shadow-2xl shadow-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform">
              <Heart className="w-64 h-64 text-white" />
            </div>
            <div className="relative z-10 space-y-8">
              <h3 className="text-3xl font-manrope font-black text-white uppercase tracking-tight">Your Recovery Coordinator</h3>
              <p className="text-blue-100 opacity-80 font-medium max-w-xl mx-auto text-sm leading-relaxed">Dedicated to English and Hindi speaking patients for comprehensive clinical support throughout your restorative journey.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="tel:+918708255349" className="px-12 py-5 bg-white text-primary rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">Call the Sanctuary</a>
                <a href="https://wa.me/918708255349" className="px-12 py-5 bg-secondary text-white rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">WhatsApp Triage</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
