import { Link, useLocation } from '@tanstack/react-router'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from './Icon'

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About Us' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
] as const

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`brand ${light ? 'brand-light' : ''}`}
      aria-label="Garden State Surplus Recovery home"
    >
      <span className="brand-mark">
        <svg viewBox="0 0 44 46" fill="none" aria-hidden="true">
          <path
            d="M5 23 22 7l17 16M10 19v20h24V19M18 39V27h8v12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 5V1M8 11 5 8M36 11l3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M3 44h38" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
      <span>
        <span className="brand-name">Garden State</span>
        <span className="brand-subtitle">SURPLUS RECOVERY</span>
      </span>
    </Link>
  )
}

export function EligibilityLink({
  children = 'Check your eligibility',
  className = 'button button-green',
  onClick,
}: {
  children?: ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      to="/contact"
      hash="eligibility"
      className={className}
      onClick={onClick}
    >
      {children}
      <Icon name="arrow" size={18} />
    </Link>
  )
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const pathname = useLocation({ select: (location) => location.pathname })
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])
  useEffect(() => {
    if (!menuOpen) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [menuOpen])
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <div className="announcement">
        <div className="container announcement-inner">
          <span>A fresh start begins with understanding your options.</span>
          <span>
            <Icon name="pin" size={13} /> Focused on New Jersey homeowners
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={pathname === item.to ? 'active' : ''}
                aria-current={pathname === item.to ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <EligibilityLink className="button button-navy header-cta">
            Check your eligibility
          </EligibilityLink>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={25} />
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === item.to ? 'page' : undefined}
              >
                {item.label}
                <Icon name="arrow" size={17} />
              </Link>
            ))}
            <EligibilityLink
              className="button button-green"
              onClick={() => setMenuOpen(false)}
            />
          </nav>
        )}
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <Brand light />
              <p>
                A clearer understanding.
                <br />A thoughtful next step.
              </p>
              <span className="footer-location">
                <Icon name="pin" size={15} /> New Jersey homeowner assistance
              </span>
            </div>
            <div>
              <h3>Explore</h3>
              <div className="footer-links">
                {navigation.slice(1).map((item) => (
                  <Link key={item.to} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer-next">
              <h3>Your next chapter starts here.</h3>
              <p>
                Learn whether foreclosure surplus funds may be part of your
                story.
              </p>
              <EligibilityLink className="footer-eligibility" />
            </div>
          </div>
          <div className="footer-disclosures">
            <span className="prototype-tag">VISUAL PROTOTYPE</span>
            <p>
              Garden State Surplus Recovery is a working company name. Legal
              business name, business address, contact details, attorney
              involvement and credentials, and all fee disclosures are pending
              verification. This prototype does not accept inquiries.
            </p>
            <p>
              General information only; not legal advice. No attorney-client
              relationship is created. Eligibility, timing, and recovery depend
              on the facts, competing claims, and court requirements. No
              recovery is guaranteed. You may contact the court or seek
              independent legal advice about pursuing a claim yourself.
            </p>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Garden State Surplus Recovery.
              Working brand.
            </span>
            <Link to="/contact" hash="prototype-privacy">
              Prototype privacy notice <Icon name="arrow-up" size={13} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: ReactNode
  children: ReactNode
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <div className="eyebrow">
          <span />
          {eyebrow}
        </div>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  )
}

export function ClosingCTA() {
  return (
    <section className="closing-section">
      <div className="container closing-inner">
        <div>
          <div className="eyebrow">A SIMPLE PLACE TO START</div>
          <h2>
            You don’t need all the answers
            <br />
            to take the first step.
          </h2>
          <p>Start with a few details about your former New Jersey property.</p>
        </div>
        <EligibilityLink />
      </div>
    </section>
  )
}
