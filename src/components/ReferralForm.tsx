"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type FormState = {
  doctorName: string;
  hospital: string;
  specialty: string;
  email: string;
  phone: string;
  patientInitials: string;
  indication: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  doctorName: "",
  hospital: "",
  specialty: "",
  email: "",
  phone: "",
  patientInitials: "",
  indication: "",
  notes: "",
};

const fieldClass =
  "w-full rounded-[9px] border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink/40";

export function ReferralForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: FormErrors = {};
    if (!values.doctorName.trim())
      next.doctorName = "Please enter the referring clinician's name.";
    if (!values.email.trim()) next.email = "Please enter a contact email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email.";
    if (!values.indication.trim())
      next.indication = "Please note the referral indication.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div
        className="border border-border bg-surface p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="size-8 text-sage" aria-hidden />
        <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-ink">
          Referral received
        </h2>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-soft">
          Thank you for the referral. The request has been received and will be
          reviewed for clinical coordination. You will be contacted to confirm
          next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-border bg-surface p-6 md:p-8"
    >
      <div className="mb-6 border-b border-border pb-5">
        <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink">
          Referral Form
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          For physician and hospital collaboration. Patient identifiers should
          remain limited until secure coordination is arranged.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="doctorName" className="mb-1.5 block text-sm font-medium">
            Referring Clinician
          </label>
          <input
            id="doctorName"
            className={cn(fieldClass, errors.doctorName && "border-red-700/40")}
            placeholder="Dr. Name"
            value={values.doctorName}
            onChange={(e) => update("doctorName", e.target.value)}
            aria-invalid={!!errors.doctorName}
          />
          {errors.doctorName && (
            <p className="mt-1.5 text-sm text-red-800" role="alert">
              {errors.doctorName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="hospital" className="mb-1.5 block text-sm font-medium">
            Hospital / Clinic
          </label>
          <input
            id="hospital"
            className={fieldClass}
            placeholder="Institution name"
            value={values.hospital}
            onChange={(e) => update("hospital", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="specialty" className="mb-1.5 block text-sm font-medium">
            Specialty
          </label>
          <input
            id="specialty"
            className={fieldClass}
            placeholder="e.g. Neurology"
            value={values.specialty}
            onChange={(e) => update("specialty", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="ref-email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="ref-email"
            type="email"
            className={cn(fieldClass, errors.email && "border-red-700/40")}
            placeholder="clinic@example.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-800" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="ref-phone" className="mb-1.5 block text-sm font-medium">
            Phone
          </label>
          <input
            id="ref-phone"
            type="tel"
            className={fieldClass}
            placeholder="Contact number"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="patientInitials" className="mb-1.5 block text-sm font-medium">
            Patient Initials
          </label>
          <input
            id="patientInitials"
            className={fieldClass}
            placeholder="Optional"
            value={values.patientInitials}
            onChange={(e) => update("patientInitials", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="indication" className="mb-1.5 block text-sm font-medium">
            Referral Indication
          </label>
          <input
            id="indication"
            className={cn(fieldClass, errors.indication && "border-red-700/40")}
            placeholder="e.g. Post-stroke dysphagia"
            value={values.indication}
            onChange={(e) => update("indication", e.target.value)}
            aria-invalid={!!errors.indication}
          />
          {errors.indication && (
            <p className="mt-1.5 text-sm text-red-800" role="alert">
              {errors.indication}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className="mb-1.5 block text-sm font-medium">
            Clinical Notes
          </label>
          <textarea
            id="notes"
            rows={4}
            className={cn(fieldClass, "resize-y")}
            placeholder="Relevant history, urgency, and preferred contact pathway"
            value={values.notes}
            onChange={(e) => update("notes", e.target.value)}
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          For clinical collaboration — not a sales inquiry.
        </p>
        <Button type="submit" size="lg" disabled={loading} className="min-w-44">
          {loading ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            "Refer a Patient"
          )}
        </Button>
      </div>
    </form>
  );
}
