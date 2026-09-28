import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";
import { getService, getServices } from "@/lib/api";
import { iconFor } from "@/lib/icons";
import { siteConfig } from "@/lib/data";
import { telHref } from "@/lib/utils";

export async function generateStaticParams() {
  return (await getServices()).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = await getService(params.slug);
  return { title: s?.name ?? "Service", description: s?.description };
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);
  if (!service) notFound();
  const Icon = iconFor(service.icon);
  return (
    <div className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <article>
          <span className="grid h-14 w-14 place-items-center rounded-lg bg-accent-50 text-accent-700"><Icon className="h-7 w-7" aria-hidden /></span>
          <h1 className="mt-5 text-4xl sm:text-5xl">{service.name}</h1>
          <p className="mt-4 max-w-2xl text-xl">{service.description}</p>
          <h2 className="mt-10 text-2xl">What this includes</h2>
          <ul className="mt-4 space-y-3">
            {service.details.map((d) => <li key={d} className="flex gap-3 text-lg"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-700" aria-hidden />{d}</li>)}
          </ul>
        </article>
        <aside className="h-fit rounded-xl bg-brand-50 p-6">
          <h2 className="text-2xl">Book this service</h2>
          <p className="mt-2">Send a request and our team will confirm your appointment.</p>
          <Button href={`/appointments?service=${service.id}`} full className="mt-5">Book an Appointment</Button>
          <p className="mt-4 text-sm">Or call <a href={telHref(siteConfig.phone)} className="font-semibold underline">{siteConfig.phone}</a></p>
          <Button href="/services" variant="outline" size="sm" className="mt-6">All services</Button>
        </aside>
      </div>
    </div>
  );
}
