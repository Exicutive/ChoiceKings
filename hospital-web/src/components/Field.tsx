import { cn } from "@/lib/utils";

interface Props {
  id: string; label: string; value: string; onChange: (v: string) => void;
  error?: string; required?: boolean; as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[]; blank?: string; type?: string; placeholder?: string;
}

export default function Field({ id, label, value, onChange, error, required, as = "input", options, blank = "Select…", type = "text", placeholder }: Props) {
  const common = {
    id, value, placeholder, "aria-required": required, "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined, className: cn("input", error && "border-red-600"),
  };
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-semibold text-slate-800">
        {label}{required && <span aria-hidden className="text-red-700"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea {...common} rows={4} onChange={(e) => onChange(e.target.value)} />
      ) : as === "select" ? (
        <select {...common} onChange={(e) => onChange(e.target.value)}>
          <option value="">{blank}</option>
          {options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      ) : (
        <input {...common} type={type} onChange={(e) => onChange(e.target.value)} />
      )}
      {error && <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-700">{error}</p>}
    </div>
  );
}
