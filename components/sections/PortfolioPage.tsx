import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Stats } from "@/components/sections/Stats";
import type { PortfolioContent } from "@/types/portfolio";

type PortfolioPageProps = {
  content: PortfolioContent;
};

export function PortfolioPage({ content }: PortfolioPageProps) {
  return (
    <main className="site-shell">
      <Header content={content} />
      <Hero hero={content.hero} />
      <Stats stats={content.stats} />
      <Profile profile={content.profile} />
      <Projects projects={content.projects} />
      <Experience experience={content.experience} />
      <Skills skills={content.skills} />
      <Contact contact={content.contact} />
      <Footer locale={content.locale} />
    </main>
  );
}
