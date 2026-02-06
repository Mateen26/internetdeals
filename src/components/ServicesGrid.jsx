import {
  Shield,
  Wifi,
  Radio,
  Package,
  Monitor,
  Gamepad2,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SERVICES = [
  {
    icon: Shield,
    title: 'Reliability at its Core',
    description: 'Say goodbye to disruptions and lag. Our commitment to reliability ensures a seamless entertainment experience, allowing you to enjoy your favorite content without interruptions.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Internet Plans',
    description: 'Choose a plan that fits your lifestyle. Whether you\'re a casual browser or a tech enthusiast, we have high-speed internet options tailored to your needs.',
  },
  {
    icon: Radio,
    title: 'Cable TV Packages',
    description: 'Immerse yourself in a world of entertainment with our diverse cable TV packages. From live events to on-demand content, we\'ve curated a lineup that caters to every taste.',
  },
  {
    icon: Package,
    title: 'Bundle and Save',
    description: 'Why settle for less when you can have it all? Bundle your internet and cable TV services with us and enjoy not just the convenience of a single provider, but also significant savings on your monthly bills.',
  },
  {
    icon: Monitor,
    title: 'HD Streaming, No Compromises!',
    description: 'Experience a world of high-definition streaming and a vast array of cable TV channels. Don\'t settle for less – get the best with our exclusive internet and cable TV plans!',
  },
  {
    icon: Gamepad2,
    title: 'Stream, Game, Connect',
    description: 'Say goodbye to buffering and hello to seamless streaming. Our high-speed internet and cable TV bundles bring you the best of both worlds. Explore the future of entertainment!',
  },
]

export default function ServicesGrid() {
  const [ref, visible] = useScrollReveal()
  return (
    <section id="services" className="bg-surface-900 py-16 text-white sm:py-20 lg:py-24" ref={ref}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Explore The Next ISP Unlimited Possibilities
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-600 bg-surface-800/50 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-card-hover"
            >
              <div className="mb-4 rounded-xl bg-accent-500/20 p-3 inline-block text-accent-400 transition-colors group-hover:bg-accent-500/30">
                <Icon className="h-8 w-8" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
