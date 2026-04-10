function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
            Data Storytelling for Rwanda
          </p>

          <div className="space-y-4">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Transforming national development data into dashboards people can
              actually understand.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              RwandaInsights brings together key indicators across the economy,
              population, health, and education to help policy makers,
              researchers, and citizens track Rwanda&apos;s progress at a glance.
            </p>
          </div>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
          <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 p-4">
            <span className="text-sm text-slate-300">Coverage</span>
            <span className="text-lg font-semibold text-white">2015-2023</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-400/10 p-4">
              <p className="text-sm text-emerald-200">Focus Areas</p>
              <p className="mt-2 text-3xl font-semibold text-white">4</p>
            </div>
            <div className="rounded-2xl bg-orange-400/10 p-4">
              <p className="text-sm text-orange-100">Interactive Charts</p>
              <p className="mt-2 text-3xl font-semibold text-white">5+</p>
            </div>
          </div>
          <p className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">
            Built with React, Tailwind CSS, and Recharts to turn public data
            into clear, modern, decision-friendly visuals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
