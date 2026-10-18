import { Link } from 'react-router-dom'
import Icon from './ui/Icon'

export default function GrowthSolutionCard({ solution, index }) {
  return (
    <article className="solution-card">
      <div className="solution-card__top">
        <span className="solution-card__icon">
          <Icon name={solution.icon} size={19} />
        </span>
        <span className="solution-card__number">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="solution-card__body">
        <span className="tag tag--sand solution-card__tag">Proposed solution</span>
        <h3>{solution.title}</h3>
        <p>{solution.summary}</p>
        <Link className="text-link" to={solution.path}>
          Explore this solution <Icon name="arrowRight" size={14} />
        </Link>
      </div>
    </article>
  )
}
