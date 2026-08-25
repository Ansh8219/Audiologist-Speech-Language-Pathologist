"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "./Button";
import { HoverArrow } from "./HoverArrow";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileNavigation({
  open,
  pathname,
  onClose,
}: MobileNavigationProps) {
  return (
    <div
      id="mobile-navigation"
      className={cn(
        "fixed inset-0 z-40 bg-background/98 backdrop-blur-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden",
        open ? "translate-x-0" : "translate-x-full",
      )}
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col pt-16 sm:pt-[72px]">
        <nav
          className="flex-1 overflow-y-auto px-4 py-5 sm:px-5 sm:py-6"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group flex items-center justify-between border-b border-border/70 py-3.5 text-lg font-medium tracking-[-0.02em] sm:py-4 sm:text-xl",
                      active ? "text-ink" : "text-ink-soft",
                    )}
                    onClick={onClose}
                  >
                    {link.label}
                    <HoverArrow tone="soft" className="text-ink" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-border px-4 py-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:px-5 sm:py-5">
          <Button href="/book-appointment" size="lg" className="w-full">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
