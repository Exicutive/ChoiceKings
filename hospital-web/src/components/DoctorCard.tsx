import Button from "./Button";
import { initials } from "@/lib/utils";
import type { Doctor } from "@/types";

export default function DoctorCard({ doctor: d }: { doctor: Doctor }) {
  return (
    <article className="tile flex flex-col">
      {d.photoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={d.photoUrl} alt={`Portrait of ${d.name}`} className="h-24 w-24 rounded-full border-4 border-brand-50 object-cover shadow-md" />
      ) : (
        <div aria-hidden className="grid h-24 w-24 place-items-center rounded-full border-4 border-brand-50 bg-brand-100 font-serif text-3xl text-brand-800 shadow-md">{initials(d.name)}</div>
      )}
      <h3 className="mt-5 text-xl">{d.name}</h3>
      <p className="mt-1 font-semibold text-brand-700">{d.specialty}</p>
      <p className="mt-1 text-sm text-slate-600">{d.qualifications}. {d.yearsOfExperience} years of experience</p>
      <p className="mt-3 flex-1">{d.bio}</p>
      <Button href={`/appointments?doctor=${d.id}`} variant="outline" size="sm" className="mt-5 self-start">Book Appointment<span className="sr-only"> with {d.name}</span></Button>
    </article>
  );
}
