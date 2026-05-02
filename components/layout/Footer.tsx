import type { PortfolioContent } from "@/types/portfolio";
import Link from "next/link";

type FooterProps = {
  locale: PortfolioContent["locale"];
};

export function Footer({ locale }: FooterProps) {
  const backToTopLabel = locale === "sk" ? "Späť hore" : "Back to top";

  return (
    <footer className="site-footer">
      <span>Matej Novak</span>
      <Link href={`/${locale}#top`}>{backToTopLabel}</Link>
    </footer>
  );
}
