import { Baby, ClipboardCheck, FlaskConical, HeartPulse, Pill, ScanLine, Siren, Stethoscope, type LucideIcon } from "lucide-react";

// Backend services store an icon *name*; this maps it to a component.
const icons: Record<string, LucideIcon> = { Baby, ClipboardCheck, FlaskConical, HeartPulse, Pill, ScanLine, Siren, Stethoscope };
export const iconFor = (name: string): LucideIcon => icons[name] ?? Stethoscope;
