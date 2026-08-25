import Link from "next/link";
import { HoverArrow } from "./HoverArrow";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  featured?: boolean;
  className?: string;
};

export function ServiceCard({
  href,
  title,
  description,
  icon,
  featured = false,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border border-border/90 bg-surface p-5",
        "shadow-[0_1px_0_rgba(23,40,42,0.03)]",
        "transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-ink/30 hover:shadow-[0_18px_40px_rgba(23,40,42,0.06)]",
        "md:p-7 md:hover:-translate-y-1",
        featured && "md:p-8 lg:row-span-2",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden
      />
      <div className="flex items-start justify-between gap-4">
        {icon && (
          <span
            className="text-sage transition-colors duration-200 group-hover:text-ink-soft"
            aria-hidden
          >
            {icon}
          </span>
        )}
        <HoverArrow diagonal tone="soft" className="ml-auto text-ink" />
      </div>
      <h3
        className={cn(
          "mt-6 font-semibold tracking-[-0.025em] text-ink",
          featured ? "text-2xl md:text-[1.75rem]" : "text-lg md:text-xl",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-3 leading-relaxed text-ink-soft",
          featured ? "text-base md:text-[1.05rem]" : "text-sm md:text-[0.95rem]",
        )}
      >
        {description}
      </p>
      {featured && (
        <span className="mt-auto pt-8 text-[0.65rem] font-semibold tracking-[0.16em] text-champagne uppercase">
          Featured specialty
        </span>
      )}
    </Link>
  );
}
