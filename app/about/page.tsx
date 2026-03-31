"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container min-h-screen antialiased">
      <Navbar />

      <main className="pb-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#002B5B] via-[#00478D] to-[#0d9488] min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none z-0"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse shadow-[0_0_8px_rgba(147,242,242,0.8)]"></span>
                  <span className="text-[10px]  font-black text-secondary-fixed tracking-widest">Dedicated Excellence</span>
                </div>
                <h1 className="text-3xl md:text-5xl  font-black text-white leading-[1.1] tracking-tight">
                  Meet <br /> <span className="text-secondary-fixed">Dr. Vikash Yadav</span>
                </h1>
                <p className="text-base text-blue-100/80 leading-relaxed max-w-xl font-medium font-inter">
                  Highly skilled surgeon in Delhi specializing in general and minimal-access surgery with a Fellowship in Minimal Access Surgery (FNB) from Max Hospital, Saket.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden ring-4 ring-white/5">
                        <img className="w-full h-full object-cover" src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Patient" />
                      </div>
                    ))}
                    <div className="h-12 w-12 rounded-full border-2 border-white bg-[#001B3D] flex items-center justify-center text-[10px] font-black text-white ring-4 ring-white/5">
                      +15k
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-secondary-fixed tracking-widest leading-none mb-1">Impact & Trust</p>
                    <p className="text-sm font-bold text-white leading-none">Trusted by <span className="text-secondary-fixed">15,000+</span> Patients</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/30 to-primary/30 blur-2xl rounded-[3rem] opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="rounded-[2rem] overflow-hidden shadow-3xl shadow-black/40 relative z-10 border-8 border-white/10 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    className="w-full h-full object-cover transition-all duration-700"
                    src="/vikash.webp"
                    alt="Dr. Vikash Yadav Profile"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-slate-100 hidden md:block">
                  <div className="text-primary font-black text-2xl leading-none">FNB</div>
                  <div className="text-[9px] font-black text-slate-400 tracking-widest mt-1">Certified Expert</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Visionary Practitioner */}
        <section className="bg-surface-container-low py-12 rounded-[1rem] mx-4 md:mx-0">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">The Visionary Practitioner</h2>
                <div className="space-y-8 text-on-surface-variant text-base leading-relaxed font-inter font-medium opacity-90">
                  <p>
                    Dr. Vikash Yadav founded the Clinical Sanctuary with a singular mission: to redefine the medical experience. Holding an MBBS from PGIMS Rohtak and an MS in General Surgery from Maharaja Agrasen Medical College, he sought to create a space where clinical rigor meets emotional intelligence.
                  </p>
                  <p>
                    His pursuit of advanced surgical techniques led him to earn a Fellowship in Minimal Access Surgery (FNB) from Max Super Speciality Hospital, Saket, New Delhi.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-[1.5rem] shadow-ambient border-b-4 border-secondary/20 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-6 h-full flex flex-col justify-between opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-px h-full bg-primary mx-auto"></div>
                </div>
                <span className="material-symbols-outlined text-secondary text-5xl mb-10" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <blockquote className="text-2xl  font-extrabold text-primary/80 italic leading-snug mb-10">
                  "Medicine is not just the science of curing bodies; it is the art of restoring lives. Our sanctuary is built on the pillars of transparency, empathy, and unrelenting excellence."
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-secondary/5 flex items-center justify-center border border-secondary/10">
                    <span className="material-symbols-outlined text-secondary text-3xl">signature</span>
                  </div>
                  <div className="">
                    <p className="font-black text-primary text-xl">Dr. Vikash Yadav</p>
                    <p className="text-xs font-bold text-on-surface-variant mt-1">Founder & Lead Practitioner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Bento Grid */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl  font-extrabold text-primary mb-6">Expertise and Credentials</h2>
            <p className="text-on-surface-variant text-base font-inter font-medium leading-relaxed">A lifetime of dedication to medical advancement and patient safety across international boundaries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px] ">
            {/* Main Stat Card */}
            <div className="md:col-span-2 md:row-span-2 bg-primary text-white p-8 rounded-[1rem] flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-primary/20">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-5xl mb-8">history_edu</span>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight">15+ Years of Dedicated Practice</h3>
                <p className="text-primary-fixed/70 text-base leading-relaxed font-inter font-medium">
                  Extensive experience in laparoscopic and robotic surgeries across prestigious hospitals in Delhi NCR. Fluent in English and Hindi.
                </p>
              </div>
              <div className="text-[12rem] font-black text-white/5 absolute -bottom-10 -right-10 select-none pointer-events-none">15Y</div>
            </div>

            {/* Top Education Card */}
            <div className="md:col-span-2 bg-surface-container-high p-6 rounded-[1rem] flex items-center gap-6 border border-white/20 group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="h-20 w-20 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-4xl">school</span>
              </div>
              <div>
                <h4 className="font-extrabold text-primary text-2xl">MBBS & MS Surgery</h4>
                <p className="text-on-surface-variant font-inter font-bold mt-1">PGIMS Rohtak & Maharaja Agrasen Medical College</p>
              </div>
            </div>

            {/* Bottom Left Fellowship */}
            <div className="bg-secondary text-white p-6 rounded-[1rem] flex flex-col justify-center text-center shadow-lg shadow-secondary/10 group hover:-translate-y-2 transition-all">
              <span className="material-symbols-outlined text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <p className="font-black text-xl">FNB Minimal Access</p>
              <p className="text-secondary-fixed/50 text-[10px] font-bold mt-2">Max Super Speciality Hospital, Saket</p>
            </div>

            {/* Bottom Right Board Certified */}
            <div className="bg-white p-6 rounded-[1rem] border border-outline-variant/20 flex flex-col justify-center text-center shadow-sm group hover:-translate-y-2 transition-all">
              <span className="material-symbols-outlined text-5xl mb-4 text-secondary">verified</span>
              <p className="font-black text-xl text-primary">APHS & IAGES Member</p>
              <p className="text-on-surface-variant text-[10px] font-bold mt-2">Asia Pacific Hernia Society</p>
            </div>
          </div>
        </section>

        {/* Informative Section: Path to Excellence */}
        <section className="py-24 bg-surface-container-lowest overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20">
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:w-1/3 space-y-6"
              >
                <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
                <h2 className="text-3xl md:text-5xl  font-black text-primary leading-none">Path to <br /><span className="text-secondary italic">Excellence</span></h2>
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed font-inter opacity-70">A chronological overview of the academic and professional milestones that defined Dr. Yadav's surgical mastery.</p>
              </motion.div>
              <div className="md:w-2/3 space-y-12 relative">
                <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-200 hidden md:block"></div>
                {[
                  { year: "2008", title: "MBBS Graduation", desc: "Completed from PGIMS Rohtak, setting the foundation for a career in medical excellence.", icon: "school" },
                  { year: "2013", title: "MS General Surgery", desc: "Earned from Maharaja Agrasen Medical College, specializing in complex surgical interventions.", icon: "home_health" },
                  { year: "2016", title: "FNB Minimal Access", desc: "Completed high-intensity Fellowship at Max Super Speciality Hospital, Saket.", icon: "precision_manufacturing" },
                  { year: "Present", title: "Consultant Surgeon", desc: "Leading advanced surgical care at Manipal Hospital Dwarka with over 15,000 successful procedures.", icon: "verified" }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                    className="flex gap-10 group"
                  >
                    <div className="relative z-10 w-12 h-12 bg-white rounded-xl shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all border border-slate-100 shrink-0">
                      <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-3">
                        <span className="text-secondary font-black text-xs tracking-[0.2em]">{step.year}</span>
                        <div className="w-8 h-px bg-slate-200"></div>
                        <span className="text-primary font-black text-lg tracking-tight">{step.title}</span>
                      </div>
                      <p className="text-on-surface-variant text-sm font-medium leading-relaxed font-inter opacity-70 max-w-lg">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy of Care */}
        <section className="bg-white py-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-surface-container-low/50 -skew-x-12 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl  font-extrabold text-primary mb-16">Philosophy & Expertise</h2>
              <div className="space-y-16">
                <div className="flex gap-10 group">
                  <div className="shrink-0 h-16 w-16 bg-secondary-container rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md">
                    <span className="material-symbols-outlined text-on-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                  </div>
                  <div>
                    <h3 className="text-2xl  font-extrabold text-primary mb-4">Advanced Care</h3>
                    <p className="text-on-surface-variant leading-relaxed text-base font-inter font-medium opacity-90">
                      Specializing in Laparoscopic, Bariatric, Robotic, and Laser surgeries with a focused, patient-centered approach.
                    </p>
                  </div>
                </div>
                <div className="flex gap-10 group">
                  <div className="shrink-0 h-16 w-16 bg-primary-fixed rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md">
                    <span className="material-symbols-outlined text-on-primary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                  </div>
                  <div>
                    <h3 className="text-2xl  font-extrabold text-primary mb-4">Talks & Publications</h3>
                    <p className="text-on-surface-variant leading-relaxed text-base font-inter font-medium opacity-90">
                      Author of numerous research articles and textbook chapters on laparoscopic, endoscopic, and robotic surgery.
                    </p>
                  </div>
                </div>
                <div className="flex gap-10 group">
                  <div className="shrink-0 h-16 w-16 bg-tertiary-fixed rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md">
                    <span className="material-symbols-outlined text-on-tertiary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                  </div>
                  <div>
                    <h3 className="text-2xl  font-extrabold text-primary mb-4">Holistic Integrity</h3>
                    <p className="text-on-surface-variant leading-relaxed text-base font-inter font-medium opacity-90">
                      Empowering patients through effective communication in English and Hindi for comprehensive health journeys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-primary via-primary-container to-primary-container p-12 md:p-16 rounded-[1rem] text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20 group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-700"></div>
            <h2 className="text-3xl md:text-5xl  font-extrabold mb-8 relative z-10 leading-tight">Start Your Journey at the Sanctuary</h2>
            <p className="text-base text-primary-fixed/80 mb-12 max-w-2xl mx-auto relative z-10 font-inter font-medium">Experience the perfect balance of medical expertise and restorative care. Appointments are limited to ensure personalized attention.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
              <Link
                href="/booking"
                className="bg-white text-primary px-10 py-5 rounded-xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-950/20"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 text-white px-15 py-5 rounded-xl font-black text-sm hover:bg-white/10 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
