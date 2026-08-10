import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#171717] px-6 pt-28 pb-8 text-white sm:px-8 lg:px-12 lg:pt-36"
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

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================================
        CONTACT CTA
    ========================================================= */}
        <div className="text-center">
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
            className="mx-auto mt-8 max-w-5xl text-4xl leading-[1.02] font-semibold tracking-tighter sm:text-5xl lg:text-[5.5rem]"
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
            className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/40"
          >
            Whether you need a complete application, a reliable backend, or someone to turn a rough
            idea into something real, I'd love to hear what you're working on.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
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
        </div>

        {/* ========================================================
        CONTACT INFORMATION
    ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/2.5] mx-auto mt-24 max-w-4xl rounded-4xl border border-white/8 p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {/* Email */}
            <a
              href="mailto:ponsadvento08@gmail.com"
              className="group rounded-[1.25rem] border border-transparent p-5 transition-all duration-300 hover:border-white/[0.07] hover:bg-white/2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-white/25 uppercase">
                  Email
                </span>

                <ArrowUpRight
                  size={14}
                  className="text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D1A96D]"
                />
              </div>

              <p className="mt-4 text-sm font-medium break-all text-white/65 transition-colors group-hover:text-white">
                ponsadvento08@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+639617508181"
              className="group rounded-[1.25rem] border border-transparent p-5 transition-all duration-300 hover:border-white/[0.07] hover:bg-white/2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-white/25 uppercase">
                  Phone
                </span>

                <ArrowUpRight
                  size={14}
                  className="text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D1A96D]"
                />
              </div>

              <p className="mt-4 text-sm font-medium text-white/65 transition-colors group-hover:text-white">
                +63 961 750 8181
              </p>
            </a>

            {/* Availability */}
            <div className="rounded-[1.25rem] border border-transparent p-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-white/25 uppercase">
                  Availability
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B88746]" />

                  <span className="text-[10px] text-[#D1A96D]">Open</span>
                </span>
              </div>

              <p className="mt-4 text-sm font-medium text-white/65">Available for freelance</p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
        SOCIAL LINKS
    ========================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.07] pt-8 sm:flex-row"
        >
          <p className="text-xs text-white/25">Prefer to connect somewhere else?</p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/advento098"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/8 px-4 py-2.5 transition-all duration-300 hover:border-white/15 hover:bg-white/3"
            >
              <Github
                size={15}
                className="text-white/35 transition-colors group-hover:text-white"
              />

              <span className="text-xs text-white/40 transition-colors group-hover:text-white/70">
                GitHub
              </span>

              <ArrowUpRight
                size={12}
                className="text-white/20 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ponsanthonyadvento"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/8 px-4 py-2.5 transition-all duration-300 hover:border-white/15 hover:bg-white/3"
            >
              <Linkedin
                size={15}
                className="text-white/35 transition-colors group-hover:text-white"
              />

              <span className="text-xs text-white/40 transition-colors group-hover:text-white/70">
                LinkedIn
              </span>

              <ArrowUpRight
                size={12}
                className="text-white/20 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* ========================================================
        FOOTER
    ========================================================= */}
        <footer className="mt-24 border-t border-white/[0.07] pt-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            {/* Brand */}
            <div>
              <a href="#top" className="group inline-flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-white/60 transition-all duration-300 group-hover:border-[#B88746]/40 group-hover:text-[#D1A96D]">
                  PA
                </span>

                <div>
                  <p className="text-sm font-semibold tracking-[-0.02em] text-white/75">
                    Pons Anthony Advento
                  </p>

                  <p className="mt-0.5 text-[10px] tracking-[0.16em] text-white/25 uppercase">
                    Software Developer
                  </p>
                </div>
              </a>
            </div>

            {/* Footer navigation */}
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Process", "#process"],
                ["Contact", "#contact"],
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
          </div>

          {/* Bottom line */}
          <div className="mt-10 flex flex-col gap-3 border-t border-white/5 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] tracking-[0.14em] text-white/20 uppercase">
              © {new Date().getFullYear()} Pons Anthony Advento
            </p>

            <p className="text-[10px] tracking-[0.14em] text-white/20 uppercase">
              Your vision. My code.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
