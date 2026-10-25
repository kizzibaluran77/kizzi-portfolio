import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const contacts = [
  {
    label: 'Email',
    value: 'kizzibaluran@g.cjc.edu.ph',
    href: 'mailto:kizzibaluran@g.cjc.edu.ph',
    icon: FaEnvelope,
  },
  {
    label: 'GitHub',
    value: 'github.com/kizzibaluran77',
    href: 'https://github.com/kizzibaluran77',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kizzi-baluran',
    href: 'https://www.linkedin.com/in/kizzi-baluran-b85b97446/',
    icon: FaLinkedin,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-16 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
        <p className="mt-4 text-lg text-gray-600">
          I'm open to learning opportunities and new projects. Say hello!
        </p>

        <ul className="mt-10 flex flex-col gap-4">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white px-6 py-4 hover:shadow-md transition"
              >
                <Icon className="text-xl" aria-hidden="true" />
                <span className="font-medium">{label}:</span>
                <span className="text-gray-600 break-all">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}