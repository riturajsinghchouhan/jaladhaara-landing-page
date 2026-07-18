import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
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
          ? 'bg-[#040908]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
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
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
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

        <div className="hidden lg:block">
          <Button href="#request">Request Borewell</Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#040908]/95 backdrop-blur-xl px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.label)
                    setOpen(false)
                  }}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active === link.label
                      ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#request" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Request Borewell
          </Button>
        </div>
      )}
    </header>
  )
}
