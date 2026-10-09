import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";
import TechMarquee from "./TechMarquee";

export default function Services() {
  return (
    <section
      id="services"
      className="relative flex min-h-dvh items-center overflow-hidden border-t border-black/6 bg-[#FAF9F7] px-6 pt-24 pb-12 sm:px-8 lg:px-12 short:pt-20 short:pb-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="What I do"
          title="Web apps and business systems,"
          muted="built end to end."
        />

        <div className="mt-[clamp(1.5rem,5dvh,3.5rem)] grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <SkillCard
            number="01"
            title="Web applications"
            description="Responsive interfaces that are easy to learn and pleasant to use."
            technologies={["React", "TypeScript", "Tailwind CSS"]}
            delay={0}
          />

          <SkillCard
            number="02"
            title="Backend & APIs"
            description="APIs, authentication, and business logic that hold up in production."
            technologies={[".NET Core", ".NET Framework", "C#", "REST APIs"]}
            delay={0.1}
          />

          <SkillCard
            number="03"
            title="Data & deployment"
            description="Reliable data storage and practical deployment workflows."
            technologies={["MySQL", "PostgreSQL", "Firebase", "Docker"]}
            delay={0.2}
          />

          <SkillCard
            number="04"
            title="Integrations"
            description="Payments, video calls, real-time updates, and PDF documents connected to your system."
            technologies={["Payment APIs", "Jitsi", "SignalR", "QuestPDF"]}
            delay={0.3}
          />
        </div>

        <div className="mt-[clamp(1.25rem,4dvh,2.5rem)]">
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}
