import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main className="bg-surface text-on-surface antialiased">
      <Navbar />

      <div className="">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] md:h-screen flex items-center overflow-hidden px-6 md:px-4 bg-gradient-to-br from-[#002B5B] via-[#00478D] to-[#0d9488] text-white pt-32 pb-16 md:py-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-1/4 -left-20 w-72 md:w-96 h-72 md:h-96 bg-secondary rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-72 md:w-96 h-72 md:h-96 bg-primary rounded-full blur-[80px] md:blur-[120px]"></div>
          </div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10 space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] md:text-xs font-bold">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Compassionate Excellence
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] text-white py-4">
                Experience Care <br /><span className="text-secondary-fixed">Beyond Expectations</span>
              </h1>
              <p className="text-base max-w-lg leading-relaxed font-body text-blue-100/90 font-medium">
                Dr. Vikas Yadav is a highly skilled surgeon in Delhi specializing in general and minimal-access surgery at Manipal Hospital, Dwarka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-8 w-full sm:w-auto">
                <Link
                  href="/booking"
                  className="bg-secondary-fixed text-on-secondary-fixed px-10 py-4 rounded-xl font-black shadow-xl shadow-black/20 hover:scale-105 transition-all text-center text-xs"
                >
                  Book Appointment
                </Link>
                <Link
                  href="#services"
                  className="border border-white/30 text-white px-4 py-4 rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all text-center text-xs"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative group mt-10 md:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/20 blur-3xl rounded-full transition-all group-hover:scale-110 opacity-50"></div>
              <div className="relative rounded-[1rem] md:rounded-[1rem] overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                <img
                  alt="Dr. Vikash Yadav"
                  className="w-full h-full object-cover"
                  src="/vikash.webp"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-secondary text-white p-5 md:p-6 rounded-xl shadow-xl border border-white/20 flex gap-4 items-center animate-bounce-slow z-20">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl md:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                </div>
                <div>
                  <div className="text-lg md:text-xl font-black leading-none"><Counter value={15} suffix="k+" /></div>
                  <div className="text-[10px] font-bold opacity-80 mt-1">Patients Treated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Pillars Section */}
        <section className="bg-white py-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="group text-center space-y-2">
                <div className="text-4xl md:text-5xl font-manrope font-black text-primary group-hover:scale-110 transition-transform"><Counter value={15} suffix="+" /></div>
                <div className="text-[10px] font-bold text-secondary">Years Experience</div>
              </div>
              <div className="group text-center space-y-2">
                <div className="text-4xl md:text-5xl font-manrope font-black text-primary group-hover:scale-110 transition-transform"><Counter value={15} suffix="k+" /></div>
                <div className="text-[10px] font-bold text-secondary">Patients Healed</div>
              </div>
              <div className="group text-center space-y-2">
                <div className="text-4xl md:text-5xl font-manrope font-black text-primary group-hover:scale-110 transition-transform">FNB</div>
                <div className="text-[10px] font-bold text-secondary">Certified Expert</div>
              </div>
              <div className="group text-center space-y-2">
                <div className="text-4xl md:text-5xl font-manrope font-black text-primary group-hover:scale-110 transition-transform"><Counter value={4.9} suffix="/5" decimalPlaces={1} /></div>
                <div className="text-[10px] font-bold text-secondary">Patient Rating</div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[1rem] bg-gradient-to-br from-white to-primary/5 border border-primary/10 flex items-start gap-6 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined font-light">verified_user</span>
                </div>
                <div>
                  <h4 className="font-manrope font-extrabold text-primary text-sm">Accredited Excellence</h4>
                  <p className="text-xs text-on-surface-variant mt-2 font-medium opacity-70">Fellowship-trained surgeon representing Manipal Hospitals.</p>
                </div>
              </div>
              <div className="p-8 rounded-[1rem] bg-gradient-to-br from-white to-secondary/5 border border-secondary/10 flex items-start gap-6 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined font-light">precision_manufacturing</span>
                </div>
                <div>
                  <h4 className="font-manrope font-extrabold text-primary text-sm">Precision Tech</h4>
                  <p className="text-xs text-on-surface-variant mt-2 font-medium opacity-70">Utilizing advanced Robotic and Laser surgical systems.</p>
                </div>
              </div>
              <div className="p-8 rounded-[1rem] bg-gradient-to-br from-white to-clinical-teal/5 border border-clinical-teal/10 flex items-start gap-6 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-clinical-teal shadow-sm group-hover:bg-clinical-teal group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined font-light">home_health</span>
                </div>
                <div>
                  <h4 className="font-manrope font-extrabold text-primary text-sm">Compassionate Ease</h4>
                  <p className="text-xs text-on-surface-variant mt-2 font-medium opacity-70">Patient-centered care focusing on rapid, painless recovery.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20 bg-slate-50/50 relative overflow-hidden" id="services">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-4 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-secondary"></div>
                  <span className="text-secondary font-manrope font-black text-[10px]">Medical Excellence</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-manrope font-black text-primary leading-none">Clinical <br />Specializations</h2>
              </div>
              <p className="text-on-surface-variant font-medium text-base max-w-sm opacity-70 leading-relaxed">
                Manipal Hospital's leading-edge surgical solutions, refined over 15 years of dedicated minimal-access practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 space-y-6">
              {/* Card 1: Laparoscopic */}
              <div className="group relative bg-white rounded-[1rem] md:rounded-[1rem] p-8 md:p-10 pt-20 shadow-xl shadow-blue-900/5 hover:shadow-xl transition-all duration-700">
                <div className="absolute -top-8 md:-top-10 left-8 md:left-10 w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center text-white shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-3xl md:text-4xl">stethoscope</span>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl md:text-xl font-manrope font-black text-slate-900 whitespace-pre-line">Laparoscopic{"\n"}Surgery</h3>
                  <div className="w-10 h-1 bg-secondary rounded-full"></div>
                  <p className="text-[13px] md:text-sm text-slate-500 leading-relaxed font-inter font-medium">Advanced procedures for Gall Bladder, Appendix, and Hernia with specialized rapid recovery protocols.</p>
                  <Link
                    href="/services"
                    className="flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 text-primary font-manrope font-black text-[10px] hover:bg-primary hover:text-white transition-all"
                  >
                    View Specializations
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </Link>
                </div>
              </div>

              {/* Card 2: Robotic & Bariatric */}
              <div className="group relative bg-white rounded-[1rem] md:rounded-[1rem] p-8 md:p-10 pt-20 shadow-xl shadow-teal-900/5 hover:shadow-xl transition-all duration-700">
                <div className="absolute -top-8 md:-top-10 left-8 md:left-10 w-20 h-20 md:w-24 md:h-24 bg-secondary rounded-full flex items-center justify-center text-white shadow-xl shadow-secondary/40 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-3xl md:text-4xl">robot_2</span>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl md:text-xl font-manrope font-black text-slate-900 whitespace-pre-line">Robotic &{"\n"}Bariatric</h3>
                  <div className="w-10 h-1 bg-primary rounded-full"></div>
                  <p className="text-[13px] md:text-sm text-slate-500 leading-relaxed font-inter font-medium">Precision robotic-assisted surgeries and transformative weight-loss solutions for long-term health.</p>
                  <Link
                    href="/services"
                    className="flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 text-secondary font-manrope font-black text-[10px] hover:bg-secondary hover:text-white transition-all"
                  >
                    Explore Technology
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </Link>
                </div>
              </div>

              {/* Card 3: Laser & Proctology */}
              <div className="group relative bg-white rounded-[1rem] md:rounded-[1rem] p-8 md:p-10 pt-20 shadow-xl shadow-emerald-900/5 hover:shadow-xl transition-all duration-700">
                <div className="absolute -top-8 md:-top-10 left-8 md:left-10 w-20 h-20 md:w-24 md:h-24 bg-clinical-teal rounded-full flex items-center justify-center text-white shadow-xl shadow-teal-900/40 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-3xl md:text-4xl">health_and_safety</span>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl md:text-xl font-manrope font-black text-slate-900 whitespace-pre-line">Laser &{"\n"}Proctology</h3>
                  <div className="w-10 h-1 bg-clinical-teal/30 rounded-full"></div>
                  <p className="text-[13px] md:text-sm text-slate-500 leading-relaxed font-inter font-medium">Specialized laser treatments for Piles, Fissure, and Fistula with a focus on minimal surgical impact.</p>
                  <Link
                    href="/services"
                    className="flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 text-clinical-teal font-manrope font-black text-[10px] hover:bg-clinical-teal hover:text-white transition-all"
                  >
                    See Procedures
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-20 bg-clinical-mint relative overflow-hidden" id="about">
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/5 rounded-full blur-[60px] md:blur-[100px] -mr-32 md:-mr-64 -mt-32 md:-mt-64"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-square bg-white p-3 md:p-4 rounded-[1rem] md:rounded-[3rem] shadow-xl relative overflow-hidden max-w-md mx-auto lg:mx-0">
                  <img
                    alt="Dr. Yadav in consultation"
                    className="w-full h-full object-cover rounded-[1rem] md:rounded-[3.5rem]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwWjabVjMR6xHa8M1cjCUd8R5Yr_zAZW5Qc-ZIQHhOjukL3YXxpR7w9OSvm260hdGRNdJ8nJIw1sbO9qjwOOjzMynd88Xhf4IhAaKY66olNJGfrSESCXfZ99q6dcyjC_9UENfa0Sg8-XVIHLrDIqHnmTAiVLdMprwTXSF8tsAl0dvmU6RGmTG1UZcGv0js2OKWv6D9Ifr06RB3OpOdeICye3ZdJwN4INBUwwaThbsADYvEbPn_5PAQJGSxSVcnE-AwMB_5sQamsg"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 w-32 md:w-48 h-32 md:h-48 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <span className="text-secondary font-black text-[10px] px-3 py-1 bg-secondary/10 rounded-lg">Practitioner Vision</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">A Journey Rooted <br />in Empathy</h2>
                </div>
                <div className="space-y-4 text-on-surface-variant text-base leading-relaxed font-medium">
                  <p>Dr. Vikas Yadav established the Clinical Sanctuary to bridge the gap between clinical excellence and human warmth.</p>
                  <p>As a senior surgeon at Manipal Hospital, Dwarka, he utilizes the latest diagnostic technologies while maintaining a peaceful, reassuring environment.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 py-8 border-y border-secondary/10">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-secondary">Education</div>
                    <div className="text-on-surface font-extrabold font-manrope text-sm">MBBS, PGIMS Rohtak | MS Surgery</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-secondary">Fellowship</div>
                    <div className="text-on-surface font-extrabold font-manrope text-sm">FNB Minimal Access, Max Saket</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Journey Section */}
        <section className="py-20 bg-surface relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="mb-20 space-y-4">
              <span className="text-secondary font-manrope font-black text-[10px]">Restorative Process</span>
              <h2 className="text-3xl md:text-5xl font-manrope font-black text-primary leading-none">Your Path <br />to Healing</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Detailed discussion of your symptoms and physiological history.", icon: "forum" },
                { step: "02", title: "Diagnosis", desc: "Precision scanning and evidence-based assessment of the condition.", icon: "biotech" },
                { step: "03", title: "Treatment", desc: "Advanced surgical intervention using minimal-access techniques.", icon: "healing" },
                { step: "04", title: "Recovery", desc: "Focused post-operative care and rapid re-integration tracking.", icon: "vitals" },
              ].map((item, idx) => (
                <div key={idx} className="relative group p-10 rounded-[1rem] bg-white shadow-ambient hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-50">
                  <div className="text-slate-100 font-manrope font-black text-7xl absolute top-4 right-8 group-hover:text-primary/5 transition-colors">{item.step}</div>
                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <span className="material-symbols-outlined font-light text-3xl">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-manrope font-black text-slate-900">{item.title}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed font-medium opacity-70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12 bg-[#00478D] relative overflow-hidden" id="reviews">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary to-secondary opacity-90"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <span className="text-secondary-fixed font-bold text-sm">Patient Testimonials</span>
              <h2 className="text-xl md:text-4xl font-bold text-white">Voices of Trust</h2>
              <p className="text-blue-100 text-base max-w-lg mx-auto opacity-90 font-medium">Real experiences from patients who found their path to health at our sanctuary.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[1rem] border border-white/20 hover:bg-white/15 transition-all flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="flex gap-1 text-secondary-fixed mb-6 group-hover:scale-110 transition-transform origin-left">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-base text-white italic font-medium leading-relaxed mb-8">"Dr. Yadav didn't just look at my symptoms; he looked at my life. His approach is truly holistic and deeply reassuring."</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full p-1 bg-gradient-to-br from-secondary-fixed to-primary-fixed">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        alt="Patient Sarah"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2mQjUp_qZia3MSKcnZkcXvbpB7303GwI3CE5HcK-1ZUPxgXV7zzACJbU1-eOXO_Ja5nDdMJAbhpEnzJeobQchSOAra64hfg0RgUAFlwnjaE6aBQjD5WJ0DxoMaG-PORq8MOjt5vMPg4IDsIG1Ia1h0CQA8BTn8qTlLBFL0Jqs4Y97nNMeGRB7ENVtDf3_0UqkNZhWy3hHf6lkwu9zlQ_ALg_tNW2h5busmix4SJDpc76QmEmS9BnSIwwXCVO_ZZoUXyqOZoDajg"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white">Sarah Jenkins</div>
                    <div className="text-xs text-blue-200">Tech Executive</div>
                  </div>
                </div>
              </div>
              {/* Review 2 */}
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[1rem] border border-white/20 hover:bg-white/15 transition-all flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="flex gap-1 text-secondary-fixed mb-6 group-hover:scale-110 transition-transform origin-left">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-base text-white italic font-medium leading-relaxed mb-8">"The clinic itself is a sanctuary. I've never felt so relaxed in a medical environment. Excellent diagnostic speed."</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full p-1 bg-gradient-to-br from-secondary-fixed to-primary-fixed">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        alt="Patient David"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2X3jjjExQFGk08oiZXIkU_wKtrtQSgWKBGgVWKxoSC26agXyZQAbHcb_lAebVoqSnhNm1q5s54FgX2famoNC8kWnGqI4m3n_BMitR2XnHUgVF0TJAgkYInbyqsDfIhOz4Ii0Q5MqqHUqopQU4BYuQqIucpEJwB6HReok3J0b_g3-HMDrn-ccB0mLhIO-886oe50MMit2B65EIVvIqnziXFruTAVl-2NTcB7sYckZgGADWnkwmSFsYlDiMUxyJJR3NIja3WzmnwA"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white">David Chen</div>
                    <div className="text-xs text-blue-200">Retired Professor</div>
                  </div>
                </div>
              </div>
              {/* Review 3 */}
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[1rem] border border-white/20 hover:bg-white/15 transition-all flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="flex gap-1 text-secondary-fixed mb-6 group-hover:scale-110 transition-transform origin-left">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                  </div>
                  <p className="text-base text-white italic font-medium leading-relaxed mb-8">"Finally a doctor who listens to your concerns without rushing. Highly recommend the preventative care track."</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full p-1 bg-gradient-to-br from-secondary-fixed to-primary-fixed">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        alt="Patient Elena"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBODJXLgIa_WUxJ-7Fb4tCyO76tPxU4elOkoNo9-JyaqzWm_48gExclHulwkMuMYNrwNPpMxgkjp3AW8UC6RiTebHUywr6yMoscYsQNCTPlkyaBs8lwG3tZ6clLyLUwWMMzxFB_yrRrjqEy6ZyMLIM6D9FqZQKIVSEaJNGR7bF7i2RTBytMbKh5c1GHCsvnpn6XyyXIqPo91ftL-7_ik_805Z6jId_QZJWEw9qrP1ug2Ej95W-uDNu1Xtw_mPOVb8cAr1H1NeAKWg"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white">Elena Rodriguez</div>
                    <div className="text-xs text-blue-200">Marketing Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Affiliation Section */}
        <section className="py-20 bg-surface-container-low/30 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-base">emergency</span>
                  <span className="text-secondary font-manrope font-black text-[10px]">Strategic Affiliation</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-manrope font-black text-primary leading-none">Manipal Hospital, Dwarka</h2>
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed font-inter opacity-70">
                  Providing advanced surgical care in one of Delhi's most prestigious healthcare facilities. Access 24/7 emergency support, ICU coordination, and high-end diagnostic suites for a comprehensive recovery journey.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <span className="material-symbols-outlined font-light">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary">Location</p>
                    <p className="text-[10px] font-bold text-slate-400">Sector 6 Adjoining MTNL Bldg, Dwarka, New Delhi</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className=" rounded-[1rem] overflow-hidden  relative z-10 border-8 border-white">
                  <img
                    className="w-full h-full object-cover transition-all duration-700"
                    src="/manipal-hos.jpg"
                    alt="Manipal Hospital Exterior"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-[1rem] -z-0 opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-6 bg-white px-4">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary via-[#005eb8] to-secondary rounded-[1.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-3xl shadow-blue-900/40">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="relative z-10 space-y-2">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold tracking-widest">Take the first step</div>
              <h2 className="text-xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">Ready to Prioritize <br />Your Wellbeing?</h2>
              <p className="text-blue-50 text-base max-w-xl mx-auto font-body opacity-90 font-medium">Step into the sanctuary. Our booking portal is open for new patient consultations and specialized follow-up care.</p>
              <div className="flex flex-col md:flex-row justify-center gap-6 pt-6">
                <Link
                  href="/booking"
                  className="bg-secondary-fixed text-on-secondary-fixed px-4 py-4 rounded-xl font-black text-base shadow-xl hover:scale-105 hover:brightness-110 transition-all active:scale-95 text-center"
                >
                  Schedule Appointment
                </Link>
                <Link
                  href="#"
                  className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-4 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-all text-center"
                >
                  Contact Office
                </Link>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
