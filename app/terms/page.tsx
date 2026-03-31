"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Scale, CheckSquare, Stethoscope, AlertTriangle, ScaleIcon, CheckCircle2 } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      title: "Clinical Engagement",
      icon: <CheckSquare className="w-6 h-6" />,
      content: "By accessing the Clinical Sanctuary portal, you agree to engage in a collaborative restorative medicine journey founded on transparency and clinical excellence."
    },
    {
      title: "Surgical Outcomes",
      icon: <Stethoscope className="w-6 h-6" />,
      content: "All clinical results are subject to individual recovery parameters. While Dr. Vikash Yadav employs the most advanced surgical mastery, outcomes are unique to each patient's biology."
    },
    {
      title: "Compliance Bound",
      icon: <ScaleIcon className="w-6 h-6" />,
      content: "The Clinical Sanctuary operates under the medical regulations of the Republic of India and international surgical standards at Manipal Hospital Dwarka."
    }
  ];

  return (
    <main className="bg-surface font-inter text-on-surface antialiased">
      <Navbar />

      <section className="relative py-32 bg-gradient-to-br from-[#001B3D] via-[#00478D] to-[#0d9488] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
              <span className="text-[12px] font-black text-secondary-fixed tracking-[0.2em] uppercase">Clinical Agreement</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-manrope font-black text-white leading-tight tracking-tight uppercase">
              Terms of <br /> <span className="text-secondary-fixed italic">Patient Service</span>
            </h1>
            <p className="text-base text-blue-100/80 font-medium leading-relaxed max-w-xl font-inter">
              Establishing a clear framework for surgical excellence and patient commitment to the restorative process.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[1rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-700"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6 mb-8">
                  {section.icon}
                </div>
                <h3 className="text-xl font-manrope font-black text-primary uppercase tracking-tight mb-4">{section.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 p-12 rounded-[1rem] border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Scale className="w-32 h-32" />
              </div>
              <div className="relative z-10 space-y-12">
                <article className="space-y-4">
                  <div className="flex items-center gap-4 text-primary font-black uppercase text-xl border-b-4 border-secondary/20 pb-4 w-fit">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <span>1. Diagnostic Integrity</span>
                  </div>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    Patients are bound to provide 100% accurate medical history. Any concealment of clinical details or previous surgical conditions may impact the treatment realizations and patient safety.
                  </p>
                </article>

                <article className="space-y-4">
                  <div className="flex items-center gap-4 text-primary font-black uppercase text-xl border-b-4 border-secondary/20 pb-4 w-fit">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <span>2. Appointment Discipline</span>
                  </div>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    Consultations must be cancelled at least 24 hours prior. This discipline ensures that our clinical sanctuary remains accessible to those in urgent surgical need. Non-discipline may lead to service interruption.
                  </p>
                </article>

                <article className="space-y-4">
                  <div className="flex items-center gap-4 text-primary font-black uppercase text-xl border-b-4 border-secondary/20 pb-4 w-fit">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                    <span>3. Digital Conduct</span>
                  </div>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    All interactions through our digital coordination channels (WhatsApp, Email) must maintain professional medical decorum. Any unauthorized data scraping or commercial solicitation is strictly prohibited.
                  </p>
                </article>
              </div>
            </div>

            <div className="mt-16 bg-red-50 p-8 rounded-[1rem] border border-red-100 flex gap-6 items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-[12px] text-red-800 font-bold leading-relaxed uppercase">
                Important: These terms are established to ensure clinical safety and surgical excellence for all patients within the sanctuary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
