import { useState } from 'react'
import Icon from './ui/Icon'

export default function FAQAccordion({ items, idPrefix = 'faq' }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${idPrefix}-panel-${index}`
        const buttonId = `${idPrefix}-button-${index}`

        return (
          <div className="faq-item" key={item.question}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="faq-question"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span className="faq-question__icon" aria-hidden="true">
                  <Icon name="plus" size={15} />
                </span>
              </button>
            </h3>
            <div
              className="faq-answer"
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
