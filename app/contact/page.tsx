import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-surface text-on-surface antialiased min-h-screen selection:bg-secondary-container">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/5 rounded-full border border-secondary/10">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(3,192,192,0.5)]"></span>
              <span className="text-[10px] font-manrope font-black text-secondary tracking-[0.2em] uppercase">Connect to Sanctuary</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-manrope font-black text-primary uppercase leading-tight tracking-tight">
               How can we <br /> <span className="text-secondary italic">Help you?</span>
            </h1>
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-xl font-inter opacity-80">
              Step into the Clinical Sanctuary. For surgical consultations, emergency coordinates, or facility inquiries at Manipal Hospital, Dwarka, please utilize the channels below.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/3 pointer-events-none -z-0"></div>
      </section>

      {/* Contact Channels */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {/* General Inquiry */}
             <div className="p-10 rounded-[3.5rem] bg-slate-50 border border-slate-100 space-y-10 group hover:bg-white hover:shadow-2xl transition-all duration-700">
                <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                   <span className="material-symbols-outlined text-3xl font-light">mail</span>
                </div>
                <div className="space-y-4">
                   <h3 className="text-xl font-manrope font-black text-primary uppercase tracking-tight">General Inquiry</h3>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Response within 24 hours for non-surgical inquiries and partnership requests.</p>
                </div>
                <Link href="mailto:info@drvikasyadav.com" className="block text-sm font-manrope font-black text-primary underline underline-offset-8 decoration-secondary transition-all hover:translate-x-2">dr.vikas@manipal.com</Link>
             </div>

             {/* Clinical Support */}
             <div className="p-10 rounded-[3.5rem] bg-primary rounded-br-none space-y-10 shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-700 group relative overflow-hidden">
                <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-white relative z-10">
                   <span className="material-symbols-outlined text-3xl font-light">headset_mic</span>
                </div>
                <div className="space-y-4 relative z-10">
                   <h3 className="text-xl font-manrope font-black text-white uppercase tracking-tight">Clinical Support</h3>
                   <p className="text-[10px] font-bold text-blue-100/50 uppercase tracking-widest leading-relaxed">Immediate clinical guidance and post-operative recovery tracking.</p>
                </div>
                <Link href="tel:+919876543210" className="block text-2xl font-manrope font-black text-white relative z-10 transition-all hover:translate-x-2 select-all tracking-tighter leading-none">+91 999 999 9999</Link>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
             </div>

             {/* Emergency Facility */}
             <div className="p-10 rounded-[3.5rem] bg-secondary rounded-bl-none space-y-10 shadow-2xl shadow-secondary/20 hover:scale-105 transition-all duration-700 group relative overflow-hidden">
                <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-white relative z-10">
                   <span className="material-symbols-outlined text-3xl font-light">emergency</span>
                </div>
                <div className="space-y-4 relative z-10">
                   <h3 className="text-xl font-manrope font-black text-white uppercase tracking-tight">24/7 ER Coordinator</h3>
                   <p className="text-[10px] font-bold text-teal-50 uppercase tracking-widest leading-relaxed">Direct line to Manipal Hospital emergency surgical triage.</p>
                </div>
                <Link href="tel:+919876500000" className="block text-2xl font-manrope font-black text-white relative z-10 transition-all hover:translate-x-2 select-all tracking-tighter leading-none">+91 999 999 0000</Link>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -ml-16 -mb-16"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Map & Social Section */}
      <section className="py-24 bg-surface-container-low rounded-[4rem] mx-4 md:mx-8">
         <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-20 items-center">
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
                     className="px-10 py-5 bg-white text-primary rounded-[2rem] font-manrope font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-900/5 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 block md:inline-block text-center"
                  >
                     Get Directions
                  </Link>
               </div>
            </div>
            <div className="flex-1 w-full relative">
               <div className="aspect-square bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white group">
                  <img 
                     className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                     src="/clinic-sanctuary.png" 
                     alt="Clinic Location Map Placeholder"
                  />
                  <div className="absolute inset-0 bg-primary/20 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-20 h-20 rounded-full bg-white text-secondary flex items-center justify-center shadow-2xl animate-bounce-slow">
                        <span className="material-symbols-outlined text-4xl">location_on</span>
                     </div>
                  </div>
               </div>
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-60"></div>
            </div>
         </div>
      </section>

      {/* Social and Branding */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-8 text-center space-y-10">
            <h4 className="text-3xl font-manrope font-black text-primary tracking-tight uppercase">Follow the Sanctuary</h4>
            <div className="flex justify-center gap-10">
               {["twitter", "facebook", "linkedin", "instagram"].map(social => (
                  <Link key={social} href="#" className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:rotate-12 transition-all">
                     <span className="material-symbols-outlined text-3xl font-light">share</span>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
