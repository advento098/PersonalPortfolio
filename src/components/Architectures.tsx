export function ArchitectureNode({
  label,
  highlighted = false,
}: {
  label: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex h-12 flex-1 items-center justify-center rounded-xl border text-[10px] font-medium ${
        highlighted
          ? "border-[#B88746]/40 bg-[#B88746]/10 text-[#D1A96D]"
          : "border-white/[0.08] bg-white/[0.025] text-white/45"
      }`}
    >
      {label}
    </div>
  );
}

export function ArchitectureLine() {
  return (
    <div className="hidden h-px w-5 bg-white/10 sm:block" />
  );
}

export function MiniArchitectureNode({
  label,
}: {
  label: string;
}) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-2 text-center text-[9px] text-white/30">
      {label}
    </div>
  );
}