import { Loader2 } from "lucide-react";

export default function LoadingState({ label = "Loading…" }: { label?: string }) {
  return (
    <div role="status" className="grid min-h-[40vh] place-items-center text-slate-600">
      <div className="flex items-center gap-3"><Loader2 className="h-6 w-6 animate-spin text-brand-700" aria-hidden />{label}</div>
    </div>
  );
}
