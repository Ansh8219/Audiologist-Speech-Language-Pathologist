import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: `Meet ${SITE.name}, Audiologist & Speech-Language Pathologist specializing in neuro speech and dysphagia therapy for adults in Chandigarh and Mohali.`,
  path: "/about",
});

const principles = [
  {
    title: "Individualized Care",
    description:
      "Goals are shaped by the person's daily life, priorities, and clinical presentation — not a one-size protocol.",
  },
  {
    title: "Evidence-Informed Practice",
    description:
      "Assessment and therapy draw on current clinical reasoning while remaining practical and person-centered.",
  },
  {
    title: "Functional Goals",
    description:
      "Progress is measured in real contexts: safer meals, clearer speech, and meaningful conversation.",
  },
  {
    title: "Collaborative Care",
    description:
      "Patients, caregivers, and referring clinicians are partners in planning and continuity of care.",
  },
];

const focusAreas = [
  "Hearing assessment & audiology",
  "Dysphagia & swallowing rehabilitation",
  "Speech & language therapy",
  "Neurogenic communication disorders",
  "Adult voice rehabilitation",
  "Head & neck rehabilitation",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Meet Dr. Ayush Thakur"
        description="Audiologist & Speech-Language Pathologist. Specialized speech, swallowing, voice and hearing care for adults — with focus on neuro and head & neck rehabilitation. RCI licensed."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
        secondaryCta={{ href: "/contact", label: "Contact" }}
      />

      <section className="section-y">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />

          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ImagePlaceholder
                variant="portrait"
                src="/doctor.jpg"
                alt="Dr. Ayush Thakur, Audiologist and Speech-Language Pathologist"
                label="Dr. Ayush Thakur"
                sublabel="Specialist Practice"
                objectPosition="center 18%"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
                Professional introduction
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  {SITE.name} provides specialized adult rehabilitation for
                  speech, language, voice, cognitive-communication, and
                  swallowing disorders — with particular focus on neurological
                  conditions affecting communication and swallowing safety.
                </p>
                <p>
                  The practice serves patients and families across{" "}
                  {SITE.serviceArea}, and collaborates with physicians and
                  hospitals seeking specialist SLP support.
                </p>
                <p className="border-l-2 border-champagne-soft pl-4 text-sm text-muted">
                  RCI licensed. Degrees, certifications, hospital affiliations,
                  and years of experience will be listed here once confirmed.
                </p>
              </div>

              <h3 className="mt-10 text-lg font-semibold text-ink">
                Areas of focus
              </h3>
              <ul className="mt-4 space-y-2.5">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.95rem] text-ink-soft"
                  >
                    <span className="mt-2 h-px w-4 bg-champagne" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <Button href="/services" variant="text" className="mt-8" showArrow>
                Explore services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-editorial section-y">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="eyebrow">Rehabilitation Philosophy</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
                A calm, clinical approach to meaningful recovery
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <ImagePlaceholder
                variant="landscape"
                src="/Atmosphere1.jpg"
                alt="Quiet consultation environment"
                label="Clinical Setting"
                sublabel="Private Specialist Practice"
                className="min-h-[200px]"
              />
            </div>
          </div>
          <ProcessSteps className="mt-12" steps={principles} />
        </div>
      </section>

      <CTASection
        title="Begin with a conversation about what matters most."
        description="Share your concern and we will guide the next step."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
        secondaryCta={{ href: "/for-doctors", label: "Refer a Patient" }}
      />
    </>
  );
}
