import { AppointmentForm } from "@/components/AppointmentForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Book an Appointment",
  description:
    "Request an appointment for dysphagia, neuro speech, aphasia, dysarthria, voice, or cognitive-communication assessment with Dr. Ayush Thakur in Chandigarh and Mohali.",
  path: "/book-appointment",
});

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Book an Appointment"
        description="Tell us a little about what you need help with and we'll guide you through the next step."
      />

      <section className="section-y !pt-10 md:!pt-12">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Book Appointment" },
            ]}
          />

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="order-2 min-w-0 lg:order-1 lg:col-span-4">
              <ImagePlaceholder
                variant="portrait"
                src="/Atmosphere2.jpg"
                alt="Welcoming consultation room"
                label="Next Step"
                sublabel="Request an appointment"
                className="min-h-[240px] sm:min-h-[320px]"
                objectPosition="center"
              />
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                Submitting a request does not confirm an appointment. We review
                each enquiry and contact you with the next step.
              </p>
            </div>
            <div className="order-1 min-w-0 lg:order-2 lg:col-span-8">
              <AppointmentForm />
              <p className="mt-6 text-sm text-muted">
                Prefer to speak first? Visit{" "}
                <a
                  href="/contact"
                  className="text-ink underline-offset-2 hover:underline"
                >
                  Contact
                </a>{" "}
                once phone and WhatsApp details are confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
