import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'

const links = ['home', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [dark, setDark] = useTheme()
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((l) => {
      const el = document.getElementById(l)
      el && io.observe(el)
    })
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center gap-1 rounded-full border px-2 py-2 backdrop-blur-xl transition duration-300 ${
          scrolled
            ? 'border-slate-200 bg-white/80 shadow-lg dark:border-white/10 dark:bg-ink/80'
            : 'border-transparent bg-transparent'
        }`}
      >
        {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition ${
              active === l
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:text-indigo-500 dark:text-slate-300'
            }`}
          >
            {l}
          </a>
        ))}
        <button
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
          className="ml-1 grid size-8 place-items-center rounded-full text-base transition hover:bg-slate-200/70 dark:hover:bg-white/10"
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}