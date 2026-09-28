import { AlertCircle } from "lucide-react";
import Button from "./Button";

export default function ErrorState({ title = "Something went wrong", message, onRetry }: { title?: string; message: string; onRetry?: () => void }) {
  return (
    <div role="alert" className="wrap grid min-h-[40vh] place-items-center text-center">
      <div className="max-w-md">
        <AlertCircle className="mx-auto h-10 w-10 text-red-700" aria-hidden />
        <h2 className="mt-4 text-2xl">{title}</h2>
        <p className="mt-2">{message}</p>
        {onRetry && <Button onClick={onRetry} className="mt-6">Try again</Button>}
      </div>
    </div>
  );
}
