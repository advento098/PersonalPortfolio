import { motion } from "framer-motion";
import { ProcessStep, TrustItem, WhyCard } from "./WhyComponents";

export default function Development() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#FAF9F7] px-6 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
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

              <span className="text-xs font-semibold tracking-[0.22em] text-[#B88746] uppercase">
                The process
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-black/40">
              Good software doesn't begin with code. It begins with understanding.
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
              From an idea
              <span className="text-black/30"> to software that works.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/45">
              A straightforward development process keeps projects focused, transparent, and moving
              in the right direction. No unnecessary complexity. No disappearing act after
              development begins.
            </p>
          </motion.div>
        </div>

        {/* ========================================================
        PROCESS TIMELINE
    ========================================================= */}
        <div className="relative mt-24">
          {/* Desktop connecting line */}
          <div className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-black/8 lg:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1.4,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full bg-[#B88746]/50"
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-5">
            {/* Step 01 */}
            <ProcessStep
              number="01"
              title="Discover"
              description="We start by understanding your idea, your users, and the problem you're trying to solve."
              delay={0}
            />

            {/* Step 02 */}
            <ProcessStep
              number="02"
              title="Plan"
              description="The idea becomes a clear technical direction with features, architecture, and priorities."
              delay={0.1}
            />

            {/* Step 03 */}
            <ProcessStep
              number="03"
              title="Build"
              description="I turn the plan into a functional product with clean code and thoughtful user experiences."
              delay={0.2}
            />

            {/* Step 04 */}
            <ProcessStep
              number="04"
              title="Refine"
              description="We test, review, improve, and make sure the details feel right before launch."
              delay={0.3}
            />

            {/* Step 05 */}
            <ProcessStep
              number="05"
              title="Deliver"
              description="Your software goes live with a foundation that can continue to evolve with your business."
              delay={0.4}
            />
          </div>
        </div>

        {/* Process philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-[1.75rem] border border-black/[0.07] bg-white p-7 sm:p-9 lg:p-10"
        >
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B88746]/10 text-[#B88746]">
                <span className="text-sm font-semibold">"</span>
              </div>

              <div>
                <p className="max-w-2xl text-lg leading-7 font-medium tracking-[-0.02em] text-black/75">
                  The goal isn't to build the most complicated system. It's to build the right one.
                </p>

                <p className="mt-2 text-xs tracking-[0.16em] text-black/30 uppercase">
                  Engineering philosophy
                </p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-black/[0.07] sm:block" />

            <p className="max-w-sm text-sm leading-6 text-black/40">
              Every technical decision should have a reason behind it—and ultimately serve the
              people using the software.
            </p>
          </div>
        </motion.div>

        {/* ========================================================
        WHY WORK WITH ME
    ========================================================= */}
        <div id="why-me" className="mt-36 border-t border-black/[0.07] pt-16">
          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B88746]" />

                <span className="text-xs font-semibold tracking-[0.22em] text-[#B88746] uppercase">
                  Why work with me
                </span>
              </div>

              <p className="mt-5 max-w-xs text-sm leading-6 text-black/40">
                Because good collaboration is just as important as good engineering.
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
                Technology is important.
                <br />
                <span className="text-black/30">Trust is everything else.</span>
              </h2>
            </motion.div>
          </div>

          {/* ======================================================
          REASONS
      ======================================================= */}
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {/* Reason 01 */}
            <WhyCard
              number="01"
              title="I listen before I build."
              description="Your idea doesn't need to arrive as a perfect technical specification. I can help translate a business problem into a practical software solution."
              icon="◎"
              delay={0}
            />

            {/* Reason 02 */}
            <WhyCard
              number="02"
              title="I think beyond the interface."
              description="A beautiful frontend is only one part of good software. I care about the APIs, data, security, architecture, and logic underneath it."
              icon="◇"
              delay={0.1}
            />

            {/* Reason 03 */}
            <WhyCard
              number="03"
              title="I build for the long run."
              description="Quick fixes can solve today's problem and create tomorrow's headache. I prefer maintainable solutions that can grow alongside your business."
              icon="↗"
              delay={0.2}
            />
          </div>

          {/* ======================================================
          TRUST STRIP
      ======================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 grid overflow-hidden rounded-3xl border border-black/[0.07] bg-[#171717] sm:grid-cols-2 lg:grid-cols-4"
          >
            <TrustItem value="Clear" label="Communication" />

            <TrustItem value="Clean" label="Engineering" />

            <TrustItem value="Thoughtful" label="Problem solving" />

            <TrustItem value="Reliable" label="Delivery" />
          </motion.div>

          {/* ======================================================
          CLOSING STATEMENT
      ======================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.22em] text-[#B88746] uppercase">
              Built with intention
            </p>

            <h3 className="mx-auto mt-6 max-w-4xl text-3xl leading-[1.1] font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Software should feel simple
              <br />
              <span className="text-black/30">even when the problem isn't.</span>
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
