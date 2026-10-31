import LogoLoop from './LogoLoop';
import Reveal from './Reveal'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiExpress, SiMongodb,
  SiLangchain,
} from 'react-icons/si'
import { LuBrain, LuDatabase, LuZap } from 'react-icons/lu'

const groups = [
  { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'MongoDB'] },
  { title: 'GenAI', items: ['LangChain', 'RAG', 'ChromaDB', 'Groq'] },
]

const techLogos = [
  // Frontend
  { node: <SiReact />, title: 'React', href: 'https://react.dev', hoverColor: '#61dafb' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org', hoverColor: '#3178c6' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com', hoverColor: '#38bdf8' },

  // Backend
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org', hoverColor: '#5fa04e' },
  { node: <SiNestjs />, title: 'NestJS', href: 'https://nestjs.com', hoverColor: '#e0234e' },
  { node: <SiExpress />, title: 'Express', href: 'https://expressjs.com' },
  { node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com', hoverColor: '#47a248' },

  // GenAI
  { node: <SiLangchain />, title: 'LangChain', href: 'https://www.langchain.com' },
  { node: <LuBrain />, title: 'RAG', href: 'https://python.langchain.com/docs/tutorials/rag/', hoverColor: '#a78bfa' },
  { node: <LuDatabase />, title: 'ChromaDB', href: 'https://www.trychroma.com', hoverColor: '#ffde2d' },
  { node: <LuZap />, title: 'Groq', href: 'https://groq.com', hoverColor: '#f55036' },
]






export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal><h2 className="heading">Skills</h2></Reveal>
        <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={48}
        gap={56}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
      />
      <div className="grid gap-6 md:grid-cols-3  mt-10">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 120}>
            <div className="card h-full">
              <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
     
     
    </section>
  )
}