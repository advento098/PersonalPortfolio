import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
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
import Anlair1 from "../assets/images/anlair-1.png";
import Anlair2 from "../assets/images/anlair-2.png";
import Anlair3 from "../assets/images/anlair-3.png";
import Anlair4 from "../assets/images/anlair-4.png";
import Anlair5 from "../assets/images/anlair-5.png";
import Anlair6 from "../assets/images/anlair-6.png";
import Anlair7 from "../assets/images/anlair-7.png";

import ProjectCarousel from "./ProjectCarousel";

interface Project {
  id: string;
  name: string;
  label: string;
  title: string;
  description: string;
  tech: string[];
  footer: string;
  images: string[];
  alts?: string[];
  overlay?: ReactNode;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "bedanshelf",
    name: "BedanShelf",
    label: "Education · 01",
    title: "A smarter way to connect students with their library.",
    description:
      "A real-time library system for San Beda students, paired with a custom-built hardware scanner prototype.",
    tech: ["React", "Firebase", "Tailwind", "C++", "Hardware Prototype"],
    footer: "Full-stack + hardware",
    images: [Bedan1, Bedan2, Bedan3, Bedan4, Bedan5],
    overlay: (
      <div className="absolute right-6 bottom-14 w-56 rounded-2xl border border-white/10 bg-black/45 p-4 shadow-2xl backdrop-blur-xl">
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
    ),
  },
  {
    id: "etsync",
    name: "ETSync",
    label: "Business Operations · 02",
    title: "One system for an entire workforce.",
    description:
      "A payroll and employee management platform built from scratch. Attendance, payroll, leave, overtime, and documents in one system.",
    tech: ["React", "Tailwind", "Axios", ".NET Framework", "Web Forms", "MySQL"],
    footer: "Enterprise business system",
    images: [Etsync1, Etsync2, Etsync3, Etsync4, Etsync5, Etsync6],
    overlay: (
      <div className="absolute right-6 bottom-14 left-6 grid grid-cols-3 gap-2">
        {[
          ["Attendance", "Real-time"],
          ["Payroll", "Automated"],
          ["Management", "Centralized"],
        ].map(([label, value], index) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl"
          >
            <p className="text-[9px] tracking-wider text-white/30 uppercase">{label}</p>
            <p
              className={`mt-2 text-sm font-medium ${index === 2 ? "text-[#C79A5B]" : "text-white/80"}`}
            >
              {value}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "anlair",
    name: "ANLAIR Quotation System",
    label: "Healthcare Supply · 03",
    title: "From hospital request to printable quotation.",
    description:
      "Turns hospital requests into priced, print-ready quotations for a medical equipment supplier that used to build each one by hand.",
    tech: ["React", "TypeScript", "Tailwind", "ASP.NET Core", "EF Core", "MySQL", "QuestPDF"],
    footer: "Full-stack · Solo build",
    images: [Anlair1, Anlair2, Anlair3, Anlair4, Anlair5, Anlair6, Anlair7],
    alts: [
      "ANLAIR quotation builder showing items final cost, markup adjustment, final cost, and ordered computation constants for a finalized project",
      "ANLAIR print page with paper size, orientation, validity, and signatory controls above a formatted quotation preview",
      "ANLAIR item template editor drawer with item details, specifications, expense breakdown, and a live final cost",
      "ANLAIR dashboard with KPI cards, recent quotations, and recent projects",
      "ANLAIR projects list with status counts, search, filters, sorting, and quotation totals",
      "ANLAIR project items table with quantities and unit-by-cost breakdowns, locked as read-only after quoting",
      "ANLAIR global computation constants for markup percentage, freight, and installation",
    ],
    overlay: (
      <div className="absolute right-6 bottom-14 w-60 rounded-2xl border border-white/10 bg-black/45 p-4 shadow-2xl backdrop-blur-xl">
        <span className="text-[10px] tracking-[0.15em] text-white/40 uppercase">
          Project lifecycle
        </span>

        <div className="mt-4 grid grid-cols-4 gap-1.5">
          {["Idle", "On going", "Quoted", "Archived"].map((status) => (
            <div
              key={status}
              className={`h-1.5 rounded-full ${status === "Quoted" ? "bg-[#B88746]" : "bg-white/10"}`}
            />
          ))}
        </div>

        <div className="mt-3 grid grid-cols-4 gap-1.5 text-[9px] text-white/30">
          <span>Idle</span>
          <span>On going</span>
          <span className="text-[#C79A5B]">Quoted</span>
          <span>Archived</span>
        </div>
      </div>
    ),
  },
  {
    id: "enotary",
    name: "E-Notary Management System",
    label: "Legal · In production",
    title: "Bringing an entire notarial workflow into one digital ecosystem.",
    description:
      "A production platform for digital notarization. I work mainly on its backend: the API behind Jitsi video calls, SignalR queues, digital signing, and payments.",
    tech: [
      ".NET Core API",
      "SignalR queuing",
      "Jitsi video",
      "Digital signing",
      "Payments",
      "In-system credits",
    ],
    footer: "Production system · Backend engineering",
    images: ["https://placehold.co/1000x900/181614/F4EFE7?text=E-Notary+Management+System"],
    alts: ["E-Notary Management System"],
    featured: true,
  },
];

export default function Projects() {
  const total = String(projects.length).padStart(2, "0");

  return (
    <section id="projects" className="relative overflow-hidden bg-[#171717] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-5%] right-[-15%] h-150 w-150 rounded-full bg-[#B88746]/8 blur-[140px]" />

        <div className="absolute bottom-[-5%] left-[-10%] h-125 w-125 rounded-full bg-white/2.5 blur-[120px]" />

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

      {/* One screen per project */}
      {projects.map((project, index) => {
        const counter = (
          <span className="text-xs font-medium tracking-[0.18em] text-white/30">
            {String(index + 1).padStart(2, "0")} / {total}
          </span>
        );
        const imageRight = index % 2 === 1;

        return (
          <div
            key={project.id}
            id={`project-${project.id}`}
            className={`relative z-10 flex min-h-dvh items-center px-6 pt-22 pb-8 sm:px-8 sm:pt-24 sm:pb-12 lg:px-12 short:pt-20 short:pb-6 ${
              index > 0 ? "border-t border-white/5" : ""
            }`}
          >
            <div className="mx-auto w-full max-w-7xl">
              {index === 0 ? (
                <SectionHeader
                  eyebrow="Selected work"
                  title="Real problems."
                  muted="Thoughtful systems."
                  dark
                >
                  {counter}
                </SectionHeader>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#B88746]" />

                    <span className="text-xs font-semibold tracking-[0.22em] text-[#C79A5B] uppercase">
                      Selected work
                    </span>
                  </div>

                  {counter}
                </div>
              )}

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group mt-[clamp(1.25rem,4dvh,3rem)] grid overflow-hidden rounded-3xl border lg:min-h-[clamp(22rem,calc(100dvh-16rem),38rem)] lg:rounded-4xl ${
                  imageRight ? "lg:grid-cols-[0.85fr_1.15fr]" : "lg:grid-cols-[1.15fr_0.85fr]"
                } ${
                  project.featured
                    ? "border-[#B88746]/20 bg-[#211E1A]"
                    : "border-white/8 bg-white/[0.035]"
                }`}
              >
                {/* Visual */}
                <div
                  className={`relative h-[clamp(9rem,28dvh,22rem)] overflow-hidden bg-[#24211D] lg:h-auto ${
                    imageRight ? "lg:order-2" : ""
                  }`}
                >
                  <div className="absolute inset-0">
                    <ProjectCarousel
                      images={project.images}
                      alt={project.name}
                      alts={project.alts}
                      interval={3500}
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-black/10 via-transparent to-black/50" />

                  {/* Project label */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="rounded-full border border-white/15 bg-black/25 px-3.5 py-2 text-[10px] font-medium tracking-[0.18em] text-white/70 uppercase backdrop-blur-xl">
                      {project.label}
                    </span>
                  </div>

                  {/* Decorative overlay, only where there's room for it */}
                  <div className="pointer-events-none hidden sm:block short:hidden">
                    {project.overlay}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-medium tracking-[0.18em] uppercase ${project.featured ? "text-[#D1A96D]" : "text-[#C79A5B]"}`}
                      >
                        {project.name}
                      </span>

                      <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-[#B88746]/40 group-hover:text-[#C79A5B] sm:flex">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <h3 className="mt-[clamp(0.75rem,3dvh,2rem)] max-w-lg text-[clamp(1.35rem,min(3vw,4.5dvh),2.5rem)] leading-[1.1] font-semibold tracking-[-0.04em]">
                      {project.title}
                    </h3>

                    <p className="mt-[clamp(0.5rem,2dvh,1.5rem)] max-w-lg text-sm leading-6 text-white/40 sm:leading-7">
                      {project.description}
                    </p>

                    <div className="mt-[clamp(0.75rem,3dvh,2rem)] flex flex-wrap gap-1.5 sm:gap-2 max-sm:short:hidden">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/8 bg-white/3 px-2.5 py-1 text-[10px] font-medium text-white/45 sm:px-3 sm:py-1.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 hidden border-t border-white/[0.07] pt-5 sm:block short:hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/25">{project.footer}</span>

                      {project.featured && (
                        <span className="flex items-center gap-2 text-xs font-medium text-[#D1A96D]">
                          Currently active
                          <span className="h-1.5 w-1.5 rounded-full bg-[#B88746]" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        );
      })}
    </section>
  );
}
