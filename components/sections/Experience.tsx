import type { PortfolioContent } from "@/types/portfolio";

type ExperienceProps = {
  experience: PortfolioContent["experience"];
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <section className="section split" id="experience">
      <div>
        <p className="section-kicker">{experience.kicker}</p>
        <h2>{experience.title}</h2>
      </div>
      <div className="timeline">
        {experience.items.map((item) => (
          <div className="timeline-row" key={`${item.year}-${item.role}`}>
            <span>{item.year}</span>
            <p>{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
