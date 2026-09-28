import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import ContactInfo, { HospitalMap } from "@/components/ContactInfo";
import { PageHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = { title: "Contact", description: `Contact ${siteConfig.name}: address, phone, email and opening hours.` };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact us" description="Questions about a service, a visit or your care? We are glad to help." />
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <ContactInfo />
            <Button href={`https://wa.me/${siteConfig.whatsapp}`} variant="accent"><MessageCircle className="h-5 w-5" aria-hidden />Chat on WhatsApp</Button>
            <HospitalMap />
          </div>
          <div><h2 className="mb-6 text-2xl">Send us a message</h2><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
