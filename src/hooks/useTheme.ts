import { useEffect, useState } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() =>
    localStorage.theme
      ? localStorage.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches
  )
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.theme = dark ? 'dark' : 'light'
  }, [dark])
  return [dark, setDark] as const
}