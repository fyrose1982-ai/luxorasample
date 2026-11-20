import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Clock, ExternalLink, Info, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { BRAND, MAP_EMBED_URL, MAP_OPEN_URL, whatsappLink } from '../config.js';

const EMPTY = { name: '', email: '', phone: '', interest: 'General enquiry', message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (v.phone.trim() && !/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(v.phone.trim().replace(/\s+/g, ' '))) {
    e.phone = 'Enter a valid 10-digit Indian mobile number, or leave it blank.';
  }
  if (v.message.trim().length < 10) e.message = 'Please write at least 10 characters.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (ev) => {
    const next = { ...values, [field]: ev.target.value };
    setValues(next);
    if (touched[field]) setErrors(validate(next));
  };
  const blur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(found).length === 0) setSubmitted(true);
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const waText = `Hello LUXORA BAGS, my name is ${values.name || '[name]'}. I'm interested in: ${values.interest}. ${values.message}`.trim();

  const field = (name, label, props = {}) => (
    <div className={`field ${errors[name] && touched[name] ? 'field--error' : ''}`}>
      <label htmlFor={`f-${name}`}>{label}</label>
      {props.as === 'textarea' ? (
        <textarea
          id={`f-${name}`}
          rows={5}
          value={values[name]}
          onChange={update(name)}
          onBlur={blur(name)}
          aria-invalid={Boolean(errors[name] && touched[name])}
          aria-describedby={errors[name] ? `e-${name}` : undefined}
          {...props.attrs}
        />
      ) : (
        <input
          id={`f-${name}`}
          value={values[name]}
          onChange={update(name)}
          onBlur={blur(name)}
          aria-invalid={Boolean(errors[name] && touched[name])}
          aria-describedby={errors[name] ? `e-${name}` : undefined}
          {...props.attrs}
        />
      )}
      {errors[name] && touched[name] && (
        <p className="field__error" id={`e-${name}`} role="alert">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <section id="contact" className="section section--ivory">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Contact & Enquiries</p>
            <h2 className="display">Speak with the Atelier</h2>
          </Reveal>
        </div>

        <div className="contact">
          <Reveal className="contact__form-wrap">
            <div className="demo-note">
              <Info size={18} aria-hidden />
              <p>
                <strong>Demo form.</strong> This portfolio site has no backend, so nothing you enter here is
                sent or stored. Validation works as it would on a live site.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  className="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                >
                  <CheckCircle2 size={40} strokeWidth={1.3} aria-hidden />
                  <h3>Demo submission complete</h3>
                  <p>
                    Thank you, {values.name.split(' ')[0]}. Your message was <strong>not</strong> sent anywhere —
                    this is a demonstration. On a live website, this form would connect to your email, CRM or
                    a form service.
                  </p>
                  <div className="success__actions">
                    <a className="btn btn--dark" href={whatsappLink(waText)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={16} aria-hidden /> Continue on WhatsApp
                    </a>
                    <button className="btn btn--ghost-dark" onClick={reset}>Try again</button>
                  </div>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="form-row">
                    {field('name', 'Full name', { attrs: { type: 'text', autoComplete: 'name', placeholder: 'Your name' } })}
                    {field('email', 'Email', { attrs: { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' } })}
                  </div>
                  <div className="form-row">
                    {field('phone', 'Phone (optional)', { attrs: { type: 'tel', autoComplete: 'tel', placeholder: '98765 43210' } })}
                    <div className="field">
                      <label htmlFor="f-interest">I'm interested in</label>
                      <select id="f-interest" value={values.interest} onChange={update('interest')}>
                        <option>General enquiry</option>
                        <option>Totes</option>
                        <option>Shoulder bags</option>
                        <option>Crossbody bags</option>
                        <option>Clutches</option>
                        <option>Travel bags</option>
                        <option>Gifting</option>
                      </select>
                    </div>
                  </div>
                  {field('message', 'Message', { as: 'textarea', attrs: { placeholder: 'Tell us what you are looking for…' } })}
                  <button type="submit" className="btn btn--dark btn--block">
                    <Send size={16} aria-hidden /> Send enquiry (demo)
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.1} className="contact__info">
            <ul className="info-list">
              <li><MapPin size={18} aria-hidden /> <span>{BRAND.addressLine}</span></li>
              <li><Mail size={18} aria-hidden /> <span>{BRAND.email}</span></li>
              <li><Clock size={18} aria-hidden /> <span>{BRAND.hours}</span></li>
            </ul>

            <a
              className="btn btn--gold btn--block"
              href={whatsappLink('Hello LUXORA BAGS, I would like to make an enquiry. (Portfolio demo)')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} aria-hidden /> Chat on WhatsApp
            </a>

            <div className="map">
              <iframe
                title="Sample showroom location on Google Maps"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a className="map__link" href={MAP_OPEN_URL} target="_blank" rel="noopener noreferrer">
              Open in Google Maps <ExternalLink size={14} aria-hidden />
            </a>
            <p className="note note--left">Sample location for demonstration — LUXORA BAGS has no physical showroom.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
