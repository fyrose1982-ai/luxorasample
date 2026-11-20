import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import ProductImage from './ProductImage.jsx';
import { CATEGORIES, PRODUCTS } from '../data/products.js';
import { formatPrice } from '../config.js';

export default function Gallery({ onQuickView }) {
  const [active, setActive] = useState('All');

  const items = useMemo(
    () => (active === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="gallery" className="section section--ivory">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Product Gallery</p>
            <h2 className="display">Browse the Collection</h2>
          </Reveal>
        </div>

        <Reveal>
          <div className="filters" role="tablist" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={`chip ${active === c ? 'chip--active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <p className="count" aria-live="polite">
          Showing {items.length} {items.length === 1 ? 'piece' : 'pieces'}
          {active !== 'All' ? ` in ${active}` : ''}
        </p>

        <motion.div layout className="grid grid--4">
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <motion.button
                layout
                key={p.id}
                className="tile"
                onClick={() => onQuickView(p)}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                aria-label={`Quick view ${p.name}, ${formatPrice(p.price)}`}
              >
                <ProductImage product={p} />
                <span className="tile__overlay">
                  <span className="tile__name">{p.name}</span>
                  <span className="tile__price">{formatPrice(p.price)}</span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
