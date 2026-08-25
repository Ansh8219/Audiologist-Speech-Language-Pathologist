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
        "border-b border-border/70 bg-background pt-28 pb-16 md:pt-32 md:pb-20",
        className,
      )}
    >
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              as="h1"
              titleClassName="text-4xl md:text-5xl lg:text-[3.25rem]"
            />
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
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
          {children && <div className="lg:col-span-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
