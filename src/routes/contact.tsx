import { createFileRoute } from '@tanstack/react-router'
import { ContactPage } from '../components/Pages'
export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Check Your Eligibility | Surplus Recovery Partners' },
      {
        name: 'description',
        content:
          'Explore a sample eligibility inquiry for your former New Jersey property and learn what an initial surplus funds review involves.',
      },
    ],
  }),
  component: ContactPage,
})
