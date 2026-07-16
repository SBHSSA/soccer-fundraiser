const featureCards = [
  {
    title: "Purchase a Soccer Ball",
    description:
      "Buy a personalized digital soccer ball and make a direct impact on our season.",
  },
  {
    title: "Leave Messages",
    description:
      "Fill the ball with heartfelt notes from family, friends, teammates, and local supporters.",
  },
  {
    title: "Support Our Team",
    description:
      "Help fund travel, equipment, and opportunities that strengthen our program.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#f7fbff_0%,#e8f3ff_45%,#fff8df_100%)] text-slate-900">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 lg:flex-row lg:items-center lg:px-8 lg:py-20">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center rounded-full border border-[#0b5fa5]/20 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0b5fa5] shadow-sm">
            Saddle Brook High School Girls Soccer
          </div>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Help Us Kickstart Our Season
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Support the SBHS Girls Soccer Team by purchasing a personalized digital soccer ball filled with messages from family, friends, teammates, and local businesses.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#features"
              className="rounded-full bg-[#0b5fa5] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#0b5fa5]/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#094a7e]"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="rounded-full border border-[#0b5fa5]/20 bg-white/70 px-8 py-4 text-lg font-semibold text-[#0b5fa5] transition-colors hover:bg-white"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#0b5fa5] p-4 shadow-2xl shadow-[#0b5fa5]/20 sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,209,102,0.35),_transparent_45%)]" />
            <div className="relative flex min-h-[360px] items-center justify-center rounded-[1.5rem] border border-white/30 bg-gradient-to-br from-slate-100 via-white to-[#ffd166] p-6 text-center sm:min-h-[460px]">
              <div className="w-full max-w-md rounded-[1.5rem] border border-[#0b5fa5]/20 bg-white/85 px-8 py-10 shadow-lg backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0b5fa5]">
                  Team Photo
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">
                  Hero Image Placeholder
                </h2>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  A future team photo will be featured here to celebrate the season ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ffd166] text-xl font-bold text-[#0b5fa5]">
                ✦
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
