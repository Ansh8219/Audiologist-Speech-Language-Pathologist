import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { AUDIOLOGY_SERVICES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hearing Check-up & Audiology",
  description:
    "Hearing assessment and audiology services in Chandigarh and Mohali: pure tone audiometry, speech audiometry, tympanometry, and hearing aid counselling.",
  path: "/services/audiology",
});

export default function AudiologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Audiology"
        title="Hearing Check-up & Audiology"
        description="Comprehensive hearing assessment and audiological evaluation for adults — with clear guidance on next steps and hearing aid support when appropriate."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
      />

      <section className="section-y">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Hearing & Audiology" },
            ]}
          />

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
                Audiology & Hearing Services
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                Hearing evaluation supports clearer communication, safer daily
                function, and informed decisions about rehabilitation or hearing
                aid use.
              </p>
              <ul className="mt-8">
                {AUDIOLOGY_SERVICES.map((service) => (
                  <li
                    key={service}
                    className="border-t border-border py-4 text-base text-ink-soft last:border-b"
                  >
                    {service}
                  </li>
                ))}
              </ul>
              <Button
                href="/book-appointment"
                variant="text"
                className="mt-8"
                showArrow
              >
                Request a hearing assessment
              </Button>
            </div>

            <div className="border border-border bg-surface p-6 md:p-8 lg:col-span-5 lg:col-start-8">
              <p className="eyebrow">Clinical focus</p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-ink">
                Adult hearing care
              </h3>
              <ul className="mt-6 space-y-3 text-[0.95rem] text-ink-soft">
                <li>Hearing difficulty in daily conversation</li>
                <li>Ringing or sensitivity concerns</li>
                <li>Follow-up after neurological or head & neck change</li>
                <li>Hearing aid counselling and fitting support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Concerned about hearing?"
        description="A structured audiological assessment is the first step toward clearer communication."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
        secondaryCta={{ href: "/contact", label: "Contact" }}
      />
    </>
  );
}
