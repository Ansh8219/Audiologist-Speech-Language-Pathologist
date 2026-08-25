import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HoverArrowProps = {
  className?: string;
  /** Diagonal arrow for cards */
  diagonal?: boolean;
  /**
   * quiet = hidden until hover (text links)
   * soft = faintly visible, sharpens on hover (cards)
   */
  tone?: "quiet" | "soft";
};

/**
 * Parent must include `group`.
 * Uses opacity + transform only — no color flash lag.
 */
export function HoverArrow({
  className,
  diagonal = false,
  tone = "quiet",
}: HoverArrowProps) {
  const Icon = diagonal ? ArrowUpRight : ArrowRight;

  return (
    <span
      className={cn(
        "relative inline-flex size-4 shrink-0 items-center justify-center overflow-visible",
        className,
      )}
      aria-hidden
    >
      <Icon
        className={cn(
          "size-3.5 stroke-[1.75] text-current",
          "transition-[opacity,transform] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "motion-reduce:transition-none",
          tone === "quiet" &&
            "opacity-0 -translate-x-1.5 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100",
          tone === "soft" &&
            diagonal &&
            "opacity-30 translate-x-0 translate-y-0 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100 group-focus-visible:opacity-100",
          tone === "soft" &&
            !diagonal &&
            "opacity-30 group-hover:translate-x-[3px] group-hover:opacity-100 group-focus-visible:opacity-100",
        )}
      />
    </span>
  );
}
