"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const fieldClass =
  "w-full rounded-[9px] border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink/40";

export function ContactForm() {
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
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter an email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email.";
    if (!values.message.trim()) next.message = "Please include a short message.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 650));
    setLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div
        className="border border-border bg-surface p-8"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="size-8 text-sage" aria-hidden />
        <h2 className="mt-4 text-xl font-semibold text-ink">Message sent</h2>
        <p className="mt-2 text-ink-soft">
          Thank you for reaching out. Your message has been received and will be
          reviewed shortly.
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
      <div className="grid gap-5">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            className={cn(fieldClass, errors.name && "border-red-700/40")}
            placeholder="Your name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1.5 text-sm text-red-800" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              className={cn(fieldClass, errors.email && "border-red-700/40")}
              placeholder="you@example.com"
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
            <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium">
              Phone
            </label>
            <input
              id="contact-phone"
              type="tel"
              className={fieldClass}
              placeholder="Optional"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            className={cn(fieldClass, "resize-y", errors.message && "border-red-700/40")}
            placeholder="How can we help?"
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1.5 text-sm text-red-800" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-7" disabled={loading}>
        {loading ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
