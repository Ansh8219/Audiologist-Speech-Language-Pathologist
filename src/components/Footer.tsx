import Link from "next/link";
import { FOOTER_CONNECT_LINKS, FOOTER_SERVICE_LINKS, SITE } from "@/lib/constants";
import { HoverArrow } from "./HoverArrow";

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors duration-200 hover:text-white"
    >
      {label}
      <HoverArrow className="text-champagne" />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-[calc(var(--mobile-cta-h)+1rem+env(safe-area-inset-bottom,0px))] text-white lg:pb-0">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 10% 0%, rgba(180,154,114,0.18), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container-editorial relative section-y !py-16 md:!py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xl font-semibold tracking-[-0.02em]">{SITE.name}</p>
            <p className="mt-2 text-sm text-white/65">{SITE.title}</p>
            <p className="mt-1 text-sm text-white/55">{SITE.specialty}</p>
            <p className="mt-4 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-champagne uppercase">
              RCI Licensed
            </p>
            <p className="mt-6 text-sm text-white/55">{SITE.serviceArea}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-champagne uppercase">
                Services
              </p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-champagne uppercase">
                Connect
              </p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_CONNECT_LINKS.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-champagne uppercase">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                <li>{SITE.phone}</li>
                <li>{SITE.whatsapp}</li>
                <li>{SITE.email}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.focus}.
          </p>
          <p className="text-white/35">{SITE.positioning}</p>
        </div>
      </div>
    </footer>
  );
}
