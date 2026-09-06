export default function CTA() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/20 to-white/5 p-12 text-center backdrop-blur-sm">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
            Let&apos;s Create
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Have a world waiting to be created?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            From characters and environments to animated films, series, and
            original ideas, let&apos;s bring your imagination to life.
          </p>

          <a
            href="https://wa.me/918698337312?text=Start%20a%20Project"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-500"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}