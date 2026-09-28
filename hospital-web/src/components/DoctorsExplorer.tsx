"use client";
import { useMemo, useState } from "react";
import DoctorCard from "./DoctorCard";
import { cn } from "@/lib/utils";
import type { Doctor } from "@/types";

export default function DoctorsExplorer({ doctors }: { doctors: Doctor[] }) {
  const specialties = useMemo(() => ["All", ...Array.from(new Set(doctors.map((d) => d.specialty)))], [doctors]);
  const [active, setActive] = useState("All");
  const list = active === "All" ? doctors : doctors.filter((d) => d.specialty === active);
  return (
    <>
      <div role="group" aria-label="Filter by specialty" className="mb-10 flex flex-wrap gap-2">
        {specialties.map((s) => (
          <button key={s} onClick={() => setActive(s)} aria-pressed={active === s}
            className={cn("rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-500/40",
              active === s ? "border-brand-700 bg-brand-700 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-brand-600")}>
            {s}
          </button>
        ))}
      </div>
      {list.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((d) => <DoctorCard key={d.id} doctor={d} />)}</div>
      ) : (
        <p className="rounded-xl bg-slate-50 p-10 text-center">No doctors are listed for this specialty yet. Please call us and we will help you find the right person.</p>
      )}
      <p className="mt-8 text-sm text-slate-500">Demo profiles. Replace with the hospital&apos;s real medical team.</p>
    </>
  );
}
