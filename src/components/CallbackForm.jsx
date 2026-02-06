import { useState } from 'react'
import { PHONE_DISPLAY } from '../utils/constants'

const CONSENT_TEXT = `I agree to be contacted as described below. Internet Cable TV Promo and/or authorized master-dealer partners may contact you at the number and/or email address provided, including by autodialer, prerecorded messages, and SMS. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out.`

export default function CallbackForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    consent: false,
  })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-900">Thank you</h2>
          <p className="mt-4 text-surface-600">
            A specialist will reach out to review options from participating providers at your address.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-surface-50 py-16 sm:py-20">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-surface-900">Request a Callback</h2>
        <p className="mt-2 text-surface-600">
          Share a few details and a specialist can reach out to review options from participating providers at your address.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-surface-200 bg-white p-6 shadow-card sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2 sm:grid-cols-1">
              <label htmlFor="fullName" className="block text-sm font-medium text-surface-800">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-surface-200 px-4 py-2.5 text-surface-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-surface-800">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={PHONE_DISPLAY}
                className="mt-1 block w-full rounded-lg border border-surface-200 px-4 py-2.5 text-surface-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-surface-800">
                Email (optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-surface-200 px-4 py-2.5 text-surface-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="notes" className="block text-sm font-medium text-surface-800">
              Notes (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-surface-200 px-4 py-2.5 text-surface-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
          </div>
          <div className="mt-6">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-surface-600">I agree to be contacted as described below.</span>
            </label>
            <p className="mt-3 text-xs text-surface-500">
              {CONSENT_TEXT}
            </p>
          </div>
          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-primary-600 py-3.5 font-semibold text-white shadow-card hover:bg-primary-700 hover:shadow-card-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
