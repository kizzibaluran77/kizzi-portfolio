export default function ProjectCard({ project }) {
  const { title, description, tech, image, github, live } = project

  return (
    <article className="project-card flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="w-full h-48 object-cover object-top"
      />
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>

        <ul className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <li key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">
              {t}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-auto pt-5">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="underline">
              GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="underline">
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}