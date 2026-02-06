import { Phone, Zap } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '../utils/constants'

export default function DealCards() {
  return (
    <section id="deals" className="bg-surface-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-surface-900 sm:text-4xl">
          Today&apos;s Best Deals
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-8">
            <div className="flex items-center gap-2 text-surface-700">
              <Zap className="h-5 w-5 text-accent-500" aria-hidden />
              <span className="font-semibold">Limited-Time Deal</span>
            </div>
            <div className="mt-6 space-y-4 border-t border-surface-200 pt-6">
              <div>
                <p className="text-surface-800 font-medium">500 Mbps Internet</p>
                <p className="text-2xl font-bold text-primary-600">$50/mo</p>
                <p className="text-sm text-surface-500">No data caps, no contracts</p>
              </div>
              <div className="border-t border-dashed border-surface-200 pt-4">
                <p className="text-surface-800 font-medium">Unlimited Mobile Line</p>
                <p className="font-bold text-primary-600">Included</p>
                <p className="text-sm text-surface-500">Nationwide 5G access</p>
              </div>
              <div className="border-t border-dashed border-surface-200 pt-4">
                <p className="text-surface-800 font-medium">Bundle Savings</p>
                <p className="text-2xl font-bold text-primary-600">Now $50/mo</p>
                <p className="text-sm text-surface-500">$80/mo for new customers</p>
              </div>
            </div>
            <a
              href={PHONE_TEL}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3.5 font-semibold text-white shadow-card hover:bg-primary-700 hover:shadow-card-hover transition-all duration-200"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call Now
            </a>
          </article>

          <article className="rounded-2xl border border-primary-200 bg-primary-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-8">
            <span className="inline-block rounded-full bg-primary-600 px-4 py-1.5 text-sm font-medium text-white">
              Spectacular Bundle
            </span>
            <h3 className="mt-4 text-2xl font-bold text-surface-900">
              Internet + Mobile in One Affordable Plan
            </h3>
            <p className="mt-3 text-surface-700">
              Get ultra-fast internet speeds and an unlimited mobile line all in one plan. Experience savings, simplicity, and speed — designed for your lifestyle.
            </p>
            <a
              href={PHONE_TEL}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 font-semibold text-white shadow-card hover:bg-primary-700 hover:shadow-card-hover transition-all duration-200"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call Now: {PHONE_DISPLAY}
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
