import { useState } from 'react';
import { contactInfo } from '../data/portfolio';
import useInView from '../hooks/useInView';

const initialForm = { name: '', email: '', message: '' };

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;

const sanitize = (value) => value.replace(/[<>"'/]/g, '');

const Contact = () => {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    else if (formData.name.length > MAX_NAME) nextErrors.name = `Name must be under ${MAX_NAME} characters.`;
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (formData.email.length > MAX_EMAIL) {
      nextErrors.email = `Email must be under ${MAX_EMAIL} characters.`;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) nextErrors.message = 'Please share a message.';
    else if (formData.message.length > MAX_MESSAGE) nextErrors.message = `Message must be under ${MAX_MESSAGE} characters.`;
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      window.location.href = `mailto:vanshikaagarwal9500@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      setFormData(initialForm);
    }
  };

  return (
    <section id="contact" className="section section-separated" ref={ref}>
      <div className="container contact-shell">
        <div className={`section-heading reveal ${isInView ? 'is-visible' : ''}`}>
          <h2 className="section-title gradient-text">Let&apos;s Connect</h2>
          <span className="section-line" />
          <p className="section-subtitle">
            I&apos;m currently open to frontend developer internship opportunities. Feel free to reach out!
          </p>
        </div>

        <div className={`contact-card reveal ${isInView ? 'is-visible' : ''}`}>
          <div className="contact-list">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-row"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.text}</span>
                </div>
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                maxLength={MAX_NAME}
                onChange={(event) => {
                  setIsSubmitted(false);
                  setFormData({ ...formData, name: sanitize(event.target.value) });
                }}
                placeholder="Your name"
              />
              {errors.name ? <small>{errors.name}</small> : null}
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                maxLength={MAX_EMAIL}
                onChange={(event) => {
                  setIsSubmitted(false);
                  setFormData({ ...formData, email: event.target.value.trim() });
                }}
                placeholder="your@email.com"
              />
              {errors.email ? <small>{errors.email}</small> : null}
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                maxLength={MAX_MESSAGE}
                onChange={(event) => {
                  setIsSubmitted(false);
                  setFormData({ ...formData, message: sanitize(event.target.value) });
                }}
                placeholder="Tell me about your idea, internship opportunity, or collaboration."
              />
              {errors.message ? <small>{errors.message}</small> : null}
            </label>

            <button className="button button-primary" type="submit">
              Send Message
            </button>

            {isSubmitted ? (
              <p className="success-message">
                Thanks for reaching out! Your email app should open now, and I&apos;ll get back to you soon. ✨
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;