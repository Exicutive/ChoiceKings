import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { PageHeader } from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { getServices } from "@/lib/api";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = { title: "Services", description: `Medical services at ${siteConfig.name}.` };

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageHeader title="Our services" description="Everything from routine consultations to specialist and emergency care." />
      <section className="section">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((s) => <ServiceCard key={s.id} service={s} />)}</div>
      </section>
      <CTASection />
    </>
  );
}
