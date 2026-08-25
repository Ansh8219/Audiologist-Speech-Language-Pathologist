import {
  Activity,
  Brain,
  Droplets,
  MessageSquare,
  Mic2,
  Waves,
} from "lucide-react";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceList } from "@/components/ServiceList";
import {
  DYSPHAGIA_SIGNS,
  FAQ_ITEMS,
  NEURO_FOCUS,
  SITE,
  VOICE_CONDITIONS,
} from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: `${SITE.name} | Speech, Swallowing & Neuro Rehabilitation`,
  description:
    "Helping adults communicate better, swallow safely, and live independently. Speech-language pathologist in Chandigarh & Mohali specializing in dysphagia and neuro speech therapy.",
  path: "/",
});

const seekHelp = [
  {
    number: "01",
    title: "After Stroke",
    description:
      "Changes in speech clarity, language, or swallowing safety after a cerebrovascular event.",
    icon: <Activity className="size-5" strokeWidth={1.5} />,
  },
  {
    number: "02",
    title: "Neurological Conditions",
    description:
      "Communication or swallowing difficulties related to Parkinson's, progressive illness, or brain injury.",
    icon: <Brain className="size-5" strokeWidth={1.5} />,
  },
  {
    number: "03",
    title: "Communication Difficulties",
    description:
      "Word-finding challenges, reduced intelligibility, or difficulty participating in conversation.",
    icon: <MessageSquare className="size-5" strokeWidth={1.5} />,
  },
  {
    number: "04",
    title: "Voice Changes",
    description:
      "Hoarseness, strain, reduced volume, or voice changes lasting beyond a short illness.",
    icon: <Mic2 className="size-5" strokeWidth={1.5} />,
  },
];

