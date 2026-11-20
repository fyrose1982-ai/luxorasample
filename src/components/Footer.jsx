import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { NAV_LINKS, SOCIALS } from '../config.js';

const ICONS = { Instagram, Facebook, X: Twitter, YouTube: Youtube };

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a href="#top" className="logo logo--footer">
            LUXORA<span> BAGS</span>
          </a>
          <p className="footer__text">Handcrafted handbags in noir, ivory and champagne.</p>
          <div className="socials">
            {SOCIALS.map((s) => {
              const Icon = ICONS[s.label];
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <Icon size={18} aria-hidden />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer">
          <h4>Explore</h4>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div>
          <h4>About this site</h4>
          <p className="footer__text">
            A portfolio demonstration built by <strong>AVYRONIX DIGITAL</strong> to showcase our ₹10,000
            Professional Website package.
          </p>
        </div>
      </div>

      <div className="container footer__legal">
        <p>
          © 2026 LUXORA BAGS — a fictional brand. This is not a real store: no products are sold, no payments
          are taken and no orders are processed.
        </p>
      </div>
    </footer>
  );
}
