import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <section
      id="contact"
      className="relative flex min-h-dvh flex-col overflow-hidden border-t border-white/[0.07] bg-[#171717] px-6 pt-24 pb-6 text-white sm:px-8 lg:px-12 short:pt-20"
    >
      {/* ==========================================================
      AMBIENT BACKGROUND
  =========================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main warm glow */}
        <div className="absolute top-[5%] left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-[#B88746]/9 blur-[150px]" />

        {/* Secondary glow */}
        <div className="absolute right-[-10%] bottom-[-20%] h-125 w-125 rounded-full bg-[#B88746]/4.5 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ========================================================
      CONTACT CTA
  ========================================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#B88746]" />

          <span className="text-xs font-semibold tracking-[0.22em] text-[#D1A96D] uppercase">
            Let's work together
          </span>

          <span className="h-px w-8 bg-[#B88746]" />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-[clamp(1rem,4dvh,2rem)] max-w-5xl text-[clamp(2.25rem,min(8vw,10dvh),5.5rem)] leading-[1.02] font-semibold tracking-tighter"
        >
          Have an idea?
          <br />
          <span className="text-white/25">Let's build it.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-[clamp(1rem,4dvh,2rem)] max-w-xl text-base leading-7 text-white/40"
        >
          A full application, a backend, or just a rough idea. Tell me what you're working on.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-[clamp(1.5rem,5dvh,2.5rem)] flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="mailto:ponsadvento08@gmail.com"
            className="group flex items-center gap-3 rounded-full bg-[#F4EFE7] px-7 py-4 text-sm font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_50px_rgba(255,255,255,0.12)]"
          >
            Start a conversation
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/8 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={14} />
            </span>
          </a>

          <a
            href="tel:+639617508181"
            className="rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-white/50 transition-all duration-300 hover:border-white/20 hover:text-white"
          >
            +63 961 750 8181
          </a>
        </motion.div>

        <p className="mt-[clamp(1rem,3dvh,1.5rem)] text-sm text-white/35">
          ponsadvento08@gmail.com
        </p>
      </div>

      {/* ========================================================
      FOOTER
  ========================================================= */}
      <footer className="relative z-10 mx-auto mt-10 w-full max-w-7xl border-t border-white/[0.07] pt-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-white/60 transition-all duration-300 group-hover:border-[#B88746]/40 group-hover:text-[#D1A96D]">
              PA
            </span>

            <div>
              <p className="text-sm font-semibold tracking-[-0.02em] text-white/75">
                Pons Anthony Advento
              </p>

              <p className="mt-0.5 text-[10px] tracking-[0.16em] text-white/25 uppercase">
                © {new Date().getFullYear()} · Your vision. My code.
              </p>
            </div>
          </a>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {/* Footer navigation */}
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                ["Services", "#services"],
                ["Why me", "#why-me"],
                ["Work", "#projects"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs text-white/30 transition-colors hover:text-white/70"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Social links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/advento098"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 text-white/35 transition-all duration-300 hover:border-white/15 hover:text-white"
              >
                <Github size={15} />
              </a>

              <a
                href="https://www.linkedin.com/in/ponsanthonyadvento"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 text-white/35 transition-all duration-300 hover:border-white/15 hover:text-white"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
