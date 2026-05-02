type SectionHeadingProps = {
  kicker: string;
  title: string;
};

export function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
    </div>
  );
}
