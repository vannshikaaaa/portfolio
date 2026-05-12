import { achievement, educationTimeline } from '../data/portfolio';
import useInView from '../hooks/useInView';

const Education = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="education" className="section section-separated" ref={ref}>
      <div className="container">
        <div className={`section-heading reveal ${isInView ? 'is-visible' : ''}`}>
          <h2 className="section-title gradient-text">Education</h2>
          <span className="section-line" />
        </div>

        <div className="timeline">
          {educationTimeline.map((item, index) => (
            <article
              key={`${item.title}-${item.year}`}
              className={`timeline-item reveal ${isInView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3>{item.title}</h3>
                  <span>{item.year}</span>
                </div>
                {item.institution ? <p className="timeline-institution">{item.institution}</p> : null}
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={`achievement-card reveal ${isInView ? 'is-visible' : ''}`}>
          <span className="achievement-label">Achievement</span>
          <h3>{achievement.title}</h3>
          <p className="achievement-meta">{achievement.meta}</p>
          <p>{achievement.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;