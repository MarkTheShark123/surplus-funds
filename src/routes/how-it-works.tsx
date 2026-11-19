import { createFileRoute } from '@tanstack/react-router'
import { HowItWorksPage } from '../components/Pages'
export const Route = createFileRoute('/how-it-works')({
  head: () => ({
    meta: [
      { title: 'How It Works | Surplus Recovery Partners' },
      {
        name: 'description',
        content:
          'Understand the steps involved in reviewing potential New Jersey foreclosure surplus funds and deciding how to move forward.',
      },
    ],
  }),
  component: HowItWorksPage,
})
