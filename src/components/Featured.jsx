import { Eye } from 'lucide-react';
import Reveal from './Reveal.jsx';
import ProductImage from './ProductImage.jsx';
import { PRODUCTS } from '../data/products.js';
import { formatPrice } from '../config.js';

export default function Featured({ onQuickView }) {
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <section id="collection" className="section section--champagne">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Featured Collection</p>
            <h2 className="display">The Signature Edit</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead lead--narrow">
              Six pieces that define the house — from the everyday tote to the evening clutch.
            </p>
          </Reveal>
        </div>

        <div className="grid grid--3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.1}>
              <article className="card">
                <button className="card__media" onClick={() => onQuickView(p)} aria-label={`Quick view ${p.name}`}>
                  <ProductImage product={p} />
                  <span className="card__quick">
                    <Eye size={16} aria-hidden /> Quick view
                  </span>
                </button>
                <div className="card__body">
                  <p className="card__cat">{p.category}</p>
                  <h3>{p.name}</h3>
                  <p className="card__tag">{p.tagline}</p>
                  <p className="card__price">{formatPrice(p.price)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="note">Sample products and illustrative prices for a fictional brand. Nothing on this site can be purchased.</p>
      </div>
    </section>
  );
}
