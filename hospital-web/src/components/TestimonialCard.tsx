import type { Testimonial } from "@/types";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative rounded-2xl border border-brand-100 bg-white p-7 shadow-[0_15px_35px_-28px_rgba(58,32,126,0.45)]">
      <span className="absolute right-6 top-3 font-serif text-7xl leading-none text-brand-100" aria-hidden>“</span>
      <blockquote className="relative text-lg leading-relaxed text-slate-800">{t.text}</blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-semibold text-brand-900">{t.name}</span>, {t.context}
        <span className="ml-2 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">Demo content</span>
      </figcaption>
    </figure>
  );
}
