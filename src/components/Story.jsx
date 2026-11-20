import Reveal from './Reveal.jsx';
import BagArt from './BagArt.jsx';

export default function Story() {
  return (
    <section id="story" className="section section--champagne">
      <div className="container story">
        <Reveal className="story__visual">
          <div className="story__frame">
            <BagArt
              type="tote"
              palette={{ main: '#2a2623', dark: '#0f0d0c', light: '#4a443e' }}
              label="Illustration of a LUXORA tote"
            />
          </div>
          <div className="story__badge">
            <span>Est.</span>
            <strong>2012</strong>
            <small>(fictional)</small>
          </div>
        </Reveal>

        <div className="story__copy">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Our Story</p>
            <h2 className="display">
              A workshop, a sketchbook and a <em>stubborn</em> idea.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              LUXORA began with a simple belief: a handbag should be a companion, not a trend. Our founders
              set up a small atelier with a handful of artisans and one rule — never release a design until
              it has been carried for a full season.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Today the house still works the same way. Patterns are cut by hand, edges are painted in
              layers and every piece carries the initials of the artisan who made it.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="story__sign">— The LUXORA Atelier</p>
            <p className="note note--left">LUXORA BAGS is a fictional brand created for a design portfolio.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
