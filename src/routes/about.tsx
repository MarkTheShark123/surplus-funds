import { createFileRoute } from '@tanstack/react-router'
import { AboutPage } from '../components/Pages'
export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us | Garden State Surplus Recovery' },
      {
        name: 'description',
        content:
          'A thoughtful, transparent approach to helping New Jersey former homeowners understand foreclosure surplus recovery.',
      },
    ],
  }),
  component: AboutPage,
})
