import Link from "next/link";

const patients = [
  {
    name: "Arjun Sharma",
    email: "arjun.sharma@email.com",
    id: "#PS-90210",
    ageGender: "42 / Male",
    lastVisit: "Oct 24, 2023",
    status: "Active",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjhI1ZQrH1lwASHpXCwykX9fGqUaMg9Dj8Fhz-fkLoVIyv0CWNf9iJoU-qQn160RadL6kGP0z6Pvj7wrQC1mZDw2hpgLRFEnoOeAR6N9mSrOMU_0e8oB_CMlEAAn_LbGe7zDC8s0VKIursBw9kAtTwvrh3RBrUpvXV4vbnW0YFDGE2CvT-7P3eUebz8Tjb_2TUDv6wB9FXhTKXM1FLZ9PchO9p27KdxTM7_oSFciobb4GS_5OvT8J4p6pLiQA95VxUcHk2_e-NuQ",
    color: "bg-primary-fixed",
  },
  {
    name: "Priya Patel",
    email: "priya.p@email.com",
    id: "#PS-88432",
    ageGender: "29 / Female",
    lastVisit: "Nov 12, 2023",
    status: "Active",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPK2QJMdM0JpCL1cSiewjWD6_0HXCiF7CCC8KBbNZwv0qfe2KYfRr7o-gih51vHFRAxAazYSXVD35AFeFkZB3G4C6ttpfJE1NRTn9dExOTMFuACGJUqnH3VAWi5_4S04YgqEk9u7veD6nS40ShmHc6fLAduR7ZD1rf4i2mkK7HsaXMDX8649EdqKFeyB1W7ypw_gCMIW9bpisr2PV7Ob8MSo1pwA8MIAJ2mriJokf2V_o9WFTt1CuqxX0BuOAexDniNnEF9hCccA",
    color: "bg-secondary-fixed",
  },
  {
    name: "Vikram Singh",
    email: "v.singh@provider.net",
    id: "#PS-77219",
    ageGender: "68 / Male",
    lastVisit: "Aug 05, 2023",
    status: "Inactive",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3t2nxZ2vmlLtbBxsTofeiOaHE7XLiRrtoTaZ4BN5QTjuotY3Z0Vkh-lSXWBN7bKCFPsHlI5CM9DmVgAmK6RIEkx-LDFtgQO90W_eoyAmonTHqvrECEN7ExQ2E80tMX2Gltf41PuJ22VhZD3f2aUPCeXTnYGcmQAJmXh0mdvHt-9cWOivxsOaeyglOvbRJyEEZcQtun7GxPM75RLzQzkHlO5-po2DPUCWAAKBvQdunazQD7nDqpK-n5-MHnkDGY0PBW1BTINKQTQ",
    color: "bg-tertiary-fixed",
  },
  {
    name: "Ananya Rao",
    email: "arao.family@email.com",
    id: "#PS-95561",
    ageGender: "08 / Female",
    lastVisit: "Dec 01, 2023",
    status: "Active",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1p678k9csd090m1883yCD9r4imlo7czpsHrN938yfFKL3NRQOKMMyEKTobJ6Ez4Qh4QM0qwV5R47WWKP-5nJEV7mhctBoSHqib8cVbec5lerp8SHPZCSP_a8qASSKtDmeWX4ck_eNeUT9dkOs4TM-K-wtJ-mGHgKJ71j7c1IPWxdE3UIqYXW5vSJDpAqGcEbxR4ObMI2mI6dhX6bwrDEcZ9GWkZ8ggC92_-ttEKm-KdH_sm8vBBB8PlcsiNcV7AMMf7EKVLzOYg",
    color: "bg-primary-fixed",
  },
];

export default function PatientsDirectory() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-3xl font-manrope font-black text-primary tracking-tight capitalize">Patient Directory</h2>
          <p className="text-on-surface-variant text-sm font-medium mt-2">Managing 1,284 patients in the Clinical Sanctuary.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-secondary transition-colors">search</span>
            <input
              className="pl-12 pr-6 py-4 bg-white border-2 border-transparent focus:border-secondary/20 w-full sm:w-80 transition-all text-sm rounded-xl outline-none shadow-sm"
              placeholder="Search patients..."
              type="text"
            />
          </div>
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-black text-[10px] capitalize tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
            <span className="material-symbols-outlined text-lg">person_add</span>
            Add Patient
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Active Today", val: "42", desc: "Scheduled appointments", icon: "trending_up", color: "text-primary bg-primary/10" },
          { label: "Birthdays", val: "05", desc: "Patients celebrating today", icon: "cake", color: "text-secondary bg-secondary/10" },
          { label: "Follow-ups", val: "12", desc: "Pending laboratory results", icon: "assignment_late", color: "text-error bg-error/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-xl border border-outline-variant/5 shadow-sm group  transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className={`p-4 rounded-xl ${stat.color} group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </span>
              <span className="text-[10px] font-black text-slate-600 capitalize tracking-widest">{stat.label}</span>
            </div>
            <div className="text-2xl font-manrope font-black text-primary tracking-tighter">{stat.val}</div>
            <p className="text-[10px] font-bold text-slate-400 mt-2 capitalize tracking-widest">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Patients List/Table Section */}
      <div className="bg-white rounded-[1rem] overflow-hidden shadow-sm border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Patient Profile</th>
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Case ID</th>
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Age / Gender</th>
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Last Interaction</th>
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Clinical Status</th>
                <th className="px-10 py-8 text-sm font-black capitalize text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {patients.map((patient, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-6">
                      <img className={`w-12 h-12 rounded-2xl ${patient.color} object-cover shadow-sm group-hover:scale-105 transition-transform`} src={patient.img} alt={patient.name} />
                      <div>
                        <div className="font-manrope font-black text-primary text-sm group-hover:text-secondary transition-colors capitalize tracking-tight">{patient.name}</div>
                        <div className="text-[10px] font-bold text-slate-400 capitalize tracking-widest mt-1">{patient.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8 text-[11px] font-black text-slate-400 tracking-widest">{patient.id}</td>
                  <td className="px-10 py-8 text-on-surface-variant font-medium">{patient.ageGender}</td>
                  <td className="px-10 py-8 text-on-surface-variant font-medium">{patient.lastVisit}</td>
                  <td className="px-10 py-8">
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-black capitalize tracking-widest ${patient.status === 'Active' ? 'bg-secondary/10 text-secondary' : 'bg-slate-100 text-slate-400'}`}>
                      <span className={`w-2 h-2 rounded-full ${patient.status === 'Active' ? 'bg-secondary animate-pulse shadow-[0_0_8px_rgba(3,192,192,0.5)]' : 'bg-slate-300'}`}></span>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-10 py-8">
                    <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100">
          <p className="text-[10px] font-black text-slate-400 capitalize tracking-widest">Showing <span className="text-primary">1-10</span> of <span className="text-primary">1,284</span> entries</p>
          <div className="flex gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-slate-50 hover:bg-slate-50 transition-colors text-slate-300">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-xl bg-primary text-white font-black text-sm shadow-lg shadow-primary/20">1</button>
            <button className="w-10 h-10 rounded-xl hover:bg-slate-50 text-slate-400 font-black text-sm">2</button>
            <button className="w-10 h-10 rounded-xl hover:bg-slate-50 text-slate-400 font-black text-sm">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-slate-50 hover:bg-slate-50 transition-colors text-slate-300">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
