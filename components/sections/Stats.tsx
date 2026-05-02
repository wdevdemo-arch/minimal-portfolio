import type { Statistic } from "@/types/portfolio";

type StatsProps = {
  stats: Statistic[];
};

export function Stats({ stats }: StatsProps) {
  return (
    <section className="stats-grid" aria-label="Portfolio highlights">
      {stats.map((stat) => (
        <div className="stat" key={stat.value}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
