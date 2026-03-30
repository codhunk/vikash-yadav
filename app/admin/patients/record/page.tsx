import Link from "next/link";

const PatientRecord = () => {
  return (
    <main className="md:ml-64 min-h-screen bg-surface font-inter text-on-surface antialiased">
      {/* Sidebar - Replicated from HTML */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full p-4 bg-slate-50 dark:bg-slate-950 w-64 z-40 border-r border-slate-200 dark:border-slate-800">
        <div className="mb-8 px-2">
          <h2 className="text-lg font-bold text-blue-900 dark:text-blue-100 font-manrope">Admin Portal</h2>
          <p className="text-xs font-medium text-slate-500 uppercase font-inter">Clinical Sanctuary</p>
        </div>
        <div className="flex flex-col space-y-1 flex-1">
          <Link href="/admin/dashboard" className="flex items-center space-x-3 px-3 py-2 text-slate-500 hover:bg-slate-200/50 transition-all rounded-lg group">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium text-sm">Dashboard</span>
          </Link>
          <Link href="/admin/appointments" className="flex items-center space-x-3 px-3 py-2 text-slate-500 hover:bg-slate-200/50 transition-all rounded-lg group">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="font-medium text-sm">Appointments</span>
          </Link>
          <Link href="/admin/patients" className="flex items-center space-x-3 px-3 py-2 bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 rounded-lg shadow-sm font-semibold translate-x-1">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
            <span className="font-medium text-sm">Patients</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center space-x-3 px-3 py-2 text-slate-500 hover:bg-slate-200/50 transition-all rounded-lg group">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-medium text-sm">Settings</span>
          </Link>
        </div>
        <button className="mt-4 mb-8 bg-secondary text-on-secondary px-4 py-3 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-sm hover:opacity-90 transition-all">
          <span className="material-symbols-outlined">add</span>
          <span>New Appointment</span>
        </button>
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <Link href="/" className="flex items-center space-x-3 px-3 py-2 text-slate-500 hover:text-error transition-all">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium text-sm">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Header Section */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md px-8 py-6 flex justify-between items-center shadow-sm">
        <div>
          <nav className="flex items-center space-x-2 text-sm text-on-surface-variant mb-1">
            <span>Patients</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary font-semibold">Record Details</span>
          </nav>
          <h1 className="text-2xl font-extrabold text-primary font-manrope uppercase">Patient Clinical View</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined">print</span>
          </button>
          <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold text-sm shadow-md hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">edit</span>
            Edit Record
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="px-8 pb-12 space-y-8 mt-8">
        {/* Profile Header */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 flex items-start gap-8">
            <div className="relative">
              <img 
                alt="Patient Avatar" 
                className="w-32 h-32 rounded-2xl object-cover shadow-inner bg-surface-container-low" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATDt4qDyHsGqGuHK6oGOTA6JHbwrrSjIDpB0FqprqityKHvXJgqH3WQn6iinn82XbcMI0UO_rkJZPY0U6x4KTomUpgkV0Pb1P4xvT3fIWEHiloplWJL5_aNqx_8l3IfEolySOh_9tXJJdOpMsd2uRq1sEz79rCZG1wZUCZXdS3-IG51KE8TUvM5LAzTkfrVaL1ZaKnSgfmC5xSlHFeM8N3eKnVyHL76VjfVM456-S4zUAEKitVifovJuTVZPfhrsuYYOjN9qgMNA"
              />
              <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-1.5 rounded-full border-4 border-white">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-black text-primary mb-1 font-manrope">Eleanor Fitzwilliam</h2>
                  <p className="text-on-surface-variant font-medium flex items-center gap-2 font-inter text-sm">
                    <span className="material-symbols-outlined text-base">fingerprint</span>
                    ID: PX-99201-B
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">Active Patient</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="space-y-1">
                  <p className="text-xs uppercase text-on-surface-variant font-bold">Age / Gender</p>
                  <p className="text-lg font-semibold">68 yrs / Female</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase text-on-surface-variant font-bold">Blood Group</p>
                  <p className="text-lg font-semibold text-error">O Positive</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase text-on-surface-variant font-bold">Primary Physician</p>
                  <p className="text-lg font-semibold text-primary">Dr. Vikash Yadav</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-primary text-on-primary p-8 rounded-xl shadow-sm flex flex-col justify-between">
            <h3 className="text-xs uppercase font-black opacity-70">Contact Information</h3>
            <div className="space-y-4 my-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs opacity-70">Mobile</p>
                  <p className="font-bold">+1 (555) 012-3456</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs opacity-70">Email Address</p>
                  <p className="font-bold">e.fitzwilliam@email.com</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs opacity-70 mb-1 uppercase">Emergency Contact</p>
              <p className="font-bold">Thomas Fitzwilliam (Son)</p>
              <p className="text-sm opacity-90">+1 (555) 098-7654</p>
            </div>
          </div>
        </section>

        {/* History & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface-container-low rounded-xl p-6 border-b-2 border-primary/5">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-manrope">
                  <span className="material-symbols-outlined">history</span>
                  Medical History
                </h3>
                <button className="text-secondary hover:underline text-xs font-bold font-inter">View All</button>
              </div>
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="p-4 bg-surface-container-lowest rounded-lg border-l-4 border-error shadow-sm">
                  <p className="text-xs font-bold text-error uppercase mb-1">Severe Allergy</p>
                  <p className="font-bold text-sm">Penicillin</p>
                  <p className="text-xs text-on-surface-variant">Anaphylactic response noted in 2012.</p>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-lg border-l-4 border-secondary shadow-sm">
                  <p className="text-xs font-bold text-secondary uppercase mb-1">Chronic Condition</p>
                  <p className="font-bold text-sm">Hypertension</p>
                  <p className="text-xs text-on-surface-variant">Managed via Lisinopril 10mg.</p>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-lg border-l-4 border-primary shadow-sm">
                  <p className="text-xs font-bold text-primary uppercase mb-1">Past Surgery</p>
                  <p className="font-bold text-sm">Hip Replacement</p>
                  <p className="text-xs text-on-surface-variant">Left hip - Oct 2019. Full recovery.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2 font-manrope">
                <span className="material-symbols-outlined">description</span>
                Recent Documents
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer group border border-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-red-50 text-red-600 flex items-center justify-center">
                      <span className="material-symbols-outlined">picture_as_pdf</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Blood Work Report</p>
                      <p className="text-xs text-on-surface-variant">Mar 12, 2024</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">download</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant font-bold text-sm hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-base">upload_file</span>
                Upload New Report
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm h-full border border-outline-variant/10">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2 font-manrope">
                  <span className="material-symbols-outlined">timeline</span>
                  Consultation Journey
                </h3>
                <div className="flex bg-surface-container-low p-1 rounded-lg">
                  <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-white shadow-sm text-primary">Timeline View</button>
                  <button className="px-4 py-1.5 text-xs font-bold rounded-md text-on-surface-variant hover:text-on-surface">List View</button>
                </div>
              </div>
              
              <div className="relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-high">
                {/* Timeline Entry */}
                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-secondary ring-4 ring-secondary-container flex items-center justify-center z-10">
                    <span className="material-symbols-outlined text-[14px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>event</span>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 p-4">
                      <span className="bg-secondary text-white text-[10px] font-black px-2 py-1 rounded uppercase font-inter">Upcoming</span>
                    </div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-xs font-bold text-secondary uppercase mb-1">Follow-up Appointment</p>
                        <h4 className="text-xl font-bold font-manrope">General Physical Examination</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black text-primary font-manrope">April 15</p>
                        <p className="text-xs text-on-surface-variant">09:30 AM (ET)</p>
                      </div>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-4">Annual check-up focusing on cardiovascular health and adjustment of Lisinopril dosage if required.</p>
                  </div>
                </div>
                
                <div className="relative opacity-80">
                  <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-primary ring-4 ring-primary-container/20 flex items-center justify-center z-10">
                    <span className="material-symbols-outlined text-[14px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="p-6 rounded-xl border border-outline-variant/30 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Lab Results Review</p>
                        <h4 className="text-lg font-bold font-manrope">Tele-Consultation</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-bold text-on-surface">March 15</p>
                        <p className="text-xs text-on-surface-variant">Completed</p>
                      </div>
                    </div>
                    <p className="text-sm text-on-surface-variant italic">"Patient reported mild fatigue. Lab results showed normal ranges for glucose but slight elevation in LDL."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center bg-white border-t border-slate-200 dark:border-slate-800 mt-12 bg-slate-50/20">
        <div className="mb-6 md:mb-0">
          <p className="font-manrope font-black text-blue-900 uppercase text-lg">Dr. Vikash Yadav</p>
          <p className="font-inter text-[10px] uppercase text-slate-400 mt-1">© 2024 Dr. Vikash Yadav. The Clinical Sanctuary.</p>
        </div>
        <div className="flex space-x-8 font-inter text-xs uppercase text-slate-400">
          <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Contact Us</Link>
        </div>
      </footer>
    </main>
  );
};

export default PatientRecord;
