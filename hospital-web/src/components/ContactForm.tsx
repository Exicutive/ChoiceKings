"use client";
import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import Button from "./Button";
import Field from "./Field";
import { sendContactMessage } from "@/lib/api";
import { siteConfig } from "@/lib/data";
import type { ContactMessage } from "@/types";

type Errors = Partial<Record<keyof ContactMessage, string>>;
const empty: ContactMessage = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [v, setV] = useState<ContactMessage>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const set = (k: keyof ContactMessage) => (val: string) => setV((p) => ({ ...p, [k]: val }));

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
    if (v.phone && !/^\+?[0-9\s-]{7,16}$/.test(v.phone)) e.phone = "Enter a valid phone number or leave it blank.";
    if (v.subject.trim().length < 3) e.subject = "Add a short subject.";
    if (v.message.trim().length < 10) e.message = "Write at least a sentence so we can help.";
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("loading");
    try { await sendContactMessage(v); setStatus("success"); setV(empty); } catch { setStatus("error"); }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl bg-accent-50 p-8">
        <CheckCircle2 className="h-10 w-10 text-accent-700" aria-hidden />
        <h3 className="mt-4 text-2xl">Message sent</h3>
        <p className="mt-2">Thank you. Our team will reply as soon as possible.</p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>Send another message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div role="alert" className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
          <p>Your message was not sent. Please try again, or call us on {siteConfig.phone}.</p>
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="c-name" label="Name" required value={v.name} onChange={set("name")} error={errors.name} />
        <Field id="c-email" label="Email" type="email" required value={v.email} onChange={set("email")} error={errors.email} />
        <Field id="c-phone" label="Phone" type="tel" value={v.phone} onChange={set("phone")} error={errors.phone} />
        <Field id="c-subject" label="Subject" required value={v.subject} onChange={set("subject")} error={errors.subject} />
      </div>
      <Field id="c-message" label="Message" as="textarea" required value={v.message} onChange={set("message")} error={errors.message} />
      <Button type="submit" full loading={status === "loading"}>{status === "loading" ? "Sending…" : "Send Message"}</Button>
    </form>
  );
}
