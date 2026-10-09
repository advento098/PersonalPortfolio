import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  muted,
  dark = false,
  children,
}: {
  eyebrow: string;
  title: string;
  muted?: string;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#B88746]" />

          <span
            className={`text-xs font-semibold tracking-[0.22em] uppercase ${dark ? "text-[#C79A5B]" : "text-[#B88746]"}`}
          >
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-[clamp(0.75rem,2dvh,1.25rem)] max-w-4xl text-[clamp(1.75rem,min(4.5vw,6dvh),3.25rem)] leading-[1.08] font-semibold tracking-[-0.045em]">
          {title}
          {muted && <span className={dark ? "text-white/25" : "text-black/30"}> {muted}</span>}
        </h2>
      </motion.div>

      {children}
    </div>
  );
}
