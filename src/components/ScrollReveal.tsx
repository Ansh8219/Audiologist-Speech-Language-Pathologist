"use client";

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type ScrollRevealVariant = "up" | "down" | "text" | "image" | "fade";

const variantClass: Record<ScrollRevealVariant, string> = {
  up: "scroll-motion-up",
  down: "scroll-motion-down",
  text: "scroll-motion-text",
  image: "scroll-motion-image",
  fade: "scroll-motion-fade",
};

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  delay?: number;
};

function useMotionPrefs() {
  const [supportsView, setSupportsView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReduced = () => setReducedMotion(media.matches);

    let frame = 0;
    frame = requestAnimationFrame(() => {
      updateReduced();
      setSupportsView(
        typeof CSS !== "undefined" &&
          CSS.supports(
            "(animation-timeline: view()) and (animation-range: 0% 100%)",
          ),
      );
    });

    media.addEventListener("change", updateReduced);
    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener("change", updateReduced);
    };
  }, []);

  return { supportsView, reducedMotion };
}

export function ScrollReveal({
  children,
  className,
  variant = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { supportsView, reducedMotion } = useMotionPrefs();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion || supportsView) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, supportsView]);

  const style: CSSProperties | undefined =
    delay > 0
      ? ({ ["--motion-delay" as string]: `${delay}ms` } as CSSProperties)
      : undefined;

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  if (supportsView) {
    return (
      <div
        className={cn(variantClass[variant], className)}
        style={style}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-motion-fallback",
        visible && "is-visible",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export function StaggerReveal({
  children,
  className,
  variant = "up",
  stagger = 90,
}: {
  children: ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  stagger?: number;
}) {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <div className={className}>
      {items.map((child, index) => (
        <ScrollReveal
          key={child.key ?? index}
          variant={variant}
          delay={index * stagger}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

/** Backwards-compatible alias */
export const Reveal = ScrollReveal;
