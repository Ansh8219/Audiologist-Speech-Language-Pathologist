import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: `${SITE.name} | Speech, Swallowing & Neuro Rehabilitation`,
    description:
      "Specialized speech, communication and swallowing rehabilitation for adults in Chandigarh, Mohali and the Tricity. Dysphagia, neuro speech, aphasia, dysarthria and voice therapy.",
    path: "/",
  }),
  metadataBase: new URL(SITE.url),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-[9px] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-mobile-cta">
          {children}
        </main>
        <Footer />
        <MobileBookingBar />
      </body>
    </html>
  );
}
