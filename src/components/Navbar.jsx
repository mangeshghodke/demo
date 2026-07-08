import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Products', href: '/products' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (href) => {
    if (href.startsWith('/#')) return pathname === '/' && window.location.hash === href.substring(1)
    return pathname === href
  }

  const handleClick = (href, e) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      if (pathname !== '/') {
        return
      }
      e?.preventDefault()
      const id = href.substring(2)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
      <nav className="relative mx-2 mt-4 w-full max-w-7xl rounded-2xl md:rounded-full border border-yellow-100/40 bg-white/70 px-4 py-3 backdrop-blur-md dark:border-white/10 dark:bg-gray-950/75 md:flex md:items-center md:justify-between md:px-6 lg:px-8 xl:mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo-md.png`} alt="Mayur Art" className="h-9 w-9 sm:h-10 sm:w-10" />
          </Link>
          <div className="flex items-center gap-1 sm:gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center rounded-none p-2 text-gray-600 transition hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`${open ? 'block' : 'hidden'} md:flex md:items-center md:gap-2`}>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => handleClick(item.href, e)}
              className={`block rounded-lg px-3 py-2 transition md:py-0 ${isActive(item.href) ? 'font-semibold text-primary dark:text-primary-light' : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={(e) => handleClick('/#contact', e)}
            className="mt-2 block rounded-full bg-accent px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-amber-500 md:mt-0"
          >
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  )
}