const process = [
  {
    title: "Share your concern",
    description:
      "Tell us what you or your loved one is experiencing — speech, voice, or swallowing.",
  },
  {
    title: "Clinical assessment",
    description:
      "A structured evaluation clarifies strengths, risks, and functional priorities.",
  },
  {
    title: "Rehabilitation plan",
    description:
      "Therapy goals are individualized, practical, and oriented toward daily life.",
  },
  {
    title: "Ongoing support",
    description:
      "Progress is reviewed with clear guidance for patients, caregivers, and referring clinicians.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden pt-28 md:pt-32">
        <div className="container-editorial">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow animate-fade-up">
                Specialized Adult Rehabilitation
              </p>
              <h1 className="animate-fade-up-delay-1 mt-5 text-balance text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Helping Adults
                <br />
                Communicate Better.
                <br />
                Swallow Safely.
                <br />
                Live Independently.
              </h1>
              <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                Assessment and rehabilitation for speech, language, voice,
                cognitive-communication and swallowing disorders, with a
                specialized focus on neurological conditions.
              </p>
              <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
                <Button href="/book-appointment" size="lg">
                  Book an Appointment
                </Button>
                <Button href="/for-doctors" variant="secondary" size="lg">
                  Refer a Patient
                </Button>
              </div>
              <p className="animate-fade-up-delay-3 mt-8 text-sm tracking-wide text-muted">
                Adults
                <span className="mx-2 text-border" aria-hidden>
                  •
                </span>
                Neurological Conditions
                <span className="mx-2 text-border" aria-hidden>
                  •
                </span>
                Speech
                <span className="mx-2 text-border" aria-hidden>
                  •
                </span>
                Voice
                <span className="mx-2 text-border" aria-hidden>
                  •
                </span>
                Swallowing
              </p>
            </div>

            <div className="animate-fade-up-delay-2 lg:col-span-5">
              <div className="frame-editorial relative z-[1]">
                <ImagePlaceholder
                  variant="hero"
                  src="/doctor.jpg"
                  alt="Dr. Ayush Thakur, Audiologist and Speech-Language Pathologist"
                  label="Dr. Ayush Thakur"
                  sublabel="Specialist Practice"
                  className="relative z-[1] border-ink/10"
                  priority
                  objectPosition="center 18%"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 border-y border-border/80 bg-surface/70 backdrop-blur-[2px] md:mt-20">
          <div className="container-editorial flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between md:py-6">
            <p className="text-sm font-medium tracking-[-0.01em] text-ink">
              {SITE.positioning}
            </p>
            <p className="text-sm text-muted">{SITE.serviceArea}</p>
          </div>
        </div>
      </section>

      {/* SPECIALIZATION */}
      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Specialized Care for Adults"
              description="Focused rehabilitation pathways for swallowing, neurogenic communication, and voice — designed for clarity, safety, and everyday function."
            />
          </Reveal>

          <Reveal className="mt-12">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
              <ServiceCard
                href="/services/dysphagia"
                title="Dysphagia & Swallowing Therapy"
                description="Assessment and rehabilitation for adults who cough, choke, or struggle to eat and drink safely — especially after neurological change."
                icon={<Droplets className="size-5" strokeWidth={1.5} />}
                featured
                className="lg:col-span-1"
              />
              <ServiceCard
                href="/services/neuro-speech"
                title="Neuro Speech"
                description="Therapy for aphasia, dysarthria, and communication recovery after stroke or neurological illness."
                icon={<Brain className="size-5" strokeWidth={1.5} />}
              />
              <ServiceCard
                href="/services/neuro-speech"
                title="Aphasia & Dysarthria"
                description="Support for language access, speech clarity, and meaningful conversation in daily life."
                icon={<MessageSquare className="size-5" strokeWidth={1.5} />}
              />
              <ServiceCard
                href="/services/voice"
                title="Voice Rehabilitation"
                description="Care for vocal strain, nodules, paresis, and functional voice difficulties."
                icon={<Mic2 className="size-5" strokeWidth={1.5} />}
              />
              <ServiceCard
                href="/services"
                title="Cognitive-Communication"
                description="Attention, memory, organization, and conversation skills that support independence."
                icon={<Waves className="size-5" strokeWidth={1.5} />}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DYSPHAGIA FLAGSHIP */}
      <section className="bg-surface-soft">
        <div className="container-editorial section-y">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <p className="eyebrow">Featured Specialty</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
                  Dysphagia & Swallowing Therapy
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                  Difficulty swallowing can affect nutrition, hydration, safety
                  and quality of life. Early assessment helps identify risk and
                  guide practical, individualized rehabilitation.
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.08em] text-ink uppercase">
                      Focus
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-[0.95rem] text-ink-soft">
                      <li>Swallowing safety</li>
                      <li>Mealtime comfort</li>
                      <li>Post-stroke dysphagia</li>
                      <li>Neurological swallowing change</li>
                    </ul>
                  </div>
                  <div className="sm:pt-0">
                    <ImagePlaceholder
                      variant="clinical"
                      src="/Dysphagia.jpg"
                      alt="Adult consultation for swallowing and communication assessment"
                      label="Clinical Assessment"
                      sublabel="Swallowing Therapy"
                      className="min-h-[280px]"
                      objectPosition="center 30%"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-border/80 bg-surface p-7 md:p-8">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                    Signs that may warrant assessment
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {DYSPHAGIA_SIGNS.map((sign) => (
                      <li
                        key={sign}
                        className="flex gap-3 text-[0.95rem] leading-snug text-ink-soft"
                      >
                        <span
                          className="mt-2 h-px w-4 shrink-0 bg-champagne"
                          aria-hidden
                        />
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
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHEN TO SEEK HELP */}
      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <SectionHeading
              eyebrow="Guidance"
              title="When to Seek Help"
              description="These patterns often prompt families and clinicians to request a speech-language pathology assessment."
            />
          </Reveal>
          <Reveal className="mt-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {seekHelp.map((item) => (
                <article key={item.title} className="border-t border-border pt-6">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow">{item.number}</span>
                    <span className="text-sage" aria-hidden>
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEURO SPEECH */}
      <section className="border-y border-border bg-surface">
        <div className="container-editorial section-y">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Neuro Speech"
                  title="Rebuilding Communication After Neurological Changes"
                  description="Therapy emphasizes functional communication — being understood, participating in conversation, and rebuilding confidence after stroke or neurological illness."
                />
                <Button
                  href="/services/neuro-speech"
                  variant="text"
                  className="mt-8"
                  showArrow
                >
                  Explore Neuro Speech Rehabilitation
                </Button>
              </div>
              <div className="space-y-6 lg:col-span-7 lg:pt-4">
                <ImagePlaceholder
                  variant="landscape"
                  src="/Neuro.jpg"
                  alt="Focused neuro rehabilitation session"
                  label="Neuro Speech"
                  sublabel="Adult Rehabilitation"
                  className="min-h-[280px] md:min-h-[320px]"
                  objectPosition="center 25%"
                />
                <ServiceList
                  items={NEURO_FOCUS.map((item) => ({
                    label: item.label,
                    featured: item.featured,
                    href: "/services/neuro-speech",
                  }))}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VOICE */}
      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-5">
                <p className="eyebrow">Voice</p>
                <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-ink md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
                  Voice Rehabilitation
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                  A calm, clinical approach to vocal recovery — focused on
                  efficient voice use, reduced strain, and sustainable daily
                  communication.
                </p>
                <ImagePlaceholder
                  variant="landscape"
                  src="/Voice1.jpg"
                  alt="Voice and communication awareness"
                  label="Voice Care"
                  sublabel="Adult Voice Therapy"
                  className="mt-8 min-h-[220px]"
                  objectPosition="center"
                />
              </div>
              <div className="lg:col-span-7">
                <ul className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                  {VOICE_CONDITIONS.map((condition) => (
                    <li
                      key={condition}
                      className="border-t border-border py-4 text-[0.95rem] text-ink-soft"
                    >
                      {condition}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/services/voice"
                  variant="text"
                  className="mt-6"
                  showArrow
                >
                  Learn about voice therapy
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-surface-soft">
        <div className="container-editorial section-y">
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <ImagePlaceholder
                  variant="portrait"
                  src="/doctor.jpg"
                  alt="Dr. Ayush Thakur"
                  label="Dr. Ayush Thakur"
                  sublabel="Audiologist & SLP"
                  objectPosition="center 18%"
                />
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <SectionHeading
                  eyebrow="About"
                  title="Meet Dr. Ayush Thakur"
                  description="Audiologist & Speech-Language Pathologist specializing in neuro speech and dysphagia / swallowing therapy for adults across Chandigarh, Mohali, and the Tricity."
                />
                <div className="mt-8 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
                  <p>
                    This practice is dedicated to careful assessment and
                    practical rehabilitation — helping adults communicate with
                    clarity and swallow with greater safety and confidence.
                  </p>
                  <p>
                    Professional credentials, affiliations, and detailed
                    biography will be published here shortly.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/about" variant="secondary">
                    About the practice
                  </Button>
                  <Button href="/book-appointment">Book an Appointment</Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOR DOCTORS */}
      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <div className="grid gap-10 border border-border bg-surface p-8 md:p-10 lg:grid-cols-12 lg:p-12">
              <div className="lg:col-span-7">
                <p className="eyebrow">For Doctors</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
                  Physician & Hospital Referrals
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
                  Collaborative speech, communication and swallowing
                  rehabilitation for patients who may benefit from specialist
                  SLP intervention.
                </p>
              </div>
              <div className="flex flex-col justify-end gap-3 lg:col-span-5 lg:items-end">
                <Button href="/for-doctors" size="lg">
                  Refer a Patient
                </Button>
                <Button href="/for-doctors" variant="text" showArrow>
                  View referral indications
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-border bg-surface">
        <div className="container-editorial section-y">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow="Process"
                  title="How It Works"
                  description="A clear, reassuring path from first contact to ongoing rehabilitation."
                />
              </div>
              <div className="lg:col-span-5">
                <ImagePlaceholder
                  variant="landscape"
                  src="/Atmosphere2.jpg"
                  alt="Calm private consultation space"
                  label="The Practice"
                  sublabel="Chandigarh • Mohali • Tricity"
                  className="min-h-[200px]"
                  objectPosition="center"
                />
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-12">
            <ProcessSteps steps={process} />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="container-editorial">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionHeading
                  eyebrow="FAQ"
                  title="Common Questions"
                  description="Clear answers for patients, caregivers, and referring partners."
                />
              </div>
              <div className="lg:col-span-8">
                <FAQAccordion items={FAQ_ITEMS} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Next Step"
        title="Ready to take the next step toward clearer communication and safer swallowing?"
        description="Request an appointment for yourself, a family member, or refer a patient for specialist SLP care."
        primaryCta={{ href: "/book-appointment", label: "Book an Appointment" }}
        secondaryCta={{ href: "/for-doctors", label: "Refer a Patient" }}
      />
    </>
  );
}
