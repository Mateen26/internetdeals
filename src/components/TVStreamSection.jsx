import { Phone, Check } from 'lucide-react'
import { PHONE_TEL } from '../utils/constants'

const FEATURES = [
  '95+ channels in FREE HD quality',
  'No cable box or extra equipment needed',
  'Stream your full lineup anywhere on any device with the FREE Spect TV App',
  'Thousands of On Demand titles available anytime',
  'Simple, flexible plans — no contracts, no hassle',
]

export default function TVStreamSection() {
  return (
    <section className="bg-primary-700 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-primary-200 text-sm font-medium">SPECT-INTERNET®</span>
            <div className="mt-2 flex items-start justify-between gap-4">
              <h2 className="text-3xl font-bold sm:text-4xl">
                95+ Popular Channels
              </h2>
              <span className="shrink-0 rounded-xl bg-red-500 px-4 py-2 text-lg font-bold text-white shadow-lg">
                $45 /mo
              </span>
            </div>
            <p className="mt-6 text-primary-100">
              Want a budget-friendly way to watch TV? With Cable And Satellite Stream®, enjoy over 95 channels featuring top shows, movies, and sports. Watch live or On Demand straight from your phone, tablet, or TV with the FREE Cable And Satellite TV App.
            </p>
            <ul className="mt-8 space-y-3">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-primary-50">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={PHONE_TEL}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 font-semibold text-surface-900 shadow-card hover:bg-accent-400 hover:shadow-card-hover transition-all duration-200"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call Now
            </a>
          </div>
          <div className="rounded-2xl bg-surface-800/30 p-8 text-center">
            <p className="text-primary-200 text-sm">TV streaming on any device</p>
            <div className="mt-4 text-6xl font-bold text-white">95+</div>
            <p className="mt-2 text-primary-100">HD Channels</p>
          </div>
        </div>
      </div>
    </section>
  )
}
