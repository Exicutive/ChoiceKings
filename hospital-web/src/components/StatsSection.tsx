import { stats } from "@/lib/data";

export default function StatsSection() {
  return (
    <section aria-label="Hospital statistics" className="bg-brand-900 py-5 text-white sm:py-8">
      <div className="wrap">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] px-5 py-10 shadow-2xl shadow-brand-950/10 backdrop-blur-sm sm:px-8">
        <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse border-l border-white/20 pl-5 sm:pl-6">
              <dt className="mt-1 text-sm text-brand-100 sm:text-base">{s.label}</dt>
              <dd className="font-serif text-3xl font-semibold sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 border-t border-white/10 pt-5 text-sm text-brand-100/80">Demo figures. Replace with verified hospital data before launch.</p>
        </div>
      </div>
    </section>
  );
}
