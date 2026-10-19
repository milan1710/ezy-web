import { useEffect, useState } from 'react'
import { ceramicSite } from '../../config/ceramicSite'
import Icon from '../ui/Icon'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="cn-actions" aria-label="Quick actions">
      <a
        className="cn-actions__form"
        href="#audit-form"
        aria-label="Fill the free ceramic growth audit form"
        title="Fill the free audit form"
      >
        <Icon name="clipboard" size={18} />
        <span>Fill Form</span>
      </a>
      <a
        className="cn-actions__call"
        href={ceramicSite.contact.telHref}
        aria-label={`Call Ezy Digital on ${ceramicSite.contact.phoneInternational}`}
        title={`Call ${ceramicSite.contact.phoneInternational}`}
      >
        <Icon name="phone" size={20} />
      </a>
      <button
        type="button"
        className={`cn-actions__top${visible ? ' is-visible' : ''}`}
        onClick={scrollTop}
        aria-label="Back to top"
        tabIndex={visible ? 0 : -1}
      >
        <Icon name="arrowRight" size={19} />
      </button>
    </div>
  )
}
