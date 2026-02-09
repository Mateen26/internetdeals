import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '../utils/constants'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-fade-in">
            Your Destination for Seamless Connectivity and Unmatched Entertainment!
          </h1>
          <p className="mt-6 text-lg text-primary-100 sm:text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Unleash the full potential of your home with internetdealz.com, where cutting-edge technology meets unbeatable entertainment. Elevate your digital lifestyle with our high-speed internet and premium cable TV services.
          </p>
          <div className="mt-10">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-base font-semibold text-surface-900 shadow-card hover:bg-accent-400 hover:shadow-card-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call (855) 200-3403
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
