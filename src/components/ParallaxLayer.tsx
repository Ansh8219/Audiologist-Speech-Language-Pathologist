"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxLayerProps = {
  children: React.ReactNode;
  className?: string;
  /** Parallax intensity — keep low for clinical premium feel */
  strength?: number;
};

export function ParallaxLayer({
  children,
  className,
  strength = 1,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const supportsView =
      typeof CSS !== "undefined" &&
      CSS.supports("(animation-timeline: view()) and (animation-range: 0% 100%)");

    if (supportsView) {
      node.style.setProperty("--parallax-strength", String(strength));
      node.classList.add("scroll-parallax-layer");
      return;
    }

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = node.getBoundingClientRect();
        const viewport = window.innerHeight;
        const progress =
          (viewport - rect.top) / (viewport + rect.height);
        const clamped = Math.min(1, Math.max(0, progress));
        const offset = (clamped - 0.5) * 28 * strength;
        node.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
