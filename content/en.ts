import type { PortfolioContent } from "@/types/portfolio";

export const enContent: PortfolioContent = {
  locale: "en",
  alternateLocale: "sk",
  languageLabel: "Slovenčina",
  navigation: [
    { label: "Profile", href: "#profile" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    availability: "Available for selected projects",
    eyebrow: "Web designer from Slovakia",
    title: "I design calm digital products for ambitious brands.",
    intro:
      "I am Matej Novak, a fictional Slovak web designer with years of experience inside global teams as an intern. I combine detail-oriented craft, clear hierarchy, and responsive design that feels right on mobile and desktop.",
    primaryCta: "View work",
    secondaryCta: "Send email",
    portraitName: "Matej Novak",
    portraitMeta: "Digital portfolio / 2026",
  },
  stats: [
    { value: "6+", label: "years of learning, internships, and client projects" },
    { value: "4", label: "global companies across the experience map" },
    { value: "2", label: "languages for an international audience" },
  ],
  profile: {
    kicker: "01",
    title: "Design that lets content breathe.",
    text:
      "Matej designs portfolio websites, editorial landing pages, and product marketing surfaces for small teams and growing startups. He likes precise spacing, strong typography, and interfaces that do not need to shout.",
  },
  projects: {
    kicker: "02",
    title: "Selected work",
    items: [
      {
        name: "Northline Studio",
        tag: "Brand website",
        text: "A minimalist site for a design studio, focused on fast orientation and a premium feel.",
      },
      {
        name: "Atlas Careers",
        tag: "Product UX",
        text:
          "A responsive careers platform designed during an internship with an international product team.",
      },
      {
        name: "Bloom Labs",
        tag: "Landing page",
        text:
          "A conversion page for an AI tool, built around clear copy and a modular section system.",
      },
    ],
  },
  experience: {
    kicker: "03",
    title: "Experience",
    items: [
      { year: "2025", role: "Design intern, global SaaS company" },
      { year: "2024", role: "UX intern, European fintech team" },
      { year: "2023", role: "Visual design intern, remote product studio" },
    ],
  },
  skills: {
    kicker: "04",
    title: "Focus",
    items: ["Web design", "UX audit", "Design systems", "Prototyping", "Responsive layouts"],
  },
  contact: {
    kicker: "05",
    title: "Let us make something quiet, precise, and memorable.",
    text:
      "These are placeholder contacts ready to be replaced with a real email, GitHub, and LinkedIn.",
    links: [
      { label: "hello@example.com", href: "mailto:hello@example.com" },
      { label: "GitHub", href: "https://github.com/placeholder" },
      { label: "LinkedIn", href: "https://linkedin.com/in/placeholder" },
    ],
  },
};
