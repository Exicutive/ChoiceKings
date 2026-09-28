export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
export const telHref = (p: string) => `tel:${p.replace(/\s/g, "")}`;
export const initials = (name: string) =>
  name.replace(/^Dr\.?\s+/i, "").split(" ").map((p) => p[0]).slice(0, 2).join("");
