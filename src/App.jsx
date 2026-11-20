import { Suspense, lazy, useCallback, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import Featured from './components/Featured.jsx';
import Gallery from './components/Gallery.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Story from './components/Story.jsx';
import Banner from './components/Banner.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// The quick-view modal is only needed on interaction, so it is code-split.
const ProductModal = lazy(() => import('./components/ProductModal.jsx'));

export default function App() {
  const [selected, setSelected] = useState(null);
  const open = useCallback((product) => setSelected(product), []);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Featured onQuickView={open} />
        <Gallery onQuickView={open} />
        <WhyChoose />
        <Story />
        <Banner />
        <Contact />
      </main>
      <Footer />
      <Suspense fallback={null}>
        {selected && <ProductModal product={selected} onClose={close} />}
      </Suspense>
    </>
  );
}
