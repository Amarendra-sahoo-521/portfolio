import Aurora from '@/components/ui/Aurora'
import BlurText from '@/components/ui/BlurText'

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* background blobs + grid */}
      <div className="absolute -left-32 top-1/4 -z-10 size-96 animate-float rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute -right-24 bottom-1/4 -z-10 size-96 animate-float rounded-full bg-fuchsia-500/20 blur-3xl [animation-delay:-3s]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="section w-full">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 font-mono text-xs dark:border-white/15">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Open to work
        </p>

        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-7xl">
          Hi, I'm <span className="gradient-text">Amarendra</span>
          <br />
          I build for the web.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          Full stack developer working with React, Node.js and NestJS, now building GenAI-powered products.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary">View work →</a>
          <a href="#contact" className="btn-ghost">Contact me</a>
        </div>
      </div>
    </section>
  )
}