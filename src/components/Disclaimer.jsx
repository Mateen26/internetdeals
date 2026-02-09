import { ShieldAlert } from 'lucide-react'

const POINTS = [
  { title: 'Third-Party Reseller', text: 'We offer services based on customer requirements and support for any issue. Not affiliated with TV Network.' },
  { title: 'Service Availability', text: 'All service offerings, pricing, and promotions are subject to change without notice based on availability and provider terms.' },
  { title: 'No Warranty', text: 'Services and information are provided "as is" without any express or implied warranties.' },
  { title: 'Accuracy of Information', text: 'While we strive for accuracy, we make no guarantees regarding the completeness or correctness of content on the Site.' },
  { title: 'Logo & Trademark Ownership', text: 'All logos, trademarks, and service marks displayed are the property of their respective owners.' },
  { title: 'Call Tracking', text: 'Calls placed to numbers on this Site may be recorded or monitored for quality assurance and training.' },
  { title: 'Pricing Disclaimer', text: 'Advertised prices may not include taxes, fees, or equipment charges, which may vary by location.' },
  { title: 'Third-Party Links', text: 'Links to external sites are provided for convenience. We are not responsible for their content or privacy practices.' },
  { title: 'Limitation of Liability', text: 'We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of this Site or services.' },
  { title: 'Health & Safety', text: 'Installation services must comply with local building and safety codes. Users are responsible for ensuring safe installation environments.' },
  { title: 'Geographic Restrictions', text: 'Certain services may not be available in all areas. Please confirm availability in your region.' },
  { title: 'Customer Responsibility', text: 'Customers must provide accurate information and access to premises for installation and support.' },
]

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-primary-950 to-slate-900 py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M15 0L15 30M0 15L30 15\' stroke=\'%234f46e5\' stroke-opacity=\'0.06\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] opacity-80" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/20 text-accent-400 ring-2 ring-accent-400/30">
            <ShieldAlert className="h-8 w-8" aria-hidden />
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Affiliate Disclaimer
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Please read the following information regarding our role and your rights.
          </p>
          <div className="mt-4 h-1 w-16 rounded-full bg-accent-500" aria-hidden />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {POINTS.map(({ title, text }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-600/60 bg-slate-800/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/50 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-primary-900/20"
            >
              <h3 className="font-semibold text-accent-400 transition-colors group-hover:text-accent-300">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
