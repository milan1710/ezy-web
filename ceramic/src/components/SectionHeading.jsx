export default function SectionHeading({ eyebrow, title, text, align = 'left', action }) {
  const className = [
    'section-head',
    align === 'center' ? 'section-head--center' : '',
    action ? 'section-head--split' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className}>
      <div className="section-head__text">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="section-head__title">{title}</h2>
        {text ? <p className="section-head__text">{text}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  )
}
