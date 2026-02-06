import { Phone, Check } from 'lucide-react'
import { PHONE_TEL } from '../utils/constants'

const FEATURES = [
  'Up to 500 Mbps Internet speeds',
  '95+ channels included with FREE HD',
  'Enhanced online security with Advanced WiFi',
  'Stream anywhere with the FREE Spectrum TV App',
  'No contracts. No hidden fees.',
]

export default function BundleSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl bg-surface-100 p-8">
            <p className="text-sm font-medium uppercase tracking-wider text-primary-600">
              Living room streaming
            </p>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl bg-primary-700 p-8 text-white shadow-card-hover sm:p-10">
              <span className="inline-block rounded-lg bg-accent-500 px-4 py-1.5 text-sm font-semibold text-surface-900">
                MORE INTERNET. MORE VALUE.
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Internet Premier + WiFi + TV Stream
              </h2>
              <p className="mt-4 text-primary-100">
                Experience speed, entertainment, and security all in one bundle. Get fast and reliable Internet with Spectrum Advanced WiFi, plus enjoy your favorite shows on 95+ HD channels. Stream anytime, anywhere with the FREE SpecT TV App.
              </p>
              <div className="absolute -right-2 -top-2 rounded-xl bg-red-500 px-5 py-3 text-right shadow-lg sm:right-4 sm:top-4">
                <p className="text-xs font-medium text-white">Bundle Price</p>
                <p className="text-2xl font-bold text-white">$75 /mon</p>
              </div>
              <ul className="mt-6 space-y-3">
                {FEATURES.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-primary-50">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-primary-200">Don&apos;t miss today&apos;s best deals!</p>
              <a
                href={PHONE_TEL}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 font-semibold text-surface-900 shadow-card hover:bg-accent-400 hover:shadow-card-hover transition-all duration-200"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
