import { cn } from "@/lib/utils";

type Tone = "primary" | "secondary" | "neutral";

export default function MangoBadge({
  children,
  tone = "primary",
}: {
  children: string;
  tone?: Tone;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tone === "primary" && "bg-[#7e5700] text-white",
        tone === "secondary" && "bg-[#006e1c] text-white",
        tone === "neutral" && "bg-slate-700 text-white"
      )}
    >
      {children}
    </span>
  );
}

