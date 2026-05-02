import Link from "next/link";
import type { PortfolioContent } from "@/types/portfolio";

type HeaderProps = {
  content: PortfolioContent;
};

export function Header({ content }: HeaderProps) {
  return (
    <header className="topbar" aria-label="Main navigation">
      <Link className="brand" href={`/${content.locale}#top`} aria-label="Matej Novak home">
        MN
      </Link>
      <nav>
        {content.navigation.map((item) => (
          <Link key={item.href} href={`/${content.locale}${item.href}`}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="language-toggle" href={`/${content.alternateLocale}`}>
        {content.languageLabel}
      </Link>
    </header>
  );
}
