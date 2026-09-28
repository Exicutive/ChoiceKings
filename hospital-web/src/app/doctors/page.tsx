import type { Metadata } from "next";
import DoctorsExplorer from "@/components/DoctorsExplorer";
import { PageHeader } from "@/components/SectionHeader";
import { getDoctors } from "@/lib/api";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = { title: "Our Doctors", description: `Meet the doctors at ${siteConfig.name}.` };

export default async function DoctorsPage() {
  const doctors = await getDoctors();
  return (
    <>
      <PageHeader title="Our doctors" description="Filter by specialty to find the right doctor, then request an appointment." />
      <section className="section"><div className="wrap"><DoctorsExplorer doctors={doctors} /></div></section>
    </>
  );
}
