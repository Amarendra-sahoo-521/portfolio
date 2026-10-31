import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-10 text-center text-white shadow-2xl shadow-indigo-600/30 md:p-16">
          <div className="absolute -left-10 -top-10 size-48 rounded-full bg-white/10 blur-2xl" />
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Let's build something.</h2>
          <p className="mx-auto mt-4 max-w-md text-white/80">
            Open to full stack and GenAI roles. My inbox is always open.
          </p>
          <a href="mailto:amarendrasahoo.dev@gmail.com"
             className="btn mt-8 bg-white text-indigo-700 hover:-translate-y-0.5 hover:shadow-xl">
            Say hello →
          </a>
        </div>
      </Reveal>
    </section>
  )
}