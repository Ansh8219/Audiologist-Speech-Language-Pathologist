"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "./Button";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
          scrolled || open
            ? "border-b border-border/80 bg-background/90 shadow-[0_1px_0_rgba(23,40,42,0.04)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-editorial flex h-[72px] items-center justify-between gap-6">
          <Link href="/" className="min-w-0 shrink group">
            <span className="block truncate text-[0.95rem] font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-ink-soft md:text-base">
              {SITE.name}
            </span>
            <span className="mt-0.5 hidden truncate text-[0.7rem] tracking-[0.02em] text-muted sm:block">
              {SITE.title}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative px-2.5 py-2 text-[0.8125rem] tracking-[0.01em]",
                    "transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    active ? "text-ink" : "text-ink-soft hover:text-ink",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="inline-flex items-center gap-1">
                    {link.label}
                    <span
                      className={cn(
                        "inline-block h-px w-0 bg-champagne transition-[width] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        "group-hover:w-2.5",
                        active && "w-2.5",
                      )}
                      aria-hidden
                    />
                  </span>
                  <span
                    className={cn(
                      "absolute inset-x-2.5 -bottom-px h-px origin-left scale-x-0 bg-ink/70 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "group-hover:scale-x-100",
                      active && "scale-x-100 bg-ink",
                    )}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="/book-appointment"
              className="hidden sm:inline-flex"
              size="md"
            >
              Book Appointment
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-[9px] border border-border bg-surface text-ink xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation
        open={open}
        pathname={pathname}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
