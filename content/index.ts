import { enContent } from "@/content/en";
import { skContent } from "@/content/sk";
import type { Locale, PortfolioContent } from "@/types/portfolio";

export const contentByLocale: Record<Locale, PortfolioContent> = {
  sk: skContent,
  en: enContent,
};
