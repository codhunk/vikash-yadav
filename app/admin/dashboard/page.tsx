import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header Inside Dashboard */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-primary font-manrope capitalize">Welcome, Dr. Yadav</h1>
          <p className="text-on-surface-variant text-sm font-medium">Monitoring the sanctuary's surgical flow today.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-3 bg-white rounded-xl shadow-sm text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-black text-primary capitalize">Dr. Vikash Yadav</p>
              <p className="text-[10px] text-secondary font-bold capitalize">Chief Surgeon</p>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-8 rounded-[1rem] shadow-sm border border-outline-variant/5 group hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">event_available</span>
            </div>
            <span className="text-secondary font-bold text-[10px] capitalize bg-secondary/10 px-3 py-1 rounded-full">Today</span>
          </div>
          <h3 className="text-on-surface-variant text-xs font-bold capitalize mb-1">Total Appointments</h3>
          <p className="text-3xl font-manrope font-black text-primary ">12</p>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-[1rem] shadow-sm border border-outline-variant/5 group hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-secondary/10 text-secondary rounded-2xl group-hover:bg-secondary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <span className="text-secondary font-bold text-[10px] capitalize bg-secondary/10 px-3 py-1 rounded-full">+14%</span>
          </div>
          <h3 className="text-on-surface-variant text-xs font-bold capitalize mb-1">New Patients</h3>
          <p className="text-3xl font-manrope font-black text-primary ">28</p>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-[1rem] shadow-sm border border-outline-variant/5 group hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-error/10 text-error rounded-2xl group-hover:bg-error group-hover:text-white transition-all">
              <span className="material-symbols-outlined">assignment_late</span>
            </div>
            <span className="text-error font-bold text-[10px] capitalize bg-error/10 px-3 py-1 rounded-full">Urgent</span>
          </div>
          <h3 className="text-on-surface-variant text-xs font-bold capitalize mb-1">Pending Surgery</h3>
          <p className="text-3xl font-manrope font-black text-primary ">05</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-manrope font-black text-primary capitalize">Upcoming Appointments</h3>
              <button className="text-[10px] font-bold text-secondary capitalize hover:text-primary transition-colors">View All Calendar</button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Arjun Mehta", time: "09:30 AM", type: "Consultation", tag: "General Checkup", initial: "AM" },
                { name: "Sanya Kapoor", time: "11:00 AM", type: "Follow-up", tag: "Post-Surgery", initial: "SK" },
                { name: "Rohan Verma", time: "02:30 PM", type: "New Patient", tag: "Diagnostics", initial: "RV" },
              ].map((apt, i) => (
                <div key={i} className="group bg-white p-6 rounded-3xl flex items-center justify-between transition-all border border-transparent">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center font-black text-primary font-manrope text-lg group-hover:bg-primary group-hover:text-white transition-all">
                      {apt.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-sm">{apt.name}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] font-bold text-secondary capitalize flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">schedule</span> {apt.time}
                        </span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                        <span className="text-[10px] font-bold text-slate-400 capitalize">{apt.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block px-4 py-2 bg-slate-50 text-[10px] font-black rounded-xl text-slate-500 capitalize border border-slate-100">{apt.tag}</span>
                    <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined">expand_content</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-8">
              <h3 className="text-xl font-manrope font-black text-primary capitalize">Clinical Quick Actions</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <button className="flex items-center gap-6 p-4 bg-white rounded-[2rem] transition-all border border-slate-50 group text-left">
                <div className="w-16 h-16 rounded-[1.5rem] bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl font-light">add_circle</span>
                </div>
                <div>
                  <p className="font-manrope font-black text-primary capitalize text-sm">New Appointment</p>
                  <p className="text-[10px] text-slate-400 font-bold capitalize mt-1">Schedule patient visit</p>
                </div>
              </button>
              <button className="flex items-center gap-6 p-4 bg-white rounded-[2rem] transition-all border border-slate-50 group text-left">
                <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl font-light">edit_calendar</span>
                </div>
                <div>
                  <p className="font-manrope font-black text-primary capitalize text-sm">Manage Hours</p>
                  <p className="text-[10px] text-slate-400 font-bold capitalize mt-1">Update clinical schedule</p>
                </div>
              </button>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-manrope font-black text-primary capitalize">Recent Patients</h3>
              <button className="text-[10px] font-bold text-secondary capitalize hover:text-primary transition-colors">Directory</button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "Meera Gupta", added: "2 hrs ago", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL1RqTTdV0VS6NN7xHyPAZG_7_qJASQqoASE6JWFDkTiKECnnLDteWrZEy6wfrDl7tOTALrtGfcs6JC-gd4__EN2Qq1HeeowF3WPJ-omr01Ebjb06KfiSp4-_m71FhDVnI1ZKlogoBuAblO_U5rCytSk0dOdhD1Ju99LVsTXDTFsRoibXc_tJEcid39uW-K5og60PGo1U3u-xKfPX8n1x_6ZO2LTBQof5HVHUkjUW9bOK4JKQDDBJZ6oelphBkQkcMnx22-lzgHA" },
                { name: "Vikram Sethi", added: "5 hrs ago", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHNHv1wBUd6xgf9gJg9ZLFrD3M_eA4zkmdERKY7ZUQSR7WNNwOsRigj1sf4XxqA-OJ7H6kEwacdEYlnhj1gOMOf4IU3dnrGPHxlZ1bU0e8u1MAUoButYweGkXFUIF63pObgJcv3zOaPEiUFUDha5M_IUIUR91QPMGVil_OD-mXCCkb0uBWcdPKHV8TADnVXRtRCl4J3-lN6qJJtMNsS54LGya-zynr3idzp7odz_5Q6cyg4Lo_Bbs8LZvt_lxGC3LATZNXWMPZGQ" },
              ].map((patient, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 flex items-center gap-4 group hover:shadow-sm transition-all">
                  <img alt="Patient Avatar" className="w-14 h-14 rounded-2xl object-cover transition-all" src={patient.img} />
                  <div className="flex-1">
                    <h4 className="font-bold text-primary text-sm">{patient.name}</h4>
                    <p className="text-[9px] text-slate-400 font-bold capitalize mt-1">Added {patient.added}</p>
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-secondary/10 to-transparent p-8 rounded-[2rem] border border-secondary/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h4 className="font-manrope font-black text-secondary text-sm mb-6 capitalize">Operational Pulse</h4>
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-secondary rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm font-black text-primary capitalize">3 Active Consultations</span>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-2/3"></div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-black text-slate-400 capitalize">
                <span>Capacity Utilized</span>
                <span className="text-secondary">65%</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
