"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Calendar, Users, Settings, LogOut, HeartPulse, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { name: "Appointments", icon: Calendar, href: "/admin/appointments" },
    { name: "Patients", icon: Users, href: "/admin/patients" },
    { name: "Settings", icon: Settings, href: "/admin/settings" },
  ];


  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col md:flex-row font-inter antialiased">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#002B5B] to-[#00478D] backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shadow-lg border border-white/10">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-manrope font-black text-white capitalize text-sm leading-none">Sanctuary</span>
            <span className="font-inter text-[8px] font-black text-secondary capitalize">Admin</span>
          </div>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all shadow-sm active:scale-95 border border-white/10"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Desktop/Mobile Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-[#002B5B] via-[#001F3D] to-[#001229] border-r border-white/5 flex flex-col p-4 transition-transform duration-500 ease-in-out md:sticky md:top-0 md:h-screen md:translate-x-0 shadow-2xl md:shadow-none",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center gap-3 mb-10 px-4 pt-4">
          <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-white shadow-2xl border border-white/10">
            <HeartPulse className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-manrope font-black text-lg leading-none text-white capitalize">Dr. Vikash Yadav</span>
            <span className="font-inter text-[9px] capitalize text-secondary font-black tracking-widest mt-1">Surgical Station</span>
          </div>
        </div>

        <nav className="flex-1 space-y-3 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className={cn(
                "flex items-center gap-4 px-4 py-4 rounded-xl font-bold text-sm transition-all group border border-transparent",
                pathname === item.href
                  ? "bg-secondary text-white shadow-xl shadow-secondary/20 scale-105 border-white/10"
                  : "text-blue-100/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", pathname === item.href ? "text-white" : "text-blue-100/40 group-hover:text-white")} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/10 mt-6 pb-2">
          <button className="flex items-center gap-4 px-6 py-4 rounded-xl font-inter text-xs font-black capitalize text-blue-100/40 hover:bg-error/10 hover:text-error transition-all w-full text-left group">
            <LogOut className="w-5 h-5 group-hover:text-error transition-transform group-hover:-translate-x-1" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden min-w-0">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
