import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { siteConfig as s } from "@/lib/data";
import { telHref } from "@/lib/utils";

export default function ContactInfo() {
  const items = [
    { icon: MapPin, label: "Address", body: <p>{s.address}</p> },
    { icon: Phone, label: "Phone", body: <a href={telHref(s.phone)} className="hover:underline">{s.phone}</a> },
    { icon: Mail, label: "Email", body: <a href={`mailto:${s.email}`} className="break-all hover:underline">{s.email}</a> },
    { icon: Clock, label: "Opening hours", body: <ul>{s.hours.map((h) => <li key={h.days}>{h.days}: {h.time}</li>)}</ul> },
    { icon: Siren, label: "Emergency", body: <a href={telHref(s.emergencyPhone)} className="font-semibold text-rose-700 hover:underline">{s.emergencyPhone}</a> },
  ];
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map(({ icon: Icon, label, body }) => (
        <li key={label} className="flex min-w-0 gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700"><Icon className="h-5 w-5" aria-hidden /></span>
          <div className="min-w-0"><p className="font-semibold text-brand-900">{label}</p>{body}</div>
        </li>
      ))}
    </ul>
  );
}

export function MapPlaceholder() {
  return (
    <div role="img" aria-label="Map placeholder" className="relative grid min-h-64 place-items-center overflow-hidden rounded-[1.75rem] border border-dashed border-brand-600/40 bg-brand-50 p-8 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(154,122,241,0.24),transparent_21%),radial-gradient(circle_at_76%_75%,rgba(221,209,255,0.8),transparent_26%)]" />
      <div className="relative">
        <MapPin className="mx-auto h-10 w-10 text-brand-600" aria-hidden />
        <p className="mt-3 font-semibold text-brand-900">Map placeholder</p>
        <p className="text-sm">Embed the hospital location here once it is confirmed.</p>
      </div>
    </div>
  );
}
