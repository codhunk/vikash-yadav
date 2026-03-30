import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Services() {
  return (
    <main className="bg-surface font-inter text-on-surface selection:bg-secondary-container antialiased">
      <Navbar />
      
      <div className="pb-10">
        {/* Hero Section */}
        <section className="relative px-8 pt-24 min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 overflow-hidden">
          <div className="flex-1 space-y-6 z-10">
            <h1 className="font-manrope font-extrabold text-3xl md:text-5xl leading-tight tracking-tighter text-primary uppercase">
              Clinical <br/> <span className="text-secondary">Specializations</span>
            </h1>
            <p className="text-on-surface-variant text-base max-w-xl leading-relaxed font-medium">
              Manipal Hospital, Dwarka, New Delhi. Specialized in advanced Laparoscopic, Bariatric, and Robotic surgeries with a patient-centered approach.
            </p>
            <div className="flex items-center gap-4">
              <span className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT7FFcOZdT5L7kZ5n_kCyBGGD3z4nurFPzV9MPFTbZUm08fMb6zJS83kREjXBSACsqLecc5zXSbuFIs7rVfGtomkE1VXSfQU5Oae8NB0daqYg1l0oySTdu88WXAE0ta7Ur_MBiCe4T4kCCZYuDZj93HqEk76NfaQOeHt6oOIjcX7NQfIMAEgBsvKVCNwisXXrO27A0yeSKCRJwQehnlXg-PhzoLRLw5ClRoLJUXzhESLltU71jVPkrkAtcXyxxSUDN_EvNdr1O-A" alt="Doctor 1" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2VJzGEBlBVTMqPceTth-BD7kVY4bUAhaII7l3o3zG-BkF8_2KVSpMJwJ1lZNAY85pdNPezAeM9tcZ2iQyoXpb9vfc3O3H9b7_MElUcAFbcB9mOMnIO_Uxm5ZSjkC0zJVaBZsTwN55lOhbRk0xdAfhvyCMt0oIyXXZ8gSjcKibj0cuRPMkLACKNf3MvjSvRX2bjnEgkXG1V7KO7n5q2ge3woKNKMxVJoYwkTkPJzU1J1FTRgEm7fqVPGqZwfQPTFOIK-deR7w1lg" alt="Doctor 2" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjAYAllP7XrC3BAHxB8cdsjMYCgOeQKjiQJivf2MM38oxAq75f35b4IKK_jpR4WRsp_W1zXn3Tj16pgCn4C57EFAswl7twQGQShfXiIQtROEYkIG0WG6NYAN699wOwcncHFJBEe7Pb-0lkKlkLvlIbkcj4rMhNEvRf9EIyGnzkcEJdSeYWEptPIno1OexWfLzMvf95b71g4CDqP2STXz19Rf8zsxp4WJzwJVCDWu0-6UWVaAA79BV96US-JGC-IAKrZDzUEacVNw" alt="Doctor 3" />
              </span>
              <span className="text-sm font-medium text-on-surface-variant italic">Trusted by over 5,000+ patients annually.</span>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                alt="Clinic Interior" 
                className="w-full h-[500px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz1l2-GZvjcW58Bl7phFneTX6LTpB3CZESaw0PulVUXncDm4oEVR7Qa2a6_YGSc1LzwjPH0tbNEPVKORwLOqOcUAOzgebyclVvuvg1ZbAWZbhZKXaw4obciSIfuEAFAb-et5_a0gTERufH49hcUfSivpVwPG4lJLd1m4F9UF_RX2NKr3HjivGeLzrJVNl9AQif-ZNYFtGVkaDZ7Pp_0zt-DEmOK5EoA9a-802UySVxIUORI5VmDJHt8fvJlsITwTl5DZD0jKuAXg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Bento Grid Services Section */}
        <section className="max-w-7xl mx-auto px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Laparoscopic Surgery */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 hover:bg-surface-container transition-all duration-300 border-none shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                    <span className="material-symbols-outlined text-3xl">medical_services</span>
                  </div>
                  <h3 className="text-2xl font-manrope font-bold text-primary">Laparoscopic Surgeries</h3>
                  <p className="text-on-surface-variant leading-relaxed font-medium">Expert procedures for Gall Bladder, Appendix, Hernia, and Anti-reflux (GERD/Hiatus Hernia). Advanced techniques for faster recovery and minimal scarring.</p>
                  <Link href="/booking" className="inline-flex items-center text-secondary font-bold group-hover:gap-3 transition-all">
                    Book Consultation <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDau-j3JEhyc8kjSffZh0N2pMoMaDNXyHPW1RwBkm5NCjcihBgJ71l2EJBrMEn42IDOfPiR1m6g-bjA6LwETGLZjrptMbPsEP-4mVyfyl-u4Fn16v_kX7a3037ZCphdS_uA9LSj5Rf0P4lPxcJBmGcwAIWAVNxCtVT2GH5O2jp7lKANssYh-PlQdW9E1Oxkf8F98XR98bcKoCCOAZJJs5X28VtsfWj_7FHG3mBBKFSq9eCB_YyiSkodAYS3hJO92GgmTQIpKEZklg"
                    alt="Laparoscopic Surgery"
                  />
                </div>
              </div>
            </div>

            {/* Bariatric & Robotic */}
            <div className="md:col-span-4 bg-primary text-on-primary rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl transition-shadow border-none shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                  <span className="material-symbols-outlined text-2xl text-on-primary">robot</span>
                </div>
                <h3 className="text-2xl font-manrope font-bold uppercase tracking-tight leading-none">Robotic & Bariatric</h3>
                <p className="text-on-primary/80 text-sm font-medium">Precision robotic-assisted surgeries and weight-loss (Bariatric) solutions for sustainable wellness.</p>
              </div>
              <Link href="/booking" className="mt-8 text-on-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Consult Expert <span className="material-symbols-outlined text-sm">north_east</span>
              </Link>
            </div>

            {/* Minimal Invasive */}
            <div className="md:col-span-4 bg-white border border-outline-variant/20 rounded-3xl p-8 space-y-4 hover:shadow-lg transition-all border-b-4 border-b-secondary shadow-sm">
              <div className="text-secondary">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
              </div>
              <h3 className="text-xl font-manrope font-bold text-primary uppercase">Proctology</h3>
              <p className="text-on-surface-variant text-sm font-medium leading-relaxed">Laser and Minimally Invasive surgery for Piles, Fissure, Fistula, and Pilonidal sinus.</p>
              <Link href="/booking" className="pt-4 block text-secondary font-black text-[10px] uppercase tracking-[0.2em] hover:text-primary transition-colors">Book Laser Surgery</Link>
            </div>

            {/* Tele-Consultation */}
            <div className="md:col-span-4 bg-white/70 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center space-y-4 shadow-sm border border-white group">
              <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-3xl flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">videocam</span>
              </div>
              <h3 className="text-xl font-manrope font-bold text-primary uppercase tracking-tighter">Digital Clinic</h3>
              <p className="text-on-surface-variant text-sm font-medium">Expert surgical advice and post-op follow-ups in English and Hindi via secure video calls.</p>
              <button className="bg-secondary text-white px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest mt-2 hover:bg-primary transition-all shadow-md">Start Video Visit</button>
            </div>

            {/* Fellowships */}
            <div className="md:col-span-4 bg-surface-container-high rounded-3xl p-8 group overflow-hidden relative border-none shadow-sm">
              <div className="relative z-10 space-y-4">
                <span className="material-symbols-outlined text-3xl text-primary">workspace_premium</span>
                <h3 className="text-xl font-manrope font-bold text-primary uppercase">Fellowships</h3>
                <p className="text-on-surface-variant text-sm font-bold leading-relaxed">Life Member of APHS & IAGES. FALS (Robotic) certified expert.</p>
                <Link href="/about" className="inline-flex items-center text-primary font-black text-[10px] uppercase tracking-widest hover:text-secondary transition-colors">View Credentials</Link>
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">award_star</span>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="md:col-span-12 bg-surface-container-lowest rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between border-l-8 border-l-error shadow-sm">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-error-container flex items-center justify-center text-error">
                  <span className="material-symbols-outlined text-4xl">emergency</span>
                </div>
                <div>
                  <h3 className="text-2xl font-manrope font-bold text-on-surface">Emergency Support</h3>
                  <p className="text-on-surface-variant max-w-md">Immediate critical care coordination and 24/7 urgent medical assistance for our registered patients.</p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex flex-col items-end">
                <span className="text-error font-bold text-xl font-manrope">012-345-6789</span>
                <span className="text-on-surface-variant text-xs uppercase tracking-widest">Available 24/7 for Emergencies</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <div className="bg-gradient-to-br from-secondary to-on-secondary-container rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-on-primary font-manrope font-extrabold text-3xl md:text-5xl max-w-3xl mx-auto leading-tight uppercase tracking-tight">Ready to prioritize your long-term health?</h2>
              <p className="text-on-primary/80 text-base max-w-xl mx-auto font-medium">Schedule a comprehensive initial assessment today. We take the time to listen, evaluate, and heal.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="bg-white text-secondary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-surface-bright transition-colors text-center"
                >
                  Book Now
                </Link>
                <Link
                  href="#"
                  className="bg-transparent border-2 border-white/40 text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:border-white transition-all text-center"
                >
                  Contact Clinic
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
