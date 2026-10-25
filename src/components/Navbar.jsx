import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="flex items-center justify-between px-6 py-4 md:px-16">
        <a href="#home" className="text-lg font-bold">
          Kizzi Baluran
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-gray-700 hover:text-black transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block text-2xl leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}