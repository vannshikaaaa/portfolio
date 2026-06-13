import { heroHighlights, heroRoles, socialLinks } from '../data/portfolio';
import useTypewriter from '../hooks/useTypewriter';

const profileFallback = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 680">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1a1a1a"/>
        <stop offset="100%" stop-color="#141414"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#e8c4b8"/>
        <stop offset="100%" stop-color="#c9a96e"/>
      </linearGradient>
    </defs>
    <rect width="600" height="680" rx="64" fill="url(#bg)"/>
    <circle cx="300" cy="250" r="108" fill="#2b241f" stroke="url(#accent)" stroke-width="8"/>
    <path d="M145 555c26-102 96-155 155-155s129 53 155 155" fill="#2b241f" stroke="url(#accent)" stroke-width="8" stroke-linecap="round"/>
    <text x="50%" y="620" text-anchor="middle" fill="#f0ece4" font-size="30" font-family="DM Sans, Arial, sans-serif">Add src/assets/profile.jpg</text>
  </svg>
`)}`;

const SocialIcon = ({ type }) => {
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3Zm15.19 9.86c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.87 1.09-3.37 1.86V8.5H9.39c.04.78 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.67.9-1.36 1.96-1.36 1.39 0 1.94 1.02 1.94 2.53V20h3.37l.01-7.14Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.73-1.34-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.22 1.84 1.22 1.08 1.82 2.83 1.3 3.52.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.46-2.35 1.22-3.18-.12-.3-.53-1.52.12-3.17 0 0 .99-.31 3.25 1.21a11.45 11.45 0 0 1 5.92 0c2.26-1.52 3.25-1.21 3.25-1.21.65 1.65.24 2.87.12 3.17.76.83 1.22 1.89 1.22 3.18 0 4.54-2.81 5.54-5.49 5.83.43.37.82 1.1.82 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
};

const Hero = () => {
  const typedText = useTypewriter(heroRoles);

  return (
    <section className="hero section" id="home">
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content reveal is-visible">
          <span className="eyebrow">Hello, I&apos;m</span>
          <h1 className="hero-title gradient-text">Vanshika Agarwal</h1>
          <div className="hero-typewriter" aria-label="Professional titles">
            <span>{typedText}</span>
            <span className="type-cursor" aria-hidden="true">|</span>
          </div>
          <p className="hero-tagline">
            Turning ideas into elegant, interactive experiences — one component at a time.
          </p>

          <div className="hero-highlights" aria-label="Key highlights">
            {heroHighlights.map((item) => (
              <span key={item} className="hero-highlight-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View My Work
            </a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>

          <div className="social-row">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="social-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                <SocialIcon type={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal is-visible">
          <div className="hero-blob" aria-hidden="true" />
          <div className="hero-image-frame">
            <img
              className="hero-image"
              src="/profile.jpg"
              alt="Portrait of Vanshika Agarwal"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = profileFallback;
              }}
            />
          </div>
          <p className="hero-image-note">Add your photo as public/profile.jpg for a personal touch.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;