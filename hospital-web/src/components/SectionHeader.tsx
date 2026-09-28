export default function SectionHeader({ title, description, as: Tag = "h2" }: { title: string; description?: string; as?: "h1" | "h2" }) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <span className="mb-4 block h-1 w-12 rounded-full bg-brand-600" aria-hidden />
      <Tag className="text-3xl sm:text-4xl">{title}</Tag>
      {description && <p className="mt-4 text-lg text-slate-600">{description}</p>}
    </div>
  );
}

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative overflow-hidden bg-brand-50 pt-14 sm:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(154,122,241,0.24),transparent_23%),radial-gradient(circle_at_73%_90%,rgba(221,209,255,0.75),transparent_30%)]" />
      <div className="wrap relative"><SectionHeader as="h1" title={title} description={description} /></div>
    </div>
  );
}
