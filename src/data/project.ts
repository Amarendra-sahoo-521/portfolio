export type Project = {
  title: string
  description: string
  tech: string[]
  live?: string
  repo?: string
}

export const projects: Project[] = [
  // {
  //   title: 'Project One',
  //   description: 'What it does and why it matters.',
  //   tech: ['React', 'NestJS', 'MongoDB'],
  //   live: 'https://example.com',
  //   repo: 'https://github.com/you/project-one',
  // },
  {
    title: 'Snap Class',
    description: 'AI-Based Smart Attendance System',
    tech: ['Python', 'numpy','pandas', 'Supabase','dlib','resemblyzer','streamlit'],
    live: 'https://snapclass-app.vercel.app/',
    repo: 'https://github.com/Amarendra-sahoo-521/snapclass-main-amar',
  },
  {
    title: 'Rag App',
    description: 'RAG-based PDF Question Answering System',
    tech: ['Python','streamlit','langchain','chromadb','sentence-transformers'],
    live: 'https://rag-app-amar.streamlit.app/',
    repo: 'https://github.com/Amarendra-sahoo-521/RAG-app',
  },
]