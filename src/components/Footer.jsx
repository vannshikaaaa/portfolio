import { socialLinks } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-socials">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
        <p>Designed &amp; built by Vanshika Agarwal with React &amp; thoughtful UI details.</p>
        <span>© {currentYear} All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;