import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Services() {
  return (
    <main className="bg-surface font-inter text-on-surface selection:bg-secondary-container antialiased">
      <Navbar />

      <div className="pb-10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#002B5B] via-[#00478D] to-[#0d9488] min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none z-0"></div>
          <div className="absolute -bottom-32 -left-32 w-128 h-128 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse shadow-[0_0_8px_rgba(147,242,242,0.8)]"></span>
                  <span className="text-[10px] font-manrope font-black text-secondary-fixed uppercase tracking-[0.2em]">Medical Excellence</span>
                </div>
                <h1 className="font-manrope font-black text-3xl md:text-5xl leading-[1.1] text-white uppercase tracking-tight">
                  Clinical <br /> <span className="text-secondary-fixed italic">Specializations</span>
                </h1>
                <p className="text-blue-100/80 text-base md:text-lg max-w-xl leading-relaxed font-medium font-inter">
                  Advancing the standard of surgical care at Manipal Hospital, Dwarka. Specialized in minimal-access techniques that prioritize rapid recovery and precision.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <img key={i} className="w-10 h-10 rounded-full border-2 border-[#002B5B] object-cover" src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Patient" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-blue-100/60 italic">5,000+ Success Stories</span>
                  </div>
                  <div className="h-10 w-px bg-white/20 hidden sm:block"></div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-2xl">verified</span>
                    <span className="text-xs font-black text-white uppercase tracking-widest">FNB Certified</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/40 to-primary/40 blur-3xl rounded-[1.5rem] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative rounded-[1.5rem] overflow-hidden shadow-3xl shadow-black/50 border-4 border-white/10 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    alt="Clinic Interior"
                    className="w-full h-[500px] object-cover transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz1l2-GZvjcW58Bl7phFneTX6LTpB3CZESaw0PulVUXncDm4oEVR7Qa2a6_YGSc1LzwjPH0tbNEPVKORwLOqOcUAOzgebyclVvuvg1ZbAWZbhZKXaw4obciSIfuEAFAb-et5_a0gTERufH49hcUfSivpVwPG4lJLd1m4F9UF_RX2NKr3HjivGeLzrJVNl9AQif-ZNYFtGVkaDZ7Pp_0zt-DEmOK5EoA9a-802UySVxIUORI5VmDJHt8fvJlsITwTl5DZD0jKuAXg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/10">
                    <p className="text-white font-black text-xs uppercase tracking-widest mb-1">State-of-the-art facility</p>
                    <p className="text-blue-100/70 text-[10px] font-medium leading-relaxed font-inter">Manipal Hospital Dwarka features high-definition robotic suites and dedicated laparoscopic care units.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Services Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Laparoscopic Surgery */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-xl p-4 hover:bg-white hover:shadow-3xl hover:shadow-blue-900/5 transition-all duration-500 border border-transparent hover:border-slate-100">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-secondary shadow-xl shadow-slate-200/50">
                    <span className="material-symbols-outlined text-4xl">medical_services</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-manrope font-black text-primary uppercase leading-tight">Laparoscopic <br />Surgeries</h3>
                  <p className="text-on-surface-variant leading-relaxed font-medium font-inter opacity-80">Expert procedures for Gall Bladder, Appendix, Hernia, and Anti-reflux (GERD/Hiatus Hernia). Advanced techniques for faster recovery and minimal scarring.</p>
                  <Link href="/booking" className="inline-flex items-center text-secondary font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Book Consultation <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="w-full md:w-80 h-64 rounded-xl overflow-hidden shadow-inner bg-slate-100 relative group">
                  <img
                    className="w-full h-full object-cover transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDau-j3JEhyc8kjSffZh0N2pMoMaDNXyHPW1RwBkm5NCjcihBgJ71l2EJBrMEn42IDOfPiR1m6g-bjA6LwETGLZjrptMbPsEP-4mVyfyl-u4Fn16v_kX7a3037ZCphdS_uA9LSj5Rf0P4lPxcJBmGcwAIWAVNxCtVT2GH5O2jp7lKANssYh-PlQdW9E1Oxkf8F98XR98bcKoCCOAZJJs5X28VtsfWj_7FHG3mBBKFSq9eCB_YyiSkodAYS3hJO92GgmTQIpKEZklg"
                    alt="Laparoscopic Surgery"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>

            {/* Bariatric & Robotic */}
            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-4 flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                  <span className="material-symbols-outlined text-3xl text-on-primary">robot</span>
                </div>
                <h3 className="text-2xl font-manrope font-black uppercase tracking-tight leading-none italic">Robotic & <br />Bariatric</h3>
                <p className="text-on-primary/70 text-sm font-medium font-inter leading-relaxed">Precision robotic-assisted surgeries and weight-loss (Bariatric) solutions for sustainable wellness.</p>
              </div>
              <Link href="/booking" className="mt-12 text-on-primary font-black text-xs uppercase tracking-widest flex items-center gap-3 group-hover:translate-x-3 transition-transform relative z-10">
                Consult Expert <span className="material-symbols-outlined text-sm">north_east</span>
              </Link>
            </div>

            {/* Minimal Invasive */}
            <div className="md:col-span-4 bg-white border border-slate-100 rounded-xl p-4 space-y-6 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 border-b-4 border-b-secondary shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
              </div>
              <h3 className="text-xl font-manrope font-black text-primary uppercase">Proctology</h3>
              <p className="text-on-surface-variant text-sm font-medium leading-relaxed font-inter opacity-70">Laser and Minimally Invasive surgery for Piles, Fissure, Fistula, and Pilonidal sinus.</p>
              <Link href="/booking" className="pt-4 block text-secondary font-black text-[10px] uppercase tracking-[0.2em] hover:text-primary transition-colors">Book Laser Surgery</Link>
            </div>

            {/* Tele-Consultation */}
            <div className="md:col-span-4 bg-white/70 backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center space-y-6 shadow-sm border border-white group hover:bg-white transition-all duration-500">
              <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform shadow-lg shadow-secondary/10">
                <span className="material-symbols-outlined text-4xl">videocam</span>
              </div>
              <h3 className="text-xl font-manrope font-black text-primary uppercase tracking-widest">Digital Clinic</h3>
              <p className="text-on-surface-variant text-sm font-medium leading-relaxed font-inter opacity-70">Expert surgical advice and post-op follow-ups in English and Hindi via secure video calls.</p>
              <button className="bg-secondary text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest mt-2 hover:bg-primary animate-zoom-in-out transition-all shadow-xl shadow-secondary/20">Start Video Visit</button>
            </div>

            {/* Fellowships */}
            <div className="md:col-span-4 bg-surface-container-high rounded-xl p-4 group overflow-hidden relative border-none shadow-sm hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                </div>
                <h3 className="text-xl font-manrope font-black text-primary uppercase">Fellowships</h3>
                <p className="text-on-surface-variant text-sm font-bold leading-relaxed font-inter opacity-70">Life Member of APHS & IAGES. FALS (Robotic) certified expert at Max Hospital Saket.</p>
                <Link href="/about" className="inline-flex items-center text-primary font-black text-[10px] uppercase tracking-widest hover:text-secondary transition-colors">View Credentials</Link>
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[150px]">award_star</span>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="md:col-span-12 bg-gradient-to-r from-red-50 to-white rounded-xl p-4 flex flex-col md:flex-row items-center justify-between border-l-8 border-l-error shadow-xl shadow-red-900/5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-error-container flex items-center justify-center text-error shadow-lg shadow-red-200/50">
                  <span className="material-symbols-outlined text-4xl">emergency</span>
                </div>
                <div>
                  <h3 className="text-2xl font-manrope font-black text-on-surface uppercase tracking-tight">Emergency Support</h3>
                  <p className="text-on-surface-variant max-w-md font-inter font-medium opacity-70">Immediate critical care coordination and 24/7 urgent medical assistance for our registered patients.</p>
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end">
                <span className="text-error font-black text-3xl font-manrope tracking-tighter">012-345-6789</span>
                <span className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.2em] mt-2 h-6 flex items-center px-4 bg-error/10 rounded-full text-error">Available 24/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* Informative Section: Surgical Precision & Technology */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 space-y-4">
              <span className="text-secondary font-black uppercase text-sm tracking-widest">Technological Edge</span>
              <h2 className="text-3xl md:text-5xl font-manrope font-black text-primary uppercase">Precision Meets <span className="text-secondary italic">Innovation</span></h2>
              <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                {[
                  {
                    title: "Minimal Disruption",
                    desc: "Our laparoscopic approach utilizes 5-10mm ports, resulting in significantly less trauma to the abdominal wall compared to traditional open surgery.",
                    icon: "target"
                  },
                  {
                    title: "Advanced Visualization",
                    desc: "Utilizing 4K Ultra-HD camera systems provides the surgeon with superior depth perception and clarity, enhancing the safety of delicate dissections.",
                    icon: "visibility"
                  },
                  {
                    title: "Robotic Dexterity",
                    desc: "Endowrist technology allows for range of motion exceeding the human hand, enabling precise surgical maneuvers in narrow anatomical spaces.",
                    icon: "precision_manufacturing"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-manrope font-black text-primary uppercase mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm font-medium leading-relaxed font-inter opacity-70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="bg-slate-50 rounded-[1rem] p-10 md:p-14 border border-slate-100 shadow-inner relative z-10 overflow-hidden">
                  <div className="space-y-8 relative z-10">
                    <h3 className="text-2xl font-manrope font-black text-primary uppercase leading-tight italic">Comparison of <br />Surgical Impact</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black text-primary uppercase tracking-widest">
                          <span>Recovery Speed (Laparoscopic)</span>
                          <span>95%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-secondary w-[95%]"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black text-primary uppercase tracking-widest">
                          <span>Pain Level (Laparoscopic)</span>
                          <span>15%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-secondary w-[15%]"></div>
                        </div>
                      </div>
                      <div className="space-y-2 opacity-50">
                        <div className="flex justify-between text-[10px] font-black text-primary uppercase tracking-widest">
                          <span>Post-Op Complications (Open Surgery)</span>
                          <span>40%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[40%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-slate-100 select-none pointer-events-none">FIX</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-[#002B5B] via-[#00478D] to-[#002B5B] rounded-[1rem] p-8 md:p-20 text-center relative overflow-hidden shadow-3xl shadow-blue-950/20">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
            <div className="relative z-10 space-y-10">
              <h2 className="text-white font-manrope font-black text-3xl md:text-6xl max-w-4xl mx-auto leading-tight uppercase tracking-tight">Experience World-Class <br />Surgical <span className="text-secondary-fixed">Sanctuary</span></h2>
              <p className="text-blue-100/70 text-lg max-w-xl mx-auto font-medium font-inter">Schedule a comprehensive initial assessment today. We take the time to listen, evaluate, and heal using the latest global protocols.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/booking"
                  className="bg-white text-primary px-12 py-5 rounded-xl font-black text-sm uppercase shadow-2xl hover:scale-105 active:scale-95 transition-all text-center min-w-[240px]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-xl font-black text-sm uppercase hover:bg-white/10 transition-all text-center min-w-[240px]"
                >
                  Contact Clinic
                </Link>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
