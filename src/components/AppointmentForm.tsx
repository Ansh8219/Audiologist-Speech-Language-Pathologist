"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { APPOINTMENT_SERVICES } from "@/lib/constants";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  fullName: "",
  phone: "",
  email: "",
  age: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.phone.trim()) errors.phone = "Please enter a phone number.";
  else if (!/^[\d+\-\s()]{8,}$/.test(values.phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (!values.email.trim()) errors.email = "Please enter an email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (values.age && (Number(values.age) < 1 || Number(values.age) > 120))
    errors.age = "Enter a valid age.";
  if (!values.service) errors.service = "Please select a service or concern.";
  return errors;
}

const fieldClass =
  "w-full max-w-full rounded-[9px] border border-border bg-surface px-3.5 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink/40 sm:px-4 sm:text-sm";

const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export function AppointmentForm() {
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
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div
        className="border border-border bg-surface p-5 sm:p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="size-8 text-sage" aria-hidden />
        <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-ink">
          Request received
        </h2>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-soft">
          Thank you, {values.fullName.split(" ")[0] || "there"}. Your appointment
          request has been submitted. We will review the details and contact you
          shortly to confirm the next step. This is not a confirmed booking yet.
        </p>
        <Button
          className="mt-8"
          variant="secondary"
          onClick={() => {
            setValues(initial);
            setSuccess(false);
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-border bg-surface p-4 sm:p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full Name"
          error={errors.fullName}
          className="sm:col-span-2"
        >
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="Your full name"
            className={cn(fieldClass, errors.fullName && "border-red-700/40")}
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </Field>

        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Mobile number"
            className={cn(fieldClass, errors.phone && "border-red-700/40")}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={cn(fieldClass, errors.email && "border-red-700/40")}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field id="age" label="Age" error={errors.age}>
          <input
            id="age"
            name="age"
            type="number"
            inputMode="numeric"
            min={1}
            max={120}
            placeholder="Optional"
            className={cn(fieldClass, errors.age && "border-red-700/40")}
            value={values.age}
            onChange={(e) => update("age", e.target.value)}
            aria-invalid={!!errors.age}
            aria-describedby={errors.age ? "age-error" : undefined}
          />
        </Field>

        <Field id="service" label="Service / Concern" error={errors.service}>
          <select
            id="service"
            name="service"
            className={cn(fieldClass, errors.service && "border-red-700/40")}
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {APPOINTMENT_SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>

        <Field id="preferredDate" label="Preferred Date">
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            className={fieldClass}
            value={values.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
          />
        </Field>

        <Field id="preferredTime" label="Preferred Time">
          <input
            id="preferredTime"
            name="preferredTime"
            type="time"
            className={fieldClass}
            value={values.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
          />
        </Field>

        <Field
          id="message"
          label="Message"
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Share a brief note about what you need help with"
            className={cn(fieldClass, "resize-y")}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Submitting a request does not confirm an appointment.
        </p>
        <Button type="submit" size="lg" disabled={loading} className="min-w-48">
          {loading ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            "Request Appointment"
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-800" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
