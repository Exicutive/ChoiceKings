import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";
import { PageHeader } from "@/components/SectionHeader";
import { getDoctors, getServices } from "@/lib/api";
import { siteConfig } from "@/lib/data";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = { title: "Book an Appointment", description: `Request an appointment at ${siteConfig.name}.` };

export default async function AppointmentsPage({ searchParams }: { searchParams: { service?: string; doctor?: string } }) {
  const [services, doctors] = await Promise.all([getServices(), getDoctors()]);
  return (
    <>
      <PageHeader title="Book an appointment" description="Tell us when and why you would like to visit. We will contact you to confirm." />
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <AppointmentForm services={services} doctors={doctors} initialServiceId={searchParams.service} initialDoctorId={searchParams.doctor} />
          <aside className="h-fit space-y-6 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-7 shadow-sm">
            <div><h2 className="text-xl">What happens next</h2><p className="mt-2">Our team reviews your request and calls or emails you to confirm a time.</p></div>
            <div><h2 className="text-xl">Is it urgent?</h2><p className="mt-2">Do not wait for a confirmation. Call our emergency line: <a href={telHref(siteConfig.emergencyPhone)} className="font-semibold text-rose-700 underline">{siteConfig.emergencyPhone}</a></p></div>
          </aside>
        </div>
      </section>
    </>
  );
}
