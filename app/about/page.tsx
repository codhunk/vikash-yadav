import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container min-h-screen antialiased">
      <Navbar />

      <main className="pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 min-h-screen flex items-center pt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <span className="text-secondary font-manrope font-bold uppercase text-sm">Dedicated Excellence</span>
              <h1 className="text-3xl md:text-5xl font-manrope font-extrabold text-primary leading-tight">
                Meet <br /> Dr. Vikas Yadav
              </h1>
              <p className="text-base text-on-surface-variant leading-relaxed max-w-xl font-medium">
                Highly skilled surgeon in Delhi specializing in general and minimal-access surgery with a Fellowship in Minimal Access Surgery (FNB).
              </p>
              <div className="flex items-center gap-4 pt-4 font-inter">
                <div className="flex -space-x-3">
                  <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden ring-2 ring-primary/5">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0EVLqu_24V0bF8gPk4g-m9E8E13k0zc4ygaoIRY1zVIsOHol7a5Ff9duIHXjhbZ0xHaJThHfXKzc6lR4vxGOYLCrWHJoQTR18X2PKI7g_7JKM7rW3oK0QrKo9MfWRKWj6UsQ30IQKNBT9NEsbHI8LYqFGCJlmMXjVH0DrIMCTuuOeOhHd4HK3Mqo67jYcdROojwjTfXYNlE_bXa1d7omqRMtSXSW2NFafSHN5GpkGTm3m1Tz1rJDT1L8pW-0hLWEwzAfFSEfoFQ" alt="colleague" />
                  </div>
                  <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-[10px] font-black text-white uppercase">
                    +2k
                  </div>
                </div>
                <p className="text-xs font-bold text-on-surface-variant uppercase leading-none">Trusted by <span className="text-primary font-black">2,000+</span> patients annually</p>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 relative z-10 border border-white/20">
                <img 
                  className="w-full h-full object-cover" 
                  src="/dr-yadav-portrait.png" 
                  alt="Dr. Vikash Yadav Profile"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </section>

        {/* The Visionary Practitioner */}
        <section className="bg-surface-container-low py-16 rounded-[4rem] mx-4 md:mx-0">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
              <div className="space-y-10">
                <h2 className="text-3xl md:text-5xl font-manrope font-extrabold text-primary uppercase">The Visionary Practitioner</h2>
                <div className="space-y-8 text-on-surface-variant text-base leading-relaxed font-inter font-medium opacity-90">
                  <p>
                    Dr. Vikas Yadav founded the Clinical Sanctuary with a singular mission: to redefine the medical experience. Holding an MBBS from PGIMS Rohtak and an MS in General Surgery from Maharaja Agrasen Medical College, he sought to create a space where clinical rigor meets emotional intelligence.
                  </p>
                  <p>
                     His pursuit of advanced surgical techniques led him to earn a Fellowship in Minimal Access Surgery (FNB) from Max Super Speciality Hospital, Saket, New Delhi.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-12 rounded-[2.5rem] shadow-ambient border-b-4 border-secondary/20 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 h-full flex flex-col justify-between opacity-5 group-hover:opacity-10 transition-opacity">
                   <div className="w-px h-full bg-primary mx-auto"></div>
                </div>
                <span className="material-symbols-outlined text-secondary text-5xl mb-10" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <blockquote className="text-2xl font-manrope font-extrabold text-primary italic leading-snug mb-10">
                  "Medicine is not just the science of curing bodies; it is the art of restoring lives. Our sanctuary is built on the pillars of transparency, empathy, and unrelenting excellence."
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-secondary/5 flex items-center justify-center border border-secondary/10">
                    <span className="material-symbols-outlined text-secondary text-3xl">signature</span>
                  </div>
                  <div className="font-manrope">
                    <p className="font-black text-primary text-xl">Dr. Vikash Yadav</p>
                    <p className="text-xs font-bold text-on-surface-variant uppercase mt-1">Founder & Lead Practitioner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-manrope font-extrabold text-primary mb-6 uppercase">Expertise and Credentials</h2>
            <p className="text-on-surface-variant text-base font-inter font-medium leading-relaxed">A lifetime of dedication to medical advancement and patient safety across international boundaries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-auto md:h-[600px] font-manrope">
            {/* Main Stat Card */}
            <div className="md:col-span-2 md:row-span-2 bg-primary text-white p-12 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-primary/20">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-5xl mb-8">history_edu</span>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight uppercase">15+ Years of Dedicated Practice</h3>
                <p className="text-primary-fixed/70 text-base leading-relaxed font-inter font-medium">
                  Extensive experience in laparoscopic and robotic surgeries across prestigious hospitals in Delhi NCR. Fluent in English and Hindi.
                </p>
              </div>
              <div className="text-[12rem] font-black text-white/5 absolute -bottom-10 -right-10 select-none pointer-events-none">15Y</div>
            </div>

            {/* Top Education Card */}
            <div className="md:col-span-2 bg-surface-container-high p-10 rounded-[2rem] flex items-center gap-8 border border-white/20 group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="h-20 w-20 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-4xl">school</span>
              </div>
              <div>
                <h4 className="font-extrabold text-primary text-2xl uppercase">MBBS & MS Surgery</h4>
                <p className="text-on-surface-variant font-inter font-bold mt-1">PGIMS Rohtak & Maharaja Agrasen Medical College</p>
              </div>
            </div>

            {/* Bottom Left Fellowship */}
            <div className="bg-secondary text-white p-8 rounded-[2rem] flex flex-col justify-center text-center shadow-lg shadow-secondary/10 group hover:-translate-y-2 transition-all">
              <span className="material-symbols-outlined text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <p className="font-black text-xl uppercase">FNB Minimal Access</p>
              <p className="text-secondary-fixed/50 text-[10px] font-bold uppercase mt-2">Max Super Speciality Hospital, Saket</p>
            </div>

            {/* Bottom Right Board Certified */}
            <div className="bg-white p-8 rounded-[2rem] border border-outline-variant/20 flex flex-col justify-center text-center shadow-sm group hover:-translate-y-2 transition-all">
              <span className="material-symbols-outlined text-5xl mb-4 text-secondary">verified</span>
              <p className="font-black text-xl text-primary uppercase">APHS & IAGES Member</p>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase mt-2">Asia Pacific Hernia Society</p>
            </div>
          </div>
        </section>

        {/* Philosophy of Care */}
        <section className="bg-white py-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-surface-container-low/50 -skew-x-12 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-manrope font-extrabold text-primary mb-16 uppercase">Philosophy & Expertise</h2>
              <div className="space-y-16">
                <div className="flex gap-10 group">
                  <div className="shrink-0 h-16 w-16 bg-secondary-container rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md">
                    <span className="material-symbols-outlined text-on-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-manrope font-extrabold text-primary mb-4 uppercase">Advanced Care</h3>
                    <p className="text-on-surface-variant leading-relaxed text-base font-inter font-medium opacity-90">
                      Specializing in Laparoscopic, Bariatric, Robotic, and Laser surgeries with a focused, patient-centered approach.
                    </p>
                  </div>
                </div>
                <div className="flex gap-10 group">
                  <div className="shrink-0 h-16 w-16 bg-primary-fixed rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md">
                    <span className="material-symbols-outlined text-on-primary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-manrope font-extrabold text-primary mb-4 uppercase">Talks & Publications</h3>
                    <p className="text-on-surface-variant leading-relaxed text-base font-inter font-medium opacity-90">
                      Author of numerous research articles and textbook chapters on laparoscopic, endoscopic, and robotic surgery.
                    </p>
                  </div>
                </div>
                <div className="flex gap-10 group">
                  <div className="shrink-0 h-16 w-16 bg-tertiary-fixed rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md">
                    <span className="material-symbols-outlined text-on-tertiary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-manrope font-extrabold text-primary mb-4 uppercase">Holistic Integrity</h3>
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
        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="bg-gradient-to-br from-primary via-primary-container to-primary-container p-16 md:p-24 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20 group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-700"></div>
            <h2 className="text-3xl md:text-5xl font-manrope font-extrabold mb-8 relative z-10 uppercase leading-tight">Start Your Journey at the Sanctuary</h2>
            <p className="text-base text-primary-fixed/80 mb-12 max-w-2xl mx-auto relative z-10 font-inter font-medium">Experience the perfect balance of medical expertise and restorative care. Appointments are limited to ensure personalized attention.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
              <Link 
                href="/booking"
                className="bg-white text-primary px-12 py-5 rounded-2xl font-manrope font-black text-sm uppercase hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-950/20"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-manrope font-black text-sm uppercase hover:bg-white/10 transition-all"
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
