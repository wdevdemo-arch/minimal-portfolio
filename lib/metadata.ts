import type { Metadata } from "next";
import type { Locale } from "@/types/portfolio";

export function getPortfolioMetadata(locale: Locale): Metadata {
  const isSlovak = locale === "sk";

  return {
    title: isSlovak ? "Matej Novak | Web dizajnér" : "Matej Novak | Web Designer",
    description: isSlovak
      ? "Minimalistické dvojjazyčné portfolio slovenského web dizajnéra s medzinárodnými skúsenosťami."
      : "Minimal bilingual portfolio for a Slovak web designer with international experience.",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        sk: "/sk",
        en: "/en",
      },
    },
  };
}
