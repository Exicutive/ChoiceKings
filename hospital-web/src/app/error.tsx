"use client";
import ErrorState from "@/components/ErrorState";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <ErrorState message="We could not load this page. Please try again in a moment." onRetry={reset} />;
}
