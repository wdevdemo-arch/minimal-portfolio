import type { PortfolioContent } from "@/types/portfolio";

type ProfileProps = {
  profile: PortfolioContent["profile"];
};

export function Profile({ profile }: ProfileProps) {
  return (
    <section className="section split" id="profile">
      <p className="section-kicker">{profile.kicker}</p>
      <div>
        <h2>{profile.title}</h2>
        <p>{profile.text}</p>
      </div>
    </section>
  );
}
