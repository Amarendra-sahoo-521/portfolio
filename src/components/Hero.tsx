
export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[10%] sm:min-h-screen items-center overflow-hidden">
      {/* background blobs + grid */}
      <div className="absolute -left-32 top-1/4 -z-10 size-96 animate-float rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute -right-24 bottom-1/4 -z-10 size-96 animate-float rounded-full bg-fuchsia-500/20 blur-3xl [animation-delay:-3s]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="section w-full ">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 sm:py-1 font-mono text-xs dark:border-white/15">
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
        {/* social links */}
        <div className="mt-8 flex items-center gap-5">
          <a
            href="https://github.com/Amarendra-sahoo-521"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="size-6 fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/amarendra-sahoo-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="size-6 fill-current">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}