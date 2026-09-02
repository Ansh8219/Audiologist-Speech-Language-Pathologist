import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderVariant =
  | "hero"
  | "portrait"
  | "clinical"
  | "editorial"
  | "landscape";

type ImagePlaceholderProps = {
  variant?: PlaceholderVariant;
  label?: string;
  sublabel?: string;
  className?: string;
  /** Path under /public, e.g. "/doctor.jpg" */
  src?: string;
  alt?: string;
  priority?: boolean;
  objectPosition?: string;
};

const variantStyles: Record<PlaceholderVariant, string> = {
  hero: "aspect-[4/5] min-h-[280px] sm:min-h-[360px] md:min-h-[520px]",
  portrait: "aspect-[3/4] min-h-[260px] sm:min-h-[320px] md:min-h-[360px]",
  clinical: "aspect-[4/5] min-h-[260px] sm:min-h-[320px] md:min-h-[380px]",
  editorial: "aspect-[5/6] min-h-[280px] sm:min-h-[340px] md:min-h-[400px]",
  landscape: "aspect-[16/10] min-h-[180px] sm:min-h-[220px] md:min-h-[240px]",
};

export function ImagePlaceholder({
  variant = "portrait",
  label,
  sublabel,
  className,
  src,
  alt,
  priority = false,
  objectPosition = "center",
}: ImagePlaceholderProps) {
  const hasImage = Boolean(src);

  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-border/80",
        "shadow-[0_24px_60px_rgba(23,40,42,0.07)]",
        hasImage ? "bg-surface-soft" : "bg-surface-soft placeholder-texture",
        variantStyles[variant],
        className,
      )}
      aria-label={
        alt || (label ? `Photograph: ${label}` : "Image placeholder")
      }
    >
      {hasImage ? (
        <Image
          src={src!}
          alt={alt || label || ""}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes="(max-width: 768px) 100vw, 42vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
          viewBox="0 0 400 500"
          fill="none"
          aria-hidden
        >
          <path
            d="M-20 120 C 80 40, 160 220, 260 140 S 420 80, 460 180"
            stroke="var(--sage)"
            strokeWidth="1"
          />
          <path
            d="M-40 280 C 90 200, 170 360, 290 280 S 430 220, 480 320"
            stroke="var(--champagne)"
            strokeWidth="0.8"
            opacity="0.75"
          />
          <circle
            cx="320"
            cy="90"
            r="48"
            stroke="var(--border)"
            strokeWidth="1"
          />
          <circle
            cx="70"
            cy="400"
            r="70"
            stroke="var(--sage-soft)"
            strokeWidth="1.2"
          />
          <line
            x1="40"
            y1="40"
            x2="118"
            y2="40"
            stroke="var(--champagne)"
            strokeWidth="1"
          />
        </svg>
      )}

      <div className="pointer-events-none absolute left-5 top-5 size-4 border-l border-t border-white/50 mix-blend-difference" />
      <div className="pointer-events-none absolute top-5 right-5 size-4 border-t border-r border-white/50 mix-blend-difference" />
      <div className="pointer-events-none absolute bottom-5 left-5 size-4 border-b border-l border-white/50 mix-blend-difference" />
      <div className="pointer-events-none absolute right-5 bottom-5 size-4 border-r border-b border-white/50 mix-blend-difference" />

      {(label || sublabel) && (
        <>
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 h-1/3",
              hasImage
                ? "bg-gradient-to-t from-ink/55 via-ink/15 to-transparent"
                : "bg-gradient-to-t from-[#EBE6DC]/85 to-transparent",
            )}
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
            <div
              className={cn(
                "max-w-[16rem] border-t pt-3 sm:pt-4",
                hasImage ? "border-white/25" : "border-ink/12",
              )}
            >
              {label && (
                <p
                  className={cn(
                    "text-[0.7rem] font-semibold tracking-[0.18em] uppercase",
                    hasImage ? "text-white" : "text-ink",
                  )}
                >
                  {label}
                </p>
              )}
              {sublabel && (
                <p
                  className={cn(
                    "mt-1.5 text-[0.68rem] tracking-[0.14em] uppercase",
                    hasImage ? "text-white/70" : "text-muted",
                  )}
                >
                  {sublabel}
                </p>
              )}
            </div>
          </figcaption>
        </>
      )}
    </figure>
  );
}
