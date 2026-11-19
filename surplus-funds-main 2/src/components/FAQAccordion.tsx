import { useState } from 'react'
import { Icon } from './Icon'
import { faqs } from '../data/faqs'

export function FAQAccordion({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState('All questions')
  const categories = [
    'All questions',
    'Understanding surplus',
    'The recovery process',
    'Fees & representation',
  ]
  const items = preview
    ? faqs.slice(0, 4)
    : faqs.filter(
        (item) => category === 'All questions' || item.category === category,
      )
  return (
    <div className="faq-widget">
      {!preview && (
        <div className="faq-filters" role="group" aria-label="Filter questions">
          {categories.map((item) => (
            <button
              type="button"
              aria-pressed={category === item}
              key={item}
              onClick={() => setCategory(item)}
              className={category === item ? 'selected' : ''}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="faq-list" key={category}>
        {items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>
              {item.question}
              <span className="faq-toggle">
                <Icon name="plus" size={20} />
                <Icon name="minus" size={20} />
              </span>
            </summary>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
