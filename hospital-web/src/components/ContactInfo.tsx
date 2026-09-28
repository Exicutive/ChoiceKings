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

export function HospitalMap() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-brand-100 shadow-sm">
      <iframe
        title="Choice of Kings Specialist Hospital location"
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d160385.6004138885!2d3.5267222489095844!3d6.500784102990061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x103bf96c6f812e7b%3A0xd2591c25b77f9012!2sChoice%20of%20kings%20Specialist%20hospital%2C%20Lekki%20Scheme%2C%20No%202%2C%2014%20Monsurat%20Olayinka%20Wy%2C%20off%20road%2C%20Ajah%2C%20Lekki%2C%20Lagos!3m2!1d6.4561082!2d3.5819574!4m0!5e0!3m2!1sen!2sng!4v1790603400524!5m2!1sen!2sng"
        className="h-80 w-full border-0 sm:h-[28rem]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
