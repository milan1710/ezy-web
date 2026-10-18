import { Link } from 'react-router-dom'
import Icon from './ui/Icon'

export default function ProcessSteps({ steps }) {
  return (
    <div className="process-grid">
      {steps.map((step) => (
        <article className="process-step" key={step.number}>
          <span className="process-step__number">{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
          <p className="process-step__detail">{step.detail}</p>
        </article>
      ))}
    </div>
  )
}

export function ProcessNote({ children }) {
  return (
    <div className="notice mt-24">
      <Icon name="info" size={16} />
      <p>{children}</p>
    </div>
  )
}

export function ProcessCTA({ to = '/contact', label = 'Discuss Your Growth Plan' }) {
  return (
    <Link className="btn mt-24" to={to}>
      {label} <Icon name="arrowRight" size={16} />
    </Link>
  )
}
