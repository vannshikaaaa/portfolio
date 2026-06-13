import { useEffect, useState } from 'react';

const Navbar = ({ navLinks, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };

    if (isMenuOpen) document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a className="navbar-brand" href="#home" onClick={handleNavClick}>
          Vanshika.
        </a>

        <button
          className={`navbar-toggle ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href} className="navbar-item">
                <a
                  className={`navbar-link ${activeSection === link.href ? 'active' : ''}`}
                  href={link.href}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;