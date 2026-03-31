"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Database, Share2 } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Data Stewardship",
      icon: <Shield className="w-6 h-6" />,
      content: "At the Clinical Sanctuary, your medical and personal data is handled with the highest degree of surgical precision and ethical stewardship. We collect only what is necessary to provide exceptional care."
    },
    {
      title: "Electronic Health Records",
      icon: <Database className="w-6 h-6" />,
      content: "Your health records are stored in encrypted clinical environments, compliant with international standards, ensuring that your medical history remains accessible only to authorized medical personnel."
    },
    {
      title: "Patient Rights",
      icon: <Eye className="w-6 h-6" />,
      content: "You maintain absolute autonomy over your information. This includes the right to request access, correction, or porting of your clinical data at any point during your restorative journey."
    }
  ];

  return (
    <main className="bg-surface font-inter text-on-surface antialiased">
      <Navbar />

      <section className="relative py-32 bg-gradient-to-br from-[#001B3D] via-[#002B5B] to-[#0d9488] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
              <span className="text-[10px] font-black text-secondary-fixed tracking-[0.2em] uppercase">Data Protection</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-manrope font-black text-white leading-tight tracking-tight uppercase">
              Clinical <br /> <span className="text-secondary-fixed italic">Privacy Protocol</span>
            </h1>
            <p className="text-base text-blue-100/80 font-medium leading-relaxed max-w-xl font-inter">
              Transparency is the bedrock of clinical trust. Our privacy framework is designed to safeguard your restorative journey at the highest medical standard.
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
                className="p-8 rounded-[1.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-700"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6 mb-8">
                  {section.icon}
                </div>
                <h3 className="text-xl font-manrope font-black text-primary uppercase tracking-tight mb-4">{section.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            <article className="space-y-6">
              <h2 className="text-2xl font-black text-primary uppercase border-b-2 border-secondary/20 pb-4 w-fit">1. Clinical Data Harvesting</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                We harvest minimal clinical data necessary for diagnostics, surgical planning, and post-operative recovery. This includes biometric data, medical history, and contact coordinates. All data entry is performed within secure, hospital-grade networks.
              </p>
            </article>

            <article className="space-y-6">
              <h2 className="text-2xl font-black text-primary uppercase border-b-2 border-secondary/20 pb-4 w-fit">2. Third-Party Collaboration</h2>
              <p className="text-slate-600 leading-relaxed font-medium border-l-4 border-slate-100 pl-8">
                Your data is never commercialized. We share selected clinical information only with registered medical partners, such as Manipal Hospital Dwarka and specialized laboratories, strictly for the purpose of your treatment realization.
              </p>
            </article>

            <article className="space-y-6">
              <h2 className="text-2xl font-black text-primary uppercase border-b-2 border-secondary/20 pb-4 w-fit">3. Security Infrastructure</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Our digital sanctuary utilizes industrial-grade SSL encryption and multi-factor authentication (MFA) to prevent unauthorized access. Regular security audits are conducted to maintain the absolute integrity of our patient database.
              </p>
            </article>

            <div className="bg-primary/5 p-12 rounded-[2rem] text-center space-y-6">
              <h3 className="text-xl font-black text-primary uppercase tracking-tight">Need privacy clarification?</h3>
              <p className="text-slate-500 font-medium max-w-sm mx-auto text-sm">Our clinical coordinators are available to discuss your data protection questions in detail.</p>
              <a href="mailto:vikash.yadav@manipalhospitals.com" className="inline-block px-10 py-4 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">Consult Our Triage</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
