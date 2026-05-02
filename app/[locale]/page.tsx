import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/sections/PortfolioPage";
import { contentByLocale } from "@/content";
import { getPortfolioMetadata } from "@/lib/metadata";
import { isLocale, locales } from "@/lib/i18n";
import type { Locale } from "@/types/portfolio";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return getPortfolioMetadata(locale);
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PortfolioPage content={contentByLocale[locale as Locale]} />;
}
