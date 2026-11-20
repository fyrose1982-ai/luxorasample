import Reveal from './Reveal.jsx';

const STATS = [
  { k: 'Small batch', v: 'Limited runs, never mass produced' },
  { k: 'Full-grain', v: 'Carefully selected leathers' },
  { k: 'Hand finished', v: 'Edges painted and stitched by hand' },
];

export default function Intro() {
  return (
    <section id="intro" className="section section--ivory">
      <div className="container intro">
        <Reveal>
          <p className="eyebrow eyebrow--dark">The House of Luxora</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display">
            Quiet luxury, <em>considered</em> in every stitch.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="lead">
            LUXORA BAGS creates timeless handbags for a modern wardrobe. Each design begins as a pencil sketch
            and passes through the hands of a single artisan before it reaches you — resulting in bags that
            feel as good as they look, and grow more beautiful with every year of use.
          </p>
        </Reveal>

        <div className="intro__stats">
          {STATS.map((s, i) => (
            <Reveal key={s.k} delay={0.1 * i} className="stat">
              <h3>{s.k}</h3>
              <p>{s.v}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
