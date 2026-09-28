import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="wrap grid min-h-[60vh] place-items-center py-20">
      <div className="max-w-lg">
        <p className="font-serif text-6xl text-brand-700">404</p>
        <h1 className="mt-4 text-3xl">We could not find that page</h1>
        <p className="mt-3 text-lg">The page may have moved or the address may be mistyped. These links will get you back on track.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Go to Home</Button>
          <Button href="/appointments" variant="outline">Book an Appointment</Button>
        </div>
      </div>
    </div>
  );
}
