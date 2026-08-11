import { motion } from "framer-motion";

export function ProcessStep({
  number,
  title,
  description,
  delay = 0,
}: {
  number: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative lg:text-center"
    >
      {/* Number */}
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-black/8 bg-[#FAF9F7] text-xs font-semibold text-black/50 transition-all duration-300 group-hover:border-[#B88746]/40 group-hover:bg-[#B88746] group-hover:text-white lg:mx-auto">
        {number}
      </div>

      {/* Content */}
      <div className="mt-6 lg:px-3">
        <h3 className="text-lg font-semibold tracking-[-0.025em]">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-black/40">{description}</p>
      </div>
    </motion.div>
  );
}

export function WhyCard({
  number,
  title,
  description,
  icon,
  delay = 0,
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-black/[0.07] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#B88746]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8"
    >
      {/* Ambient hover */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#B88746]/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        {/* Top */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium tracking-[0.15em] text-[#B88746]">{number}</span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.07] text-lg text-black/30 transition-all duration-300 group-hover:border-[#B88746]/30 group-hover:text-[#B88746]">
            {icon}
          </span>
        </div>

        {/* Content */}
        <h3 className="mt-10 max-w-sm text-xl leading-snug font-semibold tracking-[-0.03em]">
          {title}
        </h3>

        <p className="mt-4 max-w-sm text-sm leading-6 text-black/40">{description}</p>

        {/* Bottom accent */}
        <div className="mt-10 h-px w-8 bg-[#B88746]/40 transition-all duration-500 group-hover:w-16" />
      </div>
    </motion.div>
  );
}

export function TrustItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="group border-white/[0.07] px-7 py-7 transition-colors duration-300 last:border-r-0 hover:bg-white/[0.03] sm:px-8 lg:border-r">
      <p className="text-lg font-semibold tracking-[-0.025em] text-white/85">{value}</p>

      <p className="mt-1 text-xs text-white/30">{label}</p>
    </div>
  );
}
