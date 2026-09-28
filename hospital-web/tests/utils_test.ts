import { cn, initials, telHref } from "../src/lib/utils.ts";

Deno.test("cn combines truthy class names", () => {
  const result = cn("button", false, "button--primary", null, undefined);

  if (result !== "button button--primary") {
    throw new Error(`Expected combined class names, received: ${result}`);
  }
});

Deno.test("telHref removes whitespace from phone numbers", () => {
  const result = telHref("+234 902 704 5106");

  if (result !== "tel:+2349027045106") {
    throw new Error(`Expected whitespace-free telephone link, received: ${result}`);
  }
});

Deno.test("initials removes a doctor title and keeps the first two initials", () => {
  const result = initials("Dr. Adaeze Okafor");

  if (result !== "AO") {
    throw new Error(`Expected AO, received: ${result}`);
  }
});
