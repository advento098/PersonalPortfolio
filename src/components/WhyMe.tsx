import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { ProcessStep, WhyCard } from "./WhyComponents";

const steps = [
  { title: "Discover", description: "Understand the problem." },
  { title: "Plan", description: "Agree on scope and priorities." },
  { title: "Build", description: "Ship working features." },
  { title: "Refine", description: "Test and polish together." },
  { title: "Deliver", description: "Go live, ready to grow." },
];

export default function WhyMe() {
  return (
    <section
      id="why-me"
      className="relative flex min-h-dvh items-center overflow-hidden border-t border-black/6 bg-[#FAF9F7] px-6 pt-24 pb-12 sm:px-8 lg:px-12 short:pt-20 short:pb-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Why work with me"
          title="Technology is important."
          muted="Trust is everything else."
        />

        {/* ========================================================
        BENEFITS
    ========================================================= */}
        <div className="mt-[clamp(1.5rem,5dvh,3.5rem)] grid gap-3 sm:gap-4 md:grid-cols-3">
          <WhyCard
            number="01"
            title="You don't need a spec."
            description="Bring the problem. I'll help turn it into a clear plan and a working product."
            icon="◎"
            delay={0}
          />

          <WhyCard
            number="02"
            title="One developer, the whole system."
            description="Interface, API, database, and deployment, handled by one person who sees how it all fits."
            icon="◇"
            delay={0.1}
          />

          <WhyCard
            number="03"
            title="Built to last."
            description="Maintainable code that can grow with your business, not quick fixes."
            icon="↗"
            delay={0.2}
          />
        </div>

        {/* ========================================================
        PROCESS
    ========================================================= */}
        <div className="mt-[clamp(1.75rem,6dvh,4rem)]">
          <p className="mb-[clamp(1rem,3dvh,2rem)] text-center text-xs font-semibold tracking-[0.22em] text-[#B88746] uppercase short:hidden">
            How it works
          </p>

          <div className="relative">
            {/* Connecting line, through the centre of the step circles */}
            <div className="absolute top-5 right-[10%] left-[10%] h-px bg-black/8 sm:top-6">
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

            <div className="grid grid-cols-5 gap-2 sm:gap-5">
              {steps.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  number={String(index + 1).padStart(2, "0")}
                  title={step.title}
                  description={step.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
