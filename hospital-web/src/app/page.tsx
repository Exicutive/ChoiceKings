import { CalendarCheck, Siren } from "lucide-react";
import Button from "@/components/Button";
import ContactInfo, { MapPlaceholder } from "@/components/ContactInfo";
import CTASection from "@/components/CTASection";
import DoctorCard from "@/components/DoctorCard";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import TestimonialCard from "@/components/TestimonialCard";
import { getDoctors, getServices } from "@/lib/api";
import { benefits, siteConfig, testimonials } from "@/lib/data";
import { telHref } from "@/lib/utils";

export default async function HomePage() {
  const [services, doctors] = await Promise.all([getServices(), getDoctors()]);
  return (
    <>
      <Hero />
      <section aria-label="Emergency and appointments" className="wrap relative z-10 -mt-8 grid gap-4 md:grid-cols-2">
        <div className="flex items-center gap-4 rounded-2xl bg-rose-700 p-6 text-white shadow-[0_18px_35px_-22px_rgba(159,18,57,0.8)]">
          <Siren className="h-9 w-9 shrink-0" aria-hidden />
          <div>
            <p className="font-semibold">In an emergency, call now</p>
            <a href={telHref(siteConfig.emergencyPhone)} className="text-2xl font-bold hover:underline">{siteConfig.emergencyPhone}</a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_18px_35px_-25px_rgba(58,32,126,0.4)]">
          <div className="flex items-center gap-4">
            <CalendarCheck className="h-9 w-9 shrink-0 text-accent-700" aria-hidden />
            <div><p className="font-semibold text-brand-900">Need to see a doctor?</p><p className="text-sm">Request an appointment in a few minutes.</p></div>
          </div>
          <Button href="/appointments" size="sm">Book Now</Button>
        </div>
      </section>

      <div className="mt-16"><StatsSection /></div>

      <section className="section" aria-labelledby="services-title">
        <div className="wrap">
          <div id="services-title"><SectionHeader title="Care for every stage of life" description="Our main services, all under one roof." /></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.slice(0, 8).map((s) => <ServiceCard key={s.id} service={s} />)}</div>
          <div className="mt-10"><Button href="/services" variant="outline">View All Services</Button></div>
        </div>
      </section>

      <section className="section bg-brand-50/70">
        <div className="wrap">
          <SectionHeader title="Why patients choose us" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-brand-100 bg-white/70 p-6 shadow-sm">
                <Icon className="h-7 w-7 text-accent-700" aria-hidden />
                <h3 className="mt-3 text-xl">{title}</h3>
                <p className="mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeader title="Meet our doctors" description="Experienced clinicians who take time to listen." />
          <div className="grid gap-6 md:grid-cols-3">{doctors.slice(0, 3).map((d) => <DoctorCard key={d.id} doctor={d} />)}</div>
          <div className="mt-10"><Button href="/doctors" variant="outline">See the Whole Team</Button></div>
        </div>
      </section>

      <CTASection />

      <section className="section">
        <div className="wrap">
          <SectionHeader title="What patients say" description="Demo testimonials. Replace with real, consented patient feedback." />
          <div className="grid gap-10 md:grid-cols-3">{testimonials.map((t) => <TestimonialCard key={t.id} t={t} />)}</div>
        </div>
      </section>

      <section className="section bg-brand-50" id="contact">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div><SectionHeader title="Find us" description="Visit, call or send us a message." /><ContactInfo /></div>
          <MapPlaceholder />
        </div>
      </section>
    </>
  );
}
