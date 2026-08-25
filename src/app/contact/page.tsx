import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: `Contact ${SITE.name} for speech, swallowing, and voice rehabilitation inquiries in Chandigarh, Mohali, and the Tricity.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Reach out with questions about assessment, therapy, or referrals. Appointment requests can also be submitted through the booking form."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
      />

      <section className="section-y">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ImagePlaceholder
                variant="landscape"
                src="/Atmosphere3.jpg"
                alt="Calm practice space for consultations"
                label="Practice Space"
                sublabel={SITE.serviceArea}
                className="mb-8 min-h-[220px]"
                objectPosition="center"
              />
              <p className="text-xl font-semibold tracking-[-0.02em] text-ink">
                {SITE.name}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{SITE.title}</p>
              <p className="mt-1 text-sm text-muted">{SITE.specialty}</p>
              <p className="mt-6 text-sm text-ink-soft">{SITE.serviceArea}</p>

              <dl className="mt-10 space-y-6 border-t border-border pt-8">
                <div>
                  <dt className="text-[0.6875rem] font-semibold tracking-[0.16em] text-champagne uppercase">
                    Phone
                  </dt>
                  <dd className="mt-2 text-base text-ink">{SITE.phone}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-semibold tracking-[0.16em] text-champagne uppercase">
                    WhatsApp
                  </dt>
                  <dd className="mt-2 text-base text-ink">{SITE.whatsapp}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-semibold tracking-[0.16em] text-champagne uppercase">
                    Email
                  </dt>
                  <dd className="mt-2 text-base text-ink">{SITE.email}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
