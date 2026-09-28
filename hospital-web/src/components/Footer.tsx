import Link from "next/link";
import { ArrowUpRight, Facebook, HeartPulse, Instagram, Mail, MapPin, Phone, Siren } from "lucide-react";
import { getServices } from "@/lib/api";
import { navLinks, siteConfig as s } from "@/lib/data";
import { telHref } from "@/lib/utils";

const socialIcons = { Facebook, Instagram };
const heading = "mb-5 font-serif text-lg text-white";
const link = "group inline-flex items-center gap-1.5 text-brand-100/75 transition-colors hover:text-white";

export default async function Footer() {
  const services = await getServices();
  return (
    <footer className="relative overflow-hidden bg-brand-900 text-brand-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_7%_0%,rgba(154,122,241,0.3),transparent_22%),radial-gradient(circle_at_100%_80%,rgba(118,82,214,0.2),transparent_24%)]" />
      <div className="wrap relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.85fr_1fr_1.15fr] lg:gap-8 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.08] px-3 py-2 font-serif text-xl text-white shadow-lg shadow-brand-950/10"><span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-500 text-white"><HeartPulse className="h-5 w-5" aria-hidden /></span>{s.name}</p>
          <p className="mt-5 max-w-sm text-brand-100/75">{s.description}</p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-100/60">Follow our updates</p>
          <ul className="mt-3 flex gap-2.5">
            {s.socials.map((x) => {
              const Icon = socialIcons[x.label as keyof typeof socialIcons];
              return <li key={x.label}><a href={x.href} aria-label={x.label} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.08] transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/15"><Icon className="h-5 w-5" /></a></li>;
            })}
          </ul>
        </div>
        <nav aria-label="Footer"><h2 className={heading}>Quick links</h2>
          <ul className="space-y-3">{navLinks.map((l) => <li key={l.href}><Link href={l.href} className={link}>{l.label}<ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" aria-hidden /></Link></li>)}</ul>
        </nav>
        <div><h2 className={heading}>Care services</h2>
          <ul className="space-y-3">{services.slice(0, 6).map((x) => <li key={x.id}><Link href={`/services/${x.slug}`} className={link}>{x.name}<ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" aria-hidden /></Link></li>)}</ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-brand-950/10"><h2 className={heading}>Get in touch</h2>
          <address className="space-y-4 text-sm not-italic">
            <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-200" aria-hidden /><span>{s.address}</span></p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-brand-200" aria-hidden /><a href={telHref(s.phone)} className={link}>{s.phone}</a></p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-brand-200" aria-hidden /><a href={`mailto:${s.email}`} className={link}>{s.email}</a></p>
            <p className="flex items-center gap-3 border-t border-white/10 pt-4 font-semibold text-white"><Siren className="h-4 w-4 shrink-0 text-rose-300" aria-hidden />Emergency <a href={telHref(s.emergencyPhone)} className="ml-auto text-rose-200 transition hover:text-white">{s.emergencyPhone}</a></p>
          </address>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-5 text-sm text-brand-100/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {s.name}.</span>
          <span>Compassionate care, close to home.</span>
        </div>
      </div>
    </footer>
  );
}
