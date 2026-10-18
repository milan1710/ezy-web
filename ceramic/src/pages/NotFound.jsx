import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import Icon from '../components/ui/Icon'

export default function NotFound() {
  useSeo({
    title: 'Page Not Found | Ezy Digital Ceramic Growth',
    description: 'The page you requested could not be found. Explore Ezy Digital ceramic growth solutions, pricing or contact options.',
    path: '/404',
    noindex: true,
  })

  return (
    <section className="section notfound">
      <div className="container">
        <div className="notfound__inner">
          <p className="notfound__code">404</p>
          <h1>This Page Is Not Part of the Catalogue.</h1>
          <p>
            The link may be outdated. Explore the ceramic growth solutions, starting prices or contact
            Ezy Digital directly.
          </p>
          <div className="row">
            <Link className="btn" to="/">
              Back to Home <Icon name="arrowRight" size={15} />
            </Link>
            <Link className="btn btn--outline" to="/solutions">
              Explore Solutions
            </Link>
            <Link className="btn btn--outline" to="/contact">
              Contact Ezy Digital
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
