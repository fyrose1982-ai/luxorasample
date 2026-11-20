import { useId } from 'react';

// Built-in illustrated handbags so the site looks complete without any photo files.
// Swap in real photography via USE_PHOTOS in src/config.js.

const GOLD = '#c9a86a';
const GOLD_DARK = '#8f7340';

function Hardware({ cx, cy, r = 9, id }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 2} fill={`url(#gold-${id})`} />
      <circle cx={cx} cy={cy} r={r - 3} fill="none" stroke={GOLD_DARK} strokeWidth="1.2" opacity="0.7" />
    </g>
  );
}

export default function BagArt({ type = 'tote', palette, label, className = '' }) {
  const id = useId().replace(/:/g, '');
  const { main, dark, light } = palette;
  const body = `url(#body-${id})`;
  const strap = { fill: 'none', stroke: dark, strokeWidth: 11, strokeLinecap: 'round' };
  const strapHi = { fill: 'none', stroke: light, strokeWidth: 3, strokeLinecap: 'round', opacity: 0.55 };

  let shape;
  switch (type) {
    case 'shoulder':
      shape = (
        <>
          <path d="M122 170 C122 62 278 62 278 170" {...strap} />
          <path d="M122 170 C122 66 278 66 278 170" {...strapHi} />
          <path d="M70 192 Q70 162 100 162 L300 162 Q330 162 330 192 L330 322 Q330 348 304 348 L96 348 Q70 348 70 322Z" fill={body} />
          <path d="M70 192 Q70 162 100 162 L300 162 Q330 162 330 192 Q330 250 200 274 Q70 250 70 192Z" fill={dark} opacity="0.35" />
          <path d="M82 196 Q82 176 104 176 L296 176 Q318 176 318 196" fill="none" stroke={light} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          <Hardware cx={200} cy={268} r={10} id={id} />
        </>
      );
      break;
    case 'crossbody':
      shape = (
        <>
          <path d="M126 200 C60 30 340 30 274 200" {...strap} strokeWidth="7" />
          <path d="M126 200 C64 40 336 40 274 200" {...strapHi} />
          <path d="M104 214 Q104 196 122 196 L278 196 Q296 196 296 214 L296 316 Q296 336 276 336 L124 336 Q104 336 104 316Z" fill={body} />
          <path d="M104 214 Q104 196 122 196 L278 196 Q296 196 296 214 Q296 268 200 286 Q104 268 104 214Z" fill={dark} opacity="0.32" />
          <path d="M114 216 Q114 206 126 206 L274 206 Q286 206 286 216" fill="none" stroke={light} strokeWidth="1.4" strokeDasharray="4 4" opacity="0.6" />
          <Hardware cx={200} cy={282} r={8} id={id} />
        </>
      );
      break;
    case 'clutch':
      shape = (
        <>
          <rect x="56" y="168" width="288" height="140" rx="20" fill={body} />
          <path d="M56 188 Q56 168 76 168 L324 168 Q344 168 344 188 L344 214 L200 258 L56 214Z" fill={dark} opacity="0.32" />
          <path d="M70 186 L200 240 L330 186" fill="none" stroke={light} strokeWidth="1.4" strokeDasharray="4 4" opacity="0.55" />
          <rect x="182" y="246" width="36" height="12" rx="3" fill={`url(#gold-${id})`} />
        </>
      );
      break;
    case 'travel':
      shape = (
        <>
          <path d="M128 192 C128 112 272 112 272 192" {...strap} />
          <path d="M128 192 C128 116 272 116 272 192" {...strapHi} />
          <path d="M44 256 Q44 188 108 188 L292 188 Q356 188 356 256 Q356 326 292 326 L108 326 Q44 326 44 256Z" fill={body} />
          <path d="M72 212 L328 212" stroke={GOLD} strokeWidth="2.2" strokeDasharray="6 4" opacity="0.9" />
          <rect x="82" y="248" width="76" height="52" rx="12" fill={dark} opacity="0.3" />
          <rect x="242" y="248" width="76" height="52" rx="12" fill={dark} opacity="0.3" />
          <Hardware cx={200} cy={212} r={8} id={id} />
        </>
      );
      break;
    case 'tote':
    default:
      shape = (
        <>
          <path d="M138 172 C138 58 262 58 262 172" {...strap} />
          <path d="M138 172 C138 62 262 62 262 172" {...strapHi} />
          <path d="M82 172 L318 172 L342 338 Q344 356 326 356 L74 356 Q56 356 58 338Z" fill={body} />
          <rect x="82" y="172" width="236" height="22" rx="4" fill={dark} opacity="0.35" />
          <path d="M92 214 L308 214" stroke={light} strokeWidth="1.4" strokeDasharray="4 4" opacity="0.55" />
          <rect x="188" y="204" width="24" height="30" rx="4" fill={`url(#gold-${id})`} />
        </>
      );
  }

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label={label || 'Illustrated handbag'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`body-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={light} />
          <stop offset="0.45" stopColor={main} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
        <linearGradient id={`gold-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecd7a1" />
          <stop offset="0.5" stopColor={GOLD} />
          <stop offset="1" stopColor={GOLD_DARK} />
        </linearGradient>
        <radialGradient id={`shadow-${id}`}>
          <stop offset="0" stopColor="#000" stopOpacity="0.35" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="366" rx="150" ry="16" fill={`url(#shadow-${id})`} />
      {shape}
      <ellipse cx="150" cy="240" rx="60" ry="90" fill="#fff" opacity="0.05" transform="rotate(-18 150 240)" />
    </svg>
  );
}
