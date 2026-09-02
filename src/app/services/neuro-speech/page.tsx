import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { ServiceList } from "@/components/ServiceList";
import { NEURO_FOCUS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Speech & Language Therapy",
  description:
    "Speech and language therapy in Chandigarh for aphasia, dysarthria, speech intelligibility, and cognitive-communication after stroke or neurological change.",
  path: "/services/neuro-speech",
});

export default function NeuroSpeechPage() {
  return (
    <>
      <PageHero
        eyebrow="Speech & Language"
        title="Speech & Language Therapy"
        description="Assessment and rehabilitation for speech, language and communication difficulties — with specialized focus on neurogenic conditions and functional everyday communication."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
        secondaryCta={{ href: "/for-doctors", label: "Refer a Patient" }}
      />

      <section className="section-y">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Speech & Language" },
            ]}
          />

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
                Neurogenic communication, emphasized
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                After stroke, TBI, or neurological illness, communication may
                change in different ways — language access, speech clarity, or
                the cognitive skills that support conversation. Therapy focuses
                on what matters most in everyday life.
              </p>
              <ImagePlaceholder
                className="mt-8"
                variant="editorial"
                src="/Neuro.jpg"
                alt="Focused neuro rehabilitation and recovery work"
                label="Speech & Language"
                sublabel="Adult Rehabilitation"
                objectPosition="center 22%"
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ServiceList
                items={NEURO_FOCUS.map((item) => ({
                  label: item.label,
                  featured: item.featured,
                }))}
              />
              <div className="mt-10 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
                <p>
                  Sessions may include structured language work, speech clarity
                  practice, conversation-based rehabilitation, and strategies
                  caregivers can reinforce at home.
                </p>
                <p>
                  Goals are collaborative and functional — being understood,
                  asking for needs, and participating in relationships again.
                </p>
              </div>
              <Button
                href="/book-appointment"
                variant="text"
                className="mt-8"
                showArrow
              >
                Explore speech & language therapy
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Communication recovery deserves specialist attention."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
        secondaryCta={{ href: "/services/dysphagia", label: "Swallowing therapy" }}
      />
    </>
  );
}
