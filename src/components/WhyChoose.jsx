import { Gem, Hammer, Leaf, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal.jsx';

const REASONS = [
  {
    icon: Gem,
    title: 'Exceptional Materials',
    text: 'Full-grain leathers and solid-brass hardware, chosen for how they age as much as how they look.',
  },
  {
    icon: Hammer,
    title: 'Artisan Craftsmanship',
    text: 'Cut, stitched and edge-painted by hand in small batches, with every detail inspected before it leaves the bench.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Be Repaired',
    text: 'We design for decades, not seasons — with replaceable straps and hardware so your bag can be restored, not replaced.',
  },
  {
    icon: Leaf,
    title: 'Considered Production',
    text: 'Limited runs reduce waste. We make fewer pieces, and make them better.',
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="section section--dark">
      <div className="container">
        <div className="section__head section__head--center">
          <Reveal>
            <p className="eyebrow">Why Choose LUXORA</p>
            <h2 className="display display--light">
              Made with <em>intention</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid--4 why">
          {REASONS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={0.08 * i}>
              <div className="why__item">
                <span className="why__icon">
                  <Icon size={26} strokeWidth={1.4} aria-hidden />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
