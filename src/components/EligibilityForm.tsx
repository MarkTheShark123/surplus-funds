import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { Link } from '@tanstack/react-router'
import { Icon } from './Icon'

type Fields = {
  name: string
  email: string
  phone: string
  address: string
  relationship: string
  consent: boolean
}
type Errors = Partial<Record<keyof Fields, string>>
const initial: Fields = {
  name: '',
  email: '',
  phone: '',
  address: '',
  relationship: '',
  consent: false,
}

export function EligibilityForm({ compact = false }: { compact?: boolean }) {
  const prefix = useId()
  const [fields, setFields] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [complete, setComplete] = useState(false)
  const [ready, setReady] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const successRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setReady(true)
  }, [])
  function update(key: keyof Fields, value: string | boolean) {
    setFields((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Errors = {}
    if (fields.name.trim().length < 2)
      next.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      next.email = 'Please enter a valid email address.'
    const digits = fields.phone.replace(/\D/g, '')
    if (!(
      digits.length === 10 ||
      (digits.length === 11 && digits.startsWith('1'))
    ))
      next.phone = 'Please enter a 10-digit US phone number.'
    if (fields.address.trim().length < 10)
      next.address = 'Please include the street, city, state, and ZIP code.'
    if (!fields.consent)
      next.consent = 'Please confirm that we may contact you about your inquiry.'
    setErrors(next)
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0]
      document.getElementById(`${prefix}-${first}`)?.focus()
      return
    }
    setSending(true)
    setSubmitError('')
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fields.name.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        address: fields.address.trim(),
        relationship: fields.relationship,
        consent: fields.consent,
      }),
    })
      if (!response.ok) throw new Error('Submission failed')
      setComplete(true)
      setFields(initial)
      requestAnimationFrame(() => successRef.current?.focus())
    } catch {
      setSubmitError('We could not send your inquiry. Please email us at surplusrecoverypartners@gmail.com or call (201) 937-9270.')
    } finally { setSending(false) }
  }
  if (complete)
    return (
      <div
        className="form-success"
        role="status"
        tabIndex={-1}
        ref={successRef}
      >
        <span className="success-icon">
          <Icon name="check" size={30} />
        </span>
        <div className="eyebrow">INQUIRY SENT</div>
        <h3>You’ve taken the first step.</h3>
        <p>
          Your inquiry was submitted to our website form service. We will review it and follow up. This does not confirm eligibility or guarantee recovery.
        </p>
        <p className="success-note">If your matter is urgent, call (201) 937-9270.</p>
        <button
          className="button button-navy"
          onClick={() => {
            setComplete(false)
            requestAnimationFrame(() =>
              document.getElementById(`${prefix}-name`)?.focus(),
            )
          }}
        >
          Send another inquiry
          <Icon name="arrow" size={18} />
        </button>
      </div>
    )
  return (
    <form
      className={`eligibility-form ${compact ? 'form-compact' : ''}`}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Surplus funds inquiry"
      autoComplete="off"
    >

      <noscript>
        <p className="field-error">
          Enable JavaScript to send this inquiry, or contact us by phone.
        </p>
      </noscript>
      <div className="form-heading">
        <span className="small-label">LET’S START WITH THE BASICS</span>

      </div>
      <p className="form-instruction">
        Share your contact information and former property address. We’ll follow up about your inquiry.
      </p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor={`${prefix}-name`}>
            Full name <span>*</span>
          </label>
          <input
            id={`${prefix}-name`}
            value={fields.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your first and last name"
            required
            autoComplete="off"
            maxLength={120}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${prefix}-name-error` : undefined}
          />
          {errors.name && (
            <span className="field-error" id={`${prefix}-name-error`}>
              {errors.name}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor={`${prefix}-email`}>
            Email address <span>*</span>
          </label>
          <input
            id={`${prefix}-email`}
            type="email"
            value={fields.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@example.com"
            required
            autoComplete="off"
            maxLength={254}
            aria-invalid={!!errors.email}
            aria-describedby={
              errors.email ? `${prefix}-email-error` : undefined
            }
          />
          {errors.email && (
            <span className="field-error" id={`${prefix}-email-error`}>
              {errors.email}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor={`${prefix}-phone`}>
            Phone number <span>*</span>
          </label>
          <input
            id={`${prefix}-phone`}
            type="tel"
            value={fields.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="(201) 555-0123"
            required
            autoComplete="off"
            maxLength={30}
            aria-invalid={!!errors.phone}
            aria-describedby={
              errors.phone ? `${prefix}-phone-error` : undefined
            }
          />
          {errors.phone && (
            <span className="field-error" id={`${prefix}-phone-error`}>
              {errors.phone}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor={`${prefix}-relationship`}>
            Your connection to the property
          </label>
          <select
            id={`${prefix}-relationship`}
            value={fields.relationship}
            onChange={(e) => update('relationship', e.target.value)}
          >
            <option value="">Select an option (optional)</option>
            <option value="owner">Former homeowner</option>
            <option value="heir">Heir or estate representative</option>
            <option value="other">Another connection / unsure</option>
          </select>
        </div>
        <div className="field field-full">
          <label htmlFor={`${prefix}-address`}>
            Former property address <span>*</span>
          </label>
          <input
            id={`${prefix}-address`}
            value={fields.address}
            onChange={(e) => update('address', e.target.value)}
            placeholder="Street address, city, NJ, ZIP code"
            required
            autoComplete="off"
            maxLength={300}
            aria-invalid={!!errors.address}
            aria-describedby={
              errors.address
                ? `${prefix}-address-error`
                : `${prefix}-address-hint`
            }
          />
          <span className="field-hint" id={`${prefix}-address-hint`}>
            The New Jersey property that went through foreclosure.
          </span>
          {errors.address && (
            <span className="field-error" id={`${prefix}-address-error`}>
              {errors.address}
            </span>
          )}
        </div>
      </div>
      <div className="consent-field">
        <label>
          <input
            id={`${prefix}-consent`}
            type="checkbox"
            checked={fields.consent}
            onChange={(e) => update('consent', e.target.checked)}
            required
            aria-invalid={!!errors.consent}
            aria-describedby={
              errors.consent ? `${prefix}-consent-error` : undefined
            }
          />
          <span>
            I agree to be contacted about this inquiry by phone or email. This is not an agreement to hire anyone.
          </span>
        </label>
        {errors.consent && (
          <span className="field-error" id={`${prefix}-consent-error`}>
            {errors.consent}
          </span>
        )}
      </div>
      {submitError && <p className="field-error" role="alert">{submitError}</p>}
      <button
        className="button button-green form-submit"
        type="submit"
        disabled={!ready || sending}
      >
        {sending ? 'Sending…' : 'Request a case review'} <Icon name="arrow" size={19} />
      </button>
      <div className="form-footnote">
        <Icon name="lock" size={14} />
        <span>
          Submitting does not confirm eligibility or create an attorney-client relationship.{' '}
          <Link to="/contact" hash="prototype-privacy">
            Privacy information
          </Link>
        </span>
      </div>
    </form>
  )
}
