import { Phone } from 'lucide-react'
import { PHONE_TEL } from '../utils/constants'

export default function BusinessSection() {
  return (
    <section className="relative overflow-hidden bg-surface-900 py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/50 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-600 bg-surface-800/80 p-8 shadow-card-hover backdrop-blur sm:p-12">
          <span className="text-accent-400 text-sm font-medium">SPECT-INTERNET BUSINESS®</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Reliable Internet & Phone Solutions for Your Office
          </h2>
          <p className="mt-6 text-slate-300">
            Power your business with high-speed Internet and professional phone service. Enjoy unlimited local and long-distance calling, 35+ advanced voice features, and a dedicated business phone number at no extra cost.
          </p>
          <div className="mt-8 flex flex-wrap items-baseline gap-2">
            <span className="text-4xl font-bold text-white">$49</span>
            <span className="text-slate-400">99/mo for 12 months*</span>
          </div>
          <a
            href={PHONE_TEL}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 font-semibold text-surface-900 shadow-card hover:bg-accent-400 hover:shadow-card-hover transition-all duration-200"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call Now
          </a>
          <p className="mt-6 text-xs text-slate-500">
            *Promotional pricing valid for 12 months, offers subject to change.
          </p>
        </div>
      </div>
    </section>
  )
}
