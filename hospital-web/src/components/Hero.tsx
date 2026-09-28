import { CalendarDays, MapPin, Phone, ShieldCheck } from "lucide-react";
import Button from "./Button";
import { siteConfig as s } from "@/lib/data";
import { telHref } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-50">
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_78%_25%,rgba(154,122,241,0.22),transparent_28%),radial-gradient(circle_at_12%_10%,rgba(221,209,255,0.8),transparent_25%)]" />
      <div className="wrap relative grid items-center gap-12 pb-20 pt-14 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-20">
        <div className="rise">
          <p className="mb-5 inline-flex rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-sm font-semibold tracking-wide text-brand-700">{s.name}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">{s.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-700 sm:text-xl">
            {s.description} From routine check-ups to specialist care, our team is here to listen, explain and treat with respect.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/appointments">Book an Appointment</Button>
            <Button href="/services" variant="outline">Our Services</Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-brand-800">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-brand-600" aria-hidden />Patient-first care</span>
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-5 w-5 text-brand-600" aria-hidden />Easy appointment requests</span>
          </div>
        </div>
        {/* Replace this panel with a real hospital photo (e.g. next/image) once available. */}
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-800 p-8 text-white shadow-[0_28px_55px_-24px_rgba(49,22,103,0.7)] sm:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(154,122,241,0.28),transparent_55%)]" />
          <svg viewBox="0 0 200 200" aria-hidden className="absolute -right-12 -top-12 h-64 w-64 text-white/10">
            <path fill="currentColor" d="M80 10h40v70h70v40h-70v70H80v-70H10V80h70z" />
          </svg>
          <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-brand-100">Always here for you</p>
          <h2 className="relative mt-2 font-serif text-3xl text-white">Visit us</h2>
          <ul className="relative mt-5 space-y-2">
            {s.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4 border-b border-white/15 pb-3"><span>{h.days}</span><span className="font-semibold">{h.time}</span></li>
            ))}
          </ul>
          <div className="relative mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <p className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-100" aria-hidden />{s.address}</p>
            <p className="mt-3 flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-brand-100" aria-hidden /><a href={telHref(s.phone)} className="font-semibold hover:underline">{s.phone}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
