import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
   return (
      <main className="bg-surface text-on-surface antialiased min-h-screen selection:bg-secondary-container">
         <Navbar />

         {/* Hero Section */}
         <section className="relative py-32 bg-gradient-to-br from-[#001B3D] via-[#002B5B] to-[#001B3D] text-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none z-0"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
               <div className="max-w-3xl space-y-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                     <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse shadow-[0_0_8px_rgba(147,242,242,0.8)]"></span>
                     <span className="text-[10px] font-manrope font-black text-secondary-fixed tracking-[0.2em] uppercase">Connect to Sanctuary</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-manrope font-black text-white uppercase leading-tight tracking-[0.02em]">
                     How can we <br /> <span className="text-secondary-fixed italic">Help you?</span>
                  </h1>
                  <p className="text-sm md:text-base text-blue-100/80 font-medium leading-relaxed max-w-xl font-inter">
                     Step into the Clinical Sanctuary. For surgical consultations, emergency coordinates, or facility inquiries at Manipal Hospital, Dwarka, please utilize the channels below.
                  </p>
               </div>
            </div>
         </section>

         {/* Contact Channels */}
         <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {/* General Inquiry */}
                  <div className="p-6 rounded-[1rem] bg-slate-50 border border-slate-100 space-y-10 group hover:bg-white hover:shadow-2xl transition-all duration-700">
                     <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                        <span className="material-symbols-outlined text-3xl font-light">mail</span>
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-xl font-manrope font-black text-primary uppercase tracking-tight">General Inquiry</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Response within 24 hours for non-surgical inquiries and partnership requests.</p>
                     </div>
                     <Link href="mailto:vikash.yadav@manipalhospitals.com" className="block text-sm font-manrope font-black text-primary underline underline-offset-8 decoration-secondary transition-all hover:translate-x-2">vikash.yadav@manipalhospitals.com</Link>
                  </div>

                  {/* Clinical Support */}
                  <div className="p-6 rounded-[1rem] bg-primary rounded-br-none space-y-10 shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-700 group relative overflow-hidden">
                     <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-white relative z-10">
                        <span className="material-symbols-outlined text-3xl font-light">headset_mic</span>
                     </div>
                     <div className="space-y-4 relative z-10">
                        <h3 className="text-xl font-manrope font-black text-white uppercase tracking-tight">Clinical Support</h3>
                        <p className="text-[10px] font-bold text-blue-100/50 uppercase tracking-widest leading-relaxed">Immediate clinical guidance and post-operative recovery tracking.</p>
                     </div>
                     <Link href="tel:+918708255349" className="block text-2xl font-manrope font-black text-white relative z-10 transition-all hover:translate-x-2 select-all tracking-tighter leading-none">+91 8708255349</Link>
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  </div>

                  {/* Emergency Facility */}
                  <div className="p-6 rounded-[1rem] bg-secondary rounded-bl-none space-y-10 shadow-2xl shadow-secondary/20 hover:scale-105 transition-all duration-700 group relative overflow-hidden">
                     <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-white relative z-10">
                        <span className="material-symbols-outlined text-3xl font-light">emergency</span>
                     </div>
                     <div className="space-y-4 relative z-10">
                        <h3 className="text-xl font-manrope font-black text-white uppercase tracking-tight">24/7 ER Coordinator</h3>
                        <p className="text-[10px] font-bold text-teal-50 uppercase tracking-widest leading-relaxed">Direct line to Manipal Hospital emergency surgical triage.</p>
                     </div>
                     <Link href="tel:+918708255349" className="block text-2xl font-manrope font-black text-white relative z-10 transition-all hover:translate-x-2 select-all tracking-tighter leading-none">+91 8708255349</Link>
                     <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -ml-16 -mb-16"></div>
                  </div>
               </div>
            </div>
         </section>

         {/* Map & Social Section */}
         <section className="py-12 bg-surface-container-low rounded-[1rem] mx-4 md:mx-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-20 items-center">
               <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                     <span className="text-primary font-manrope font-black tracking-[0.2em] uppercase text-[10px]">Manipal Hospital</span>
                     <h2 className="text-3xl md:text-5xl font-manrope font-black text-primary tracking-tight uppercase leading-none">Sector 6, Dwarka</h2>
                     <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
                  </div>
                  <div className="space-y-4 text-sm text-slate-500 font-manrope font-bold leading-relaxed uppercase pr-10">
                     Sector 6 Adjoining MTNL Bldg, Dwarka, New Delhi, Delhi 110075
                  </div>
                  <div className="pt-6">
                     <Link
                        href="/booking"
                        className="px-10 py-5 bg-white text-primary rounded-[1rem] font-manrope font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-900/5 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 block md:inline-block text-center"
                     >
                        Get Directions
                     </Link>
                  </div>
               </div>
               <div className="flex-1 w-full relative">
                  <div className="h-[500px] bg-slate-300 rounded-[1rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white group">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56049.393750083815!2d77.0674824!3d28.597163449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1774947666982!5m2!1sen!2sin"
                        className="w-full h-full border-0 transition-all duration-700"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                     />
                     <div className="absolute inset-0 bg-primary/5 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-red-500 backdrop-blur-sm text-white flex items-center justify-center shadow-2xl animate-bounce-slow">
                           <span className="material-symbols-outlined text-4xl">location_on</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-60"></div>
               </div>
            </div>
         </section>

         {/* Social and Branding */}
         <section className="py-10 bg-surface-container-lowest relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10 space-y-12">
               <div className="space-y-4">
                  <span className="text-secondary font-black text-xs tracking-[0.3em] uppercase">Stay Connected</span>
                  <h4 className="text-3xl md:text-5xl font-black text-primary uppercase">Follow the <span className="text-secondary italic">Sanctuary</span></h4>
                  <p className="text-on-surface-variant text-sm font-medium max-w-xl mx-auto opacity-70">Join our growing digital community for the latest in surgical innovations, patient success stories, and wellness insights.</p>
               </div>
               <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  {[
                     { name: "Twitter", icon: "public", handle: "@DrVikashYadav", color: "hover:bg-[#1DA1F2]" },
                     { name: "Facebook", icon: "facebook", handle: "/vikashyadav.md", color: "hover:bg-[#4267B2]" },
                     { name: "LinkedIn", icon: "school", handle: "/in/drvikashyadav", color: "hover:bg-[#0077B5]" },
                     { name: "Instagram", icon: "camera", handle: "@clinical_sanctuary", color: "hover:bg-[#E4405F]" }
                  ].map((social, i) => (
                     <Link
                        key={social.name}
                        href="#"
                        className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 ${social.color} hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2`}
                     >
                        <span className="material-symbols-outlined text-3xl font-light group-hover:scale-110 transition-transform duration-500 text-primary">{social.icon}</span>

                        {/* Hover Tooltip/Handle */}
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 whitespace-nowrap shadow-xl">
                           <p className="text-[10px] font-black text-white uppercase tracking-widest">{social.handle}</p>
                           <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </section>

         <Footer />
      </main>
   );
}
