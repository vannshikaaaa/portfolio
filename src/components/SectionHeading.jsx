import { revealClass } from '../utils/animation';

const SectionHeading = ({ title, subtitle, isInView }) => (
  <div className={`section-heading ${revealClass(isInView)}`}>
    <h2 className="section-title gradient-text">{title}</h2>
    <span className="section-line" />
    {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
  </div>
);

export default SectionHeading;
