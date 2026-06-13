import { achievement, educationTimeline } from '../data/portfolio';
import useInView from '../hooks/useInView';
import { revealClass, staggerDelay } from '../utils/animation';
import SectionHeading from './SectionHeading';

const Education = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="education" className="section section-separated" ref={ref}>
      <div className="container">
        <SectionHeading title="Education" isInView={isInView} />

        <div className="timeline">
          {educationTimeline.map((item, index) => (
            <article
              key={`${item.title}-${item.year}`}
              className={`timeline-item ${revealClass(isInView)}`}
              style={staggerDelay(index, 140)}
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

        <div className={`achievement-card ${revealClass(isInView)}`}>
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
