import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import BagArt from './BagArt.jsx';

export default function Banner() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yBack = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section className="banner" ref={ref} aria-labelledby="banner-title">
      <div className="banner__bg" aria-hidden />
      <div className="container banner__grid">
        <div className="banner__copy">
          <p className="eyebrow">The Winter Atelier Edit</p>
          <h2 id="banner-title">
            Gifts that are
            <br />
            <em>kept for life.</em>
          </h2>
          <p>
            A curated selection in noir, ivory and champagne — wrapped in our signature dust bag and presented
            in a hand-finished gift box.
          </p>
          <a className="btn btn--gold" href="#contact">
            Enquire about the edit <ArrowRight size={16} aria-hidden />
          </a>
        </div>

        <div className="banner__visual" aria-hidden>
          <motion.div className="banner__bag banner__bag--back" style={reduce ? undefined : { y: yBack }}>
            <BagArt type="clutch" palette={{ main: '#efe5d0', dark: '#bfae88', light: '#faf4e6' }} />
          </motion.div>
          <motion.div className="banner__bag banner__bag--front" style={reduce ? undefined : { y }}>
            <BagArt type="crossbody" palette={{ main: '#d5c19a', dark: '#8f7a52', light: '#ece0c3' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
