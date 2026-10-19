import { processStages } from '../../data/presentationContent'
import Icon from '../ui/Icon'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section
      className="cn-section cn-section--light cn-process"
      id="process"
      aria-labelledby="cn-process-title"
    >
      <div className="cn-container">
        <div className="cn-section-head cn-section-head--center">
          <Reveal>
            <p className="cn-eyebrow cn-eyebrow--center">
              <span>10</span> Our Process
            </p>
            <h2 className="cn-h2" id="cn-process-title">
              A structured process designed to support your ceramic business growth.
            </h2>
            <p className="cn-lead">
              Six connected stages keep the work clear — from understanding the business to
              reviewing results and planning the next opportunity.
            </p>
          </Reveal>
        </div>

        <div className="cn-timeline">
          <span className="cn-timeline__line" aria-hidden="true" />
          {processStages.map((stage, index) => (
            <Reveal
              as="article"
              className={`cn-timeline__item${index % 2 === 1 ? ' is-right' : ''}`}
              delay={60}
              key={stage.number}
            >
              <div className="cn-timeline__card">
                <span className="cn-timeline__icon">
                  <Icon name={stage.icon} size={20} />
                </span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
                <ul>
                  {stage.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={12} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cn-timeline__marker" aria-hidden="true">
                <span>{stage.number}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
