"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HeartPulse, Menu, Phone, ShieldCheck, X } from "lucide-react";
import Button from "./Button";
import { navLinks, siteConfig } from "@/lib/data";
import { cn, telHref } from "@/lib/utils";

const focus = "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-500/40";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const active = (href: string) => path === href || (href !== "/" && path.startsWith(href));

  return (
    <>
      <div className="hidden bg-[linear-gradient(105deg,#291653,#512fa1_58%,#6844c1)] py-2 text-sm text-white lg:block">
        <div className="wrap flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-brand-100"><ShieldCheck className="h-4 w-4" aria-hidden />Personalised, patient-first healthcare</span>
          <div className="flex items-center gap-6">
            <span className="text-brand-100/90">Monday to Sunday: Open 24 hours</span>
            <a href={telHref(siteConfig.emergencyPhone)} className="rounded-full bg-white/10 px-3 py-1 font-semibold transition hover:bg-white/20">Emergency: {siteConfig.emergencyPhone}</a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-brand-100/70 bg-[#fdfcff]/85 py-3 backdrop-blur-xl">
        <div className="wrap flex items-center justify-between">
          <Link href="/" className={cn("flex items-center gap-3 rounded-2xl", focus)}>
            <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-700/30"><span className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.25),transparent_45%)]" /><HeartPulse className="relative h-6 w-6" aria-hidden /></span>
            <span className="max-w-[13.5rem] font-serif text-lg font-semibold leading-tight text-brand-900 sm:text-xl">{siteConfig.name}</span>
          </Link>
          <nav aria-label="Main" className="hidden items-center gap-1 rounded-2xl border border-brand-100 bg-white/70 p-1.5 shadow-[0_12px_30px_-24px_rgba(58,32,126,0.65)] lg:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} aria-current={active(l.href) ? "page" : undefined}
                className={cn("rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-brand-50", focus, active(l.href) ? "bg-brand-50 text-brand-700 shadow-sm" : "text-slate-700")}>
                {l.label}
              </Link>
            ))}
            <Button href="/appointments" size="sm" className="ml-2">Book Appointment</Button>
          </nav>
          <button aria-label="Open menu" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(true)}
            className={cn("grid h-11 w-11 place-items-center rounded-2xl border border-brand-100 bg-white text-brand-900 shadow-sm lg:hidden", focus)}><Menu className="h-6 w-6" /></button>
        </div>
      </header>

      <div className={cn("fixed inset-0 z-50 transition-[visibility] duration-300 lg:hidden", open ? "visible" : "invisible")}>
        <div onClick={() => setOpen(false)} className={cn("absolute inset-0 bg-brand-900/60 backdrop-blur-sm transition-opacity duration-300", open ? "opacity-100" : "opacity-0")} />
        <nav id="mobile-nav" aria-label="Mobile" className={cn("absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col border-l border-brand-100 bg-[#fdfcff] p-6 shadow-2xl transition-transform duration-300", open ? "translate-x-0" : "translate-x-full")}>
          <div className="mb-7 flex items-center justify-between"><span className="font-serif text-lg font-semibold text-brand-900">Menu</span><button aria-label="Close menu" onClick={() => setOpen(false)} className={cn("grid h-10 w-10 place-items-center rounded-xl border border-brand-100 bg-white text-brand-900", focus)}><X className="h-5 w-5" /></button></div>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} aria-current={active(l.href) ? "page" : undefined}
              className={cn("rounded-xl px-4 py-3 text-lg font-medium", focus, active(l.href) ? "bg-brand-50 text-brand-800" : "text-slate-700")}>{l.label}</Link>
          ))}
          <Button href="/appointments" className="mt-7">Book Appointment</Button>
        </nav>
      </div>

      {path !== "/appointments" && (
        <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-brand-100 bg-white/95 p-3 shadow-[0_-10px_30px_-25px_rgba(58,32,126,0.45)] backdrop-blur lg:hidden">
          <Button href={telHref(siteConfig.emergencyPhone)} variant="outline" size="sm" className="flex-1"><Phone className="h-4 w-4" aria-hidden />Emergency</Button>
          <Button href="/appointments" size="sm" className="flex-1">Book Appointment</Button>
        </div>
      )}
    </>
  );
}
