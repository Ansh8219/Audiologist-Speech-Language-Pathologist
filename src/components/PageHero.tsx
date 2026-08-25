import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-border/70 bg-background pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20",
        className,
      )}
    >
      <div className="container-editorial">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-8">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              as="h1"
              titleClassName="text-[1.85rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            />
            {(primaryCta || secondaryCta) && (
              <div className="btn-row mt-7 sm:mt-8">
                {primaryCta && (
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="secondary" size="lg">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
          {children && (
            <div className="min-w-0 lg:col-span-4">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
