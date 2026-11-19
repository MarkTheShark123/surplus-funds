import {
  createRouter,
  useRouter,
  type ErrorComponentProps,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

function SafeErrorPage({ reset }: ErrorComponentProps) {
  const router = useRouter()
  return (
    <main className="error-page">
      <div>
        <h1>This page couldn’t load.</h1>
        <p role="alert">Please try again or return to the homepage.</p>
        <div className="error-actions">
          <button
            className="button button-green"
            onClick={() => {
              void router.invalidate()
              reset()
            }}
          >
            Try again
          </button>
          <a className="text-link" href="/">
            Return home
          </a>
        </div>
      </div>
    </main>
  )
}

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: SafeErrorPage,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
