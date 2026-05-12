import { skillGroups } from '../data/portfolio';
import useInView from '../hooks/useInView';

const Skills = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="skills" className="section section-separated" ref={ref}>
      <div className="container">
        <div className={`section-heading reveal ${isInView ? 'is-visible' : ''}`}>
          <h2 className="section-title gradient-text">Skills &amp; Technologies</h2>
          <span className="section-line" />
        </div>

        <div className="skills-groups">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`skill-group reveal ${isInView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${groupIndex * 120}ms` }}
            >
              <h3>{group.category}</h3>
              <div className="skill-badges">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    className="skill-badge"
                    key={skill}
                    style={{ transitionDelay: `${groupIndex * 120 + skillIndex * 60}ms` }}
                  >
                    <span className="skill-badge-dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;