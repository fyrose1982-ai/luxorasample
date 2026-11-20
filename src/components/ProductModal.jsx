import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import ProductImage from './ProductImage.jsx';
import { formatPrice, whatsappLink } from '../config.js';

export default function ProductModal({ product, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      previous?.focus?.();
    };
  }, [onClose]);

  const message = `Hello LUXORA BAGS, I'd like to enquire about the ${product.name} (${formatPrice(product.price)}). (Portfolio demo)`;

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Close quick view">
          <X size={20} />
        </button>

        <div className="modal__media">
          <ProductImage product={product} eager />
        </div>

        <div className="modal__body">
          <p className="card__cat">{product.category}</p>
          <h3 id="modal-title">{product.name}</h3>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__desc">{product.description}</p>

          <div className="modal__colours">
            <span>Colour</span>
            {product.colours.map((c) => (
              <i key={c.name} title={c.name} style={{ background: c.hex }} />
            ))}
            <em>{product.colours.map((c) => c.name).join(' · ')}</em>
          </div>

          <ul className="modal__details">
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="modal__materials"><strong>Materials:</strong> {product.materials}</p>

          <a className="btn btn--dark btn--block" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} aria-hidden /> Enquire on WhatsApp
          </a>
          <p className="note note--left">Demo product from a fictional brand — not available for purchase.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
