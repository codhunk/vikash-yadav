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

  const SidebarContent = () => (
    <>
      <div className="flex items-center gap-3 mb-8 px-4 pt-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <HeartPulse className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-manrope font-black text-lg leading-none text-primary capitalize">Dr. Vikash Yadav</span>
          <span className="font-inter text-[9px] capitalize text-secondary font-black">Admin Access</span>
        </div>
      </div>

      <nav className="flex-1 space-y-4 mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsSidebarOpen(false)}
            className={cn(
              "flex items-center gap-4 px-3 py-4 rounded-xl font-bold text-sm font-black capitalize transition-all group",
              pathname === item.href
                ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                : "text-slate-700 hover:bg-slate-50 hover:text-primary"
            )}
          >
            <item.icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", pathname === item.href ? "text-white" : "text-slate-400 group-hover:text-primary")} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="pt-8 border-t border-slate-100">
        <button className="flex items-center gap-4 px-6 py-4 rounded-2xl font-inter text-xs font-black capitalize text-slate-400 hover:bg-error/5 hover:text-error transition-all w-full text-left group">
          <LogOut className="w-5 h-5 text-slate-400 group-hover:text-error transition-transform group-hover:-translate-x-1" />
          Logout
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col md:flex-row font-inter antialiased">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-manrope font-black text-primary capitalize text-sm leading-none">Sanctuary</span>
            <span className="font-inter text-[8px] font-black text-secondary capitalize">Admin</span>
          </div>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-primary hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Desktop/Mobile Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-100 flex flex-col p-4 transition-transform duration-500 ease-in-out md:sticky md:top-0 md:h-screen md:translate-x-0 shadow-2xl md:shadow-none",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <SidebarContent />
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
