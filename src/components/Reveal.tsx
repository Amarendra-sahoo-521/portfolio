import type { ReactNode } from 'react'
import AnimatedContent from '@/components/ui/AnimatedContent'

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <AnimatedContent
      distance={60}
      direction="vertical"
      duration={0.8}
      ease="power3.out"
      threshold={0.15}
      delay={delay / 1000}
      className={className}
    >
      {children}
    </AnimatedContent>
  )
}