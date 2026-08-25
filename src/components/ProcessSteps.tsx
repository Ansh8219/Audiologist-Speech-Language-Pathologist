import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: Step[];
  className?: string;
};

export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <ol
      className={cn(
        "grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6",
        className,
      )}
    >
      {steps.map((step, index) => (
        <li key={step.title} className="relative border-t border-border pt-6">
          <span className="eyebrow text-champagne">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-ink">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
