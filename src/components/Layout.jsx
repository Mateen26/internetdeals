import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // Scroll to top when navigating to a new page (e.g. Terms, Privacy, Refund)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // On home page, scroll to section when URL has a hash (e.g. /#faq)
  useEffect(() => {
    if (pathname !== '/' || !hash) return
    const id = hash.replace(/^#/, '')
    const scrollToEl = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const t = setTimeout(scrollToEl, 100)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
