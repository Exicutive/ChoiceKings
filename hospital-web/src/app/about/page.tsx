import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import DoctorCard from "@/components/DoctorCard";
import SectionHeader, { PageHeader } from "@/components/SectionHeader";
import StatsSection from "@/components/StatsSection";
import { getDoctors } from "@/lib/api";
import { about, siteConfig } from "@/lib/data";

export const metadata: Metadata = { title: "About Us", description: `About ${siteConfig.name}: our mission, values, facilities and medical team.` };

export default async function AboutPage() {
  const doctors = await getDoctors();
  return (
    <>
      <PageHeader title={`About ${siteConfig.name}`} description={about.intro} />
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-brand-100 bg-white p-8 shadow-sm"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Our purpose</p><h2 className="mt-2 text-2xl">Our mission</h2><p className="mt-3 text-lg">{about.mission}</p></div>
          <div className="rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-8 shadow-sm"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Where we are going</p><h2 className="mt-2 text-2xl">Our vision</h2><p className="mt-3 text-lg">{about.vision}</p></div>
        </div>
      </section>
      <section className="section bg-brand-50">
        <div className="wrap">
          <SectionHeader title="What guides our care" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v) => <div key={v.title} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"><span className="mb-4 block h-1 w-10 rounded-full bg-brand-600" /><h3 className="text-xl">{v.title}</h3><p className="mt-2">{v.text}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader title="Our story" />
            <ol className="space-y-8 border-l-2 border-brand-100">
              {about.history.map((h) => <li key={h.label} className="pl-6"><h3 className="text-xl">{h.label}</h3><p className="mt-1">{h.text}</p></li>)}
            </ol>
          </div>
          <div>
            <SectionHeader title="Our facilities" />
            <ul className="space-y-3">
              {about.facilities.map((f) => <li key={f} className="flex gap-3 text-lg"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-700" aria-hidden />{f}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <StatsSection />
      <section className="section">
        <div className="wrap">
          <SectionHeader title="Our medical team" />
          <div className="grid gap-6 md:grid-cols-3">{doctors.slice(0, 3).map((d) => <DoctorCard key={d.id} doctor={d} />)}</div>
          <div className="mt-10"><Button href="/doctors" variant="outline">See the Whole Team</Button></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
