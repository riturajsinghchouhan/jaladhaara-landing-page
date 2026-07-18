import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Logo from '../../../components/ui/Logo'
import Button from '../../../components/ui/Button'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Areas', href: '#areas' },
  { label: 'Apps', href: '#apps' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [isLightMode])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)

    // Scroll spy for active section highlight
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            const matchingLink = links.find((link) => link.href === `#${id}`)
            if (matchingLink) setActive(matchingLink.label)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    // We assume sections have IDs matching the hrefs (e.g. id="services" for href="#services")
    links.forEach((link) => {
      const el = document.querySelector(link.href)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="w-full px-6 lg:px-16 xl:px-24 2xl:px-32 h-20 flex items-center justify-between">
        <Logo light />

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative text-sm font-semibold transition-colors py-1 ${
                  active === link.label
                    ? 'text-[var(--color-text-primary)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {link.label}
                {active === link.label && (
                  <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-t-full bg-[var(--color-primary)] shadow-[0_0_10px_rgba(0,208,132,0.8)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className="p-2 rounded-full text-[var(--color-text-primary)] hover:bg-white/10 transition-colors"
            aria-label="Toggle light mode"
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <Button href="#request">Request Borewell</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className="p-2 rounded-lg text-[var(--color-text-primary)] hover:bg-white/5 transition-colors"
            aria-label="Toggle light mode"
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-[var(--color-text-primary)] hover:bg-white/5 transition-colors"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--color-overlay)] backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[280px] sm:w-[320px] bg-[var(--color-bg)] border-l border-[var(--color-border)] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-[var(--color-border)]">
          <span className="text-[var(--color-text-primary)] font-bold text-lg">Menu</span>
          <button
            type="button"
            className="rounded-lg p-2 text-[var(--color-text-primary)] hover:bg-white/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.label)
                    setOpen(false)
                  }}
                  className={`block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                    active === link.label
                      ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:bg-white/5 hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-6 border-t border-[var(--color-border)] pb-8">
          <Button href="#request" className="w-full justify-center h-14 text-base" onClick={() => setOpen(false)}>
            Request Borewell
          </Button>
        </div>
      </div>
    </header>
  )
}
