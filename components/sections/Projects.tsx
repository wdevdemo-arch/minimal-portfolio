import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PortfolioContent } from "@/types/portfolio";

type ProjectsProps = {
  projects: PortfolioContent["projects"];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="section" id="work">
      <SectionHeading kicker={projects.kicker} title={projects.title} />
      <div className="project-grid">
        {projects.items.map((project) => (
          <article className="project-card" key={project.name}>
            <span>{project.tag}</span>
            <h3>{project.name}</h3>
            <p>{project.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
