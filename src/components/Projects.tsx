import { projects } from '../data/project'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section pt-0 sm:pt-28">
      <Reveal><h2 className="heading">Projects</h2></Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 120}>
            <article className="card group relative h-full overflow-hidden">
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-indigo-500/20 blur-2xl transition duration-500 group-hover:scale-150" />
              <span className="font-mono text-xs text-indigo-500">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-3 leading-relaxed">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => <li key={t} className="chip">{t}</li>)}
              </ul>
              <div className="mt-6 flex gap-5 text-sm font-semibold">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                     className="text-indigo-500 transition hover:translate-x-1">Live ↗</a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer"
                     className="transition hover:text-indigo-500">Code</a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}