import type { Locale } from "@/types/portfolio";

export const defaultLocale: Locale = "sk";
export const locales: Locale[] = ["sk", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
