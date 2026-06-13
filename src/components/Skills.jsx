import { skillGroups } from '../data/portfolio';
import useInView from '../hooks/useInView';
import { revealClass, staggerDelay } from '../utils/animation';
import SectionHeading from './SectionHeading';

const Skills = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="skills" className="section section-separated" ref={ref}>
      <div className="container">
        <SectionHeading title="Skills &amp; Technologies" isInView={isInView} />

        <div className="skills-groups">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`skill-group ${revealClass(isInView)}`}
              style={staggerDelay(groupIndex, 120)}
            >
              <h3>{group.category}</h3>
              <div className="skill-badges">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    className="skill-badge"
                    key={skill}
                    style={staggerDelay(groupIndex * 2 + skillIndex, 60)}
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
