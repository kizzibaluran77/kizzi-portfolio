import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socials = [
  { label: 'GitHub', href: 'https://github.com/kizzibaluran77', icon: FaGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kizzi-baluran-b85b97446/',
    icon: FaLinkedin,
  },
  { label: 'Email', href: 'mailto:kizzibaluran@g.cjc.edu.ph', icon: FaEnvelope },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Kizzi Baluran. All rights reserved.
        </p>
        <ul className="flex gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="text-2xl text-gray-700 hover:text-black transition"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}