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
      className="group relative text-center"
    >
      {/* Number */}
      <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-[#FAF9F7] text-[10px] font-semibold text-black/50 transition-all duration-300 group-hover:border-[#B88746]/40 group-hover:bg-[#B88746] group-hover:text-white sm:h-12 sm:w-12 sm:text-xs">
        {number}
      </div>

      {/* Content */}
      <div className="mt-3 sm:mt-4 lg:px-3">
        <h3 className="text-xs font-semibold tracking-[-0.02em] sm:text-base">{title}</h3>

        <p className="mt-1 hidden text-sm leading-6 text-black/40 sm:block">{description}</p>
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
      className="group relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#B88746]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:rounded-3xl sm:p-7"
    >
      {/* Ambient hover */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#B88746]/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        {/* Top */}
        <div className="hidden items-center justify-between sm:flex short:hidden">
          <span className="text-xs font-medium tracking-[0.15em] text-[#B88746]">{number}</span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.07] text-lg text-black/30 transition-all duration-300 group-hover:border-[#B88746]/30 group-hover:text-[#B88746]">
            {icon}
          </span>
        </div>

        {/* Content */}
        <h3 className="max-w-sm text-base leading-snug font-semibold tracking-[-0.03em] sm:mt-6 sm:text-xl short:mt-0">
          {title}
        </h3>

        <p className="mt-1.5 max-w-sm text-xs leading-5 text-black/40 sm:mt-3 sm:text-sm sm:leading-6">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
