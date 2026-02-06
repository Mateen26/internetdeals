import { Zap, Tv, Package } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const BLOCKS = [
  {
    icon: Zap,
    title: 'Blazing Fast Internet',
    description: 'Experience the internet like never before with speeds that keep up with your demands. Whether you\'re streaming, gaming, or working from home, our high-speed internet ensures a smooth and reliable connection with Spectrum Customer Service.',
  },
  {
    icon: Tv,
    title: 'Premium Cable TV',
    description: 'Dive into a world of entertainment with our rich selection of HD channels. From live sports and blockbuster movies to news and lifestyle programs, our cable TV packages cater to all your viewing preferences and internet customer service.',
  },
  {
    icon: Package,
    title: 'Bundle and Save',
    description: 'Simplify your life and save big by bundling our high-speed Internet Customer Service and cable TV Customer services. Enjoy the convenience of a single provider and benefit from exclusive discounts that make entertainment affordable.',
  },
]

export default function FeatureBlocks() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="bg-white py-16 sm:py-20" ref={ref}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="grid gap-8 md:grid-cols-3">
          {BLOCKS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-surface-200 bg-surface-50 p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-primary-200"
            >
              <div className="rounded-xl bg-primary-100 p-4 inline-block text-primary-600 transition-colors group-hover:bg-primary-200">
                <Icon className="h-10 w-10" aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary-700">{title}</h3>
              <p className="mt-3 text-surface-700">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
