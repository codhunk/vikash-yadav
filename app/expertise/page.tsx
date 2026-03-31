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
      <section className="relative py-28 bg-gradient-to-br from-[#002B5B] via-[#00478D] to-[#0d9488] text-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/3 pointer-events-none z-0"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-7/12 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse shadow-[0_0_8px_rgba(147,242,242,0.8)]"></span>
                <span className="text-sm font-black text-secondary-fixed uppercase tracking-wider">Surgical Mastery</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight">
                Fields of <br /> <span className="text-secondary-fixed italic">Excellence</span>
              </h1>
              <p className="text-sm md:text-base text-blue-100 font-medium leading-relaxed max-w-xl font-inter opacity-80">
                Merging advanced robotic technologies with 15+ years of clinical insight to deliver minimal-impact, maximum-result surgical care. Specialized in Laparoscopic, Bariatric, and Laser modalities.
              </p>
              <div className="flex gap-10 items-center pt-6">
                <div>
                  <div className="text-sm font-black text-secondary-fixed uppercase mb-2">Languages Spoken</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-sm font-bold text-white/80">English</span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-sm font-bold text-white/80">Hindi</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] bg-white/10 rounded-[2rem] overflow-hidden translate-y-6 shadow-2xl relative group border border-white/20">
                <img className="w-full h-full object-cover brightness-110 group-hover:scale-105 transition-all duration-700" src="/surgical-mastery.png" alt="Surgeon hands" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-black text-sm uppercase">Precision</p>
                </div>
              </div>
              <div className="aspect-[4/5] bg-secondary-fixed/20 rounded-[2rem] overflow-hidden shadow-2xl relative group border border-white/20">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" src="/expertise-robotic.png" alt="Robotic Surgery" />
                <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <span className="material-symbols-outlined text-white text-5xl mb-6">robot_2</span>
                  <p className="text-white font-black text-xl uppercase leading-tight">Robotic Mastery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, i) => (
              <div key={i} className="group p-4 rounded-[1rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-8">
                  <span className="material-symbols-outlined font-light">{i % 2 === 0 ? "stethoscope" : "healing"}</span>
                </div>
                <h3 className="text-lg font-black text-primary captilize leading-tight mb-4">{area.title}</h3>
                <p className="text-sm font-bold text-slate-400 captilize leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships & Fellowships */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-clinical-sky/30 rounded-[3rem] mx-6 md:mx-8 shadow-inner shadow-slate-100/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-4">
                <span className="text-secondary font-black uppercase text-sm">Academic Authority</span>
                <h2 className="text-3xl md:text-5xl font-black text-primary uppercase leading-tight">Fellowship <br /> & Global Membership</h2>
                <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
              </div>
              <div className="space-y-8">
                {[
                  { title: "Asia Pacific Hernia Society", role: "Life Member", icon: "public" },
                  { title: "IAGES", role: "Life Member, Indian Association of Gastrointestinal Endo Surgeons", icon: "verified" },
                  { title: "FALS (Robotic)", role: "Fellow in Advanced Laparoscopic Surgery", icon: "workspace_premium" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-primary uppercase tracking-tight">{item.title}</h4>
                      <p className="text-sm font-bold text-slate-400 captilize mt-1">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-white/70 backdrop-blur-md p-4 md:p-12 rounded-[1rem] shadow-3xl shadow-slate-200/50 relative z-10 border border-white">
                <span className="text-[12rem] font-black text-slate-100/30 absolute right-10 top-0 select-none -z-0">MS</span>
                <div className="relative z-10 space-y-8">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-secondary/10 rounded-lg text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-2">Education Track</div>
                    <h4 className="text-2xl md:text-3xl font-black text-primary uppercase leading-tight">MBBS & MS Surgery</h4>
                    <p className="text-sm font-bold text-slate-400 captilize leading-relaxed">Post Graduate Institute of Medical Sciences, Rohtak | Maharaja Agrasen Medical College</p>
                  </div>
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-lg text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Specialized Training</div>
                    <h4 className="text-2xl md:text-3xl font-black text-primary uppercase leading-tight">FNB Minimal Access</h4>
                    <p className="text-sm font-bold text-slate-400 captilize leading-relaxed">Fellowship from Max Super Speciality Hospital, Saket, New Delhi</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-black captilize text-sm">Academic Contributions</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary captilize">Talks & Publications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {publications.map((bib, i) => (
              <div key={i} className="p-6 rounded-[1rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-black text-secondary captilize mb-4 block underline underline-offset-4 decoration-2">{bib.journal}</span>
                  <h3 className="text-xl font-black text-primary captilize mb-4 ">{bib.title}</h3>
                  <p className="text-sm text-slate-400 font-bold captilize mb-6">{bib.authors}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 italic text-sm text-slate-500 font-medium ">
                  {bib.cite}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 p-6 bg-primary rounded-[1rem] flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-white font-black text-xl captilize mb-2">Technical Contributions</h4>
              <p className="text-primary-fixed/60 font-bold text-[12px] captilize ">Co-author of chapters on Laparoscopic, Endoscopic & Robotic Surgery in leading medical textbooks.</p>
            </div>
            <button className="relative z-10 mt-6 md:mt-0 px-4 py-4 bg-white text-primary rounded-xl font-black text-[14px] captilize hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-950/20">Download CV</button>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-white/20"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
