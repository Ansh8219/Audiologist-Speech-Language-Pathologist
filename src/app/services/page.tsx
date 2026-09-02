import { Ear, Droplets, MessageSquare, Mic2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { HOME_SERVICES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Adult hearing, speech, swallowing and voice services in Chandigarh and Mohali: audiology, dysphagia therapy, speech & language therapy, and voice rehabilitation.",
  path: "/services",
});

const serviceIcons = {
  "/services/audiology": <Ear className="size-5" strokeWidth={1.5} />,
  "/services/dysphagia": <Droplets className="size-5" strokeWidth={1.5} />,
  "/services/neuro-speech": <MessageSquare className="size-5" strokeWidth={1.5} />,
  "/services/voice": <Mic2 className="size-5" strokeWidth={1.5} />,
} as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Specialized Speech, Swallowing, Voice & Hearing Care"
        description="Focused pathways for hearing, swallowing, speech, language and voice — with clear next steps for patients, caregivers, and referring clinicians."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
      />

      <section className="section-y">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {HOME_SERVICES.map((service) => (
              <ServiceCard
                key={service.href}
                href={service.href}
                title={service.title}
                description={service.description}
                icon={serviceIcons[service.href]}
                featured={service.featured}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service fits?"
        description="Describe the concern on the appointment form — guidance will follow from there."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
        secondaryCta={{ href: "/contact", label: "Contact" }}
      />
    </>
  );
}
