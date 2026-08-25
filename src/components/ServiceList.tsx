import Link from "next/link";
import { HoverArrow } from "./HoverArrow";
import { cn } from "@/lib/utils";

type ServiceListItem = {
  label: string;
  href?: string;
  featured?: boolean;
};

type ServiceListProps = {
  items: readonly ServiceListItem[] | ServiceListItem[];
  className?: string;
};

export function ServiceList({ items, className }: ServiceListProps) {
  return (
    <ul className={cn("grid gap-px bg-border/80 sm:grid-cols-2", className)}>
      {items.map((item) => {
        const row = (
          <span
            className={cn(
              "group flex items-center justify-between gap-3 bg-background/90 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4",
              "transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
              item.href && "hover:bg-surface",
              item.featured
                ? "text-base font-semibold text-ink sm:text-lg md:text-xl"
                : "text-[0.95rem] text-ink-soft group-hover:text-ink sm:text-base",
            )}
          >
            {item.label}
            <span className="flex min-w-0 flex-1 items-center gap-3">
              <span
                className={cn(
                  "h-px grow bg-border transition-colors duration-200 group-hover:bg-champagne/50",
                  item.featured ? "max-w-16" : "max-w-10",
                )}
                aria-hidden
              />
              {item.href && <HoverArrow className="text-ink" />}
            </span>
          </span>
        );

        return (
          <li key={item.label}>
            {item.href ? (
              <Link href={item.href} className="block">
                {row}
              </Link>
            ) : (
              row
            )}
          </li>
        );
      })}
    </ul>
  );
}
