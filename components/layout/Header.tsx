"use client";

import Link from "next/link";
import { type CSSProperties, useState } from "react";
import type { PortfolioContent } from "@/types/portfolio";

type HeaderProps = {
  content: PortfolioContent;
};

export function Header({ content }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeLanguage = content.locale.toUpperCase();
  const alternateLanguage = content.alternateLocale.toUpperCase();
  const menuLabel = content.locale === "sk" ? "Menu" : "Menu";
  const navigationLabel = content.locale === "sk" ? "Navigácia" : "Navigation";

  return (
    <header className="topbar" data-menu-open={isMenuOpen} aria-label="Main navigation">
      <Link className="brand" href={`/${content.locale}#top`} aria-label="Matej Novak home">
        MN
      </Link>
      <nav className="desktop-nav">
        {content.navigation.map((item) => (
          <Link key={item.href} href={`/${content.locale}${item.href}`}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="language-switch desktop-language" aria-label="Language switcher">
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
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuLabel}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="menu-label">{menuLabel}</span>
        <span className="menu-glyph" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>
      </button>
      <div className="mobile-menu" id="mobile-menu">
        <div className="mobile-menu-head">
          <span>{navigationLabel}</span>
          <div className="code-orbit" aria-hidden="true">
            <i>{"<"}</i>
            <b>{"/"}</b>
            <i>{">"}</i>
          </div>
        </div>
        <nav className="mobile-nav">
          {content.navigation.map((item, index) => (
            <Link
              key={item.href}
              href={`/${content.locale}${item.href}`}
              onClick={() => setIsMenuOpen(false)}
              style={{ "--item-index": index } as CSSProperties}
            >
              <span>{`0${index + 1}`}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="language-switch mobile-language" aria-label="Language switcher">
          <span className="language-option active" aria-current="true">
            {activeLanguage}
          </span>
          <Link
            className="language-option"
            href={`/${content.alternateLocale}`}
            aria-label={content.languageLabel}
            onClick={() => setIsMenuOpen(false)}
          >
            {alternateLanguage}
          </Link>
        </div>
      </div>
    </header>
  );
}
