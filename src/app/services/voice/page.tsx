import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { VOICE_CONDITIONS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Voice Therapy",
  description:
    "Voice therapy in Chandigarh and Mohali for vocal nodules, polyps, muscle tension dysphonia, vocal fold paresis, and functional voice disorders.",
  path: "/services/voice",
});

export default function VoicePage() {
  return (
    <>
      <PageHero
        eyebrow="Voice"
        title="Voice Therapy"
        description="Assessment and therapy for voice disorders and vocal difficulties — reducing strain, improving efficiency, and supporting sustainable daily voice use."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
      />

      <section className="section-y">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Voice" },
            ]}
          />

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
                Voice
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                Voice difficulties can affect work, social life, and confidence.
                Therapy is individualized — with attention to technique,
                awareness, and realistic daily demands.
              </p>
              <Button
                href="/book-appointment"
                variant="text"
                className="mt-8"
                showArrow
              >
                Request a voice consultation
              </Button>
            </div>

            <div className="space-y-6 lg:col-span-6 lg:col-start-7">
              <ImagePlaceholder
                variant="landscape"
                src="/Voice1.jpg"
                alt="Voice awareness and communication"
                label="Voice Rehabilitation"
                sublabel="Adult Voice Care"
                objectPosition="center"
              />
              <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                Conditions commonly addressed
              </h2>
              <ul>
                {VOICE_CONDITIONS.map((condition) => (
                  <li
                    key={condition}
                    className="border-t border-border py-4 text-base text-ink-soft last:border-b"
                  >
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ImagePlaceholder
                variant="landscape"
                src="/voice2.jpg"
                alt="Adult consultation for voice and communication concerns"
                label="Consultation"
                sublabel="Listening & Assessment"
                className="min-h-[280px]"
                objectPosition="center 28%"
              />
            </div>
            <div className="flex flex-col justify-center border border-border bg-surface p-7 lg:col-span-5 md:p-8">
              <p className="eyebrow">In session</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-ink">
                Careful listening. Practical goals.
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
                Voice therapy begins with understanding how your voice feels and
                functions day to day — then building efficient habits you can
                sustain at work and home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Persistent voice change deserves a specialist review."
        description="If hoarseness or strain lasts beyond a short illness, an assessment can help clarify next steps."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
        secondaryCta={{ href: "/contact", label: "Contact" }}
      />
    </>
  );
}
