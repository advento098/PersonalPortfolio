import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-black/6 bg-[#FAF9F7] px-6 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* --------------------------------------------------------
        SECTION INTRO
    --------------------------------------------------------- */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B88746]" />

              <span className="text-xs font-semibold tracking-[0.22em] text-[#B88746] uppercase">
                About me
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-black/40">
              A developer who enjoys turning complicated ideas into software people can actually
              use.
            </p>
          </motion.div>

          {/* Main statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl text-3xl leading-[1.08] font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[3.4rem]">
              I don't just write code.
              <span className="text-black/30">
                {" "}
                I build software around the problems that actually matter.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* --------------------------------------------------------
        ABOUT CONTENT
    --------------------------------------------------------- */}
        <div className="mt-24 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-4xl border border-black/4" />

            <div className="relative overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,0.06)]">
              <div className="relative overflow-hidden rounded-[1.1rem] bg-[#EEEAE4]">
                <img
                  src="https://placehold.co/700x850/F0ECE5/171717?text=Pons+Anthony+Advento"
                  alt="Pons Anthony Advento"
                  className="aspect-7/8 w-full object-cover grayscale-15 transition-transform duration-700 hover:scale-[1.025]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-5 left-5">
                  <div className="rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                    Software Engineer
                  </div>
                </div>
              </div>
            </div>

            {/* Floating number */}
            <div className="absolute -right-4 -bottom-5 hidden rounded-2xl border border-black/[0.07] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.07)] sm:block">
              <p className="text-2xl font-semibold tracking-[-0.04em]">01</p>

              <p className="mt-0.5 text-[10px] tracking-[0.18em] text-black/35 uppercase">
                Developer
              </p>
            </div>
          </motion.div>

          {/* About copy */}
          <div className="lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-lg leading-8 text-black/65"
            >
              I'm <span className="font-semibold text-black">Pons Anthony Advento</span>, a
              full-stack software engineer focused on building practical, reliable, and thoughtfully
              designed digital solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl text-base leading-7 text-black/45"
            >
              My work spans both sides of the application. I enjoy crafting interfaces that feel
              intuitive while building the APIs, databases, authentication, and business logic that
              make those interfaces dependable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-7 text-black/45"
            >
              From real-time attendance and payroll systems to production e-notary platforms with
              video conferencing, digital signatures, payments, and queue management, I enjoy
              working on problems where software has a real purpose behind it.
            </motion.p>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 border-l-2 border-[#B88746]/40 pl-6"
            >
              <p className="text-xl leading-8 font-medium tracking-[-0.02em] text-black/75">
                "Good software should make complexity feel simple."
              </p>

              <p className="mt-2 text-xs tracking-[0.16em] text-black/35 uppercase">My approach</p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-black/[0.07] pt-7 sm:grid-cols-3"
            >
              <div>
                <p className="text-sm font-semibold">Full-Stack</p>
                <p className="mt-1 text-xs text-black/35">Frontend & backend</p>
              </div>

              <div>
                <p className="text-sm font-semibold">Real-time</p>
                <p className="mt-1 text-xs text-black/35">Live applications</p>
              </div>

              <div>
                <p className="text-sm font-semibold">Production</p>
                <p className="mt-1 text-xs text-black/35">Business systems</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================================
        SKILLS
    ========================================================= */}
        <div className="mt-36 border-t border-black/[0.07] pt-16">
          {/* Skills header */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B88746]" />

                <span className="text-xs font-semibold tracking-[0.22em] text-[#B88746] uppercase">
                  Capabilities
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Tools for turning ideas
                <br className="hidden sm:block" />
                <span className="text-black/30"> into working software.</span>
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-sm text-sm leading-6 text-black/40"
            >
              A practical stack built around modern interfaces, reliable APIs, real-time systems,
              and maintainable architecture.
            </motion.p>
          </div>

          {/* Skills grid */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {/* Backend */}
            <SkillCard
              number="01"
              title="Backend Engineering"
              description="Building dependable APIs and business logic that keep complex applications running smoothly."
              technologies={[".NET Core", ".NET Framework", "C#", "VB.NET", "REST APIs", "SignalR"]}
              delay={0}
            />

            {/* Frontend */}
            <SkillCard
              number="02"
              title="Frontend Development"
              description="Creating responsive interfaces that feel intuitive, purposeful, and effortless to navigate."
              technologies={["React", "TypeScript", "Tailwind CSS", "Axios", "Responsive UI"]}
              delay={0.1}
            />

            {/* Database */}
            <SkillCard
              number="03"
              title="Data & Infrastructure"
              description="Designing data-driven applications with reliable persistence and practical deployment workflows."
              technologies={["MySQL", "PostgreSQL", "Firebase", "Docker"]}
              delay={0.2}
            />

            {/* Systems */}
            <SkillCard
              number="04"
              title="Systems & Integrations"
              description="Connecting applications to real-world services, communication systems, and third-party platforms."
              technologies={[
                "Jitsi",
                "SignalR",
                "Authentication",
                "Payment APIs",
                "Real-time Systems",
              ]}
              delay={0.3}
            />
          </div>

          {/* Technology ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 overflow-hidden border-y border-black/6 py-5"
          >
            <div className="flex min-w-max items-center gap-8">
              {[
                "React",
                ".NET",
                "C#",
                "TypeScript",
                "Tailwind",
                "MySQL",
                "PostgreSQL",
                "Firebase",
                "Docker",
                "SignalR",
              ].map((tech, index) => (
                <div key={tech} className="flex items-center gap-8">
                  <span className="text-sm font-medium tracking-[-0.01em] text-black/35 transition-colors hover:text-black/70">
                    {tech}
                  </span>

                  {index !== 9 && <span className="h-1 w-1 rounded-full bg-[#B88746]/50" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
