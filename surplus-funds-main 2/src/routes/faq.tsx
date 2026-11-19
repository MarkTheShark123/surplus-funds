import { createFileRoute } from '@tanstack/react-router'
import { FAQPage } from '../components/Pages'
export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { title: 'Frequently Asked Questions | Surplus Recovery Partners' },
      {
        name: 'description',
        content:
          'Answers to common questions about New Jersey foreclosure surplus funds, eligibility, recovery, and fees.',
      },
    ],
  }),
  component: FAQPage,
})
