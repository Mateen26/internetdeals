import { Tv, Zap, Wrench, Monitor, FileText, Headphones } from 'lucide-react'

const BADGES = [
  { icon: Tv, label: '250+ Channels' },
  { icon: Zap, label: 'Speed Seamless' },
  { icon: Wrench, label: 'Free Installation' },
  { icon: Monitor, label: '4K & 8K Quality' },
  { icon: FileText, label: 'Flexible Tariff Plans' },
  { icon: Headphones, label: 'Fast Support 24/7' },
]

export default function FeatureBadges() {
  return (
    <section className="border-b border-surface-200 bg-surface-50 py-8" aria-label="Key features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
          {BADGES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2 rounded-xl px-6 py-4 transition-all duration-200 hover:scale-105 hover:brightness-110"
            >
              <div className="rounded-full bg-primary-100 p-3 text-primary-600 transition-colors group-hover:bg-primary-200">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
              </div>
              <span className="text-sm font-medium text-surface-800">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
