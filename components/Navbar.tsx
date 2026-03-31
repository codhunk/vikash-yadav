"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { HeartPulse, Stethoscope, Award, Star, Phone, Menu, X, ChevronRight } from "lucide-react";

/**
 * Navbar Component
 * 
 * A high-performance, responsive navigation bar featuring:
 * - Dynamic scroll-based transparency and backdrop blur.
 * - Premium brand logo integration with interactive hover effects.
 * - Desktop horizontal navigation with active route tracking.
 * - Framer Motion-powered mobile drawer with iconography-driven links and spring physics.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll events for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure mobile menu closes on route navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Defined navigation schema with iconography and supplementary descriptions
  const links = [
    { name: "Services", href: "/services", icon: Stethoscope, desc: "Surgical specializations" },
    { name: "Expertise", href: "/expertise", icon: Award, desc: "Academic & Clinical authority" },
    { name: "About", href: "/about", icon: HeartPulse, desc: "The Clinical Sanctuary vision" },
    { name: "Reviews", href: "/reviews", icon: Star, desc: "Patient success stories" },
    { name: "Contact", href: "/contact", icon: Phone, desc: "Global clinic coordination" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-300 pointer-events-none py-2 md:py-3",
          scrolled ? "bg-white/90 backdrop-blur-md" : "bg-white"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 pointer-events-auto flex justify-between items-center py-2 md:py-3">
          {/* Brand Identity: Logo + Physician Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="text-xl md:text-2xl font-bold font-manrope text-blue-900 shrink-0">
              Dr. Vikash Yadav
            </span>
          </Link>

          {/* Core Navigation (Optimized for Desktop) */}
          <div className="hidden lg:flex items-center gap-12">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative font-inter text-base font-semibold transition-all duration-300 py-2",
                  pathname === link.href
                    ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    : "text-slate-700 hover:text-primary"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Primary Call-to-Action & Mobile Access Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/booking"
              className="hidden sm:block bg-primary hover:bg-blue-800 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-manrope font-bold text-xs md:text-sm shadow-lg shadow-primary/10 active:scale-95 transition-all duration-300"
            >
              Book Appointment
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary hover:bg-slate-50 rounded-xl transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Adaptive Mobile Drawer Experience */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Immersive Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110] lg:hidden"
            />
            {/* Sliding Surface (Right-to-Left) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[120] lg:hidden shadow-2xl flex flex-col border-l border-slate-100"
            >
              {/* Drawer Branding Header */}
              <div className="p-8 pb-10 border-b border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
                    <HeartPulse className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-manrope font-black text-primary leading-none uppercase">Dr. Vikash Yadav</span>
                    <span className="text-[10px] font-inter font-black text-secondary uppercase mt-1">Leading Care</span>
                  </div>
                </div>
              </div>

              {/* Tiered Link Architecture with Visual Cues */}
              <div className="flex-1 overflow-y-auto px-6">
                {links.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "group flex items-center gap-4 p-4 rounded-2xl transition-all duration-200",
                        pathname === link.href
                          ? "bg-slate-50 text-primary border border-slate-100 shadow-sm"
                          : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm",
                        pathname === link.href ? "bg-white text-primary" : "bg-white text-slate-700 group-hover:text-primary"
                      )}>
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className={cn("text-sm font-bold uppercase leading-none", pathname === link.href ? "text-primary" : "text-slate-700")}>
                          {link.name}
                        </p>
                        <p className="text-[10px] font-medium text-slate-700 mt-1">{link.desc}</p>
                      </div>
                      <ChevronRight className={cn("w-4 h-4 transition-transform group-hover:translate-x-1", pathname === link.href ? "text-primary" : "text-slate-700")} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Conversion Persistence Footer */}
              <div className="p-8 border-t border-slate-50 bg-slate-50/30">
                <Link
                  href="/booking"
                  className="w-full bg-secondary text-white py-5 rounded-[1.5rem] font-manrope font-black text-center text-sm uppercase block shadow-xl shadow-secondary/10 hover:brightness-110 active:scale-95 transition-all duration-300"
                >
                  Book Appointment
                </Link>
                <div className="mt-8 flex items-center gap-4 px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black text-slate-400 uppercase">Consultations Available</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
