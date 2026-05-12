import { aboutStats } from '../data/portfolio';
import useInView from '../hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="section section-separated" ref={ref}>
      <div className="container">
        <div className={`section-heading reveal ${isInView ? 'is-visible' : ''}`}>
          <h2 className="section-title gradient-text">About Me</h2>
          <span className="section-line" />
        </div>

        <div className="about-grid">
          <aside className={`about-quote reveal ${isInView ? 'is-visible' : ''}`}>
            <p>
              “I love building interfaces that feel as thoughtful as they look — where every detail quietly earns its place.”
            </p>
          </aside>

          <div className={`about-copy reveal ${isInView ? 'is-visible' : ''}`}>
            <p>
              I&apos;m Vanshika Agarwal, a B.Tech Computer Science student at MITRC, Alwar, currently in my 6th semester with a CGPA of 8.0+. I&apos;m passionate about building beautiful, functional web experiences and have a growing love for frontend development — where logic meets design. Beyond code, I&apos;m a GATE 2026 qualifier, which reflects my strong grip on core CS fundamentals. I thrive on learning, building, and pushing my skills further every day.
            </p>

            <div className="stats-grid">
              {aboutStats.map((stat, index) => (
                <article
                  key={stat.title}
                  className={`stat-card reveal ${isInView ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="stat-icon">{stat.icon}</span>
                  <div>
                    <h3>{stat.title}</h3>
                    <p>{stat.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;