import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Profile from "../assets/images/profile.jpg";
import ProfileHover from "../assets/images/profile-hover.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-24 pb-12 sm:px-8 lg:px-12 short:pt-20 short:pb-6"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
              linear-gradient(to right, rgba(23,23,23,0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(23,23,23,0.035) 1px, transparent 1px)
            `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Warm ambient glow */}
      <div className="pointer-events-none absolute top-20 -right-40 h-125 w-125 rounded-full bg-[#B88746]/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 left-0 h-112.5 w-112.5 rounded-full bg-[#D6B98C]/8 blur-[120px]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* --------------------------------------------------------
                LEFT
            --------------------------------------------------------- */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-[clamp(1rem,3dvh,2rem)] inline-flex items-center gap-2.5 rounded-full border border-[#B88746]/20 bg-white/70 px-3.5 py-2 text-xs font-medium text-black/60 shadow-sm backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B88746]/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B88746]" />
              </span>
              Available for work
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-[clamp(0.75rem,2dvh,1.25rem)] text-xs font-semibold tracking-[0.22em] text-[#B88746] uppercase"
            >
              Full-Stack Software Engineer
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-[clamp(2.5rem,min(7vw,8.5dvh),7rem)] leading-[0.91] font-semibold tracking-[-0.065em]"
            >
              Your vision.
              <br />
              <span className="text-black/35">My code.</span>
              <br />
              <span className="relative inline-block">
                One solution
                <span className="absolute -bottom-2 left-0 h-px w-[88%] bg-[#B88746]/60 sm:-bottom-3" />
              </span>
              <br />
              <span className="text-black/35">built for success.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-[clamp(1.25rem,4dvh,2.25rem)] max-w-xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8"
            >
              I'm <span className="font-semibold text-black">Pons Anthony Advento</span>. I build
              web apps and business systems end to end, from the interface to the database.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-[clamp(1.25rem,4dvh,2.25rem)] flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#171717] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#B88746] hover:shadow-[0_10px_30px_rgba(184,135,70,0.18)]"
              >
                Explore my work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-black/9 bg-white/60 px-6 py-3.5 text-sm font-medium text-black/70 backdrop-blur-sm transition-all duration-300 hover:border-black/15 hover:bg-white hover:text-black"
              >
                Start a conversation
                <ArrowDownRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-[clamp(1.5rem,5dvh,3rem)] flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-black/[0.07] pt-[clamp(1rem,3dvh,1.5rem)] short:hidden"
            >
              <div>
                <p className="text-lg font-semibold tracking-tight">4</p>
                <p className="mt-0.5 text-xs text-black/40">Featured systems</p>
              </div>

              <div className="h-8 w-px bg-black/8" />

              <div>
                <p className="text-lg font-semibold tracking-tight">Full-Stack</p>
                <p className="mt-0.5 text-xs text-black/40">Frontend to backend</p>
              </div>

              <div className="h-8 w-px bg-black/8" />

              <div>
                <p className="text-lg font-semibold tracking-tight">Production</p>
                <p className="mt-0.5 text-xs text-black/40">Real-world experience</p>
              </div>
            </motion.div>
          </div>

          {/* --------------------------------------------------------
                RIGHT VISUAL
            --------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto hidden w-full max-w-[min(30rem,52dvh)] lg:block"
          >
            {/* Decorative orbit */}
            <div className="absolute -inset-8 rounded-[3rem] border border-black/4" />
            <div className="absolute -inset-16 rounded-[4rem] border border-black/2.5" />

            {/* Main image card */}
            <div className="relative overflow-hidden rounded-4xl border border-black/[0.07] bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <div className="group/photo relative overflow-hidden rounded-3xl bg-[#EEEAE4]">
                <img
                  src={Profile}
                  alt="Pons Anthony Advento"
                  className="aspect-7/8 w-full object-cover object-top"
                />

                {/* Alternate expression, revealed on hover */}
                <img
                  src={ProfileHover}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                {/* Bottom card */}
                <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/20 bg-black/45 p-4 text-white backdrop-blur-xl">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs tracking-[0.18em] text-white/50 uppercase">
                        Software Engineer
                      </p>

                      <p className="mt-1 text-lg font-medium tracking-tight">
                        Building things that matter.
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* React floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-24 -left-10 rounded-2xl border border-black/[0.07] bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171717] text-[10px] font-bold text-white">
                  .NET
                </span>

                <div>
                  <p className="text-xs font-semibold">Backend</p>
                  <p className="text-[10px] text-black/40">APIs & systems</p>
                </div>
              </div>
            </motion.div>

            {/* React floating badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 -right-7 rounded-2xl border border-black/[0.07] bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B88746] text-[10px] font-bold text-white">
                  R
                </span>

                <div>
                  <p className="text-xs font-semibold">React</p>
                  <p className="text-[10px] text-black/40">Interfaces</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-black/30 transition-colors hover:text-black/60 lg:flex"
        >
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase">
            Scroll to explore
          </span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDownRight size={15} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
