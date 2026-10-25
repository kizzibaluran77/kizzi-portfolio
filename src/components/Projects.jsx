import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 80%',
        },
      })
    },
    { scope: root }
  )

  return (
    <section id="projects" ref={root} className="px-6 py-24 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <p className="mt-3 text-gray-600">Things I've built while learning.</p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}