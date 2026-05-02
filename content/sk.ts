import type { PortfolioContent } from "@/types/portfolio";

export const skContent: PortfolioContent = {
  locale: "sk",
  alternateLocale: "en",
  languageLabel: "English",
  navigation: [
    { label: "Profil", href: "#profile" },
    { label: "Práca", href: "#work" },
    { label: "Skúsenosti", href: "#experience" },
    { label: "Kontakt", href: "#contact" },
  ],
  hero: {
    availability: "Dostupný pre vybrané projekty",
    eyebrow: "Web dizajnér zo Slovenska",
    title: "Tvorím pokojné digitálne produkty pre ambiciózne značky.",
    intro:
      "Som Matej Novak, fiktívny web dizajnér so slovenskými koreňmi a rokmi skúseností z globálnych tímov ako intern. Spájam cit pre detail, jasnú hierarchiu a responzívny dizajn, ktorý funguje na mobile aj desktope.",
    primaryCta: "Pozrieť prácu",
    secondaryCta: "Napísať email",
    portraitName: "Matej Novak",
    portraitMeta: "Digital portfolio / 2026",
  },
  stats: [
    { value: "6+", label: "rokov učenia, stáží a klientskych projektov" },
    { value: "4", label: "svetové firmy v portfóliu skúseností" },
    { value: "2", label: "jazyky pre medzinárodné publikum" },
  ],
  profile: {
    kicker: "01",
    title: "Dizajn, ktorý necháva obsah dýchať.",
    text:
      "Matej navrhuje prezentačné weby, portfóliá a produktové landing pages pre malé tímy aj rastúce startupy. Má rád presné rozostupy, silnú typografiu a rozhrania, ktoré sa nesnažia kričať.",
  },
  projects: {
    kicker: "02",
    title: "Vybrané projekty",
    items: [
      {
        name: "Northline Studio",
        tag: "Brand website",
        text:
          "Minimalistický web pre dizajnérske štúdio s dôrazom na rýchlu orientáciu a prémiový pocit.",
      },
      {
        name: "Atlas Careers",
        tag: "Product UX",
        text:
          "Responzívny kariérny portál navrhnutý počas stáže v medzinárodnom produktovom tíme.",
      },
      {
        name: "Bloom Labs",
        tag: "Landing page",
        text:
          "Konverzná stránka pre AI nástroj, postavená na jasnom copywritingu a modulárnom systéme sekcií.",
      },
    ],
  },
  experience: {
    kicker: "03",
    title: "Skúsenosti",
    items: [
      { year: "2025", role: "Design intern, global SaaS company" },
      { year: "2024", role: "UX intern, European fintech team" },
      { year: "2023", role: "Visual design intern, remote product studio" },
    ],
  },
  skills: {
    kicker: "04",
    title: "Zameranie",
    items: [
      "Web dizajn",
      "UX audit",
      "Design systémy",
      "Prototypovanie",
      "Responzívne layouty",
    ],
  },
  contact: {
    kicker: "05",
    title: "Poďme vytvoriť niečo tiché, presné a zapamätateľné.",
    text:
      "Toto sú placeholder kontakty pripravené na výmenu za reálny email, GitHub a LinkedIn.",
    links: [
      { label: "hello@example.com", href: "mailto:hello@example.com" },
      { label: "GitHub", href: "https://github.com/placeholder" },
      { label: "LinkedIn", href: "https://linkedin.com/in/placeholder" },
    ],
  },
};
