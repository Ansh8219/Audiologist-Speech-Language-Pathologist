"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function MobileBookingBar() {
  const whatsappHref =
    SITE.whatsapp.includes("[")
      ? "/contact"
      : `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 shadow-[0_-8px_24px_rgba(23,40,42,0.08)] backdrop-blur-md lg:hidden">
      <div
        className="grid grid-cols-2 gap-2 px-3 py-2.5"
        style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
      >
        <Link
          href={whatsappHref}
          className="inline-flex items-center justify-center gap-2 rounded-[9px] border border-border bg-surface px-3 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30"
        >
          <MessageCircle className="size-4 text-sage" aria-hidden />
          WhatsApp
        </Link>
        <Link
          href="/book-appointment"
          className="inline-flex items-center justify-center rounded-[9px] bg-ink px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
