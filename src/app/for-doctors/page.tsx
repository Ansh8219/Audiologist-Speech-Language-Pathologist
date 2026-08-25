import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { ReferralForm } from "@/components/ReferralForm";
import { REFERRAL_INDICATIONS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "For Doctors — Referrals",
  description:
    "Physician and hospital referrals for specialist speech-language pathology: dysphagia, aphasia, dysarthria, cognitive-communication, and voice disorders in Chandigarh and Mohali.",
  path: "/for-doctors",
});

export default function ForDoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinical Collaboration"
        title="Physician & Hospital Referrals"
        description="Collaborative speech, communication and swallowing rehabilitation for patients who may benefit from specialist SLP intervention."
      />

      <section className="section-y">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For Doctors" },
            ]}
          />

          <div className="mb-12">
            <ImagePlaceholder
              variant="landscape"
              src="/Atmosphere1.jpg"
              alt="Professional consultation environment for clinical collaboration"
              label="Clinical Collaboration"
              sublabel="Physician & Hospital Partners"
              className="min-h-[240px] md:min-h-[300px]"
              objectPosition="center 40%"
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
                Referral Indications
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Referrals are welcome for adults requiring specialist assessment
                or ongoing rehabilitation. The focus is clinical coordination —
                clear communication back to the referring team when appropriate.
              </p>
              <ul className="mt-8 space-y-0">
                {REFERRAL_INDICATIONS.map((item) => (
                  <li
                    key={item}
                    className="border-t border-border py-3.5 text-[0.95rem] text-ink-soft last:border-b"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ReferralForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
