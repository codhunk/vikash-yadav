"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

// ─── Constants ─────────────────────────────────────────────────────────────────

const PHONE_RAW = "918708255349";
const PHONE_DISPLAY = "+91 8708255349";
const WA_MESSAGE = encodeURIComponent(
  "Hello Dr. Vikash Yadav, I would like to inquire about a surgical consultation.",
);
const WA_URL = `https://wa.me/${PHONE_RAW}?text=${WA_MESSAGE}`;

const EASE = [0.25, 0.1, 0.25, 1] as const;

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────

function WaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function WhatsAppButton() {
  const [isOpen, setIsPanelOpen] = useState(false);
  const [hasPulsed, setHasPulsed] = useState(true);
  const pathname = usePathname();

  // Hooks must be called unconditionally at the top level
  useEffect(() => {
    // Hide on admin routes - we handle this by returning null later, 
    // but the hook itself must still be defined.
    const open = setTimeout(() => setIsPanelOpen(true), 4000);
    return () => {
      clearTimeout(open);
    };
  }, []);

  // Early return ONLY after hooks are declared
  if (pathname.startsWith("/admin")) {
    return null;
  }

  const toggle = () => {
    setIsPanelOpen((o) => !o);
    setHasPulsed(false);
  };

  return (
    <>
      <style>{`
        @keyframes wa-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 106, 106, 0.55); }
          50%      { box-shadow: 0 0 0 14px rgba(0, 106, 106, 0); }
        }
        .wa-ring { animation: wa-ring 2.4s ease-out infinite; }
      `}</style>

      <div
        className="fixed z-[9999] flex flex-col items-end gap-3"
        style={{
          bottom: "24px",
          right: "20px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* ── Panel ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="panel"
              initial={{
                opacity: 0,
                y: 16,
                scale: 0.95,
                originX: 1,
                originY: 1,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              className="flex flex-col overflow-hidden mb-1"
              style={{
                width: "min(320px, calc(100vw - 40px))",
                borderRadius: "20px",
                background: "#fff",
                boxShadow: "0 24px 64px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* ── Panel header ── */}
              <div
                className="relative flex items-center gap-3 px-5 py-4"
                style={{
                  background: "linear-gradient(135deg, #00478d 0%, #006a6a 100%)",
                }}
              >
                {/* Online indicator */}
                <div className="relative shrink-0">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <WaIcon size={22} />
                  </div>
                  <span
                    className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#00478d]"
                    style={{ background: "#25D366" }}
                  />
                </div>

                <div className="grow">
                  <p className="text-white font-semibold text-[14px] leading-none mb-1">
                    Dr. Vikash Yadav
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: "#25D366" }}
                    />
                    <p className="text-white/80 text-xs">
                      Clinical Sanctuary Triage
                    </p>
                  </div>
                </div>

                {/* Close */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPanelOpen(false)}
                  className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  <X size={14} strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* ── Chat bubble preview ── */}
              <div className="px-4 py-4" style={{ background: "#f7f9fb" }}>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
                  className="flex gap-2 items-end"
                >
                  {/* Avatar */}
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0 text-[10px] font-bold"
                    style={{ background: "#00478d" }}
                  >
                    VY
                  </div>

                  {/* Bubble */}
                  <div
                    className="relative px-3.5 py-2.5 rounded-2xl rounded-bl-sm max-w-[80%]"
                    style={{
                      background: "#fff",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.10)",
                    }}
                  >
                    {/* Tail */}
                    <div
                      className="absolute -left-1.75 bottom-0 w-0 h-0"
                      style={{
                        borderRight: "8px solid #fff",
                        borderTop: "8px solid transparent",
                      }}
                    />
                    <p className="text-slate-700 text-[12.5px] leading-relaxed">
                      👋 Welcome to the Clinical Sanctuary. How can we assist you with your surgical inquiry today?
                    </p>
                    <p className="text-slate-400 text-[10px] mt-1 text-right">
                      just now
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* ── Action buttons ── */}
              <div className="p-3 flex flex-col gap-2">
                {/* WhatsApp CTA */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-2xl text-white cursor-pointer transition-opacity hover:opacity-95"
                  style={{
                    background: "linear-gradient(135deg, #25D366 0%, #006a6a 100%)",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <WaIcon size={20} />
                    <div>
                      <p className="text-md font-semibold font-manrope leading-none">
                        Chat on WhatsApp
                      </p>
                      <p className="text-white/80 text-xs mt-0.5">
                        Patient support active
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={16} strokeWidth={2} className="text-white/80" />
                </motion.a>

                {/* Phone call */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:+${PHONE_RAW}`}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all"
                  style={{
                    background: "#F4F4F4",
                    border: "1px solid #E8E8E8",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: "#e6e8ea" }}
                    >
                      <Phone size={18} strokeWidth={2} style={{ color: "#00478d" }} />
                    </div>
                    <div>
                      <p className="text-slate-800 text-md font-semibold leading-none">
                        {PHONE_DISPLAY}
                      </p>
                      <p className="text-slate-600 text-xs mt-0.5">
                        Call the clinic directly
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={14} strokeWidth={2} className="text-slate-600" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── FAB Toggle button ── */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={toggle}
          aria-label={isOpen ? "Close contact options" : "Open WhatsApp chat"}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 ${!isOpen && hasPulsed ? "wa-ring" : ""}`}
          style={{
            background: isOpen
              ? "linear-gradient(135deg, #191c1e 0%, #424752 100%)"
              : "linear-gradient(135deg, #25D366 0%, #006a6a 100%)",
            boxShadow: isOpen
              ? "0 8px 24px rgba(0,0,0,0.3)"
              : "0 8px 24px rgba(0,106,106,0.35)",
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} strokeWidth={2.5} />
              </motion.div>
            ) : (
              <motion.div
                key="wa"
                initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <WaIcon size={26} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Unread badge dot */}
          {!isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-bold"
              style={{ background: "#ba1a1a" }}
            >
              1
            </motion.span>
          )}
        </motion.button>
      </div>
    </>
  );
}
