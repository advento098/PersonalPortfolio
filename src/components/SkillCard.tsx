import { motion } from "framer-motion";

export default function SkillCard({
  number,
  title,
  description,
  technologies,
  delay = 0,
}: {
  number: string;
  title: string;
  description: string;
  technologies: string[];
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
      className="group relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#B88746]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:rounded-3xl sm:p-6"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#B88746]/6 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        {/* Header */}
        <div className="hidden items-start justify-between sm:flex">
          <span className="text-xs font-medium tracking-[0.15em] text-[#B88746]">{number}</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.07] text-black/30 transition-all duration-300 group-hover:border-[#B88746]/30 group-hover:text-[#B88746]">
            ↗
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold tracking-[-0.03em] sm:mt-6 sm:text-xl">{title}</h3>

        {/* Description */}
        <p className="mt-2 text-xs leading-5 text-black/40 sm:text-sm sm:leading-6">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-auto hidden flex-wrap gap-2 pt-5 sm:flex">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-black/6 bg-[#FAF9F7] px-3 py-1.5 text-[11px] font-medium text-black/45 transition-colors duration-300 group-hover:border-black/8 group-hover:text-black/60"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
