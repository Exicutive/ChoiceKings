import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const styles = {
  primary: "bg-brand-700 text-white shadow-[0_10px_20px_-10px_rgba(81,47,161,0.8)] hover:bg-brand-800 hover:shadow-[0_14px_26px_-10px_rgba(81,47,161,0.75)]",
  accent: "bg-accent-700 text-white hover:bg-accent-600",
  outline: "border border-brand-200 bg-white text-brand-700 hover:border-brand-300 hover:bg-brand-50",
  light: "bg-white text-brand-800 shadow-sm hover:bg-brand-50",
} as const;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof styles; size?: "md" | "sm"; href?: string; loading?: boolean; full?: boolean;
}

export default function Button({ variant = "primary", size = "md", href, loading, full, className, children, ...rest }: Props) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-500/50 disabled:cursor-not-allowed disabled:opacity-60",
    size === "md" ? "px-6 py-3.5 text-base" : "px-4 py-2.5 text-sm", styles[variant], full && "w-full", className,
  );
  if (href) {
    if (/^(https?:|tel:|mailto:)/.test(href)) {
      const ext = href.startsWith("http");
      return <a href={href} className={cls} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}>{children}</a>;
    }
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return (
    <button className={cls} {...rest} disabled={loading || rest.disabled}>
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
      {children}
    </button>
  );
}
