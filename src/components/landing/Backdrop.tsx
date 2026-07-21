"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Backdrop() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute -left-20 top-[-120px] h-[420px] w-[420px] rounded-full bg-[rgba(37,211,102,0.10)] blur-3xl"
        animate={
          reduced
            ? undefined
            : {
                x: [0, 20, 0],
                y: [0, 10, 0],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ backgroundColor: `rgba(37,211,102,0.12)` }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -right-24 top-[40px] h-[520px] w-[520px] rounded-full bg-[rgba(17,24,39,0.06)] blur-3xl"
        animate={
          reduced
            ? undefined
            : {
                x: [0, -18, 0],
                y: [0, 12, 0],
              }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,211,102,0.08),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(17,24,39,0.06),transparent_50%)]"
      />
    </div>
  );
}

