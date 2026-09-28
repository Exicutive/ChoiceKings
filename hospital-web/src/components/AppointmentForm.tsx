"use client";
import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import Button from "./Button";
import Field from "./Field";
import { createAppointment } from "@/lib/api";
import { siteConfig } from "@/lib/data";
import type { AppointmentInput, Doctor, Service } from "@/types";

type Errors = Partial<Record<keyof AppointmentInput, string>>;
const empty: AppointmentInput = { fullName: "", email: "", phone: "", date: "", time: "", serviceId: "", doctorId: "", reason: "", message: "" };

function validate(v: AppointmentInput): Errors {
  const e: Errors = {};
  if (v.fullName.trim().length < 2) e.fullName = "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address, for example name@example.com.";
  if (!/^\+?[0-9\s-]{7,16}$/.test(v.phone)) e.phone = "Enter a valid phone number, for example 0801 234 5678.";
  if (!v.date) e.date = "Choose a preferred date.";
  else if (v.date < new Date().toISOString().slice(0, 10)) e.date = "Choose today or a later date.";
  if (!v.time) e.time = "Choose a preferred time.";
  if (!v.serviceId) e.serviceId = "Select a department or service.";
  if (v.reason.trim().length < 5) e.reason = "Tell us briefly why you are visiting.";
  return e;
}

interface Props { services: Service[]; doctors: Doctor[]; initialServiceId?: string; initialDoctorId?: string; }

export default function AppointmentForm({ services, doctors, initialServiceId = "", initialDoctorId = "" }: Props) {
  const [v, setV] = useState<AppointmentInput>({ ...empty, serviceId: initialServiceId, doctorId: initialDoctorId });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const set = (k: keyof AppointmentInput) => (val: string) => setV((p) => ({ ...p, [k]: val }));

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const found = validate(v);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("loading");
    try { await createAppointment(v); setStatus("success"); } catch { setStatus("error"); }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl bg-accent-50 p-8">
        <CheckCircle2 className="h-10 w-10 text-accent-700" aria-hidden />
        <h2 className="mt-4 text-2xl">Request received</h2>
        <p className="mt-2 text-lg">Your appointment request has been received. Our team will contact you to confirm your appointment.</p>
        <Button variant="outline" className="mt-6" onClick={() => { setV(empty); setStatus("idle"); }}>Make another request</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div role="alert" className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
          <p>We could not send your request. Please try again, or call us on {siteConfig.phone}.</p>
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" required value={v.fullName} onChange={set("fullName")} error={errors.fullName} />
        <Field id="email" label="Email" type="email" required value={v.email} onChange={set("email")} error={errors.email} />
        <Field id="phone" label="Phone number" type="tel" required value={v.phone} onChange={set("phone")} error={errors.phone} />
        <Field id="serviceId" label="Department or service" as="select" required value={v.serviceId} onChange={set("serviceId")} error={errors.serviceId}
          options={services.map((s) => ({ value: s.id, label: s.name }))} />
        <Field id="date" label="Preferred date" type="date" required value={v.date} onChange={set("date")} error={errors.date} />
        <Field id="time" label="Preferred time" type="time" required value={v.time} onChange={set("time")} error={errors.time} />
      </div>
      <Field id="doctorId" label="Preferred doctor" as="select" blank="No preference" value={v.doctorId} onChange={set("doctorId")}
        options={doctors.map((d) => ({ value: d.id, label: `${d.name}, ${d.specialty}` }))} />
      <Field id="reason" label="Reason for visit" required value={v.reason} onChange={set("reason")} error={errors.reason} />
      <Field id="message" label="Additional message" as="textarea" value={v.message} onChange={set("message")} />
      <Button type="submit" full loading={status === "loading"}>{status === "loading" ? "Sending request…" : "Request Appointment"}</Button>
    </form>
  );
}
