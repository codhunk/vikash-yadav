import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const expertiseAreas = [
  { title: "Laparoscopic Gall Bladder Surgery", desc: "Precision removal with minimal scarring and rapid recovery protocols." },
  { title: "Laparoscopic Appendix Surgery", desc: "Emergency and elective appendectomy through minimal-access techniques." },
  { title: "Laparoscopic Hernia Surgery", desc: "Expert repair of inguinal, umbilical, and incisional hernias." },
  { title: "Laparoscopic Anti-reflux Surgery", desc: "Advanced solutions for Hiatus Hernia and chronic GERD conditions." },
  { title: "Minimal Invasive Proctology", desc: "Painless surgery for Piles, Fissure, Fistula, and Pilonidal Sinus." },
  { title: "Bariatric Surgery", desc: "Transformative weight-loss procedures for sustainable health outcomes." },
  { title: "Robotic Surgery", desc: "State-of-the-art robotic-assisted precision for complex surgical cases." },
  { title: "Laser Surgery", desc: "Ultra-precise laser treatments for vascular and proctological conditions." },
];

const publications = [
  {
    title: "Ileal Trichobezoar Presenting as Intestinal Obstruction and Peritonitis",
    journal: "APSP J Case Rep. 2017",
    authors: "Rattan KN, Yadav V, Yadav V, Singh J.",
    cite: "APSP J Case Rep. 2017 Mar 18;8(2):11. doi: 10.21699/ajcr.v8i2.549. PMID: 28401038; PMCID: PMC5371684."
  },
  {
    title: "Epidemiology and Pattern of Spinal Cord Injury",
    journal: "Int J Med Res Prof. 2017",
    authors: "Bansal SK, Yadav V, Singh V, Goyal PK, Singal G, Singh Y.",
    cite: "Int J Med Res Prof. 2017; 3(2):405-09. DOI:10.21276/ijmrp.2017.3.2.084"
  }
];

export default function ExpertisePage() {
  return (
    <main className="bg-surface text-on-surface antialiased min-h-screen selection:bg-secondary-container">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-7/12 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/5 rounded-full border border-secondary/10">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(3,192,192,0.5)]"></span>
                <span className="text-[10px] font-manrope font-black text-secondary tracking-[0.2em] uppercase">Surgical Mastery</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-manrope font-black text-primary uppercase leading-tight tracking-tight">
                Fields of <br /> <span className="text-secondary italic">Excellence</span>
              </h1>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-xl font-inter opacity-80">
                Merging advanced robotic technologies with 15+ years of clinical insight to deliver minimal-impact, maximum-result surgical care. Specialized in Laparoscopic, Bariatric, and Laser modalities.
              </p>
              <div className="flex gap-10 items-center pt-6">
                <div>
                  <div className="text-xs font-black text-primary uppercase tracking-widest mb-1">Languages Spoken</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-400 uppercase">English</span>
                    <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-400 uppercase">Hindi</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] bg-slate-200 rounded-[2.5rem] overflow-hidden translate-y-6 shadow-2xl relative group">
                <img className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="/surgical-mastery.png" alt="Surgeon hands" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <p className="text-white font-manrope font-black text-[10px] uppercase tracking-widest">Precision</p>
                </div>
              </div>
              <div className="aspect-[4/5] bg-secondary rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="/expertise-robotic.png" alt="Robotic Surgery" />
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent">
                  <span className="material-symbols-outlined text-white text-5xl mb-6">robot_2</span>
                  <p className="text-white font-manrope font-black text-xl uppercase leading-tight tracking-tight">Robotic Mastery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/3 pointer-events-none -z-0"></div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, i) => (
              <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-8">
                  <span className="material-symbols-outlined font-light">{i % 2 === 0 ? "stethoscope" : "healing"}</span>
                </div>
                <h3 className="text-lg font-manrope font-black text-primary uppercase leading-tight tracking-tight mb-4">{area.title}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships & Fellowships */}
      <section className="py-24 bg-surface-container-low rounded-[4rem] mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-4">
                <span className="text-secondary font-manrope font-black tracking-[0.2em] uppercase text-[10px]">Academic Authority</span>
                <h2 className="text-3xl md:text-5xl font-manrope font-black text-primary tracking-tight uppercase leading-none">Fellowship <br /> & Global Membership</h2>
                <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
              </div>
              <div className="space-y-8">
                {[
                  { title: "Asia Pacific Hernia Society", role: "Life Member", icon: "public" },
                  { title: "IAGES", role: "Life Member, Indian Association of Gastrointestinal Endo Surgeons", icon: "verified" },
                  { title: "FALS (Robotic)", role: "Fellow in Advanced Laparoscopic Surgery", icon: "workspace_premium" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-manrope font-black text-primary uppercase tracking-tight">{item.title}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 tracking-widest">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl relative z-10 border border-slate-50">
                  <span className="text-[8rem] font-manrope font-black text-slate-50 absolute right-10 top-0 select-none">MS</span>
                  <div className="relative z-10 space-y-10">
                     <div className="space-y-2">
                        <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Education Track</p>
                        <h4 className="text-2xl font-manrope font-black text-primary uppercase">MBBS & MS Surgery</h4>
                        <p className="text-xs font-bold text-slate-400 uppercase leading-relaxed font-manrope">Post Graduate Institute of Medical Sciences, Rohtak | Maharaja Agrasen Medical College</p>
                     </div>
                     <div className="space-y-2">
                        <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Specialized Training</p>
                        <h4 className="text-2xl font-manrope font-black text-primary uppercase">FNB Minimal Access</h4>
                        <p className="text-xs font-bold text-slate-400 uppercase leading-relaxed font-manrope">Fellowship from Max Super Speciality Hospital, Saket, New Delhi</p>
                     </div>
                  </div>
               </div>
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24 space-y-4">
             <span className="text-primary font-manrope font-black tracking-[0.2em] uppercase text-[10px]">Academic Contributions</span>
             <h2 className="text-3xl md:text-5xl font-manrope font-black text-primary tracking-tight uppercase">Talks & Publications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {publications.map((bib, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-slate-100 flex flex-col justify-between">
                <div>
                   <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-4 block underline underline-offset-4 decoration-2">{bib.journal}</span>
                   <h3 className="text-xl font-manrope font-black text-primary uppercase tracking-tight mb-4 leading-tight">{bib.title}</h3>
                   <p className="text-xs text-slate-400 font-bold uppercase mb-6">{bib.authors}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 italic text-[10px] text-slate-400 font-medium font-inter">
                   {bib.cite}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 p-10 bg-primary rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
             <div className="relative z-10 text-center md:text-left">
                <h4 className="text-white font-manrope font-black text-xl uppercase tracking-tight mb-2">Technical Contributions</h4>
                <p className="text-primary-fixed/60 font-manrope font-bold text-[10px] uppercase tracking-widest">Co-author of chapters on Laparoscopic, Endoscopic & Robotic Surgery in leading medical textbooks.</p>
             </div>
             <button className="relative z-10 mt-6 md:mt-0 px-8 py-4 bg-white text-primary rounded-xl font-manrope font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-950/20">Download CV</button>
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-white/20"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
