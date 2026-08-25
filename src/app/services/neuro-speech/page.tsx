import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { ServiceList } from "@/components/ServiceList";
import { NEURO_FOCUS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Neuro Speech Rehabilitation",
  description:
    "Neuro speech therapy in Chandigarh for aphasia, dysarthria, speech intelligibility, and cognitive-communication after stroke or neurological change.",
  path: "/services/neuro-speech",
});

export default function NeuroSpeechPage() {
  return (
    <>
      <PageHero
        eyebrow="Neuro Speech"
        title="Rebuilding Communication After Neurological Changes"
        description="Specialist rehabilitation for aphasia, dysarthria, and cognitive-communication — oriented toward functional conversation and daily independence."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
        secondaryCta={{ href: "/for-doctors", label: "Refer a Patient" }}
      />

      <section className="section-y">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Neuro Speech" },
            ]}
          />

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
                Aphasia and dysarthria, emphasized
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                After stroke or neurological illness, communication may change
                in different ways — language access, speech clarity, or the
                cognitive skills that support conversation. Therapy focuses on
                what matters most in everyday life.
              </p>
              <ImagePlaceholder
                className="mt-8"
                variant="editorial"
                src="/Neuro.jpg"
                alt="Focused neuro rehabilitation and recovery work"
                label="Neuro Speech"
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
                Explore Neuro Speech Rehabilitation
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
