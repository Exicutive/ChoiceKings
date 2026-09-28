import Button from "./Button";
import { siteConfig } from "@/lib/data";
import { telHref } from "@/lib/utils";

export default function CTASection({ title = "Ready to see a doctor?", text = "Send us a request and our team will contact you to confirm a time that suits you." }: { title?: string; text?: string }) {
  return (
    <section className="bg-brand-900 py-5 text-white sm:py-8">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-brand-700 px-6 py-12 shadow-[0_25px_50px_-28px_rgba(41,22,83,0.9)] sm:px-10 md:flex md:items-center md:justify-between md:gap-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_20%,rgba(221,209,255,0.36),transparent_22%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="relative max-w-xl">
          <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-accent-50">{text}</p>
        </div>
        <div className="relative mt-8 flex flex-wrap items-center gap-4 md:mt-0">
          <Button href="/appointments" variant="light">Book an Appointment</Button>
          <a href={telHref(siteConfig.phone)} className="font-semibold underline underline-offset-4">Or call {siteConfig.phone}</a>
        </div>
        </div>
      </div>
    </section>
  );
}
