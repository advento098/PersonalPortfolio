// Brand icons: Simple Icons (CC0) and Devicon (MIT, see assets/tech/LICENSE-devicon.txt).
// Each SVG is used as a CSS mask so every logo renders in the current text colour.
const icons = import.meta.glob<string>("../assets/tech/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const icon = (slug: string) => icons[`../assets/tech/${slug}.svg`];

// Entries without an icon have no logo available in either set and render as name-only pills.
const stack: { name: string; icon?: string }[] = [
  // Frontend
  { name: "React", icon: icon("react") },
  { name: "TypeScript", icon: icon("typescript") },
  { name: "Tailwind CSS", icon: icon("tailwindcss") },
  { name: "Vite", icon: icon("vite") },
  { name: "React Router", icon: icon("reactrouter") },
  { name: "Axios", icon: icon("axios") },
  { name: "Framer Motion", icon: icon("framermotion") },
  // Backend
  { name: "C#", icon: icon("csharp") },
  { name: ".NET", icon: icon("dotnet") },
  { name: "VB.NET" },
  { name: "EF Core", icon: icon("efcore") },
  { name: "SignalR" },
  { name: ".NET MAUI" },
  { name: "Syncfusion" },
  { name: "QuestPDF" },
  { name: "JWT", icon: icon("jsonwebtokens") },
  // Data & infrastructure
  { name: "MySQL", icon: icon("mysql") },
  { name: "PostgreSQL", icon: icon("postgresql") },
  { name: "Redis", icon: icon("redis") },
  { name: "Firebase", icon: icon("firebase") },
  { name: "Docker", icon: icon("docker") },
  { name: "Jitsi", icon: icon("jitsi") },
  // Hardware
  { name: "C++", icon: icon("cplusplus") },
  { name: "Arduino", icon: icon("arduino") },
  { name: "ESP32", icon: icon("espressif") },
  { name: "Raspberry Pi", icon: icon("raspberrypi") },
  // Tools
  { name: "Git", icon: icon("git") },
  { name: "GitHub", icon: icon("github") },
  { name: "VS Code", icon: icon("vscode") },
  { name: "Visual Studio", icon: icon("visualstudio") },
  { name: "Postman", icon: icon("postman") },
  { name: "Claude", icon: icon("claude") },
  { name: "ChatGPT" },
];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto">
      {/* The list is rendered twice so the -50% loop is seamless; the copy is hidden from screen readers */}
      <ul
        aria-label="Tech stack"
        className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {[...stack, ...stack].map((tech, index) => (
          <li
            key={index}
            aria-hidden={index >= stack.length || undefined}
            className="mr-2 flex shrink-0 items-center gap-2 rounded-full border border-black/6 bg-white px-3.5 py-2 text-xs font-medium text-black/45 transition-colors duration-300 hover:text-[#B88746]"
          >
            {tech.icon && (
              <span
                className="h-4 w-4 bg-current"
                style={{
                  maskImage: `url("${tech.icon}")`,
                  WebkitMaskImage: `url("${tech.icon}")`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
              />
            )}
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
