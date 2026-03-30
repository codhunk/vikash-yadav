"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({ value, suffix = "", prefix = "", decimalPlaces = 0 }: { value: number; suffix?: string; prefix?: string; decimalPlaces?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toFixed(decimalPlaces).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix, prefix, decimalPlaces]);

  return <span ref={ref} className="tabular-nums">{prefix}0{suffix}</span>;
}
