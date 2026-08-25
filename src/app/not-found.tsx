import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-28">
      <div className="container-editorial">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
          This page could not be found.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
          The link may be outdated, or the page may have moved. You can return
          home or request an appointment.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/book-appointment" variant="secondary">
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
