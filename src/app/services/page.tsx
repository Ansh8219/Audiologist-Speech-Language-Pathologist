import {
  Brain,
  Droplets,
  MessageSquare,
  Mic2,
  Waves,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Adult speech therapy services in Chandigarh and Mohali: dysphagia and swallowing therapy, neuro speech, aphasia, dysarthria, cognitive-communication, and voice rehabilitation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Specialized Care for Adults"
        description="Focused pathways for swallowing safety, neurogenic communication, and voice — with clear next steps for patients, caregivers, and referring clinicians."
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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            <ServiceCard
              href="/services/dysphagia"
              title="Dysphagia & Swallowing Therapy"
              description="Clinical assessment and rehabilitation for adults with swallowing difficulty, mealtime risk, or post-neurological dysphagia."
              icon={<Droplets className="size-5" strokeWidth={1.5} />}
              featured
            />
            <ServiceCard
              href="/services/neuro-speech"
              title="Neuro Speech"
              description="Rebuilding speech and language after stroke and neurological change."
              icon={<Brain className="size-5" strokeWidth={1.5} />}
            />
            <ServiceCard
              href="/services/neuro-speech"
              title="Aphasia & Dysarthria"
              description="Language access, speech intelligibility, and functional conversation."
              icon={<MessageSquare className="size-5" strokeWidth={1.5} />}
            />
            <ServiceCard
              href="/services/voice"
              title="Voice Rehabilitation"
              description="Therapy for nodules, polyps, paresis, muscle tension, and functional dysphonia."
              icon={<Mic2 className="size-5" strokeWidth={1.5} />}
            />
            <ServiceCard
              href="/services/neuro-speech"
              title="Cognitive-Communication"
              description="Support for attention, organization, memory strategies, and conversational participation."
              icon={<Waves className="size-5" strokeWidth={1.5} />}
            />
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
