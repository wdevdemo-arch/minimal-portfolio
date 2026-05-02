import { Button } from "@/components/ui/Button";
import type { PortfolioContent } from "@/types/portfolio";

type HeroProps = {
  hero: PortfolioContent["hero"];
};

export function Hero({ hero }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="status">{hero.availability}</p>
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="intro">{hero.intro}</p>
        <div className="actions">
          <Button href="#work">{hero.primaryCta}</Button>
          <Button href="mailto:hello@example.com" variant="secondary">
            {hero.secondaryCta}
          </Button>
        </div>
      </div>
      <aside className="portrait-panel" aria-label="Designer summary">
        <div className="portrait-mark">M</div>
        <div>
          <p>{hero.portraitName}</p>
          <span>{hero.portraitMeta}</span>
        </div>
      </aside>
    </section>
  );
}
