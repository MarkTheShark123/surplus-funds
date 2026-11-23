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
    try {
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
