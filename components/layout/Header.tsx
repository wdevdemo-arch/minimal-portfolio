import Link from "next/link";
import type { PortfolioContent } from "@/types/portfolio";

type HeaderProps = {
  content: PortfolioContent;
};

export function Header({ content }: HeaderProps) {
  const activeLanguage = content.locale.toUpperCase();
  const alternateLanguage = content.alternateLocale.toUpperCase();

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
      <div className="language-switch" aria-label="Language switcher">
        <span className="language-option active" aria-current="true">
          {activeLanguage}
        </span>
        <Link
          className="language-option"
          href={`/${content.alternateLocale}`}
          aria-label={content.languageLabel}
        >
          {alternateLanguage}
        </Link>
      </div>
    </header>
  );
}
