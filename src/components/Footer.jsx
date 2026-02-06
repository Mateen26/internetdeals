import { MapPin, Mail, Phone } from 'lucide-react'
import { SITE_NAME, PHONE_DISPLAY, PHONE_TEL, SUPPORT_EMAIL, ADDRESS, LEGAL_LINKS } from '../utils/constants'

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-white" id="footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h3 className="text-lg font-bold">{SITE_NAME}</h3>
            <p className="mt-2 text-sm text-slate-300">
              The leading provider of reliable and high-speed telecom services. Stay connected with unmatched internet and communication solutions.
            </p>
            <p className="mt-4 text-sm text-slate-400">© Copyright 2025 All Rights Reserved</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2 text-slate-300 hover:text-accent-400 transition-colors">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-2 text-slate-300 hover:text-accent-400 transition-colors">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Legal</h4>
            <ul className="mt-4 space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-300 hover:text-accent-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
