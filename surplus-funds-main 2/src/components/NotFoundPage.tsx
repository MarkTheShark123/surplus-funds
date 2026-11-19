import { Link } from '@tanstack/react-router'
import { SiteLayout } from './SiteLayout'
import { Icon } from './Icon'

export function NotFoundPage() {
  return (
    <SiteLayout>
      <section className="error-page">
        <div>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            PAGE NOT FOUND
          </div>
          <h1>Let’s find your way back.</h1>
          <p>The page you’re looking for may have moved.</p>
          <Link to="/" className="button button-green">
            Return home
            <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
