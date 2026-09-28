import Button from "./Button";
import { iconFor } from "@/lib/icons";
import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconFor(service.icon);
  return (
    <article className="tile flex flex-col">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700"><Icon className="h-6 w-6" aria-hidden /></span>
      <h3 className="mt-5 text-xl">{service.name}</h3>
      <p className="mt-2 flex-1">{service.description}</p>
      <Button href={`/services/${service.slug}`} variant="outline" size="sm" className="mt-5 self-start">Explore care<span className="sr-only"> for {service.name}</span></Button>
    </article>
  );
}
