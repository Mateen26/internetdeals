import { Phone, Search } from 'lucide-react'
import { PHONE_TEL } from '../utils/constants'

export default function HomePhoneSection() {
  return (
    <section className="bg-primary-600 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Stay Connected with a Smart, Secure Home Phone
            </h2>
            <p className="mt-6 text-primary-100">
              Get unlimited calling across the U.S. plus international coverage to Mexico, Puerto Rico, and many more destinations. With Spect Voice, there are no contracts, no surprise charges, and crystal-clear call reliability. In an emergency, your Spect landline connects you directly to 911 so help can find you faster.
            </p>
            <div className="mt-8 rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-primary-100">Add Spect Voice for only</p>
              <p className="mt-2 text-4xl font-bold text-white">$15/mo</p>
            </div>
            <a
              href={PHONE_TEL}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-800 px-8 py-4 font-semibold text-white shadow-card hover:bg-primary-900 hover:shadow-card-hover transition-all duration-200"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call Now
            </a>
            <a
              href="#deals"
              className="mt-4 flex items-center gap-2 text-primary-200 hover:text-white transition-colors"
            >
              <Search className="h-4 w-4" aria-hidden />
              Explore today&apos;s best bundle deals
            </a>
            <p className="mt-8 text-xs text-primary-200">
              * Limited-time offer. Terms and conditions may apply.
            </p>
          </div>
          <div className="hidden lg:block rounded-2xl bg-surface-800/30 h-64 flex items-center justify-center align-middle content-center text-center">
            <span className="text-primary-300 text-lg">Home phone • Unlimited calling</span>
          </div>
        </div>
      </div>
    </section>
  )
}
