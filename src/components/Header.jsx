import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_ITEMS, SITE_NAME, PHONE_DISPLAY, PHONE_TEL } from '../utils/constants'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-surface-200 shadow-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-bold text-primary-700 hover:text-primary-600 transition-colors">
          {SITE_NAME}
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-surface-800 hover:text-primary-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-primary-700 hover:shadow-card-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now: {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-surface-700 hover:bg-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-surface-200 bg-white px-4 py-4">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-lg px-4 py-3 text-surface-800 hover:bg-surface-100 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={PHONE_TEL}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-3 text-white font-semibold hover:bg-primary-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="h-4 w-4" />
              Call Now: {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
