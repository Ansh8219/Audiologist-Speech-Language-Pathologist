import { Button } from "./Button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative section-y overflow-hidden bg-ink text-white",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 85% 20%, rgba(180,154,114,0.16), transparent 60%), radial-gradient(ellipse 40% 50% at 0% 100%, rgba(135,156,145,0.12), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container-editorial relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            {eyebrow && (
              <p className="mb-4 inline-flex items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.16em] text-champagne uppercase">
                <span className="h-px w-6 bg-champagne" aria-hidden />
                {eyebrow}
              </p>
            )}
            <h2 className="text-balance text-[1.75rem] font-semibold tracking-[-0.03em] leading-[1.15] sm:text-3xl md:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            {description && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                {description}
              </p>
            )}
          </div>
          <div className="btn-row lg:col-span-5 lg:justify-end">
            <Button href={primaryCta.href} size="lg" variant="inverse">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outlineInverse" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
