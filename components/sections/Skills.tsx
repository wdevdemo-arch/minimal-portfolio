import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PortfolioContent } from "@/types/portfolio";

type SkillsProps = {
  skills: PortfolioContent["skills"];
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="section skills-section">
      <SectionHeading kicker={skills.kicker} title={skills.title} />
      <div className="skills-list">
        {skills.items.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
