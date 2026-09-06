export default function Section({ id, number, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={id + '-title'}>
      <div className="sectionHeading">
        <p className="eyebrow"><span>{number}</span> / {title}</p>
        <h2 id={id + '-title'}>{intro}</h2>
      </div>
      {children}
    </section>
  );
}