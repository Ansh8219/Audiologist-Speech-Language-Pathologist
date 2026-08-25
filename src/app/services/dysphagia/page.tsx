import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { DYSPHAGIA_SIGNS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Dysphagia & Swallowing Therapy",
  description:
    "Dysphagia therapy and swallowing assessment in Chandigarh and Mohali. Specialist care for coughing with meals, food sticking, and post-stroke swallowing difficulties.",
  path: "/services/dysphagia",
});

export default function DysphagiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured Specialty"
        title="Dysphagia & Swallowing Therapy"
        description="Difficulty swallowing can affect nutrition, hydration, safety and quality of life. Specialist assessment clarifies risk and guides practical rehabilitation."
        primaryCta={{
          href: "/book-appointment",
          label: "Schedule an Assessment",
        }}
        secondaryCta={{ href: "/for-doctors", label: "Refer a Patient" }}
      />

      <section className="section-y">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Dysphagia" },
            ]}
          />

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
                What dysphagia care involves
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Swallowing therapy begins with understanding how eating and
                  drinking feel and function day to day — then identifying where
                  safety, comfort, or efficiency can improve.
                </p>
                <p>
                  Recommendations may include therapy techniques, mealtime
                  strategies, texture considerations, and caregiver guidance
                  tailored to neurological or medical context.
                </p>
              </div>

              <h3 className="mt-10 text-lg font-semibold text-ink">
                Signs that may warrant assessment
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {DYSPHAGIA_SIGNS.map((sign) => (
                  <li
                    key={sign}
                    className="border-t border-border pt-3 text-sm text-ink-soft"
                  >
                    {sign}
                  </li>
                ))}
              </ul>

              <Button
                href="/book-appointment"
                variant="text"
                className="mt-8"
                showArrow
              >
                Concerned about swallowing? Schedule an Assessment
              </Button>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <ImagePlaceholder
                variant="clinical"
                src="/Dysphagia.jpg"
                alt="Swallowing and communication assessment session"
                label="Swallowing Assessment"
                sublabel="Adult Dysphagia Care"
                objectPosition="center 30%"
              />
              <div className="mt-6 border border-border bg-surface p-6">
                <p className="text-sm font-semibold tracking-[0.08em] text-ink uppercase">
                  Often relevant after
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  <li>Stroke</li>
                  <li>Neurological illness</li>
                  <li>Progressive conditions</li>
                  <li>Hospitalization with new swallowing concerns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Safer swallowing starts with a careful assessment."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
        secondaryCta={{ href: "/contact", label: "Contact" }}
      />
    </>
  );
}
