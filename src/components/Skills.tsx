import LogoLoop from './LogoLoop';
import Reveal from './Reveal'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiExpress, SiFastapi, SiFlask, SiTypeorm, SiSwagger,
  SiMongodb, SiMysql, SiPostgresql,
  SiLangchain,
  SiGit, SiGithub, SiPostman, SiDocker, SiNginx, SiVercel, SiDigitalocean, SiStreamlit,
} from 'react-icons/si'
import { LuBrain, LuDatabase, LuZap } from 'react-icons/lu'

const groups = [
  { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'Flask', 'TypeORM', 'Swagger'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'ChromaDB'] },
  { title: 'GenAI', items: ['LangChain', 'RAG', 'Groq'] },
  { title: 'DevOps & Tools', items: ['Git', 'GitHub', 'Postman', 'Docker', 'Nginx', 'Vercel', 'DigitalOcean', 'Streamlit Cloud'] },
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
  { node: <SiFastapi />, title: 'FastAPI', href: 'https://fastapi.tiangolo.com', hoverColor: '#009688' },
  { node: <SiFlask />, title: 'Flask', href: 'https://flask.palletsprojects.com' },
  { node: <SiTypeorm />, title: 'TypeORM', href: 'https://typeorm.io', hoverColor: '#fe0803' },
  { node: <SiSwagger />, title: 'Swagger', href: 'https://swagger.io', hoverColor: '#85ea2d' },

  // Databases
  { node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com', hoverColor: '#47a248' },
  { node: <SiMysql />, title: 'MySQL', href: 'https://www.mysql.com', hoverColor: '#4479a1' },
  { node: <SiPostgresql />, title: 'PostgreSQL', href: 'https://www.postgresql.org', hoverColor: '#4169e1' },
  { node: <LuDatabase />, title: 'ChromaDB', href: 'https://www.trychroma.com', hoverColor: '#ffde2d' },

  // GenAI
  { node: <SiLangchain />, title: 'LangChain', href: 'https://www.langchain.com' },
  { node: <LuBrain />, title: 'RAG', href: 'https://python.langchain.com/docs/tutorials/rag/', hoverColor: '#a78bfa' },
  { node: <LuZap />, title: 'Groq', href: 'https://groq.com', hoverColor: '#f55036' },

  // DevOps & Tools
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com', hoverColor: '#f05032' },
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
  { node: <SiPostman />, title: 'Postman', href: 'https://www.postman.com', hoverColor: '#ff6c37' },
  { node: <SiDocker />, title: 'Docker', href: 'https://www.docker.com', hoverColor: '#2496ed' },
  { node: <SiNginx />, title: 'Nginx', href: 'https://nginx.org', hoverColor: '#009639' },
  { node: <SiVercel />, title: 'Vercel', href: 'https://vercel.com' },
  { node: <SiDigitalocean />, title: 'DigitalOcean', href: 'https://www.digitalocean.com', hoverColor: '#0080ff' },
  { node: <SiStreamlit />, title: 'Streamlit Cloud', href: 'https://streamlit.io/cloud', hoverColor: '#ff4b4b' },
]






export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal><h2 className="heading">Skills</h2></Reveal>
        <LogoLoop
        logos={techLogos}
        speed={100}
        labels="hover"
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