import type { PortfolioContent } from "@/types/portfolio";

type ContactProps = {
  contact: PortfolioContent["contact"];
};

export function Contact({ contact }: ContactProps) {
  return (
    <section className="contact" id="contact">
      <p className="section-kicker">{contact.kicker}</p>
      <h2>{contact.title}</h2>
      <p>{contact.text}</p>
      <div className="contact-links">
        {contact.links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
