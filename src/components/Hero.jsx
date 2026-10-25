import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    },
    { scope: root }
  )

  return (
    <section
      id="home"
      ref={root}
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-24 md:px-16"
    >
      <div className="text-center md:text-left max-w-xl">
        <p className="hero-anim text-sm font-medium uppercase tracking-widest text-gray-500">
          Front-end developer
        </p>
        <h1 className="hero-anim mt-3 text-4xl md:text-6xl font-bold">
          Hi, I'm Kizzi Baluran
        </h1>
        <p className="hero-anim mt-4 text-lg md:text-xl text-gray-600">
          Building web experiences that come alive on scroll.
        </p>

        <div className="hero-anim mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-black hover:bg-gray-100 transition"
          >
            Contact me
          </a>
        </div>
      </div>

      <img
        src="/avatar.jpg"
        alt="Portrait of Kizzi Baluran"
        className="hero-anim w-48 h-48 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
      />
    </section>
  )
}