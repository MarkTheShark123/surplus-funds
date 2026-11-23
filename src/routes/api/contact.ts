import { createFileRoute } from '@tanstack/react-router'
// Cloudflare provides this module at runtime.
// @ts-ignore - Cloudflare types may not be generated yet
import { env } from 'cloudflare:workers'

const reply = (message: string, status: number) =>
  Response.json({ message }, { status, headers: { 'Cache-Control': 'no-store' } })

export const Route = createFileRoute('/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (request.headers.get('content-type')?.split(';')[0].trim() !== 'application/json') {
          return reply('JSON required', 415)
        }
        if (Number(request.headers.get('content-length') || 0) > 10000) {
          return reply('Request too large', 413)
        }
        const origin = request.headers.get('origin')
        if (origin && origin !== new URL(request.url).origin) {
          return reply('Invalid origin', 403)
        }
        let data: Record<string, unknown>
        try {
          const raw = await request.text()
          if (raw.length > 10000) return reply('Request too large', 413)
          const parsed: unknown = JSON.parse(raw)
          if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return reply('Invalid form', 400)
          data = parsed as Record<string, unknown>
        } catch {
          return reply('Invalid JSON', 400)
        }
        const get = (key: string) => typeof data[key] === 'string' ? (data[key] as string).trim() : ''
        const name = get('name'), email = get('email'), phone = get('phone')
        const address = get('address'), relationship = get('relationship')
        const digits = phone.replace(/\D/g, '')
        if (name.length < 2 || name.length > 150 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
            !(digits.length === 10 || (digits.length === 11 && digits.startsWith('1'))) ||
            address.length < 10 || address.length > 500 || relationship.length > 150 ||
            data.consent !== true) {
          return reply('Please check the required fields', 400)
        }
        const secrets = env as unknown as { RESEND_API_KEY?: string; RESEND_FROM_EMAIL?: string }
        const apiKey = secrets.RESEND_API_KEY
        const from = secrets.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
        if (!apiKey) return reply('Email service is not configured', 503)
        const body = [
          'New Surplus Recovery Partners inquiry', '',
          `Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`,
          `Property address: ${address}`, `Relationship: ${relationship || 'Not specified'}`,
          'Contact consent: Yes',
        ].join('\n')
        try {
          const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
              from: `Surplus Recovery Partners <${from}>`,
              to: ['maquentzel@gmail.com'],
              reply_to: email,
              subject: 'New website eligibility inquiry',
              text: body,
            }),
          })
          if (!response.ok) {
            console.error('Resend delivery API error', response.status, await response.text())
            return reply('Email delivery failed', 502)
          }
          return reply('Inquiry sent', 200)
        } catch (error) {
          console.error('Email service unavailable', error)
          return reply('Email service unavailable', 502)
        }
      },
    },
  },
})
