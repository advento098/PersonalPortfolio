import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ArchitectureLine, ArchitectureNode, MiniArchitectureNode } from "./Architectures";
import Bedan1 from "../assets/images/bedan-1.png";
import Bedan2 from "../assets/images/bedan-2.png";
import Bedan3 from "../assets/images/bedan-proto-1.jpg";
import Bedan4 from "../assets/images/bedan-proto-2.jpg";
import Bedan5 from "../assets/images/bedan-proto-3.jpg";
import Etsync1 from "../assets/images/etsync-1.png";
import Etsync2 from "../assets/images/etsync-2.png";
import Etsync3 from "../assets/images/etsync-3.png";
import Etsync4 from "../assets/images/etsync-4.png";
import Etsync5 from "../assets/images/etsync-5.png";
import Etsync6 from "../assets/images/etsync-6.png";

import ProjectCarousel from "./ProjectCarousel";

export default function Projects() {
  const bedanImages = [Bedan1, Bedan2, Bedan3, Bedan4, Bedan5];
  const etsyncImages = [Etsync1, Etsync2, Etsync3, Etsync4, Etsync5, Etsync6];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#171717] px-6 py-28 text-white sm:px-8 lg:px-12 lg:py-36"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-15%] h-150 w-150 rounded-full bg-[#B88746]/8 blur-[140px]" />

        <div className="absolute bottom-[-20%] left-[-10%] h-125 w-125 rounded-full bg-white/2.5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* --------------------------------------------------------
        SECTION HEADER
    --------------------------------------------------------- */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B88746]" />

              <span className="text-xs font-semibold tracking-[0.22em] text-[#C79A5B] uppercase">
                Selected work
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/35">
              A selection of systems I've designed, developed, integrated, and brought to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl text-3xl leading-[1.08] font-semibold tracking-[-0.045em] sm:text-4xl lg:text-[3.5rem]">
              Real problems.
              <br />
              <span className="text-white/25">Thoughtful systems.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/40">
              I enjoy working on software where engineering has a meaningful purpose behind it—from
              education and business operations to production-grade digital services.
            </p>
          </motion.div>
        </div>

        {/* ========================================================
        PROJECT 01 — BEDANSHELF
    ========================================================= */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group mt-24"
        >
          <div className="grid overflow-hidden rounded-4xl border border-white/8 bg-white/[0.035] lg:grid-cols-[1.15fr_0.85fr]">
            {/* Visual */}
            <div className="relative min-h-105 overflow-hidden bg-[#24211D] sm:min-h-130">
              <div className="absolute inset-0">
                <ProjectCarousel images={bedanImages} alt="BedanShelf" interval={3500} />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-black/10 via-transparent to-black/50" />

              {/* Project label */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
                <span className="rounded-full border border-white/15 bg-black/25 px-3.5 py-2 text-[10px] font-medium tracking-[0.18em] text-white/70 uppercase backdrop-blur-xl">
                  Education · 01
                </span>
              </div>

              {/* Fake UI floating card */}
              <div className="absolute right-6 bottom-6 hidden w-56 rounded-2xl border border-white/10 bg-black/45 p-4 shadow-2xl backdrop-blur-xl sm:block">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.15em] text-white/40 uppercase">
                    Library status
                  </span>

                  <span className="flex items-center gap-1.5 text-[10px] text-[#C79A5B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C79A5B]" />
                    Live
                  </span>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full rounded-full bg-[#B88746]" />
                </div>

                <div className="mt-3 flex justify-between text-[10px] text-white/30">
                  <span>Available books</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.18em] text-[#C79A5B] uppercase">
                    BedanShelf
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-[#B88746]/40 group-hover:text-[#C79A5B]">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <h3 className="mt-8 max-w-lg text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  A smarter way to connect students with their library.
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
                  A real-time online library system created specifically for San Beda students. The
                  project connects a modern web interface with a custom-built hardware scanner
                  prototype for a more seamless library experience.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["React", "Firebase", "Tailwind", "C++", "Hardware Prototype"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-[10px] font-medium text-white/45"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 border-t border-white/[0.07] pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/25">Full-stack + hardware</span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ========================================================
        PROJECT 02 — ETSYNC
    ========================================================= */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group mt-8"
        >
          <div className="grid overflow-hidden rounded-4xl border border-white/8 bg-white/[0.035] lg:grid-cols-[0.85fr_1.15fr]">
            {/* Content FIRST on desktop */}
            <div className="order-2 flex flex-col justify-between p-7 sm:p-10 lg:order-1 lg:p-12">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.18em] text-[#C79A5B] uppercase">
                    ETSync
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-[#B88746]/40 group-hover:text-[#C79A5B]">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <h3 className="mt-8 max-w-lg text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  One system for an entire workforce.
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
                  A centralized company payroll and employee management platform built from scratch.
                  ETSync brings attendance, payroll, leave management, overtime, fieldwork,
                  holidays, documents, and administration into one connected system.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["React", "Tailwind", "Axios", ".NET Framework", "Web Forms", "MySQL"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-[10px] font-medium text-white/45"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-12 border-t border-white/[0.07] pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/25">Enterprise business system</span>

                  <span className="text-xs font-medium text-white/50 transition-colors group-hover:text-[#C79A5B]">
                    View case study →
                  </span>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative order-1 min-h-105 overflow-hidden bg-[#22201E] sm:min-h-130 lg:order-2">
              <div className="absolute inset-0">
                <ProjectCarousel images={etsyncImages} alt="Etsync" interval={3500} />
              </div>

              <div className="absolute inset-0 bg-linear-to-bl from-black/10 via-transparent to-black/50" />

              <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
                <span className="rounded-full border border-white/15 bg-black/25 px-3.5 py-2 text-[10px] font-medium tracking-[0.18em] text-white/70 uppercase backdrop-blur-xl">
                  Business Operations · 02
                </span>
              </div>

              {/* Dashboard stats */}
              <div className="absolute right-6 bottom-6 left-6 grid grid-cols-3 gap-2 sm:right-8 sm:bottom-8 sm:left-8">
                <div className="rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
                  <p className="text-[9px] tracking-wider text-white/30 uppercase">Attendance</p>
                  <p className="mt-2 text-sm font-medium text-white/80">Real-time</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
                  <p className="text-[9px] tracking-wider text-white/30 uppercase">Payroll</p>
                  <p className="mt-2 text-sm font-medium text-white/80">Automated</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
                  <p className="text-[9px] tracking-wider text-white/30 uppercase">Management</p>
                  <p className="mt-2 text-sm font-medium text-[#C79A5B]">Centralized</p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ========================================================
        PROJECT 03 — E-NOTARY
    ========================================================= */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group mt-8"
        >
          <div className="relative overflow-hidden rounded-4xl border border-[#B88746]/20 bg-[#211E1A]">
            {/* Gold glow */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-[#B88746]/8 blur-[100px]" />

            <div className="relative grid lg:grid-cols-[1fr_1fr]">
              {/* Content */}
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium tracking-[0.18em] text-[#D1A96D] uppercase">
                      E-Notary Management System
                    </span>

                    <span className="rounded-full border border-[#B88746]/30 bg-[#B88746]/10 px-2.5 py-1 text-[9px] font-semibold tracking-[0.15em] text-[#D1A96D] uppercase">
                      In production
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-xl text-3xl leading-[1.05] font-semibold tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]">
                    Bringing an entire notarial workflow into one digital ecosystem.
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
                    A production-ready platform designed to streamline digital notarization. I work
                    primarily on the backend, building the API logic and integrations that connect
                    lawyers, clients, documents, payments, video conferencing, and real-time queues.
                  </p>

                  {/* Architecture highlights */}
                  <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-white/[0.07] bg-white/2.5 p-4">
                      <p className="text-lg font-semibold text-white/80">API</p>

                      <p className="mt-1 text-[10px] leading-4 text-white/30">.NET Core backend</p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/2.5 p-4">
                      <p className="text-lg font-semibold text-white/80">Real-time</p>

                      <p className="mt-1 text-[10px] leading-4 text-white/30">SignalR queuing</p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/2.5 p-4">
                      <p className="text-lg font-semibold text-white/80">Video</p>

                      <p className="mt-1 text-[10px] leading-4 text-white/30">Jitsi integration</p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/2.5 p-4">
                      <p className="text-lg font-semibold text-white/80">Signing</p>

                      <p className="mt-1 text-[10px] leading-4 text-white/30">Digital documents</p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/2.5 p-4">
                      <p className="text-lg font-semibold text-white/80">Payments</p>

                      <p className="mt-1 text-[10px] leading-4 text-white/30">
                        Integrated services
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/2.5 p-4">
                      <p className="text-lg font-semibold text-[#D1A96D]">Credits</p>

                      <p className="mt-1 text-[10px] leading-4 text-white/30">In-system wallet</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 border-t border-white/[0.07] pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/25">
                      Production system · Backend engineering
                    </span>

                    <span className="flex items-center gap-2 text-xs font-medium text-[#D1A96D]">
                      Currently active
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B88746]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative min-h-125 overflow-hidden border-t border-white/[0.07] bg-[#181614] lg:border-t-0 lg:border-l">
                <img
                  src="https://placehold.co/1000x900/181614/F4EFE7?text=E-Notary+Management+System"
                  alt="E-Notary Management System"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#181614] via-transparent to-[#181614]/20" />

                {/* Floating architecture visualization */}
                <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10">
                  <div className="rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.18em] text-white/35 uppercase">
                        System architecture
                      </span>

                      <span className="text-[10px] text-[#C79A5B]">Connected</span>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-2">
                      <ArchitectureNode label="Client" />

                      <ArchitectureLine />

                      <ArchitectureNode label="API" highlighted />

                      <ArchitectureLine />

                      <ArchitectureNode label="Services" />
                    </div>

                    <div className="mt-4 flex items-center justify-center">
                      <div className="h-6 w-px bg-white/10" />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <MiniArchitectureNode label="Jitsi" />

                      <MiniArchitectureNode label="SignalR" />

                      <MiniArchitectureNode label="Signing" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* --------------------------------------------------------
        PROJECT FOOTER
    --------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-md text-sm leading-6 text-white/30">
            These are only a few examples of the systems I've had the opportunity to build. Every
            project starts with a different problem.
          </p>

          <a
            href="#contact"
            className="group flex items-center gap-3 text-sm font-medium text-white/60 transition-colors hover:text-[#D1A96D]"
          >
            Have a project in mind?
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#B88746]/40 group-hover:bg-[#B88746]/10">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
