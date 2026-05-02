export type Locale = "sk" | "en";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Statistic = {
  value: string;
  label: string;
};

export type Project = {
  name: string;
  tag: string;
  text: string;
};

export type Experience = {
  year: string;
  role: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type PortfolioContent = {
  locale: Locale;
  alternateLocale: Locale;
  languageLabel: string;
  navigation: NavigationItem[];
  hero: {
    availability: string;
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    portraitName: string;
    portraitMeta: string;
  };
  stats: Statistic[];
  profile: {
    kicker: string;
    title: string;
    text: string;
  };
  projects: {
    kicker: string;
    title: string;
    items: Project[];
  };
  experience: {
    kicker: string;
    title: string;
    items: Experience[];
  };
  skills: {
    kicker: string;
    title: string;
    items: string[];
  };
  contact: {
    kicker: string;
    title: string;
    text: string;
    links: ContactLink[];
  };
};
