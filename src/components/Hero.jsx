import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import BagArt from './BagArt.jsx';
import { HERO_IMAGE, USE_PHOTOS } from '../config.js';

export default function Hero() {
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const showPhoto = USE_PHOTOS && !failed;

  const item = (delay) => ({
    initial: { opacity: 0, y: reduce ? 0 : 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden />
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p className="eyebrow" {...item(0.1)}>Autumn · Winter 2026</motion.p>
          <motion.h1 {...item(0.25)}>
            Carried <em>beautifully.</em>
            <br />
            Made to last.
          </motion.h1>
          <motion.p className="hero__lead" {...item(0.4)}>
            Handcrafted leather handbags in warm ivory, champagne and noir — designed in small batches for
            those who prefer quiet luxury.
          </motion.p>
          <motion.div className="hero__cta" {...item(0.55)}>
            <a className="btn btn--gold" href="#collection">
              Shop Collection <ArrowRight size={16} aria-hidden />
            </a>
            <a className="btn btn--outline-light" href="#story">Our Story</a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__ring" aria-hidden />
          {showPhoto ? (
            <img
              className="hero__photo"
              src={HERO_IMAGE}
              alt="LUXORA handbag in noir leather"
              fetchPriority="high"
              decoding="async"
              onError={() => setFailed(true)}
            />
          ) : (
            <motion.div
              className="hero__art"
              animate={reduce ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <BagArt
                type="shoulder"
                palette={{ main: '#9a6638', dark: '#4e2f16', light: '#c99a66' }}
                label="LUXORA Marisol shoulder bag illustration"
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      <a className="hero__scroll" href="#intro" aria-label="Scroll to introduction">
        <span>Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
