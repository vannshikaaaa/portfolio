import { useEffect, useMemo, useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { navLinks } from './data/portfolio';

const App = () => {
  const [activeSection, setActiveSection] = useState('#home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sectionIds = useMemo(() => navLinks.map((item) => item.href.replace('#', '')), []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('[App] IntersectionObserver is not supported; active section detection disabled.');
      return undefined;
    }

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(`#${visibleEntries[0].target.id}`);
        }
      },
      { threshold: [0.3, 0.5, 0.7], rootMargin: '-18% 0px -45% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar navLinks={navLinks} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
};

export default App;