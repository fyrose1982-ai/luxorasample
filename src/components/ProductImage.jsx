import { useState } from 'react';
import BagArt from './BagArt.jsx';
import { USE_PHOTOS } from '../config.js';

// Shows a real photo when USE_PHOTOS is on and the file exists,
// otherwise falls back to the built-in illustration.
export default function ProductImage({ product, eager = false }) {
  const [failed, setFailed] = useState(false);
  const [from, to] = product.bg;

  return (
    <div className="pimg" style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}>
      {USE_PHOTOS && !failed ? (
        <img
          src={product.image}
          alt={product.name}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width="800"
          height="1000"
          onError={() => setFailed(true)}
        />
      ) : (
        <BagArt type={product.type} palette={product.palette} label={product.name} />
      )}
    </div>
  );
}
