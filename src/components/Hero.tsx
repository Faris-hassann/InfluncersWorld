const accolades = [
  { icon: '/assets/hero-chip-fellow.svg', label: 'Senior Fellow, Oxford Historical Society' },
  { icon: '/assets/hero-chip-author.svg', label: 'Author of 5 Bestselling Volumes' },
  { icon: '/assets/hero-chip-speaker.svg', label: 'International Keynote Speaker' },
];

const stats = [
  { value: '35+', label: 'Years in Academia' },
  { value: '12', label: 'Global Bestsellers', accent: true },
  { value: '2.4M', label: 'Audience & Listeners' },
  { value: '80+', label: 'Keynote Addresses', accent: true },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-mist to-stone-50 py-12"
    >
      <img
        src="/assets/watermark.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-12 size-[560px] opacity-5 grayscale"
      />

      <div className="container-page relative flex flex-col gap-12">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-amber-500 px-[13px] py-[5px]">
                <span className="size-2 rounded-full bg-ink" />
                Distinguished Creator &amp; Chair
              </span>
              <span className="text-lg font-extrabold leading-7 text-amber-500">•</span>
              <span className="text-xs font-bold uppercase leading-[17.6px] tracking-[0.6px] text-zinc-600">
                Oxford &amp; Cambridge Fellow
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-display text-[40px] font-extrabold leading-[48px] tracking-[-1.4px] text-ink sm:text-[56px] sm:leading-[64px]">
                Dr. Germien
                <br />
                <span className="text-amber-500 underline decoration-ink/30 decoration-4 [text-decoration-skip-ink:none] [text-underline-position:from-font]">
                  Amer
                </span>
              </h1>
              <p className="font-display text-xl font-semibold leading-[27.2px] text-zinc-600">
                Historian, Author &amp; Top Thought Leader on Influencers Planet
              </p>
            </div>

            <p className="max-w-[672px] text-lg leading-[29.25px]">
              Bridging classical political economy, diplomatic history, and contemporary geopolitics
              for over three decades through high-impact media treatises, international symposiums,
              and public statecraft counsel.
            </p>

            <ul className="flex flex-wrap gap-2 py-1">
              {accolades.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-[13px] py-[7px] text-xs font-bold leading-[17.6px] tracking-[0.72px] text-ink"
                >
                  <img src={item.icon} alt="" />
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#products"
                className="btn-label press inline-flex items-center gap-1 rounded-full border-2 border-ink bg-amber-500 px-[30px] py-4 shadow-ink-3"
              >
                Explore Publications &amp; Books
                <img src="/assets/hero-arrow.svg" alt="" />
              </a>
              <a
                href="#lectures"
                className="press inline-flex items-center gap-1 rounded-full border-2 border-ink bg-white px-[26px] py-4 text-sm font-bold uppercase leading-5 tracking-[0.7px] text-ink"
              >
                <img src="/assets/hero-play.svg" alt="" />
                Listen to Latest Lecture
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[448px]">
              <div className="absolute -left-3 -top-3 bottom-3 right-3 rounded-3xl border-2 border-amber-500 bg-amber-500/30" />
              <figure className="relative flex flex-col gap-3 rounded-3xl border-2 border-ink bg-white p-3.5 shadow-ink-6">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200">
                  <img
                    src="/assets/portrait.jpg"
                    alt="Dr. Germien Amer in a private study"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 flex size-16 items-center justify-center rounded-2xl border-2 border-amber-500 bg-white/95 p-1.5 shadow-md backdrop-blur-[2px]">
                    <img src="/assets/crest.jpg" alt="Influencers Planet" className="size-full object-cover" />
                  </div>
                </div>
                <figcaption className="flex flex-col items-center gap-[5.5px] rounded-2xl border border-amber-500/30 bg-amber-50/60 px-[13px] pb-[15.91px] pt-[13px] text-center">
                  <span className="font-display text-xl font-extrabold leading-[27.2px] text-ink">
                    Dr. Germien Amer
                  </span>
                  <span className="text-xs font-bold uppercase leading-[17.6px] tracking-[0.6px] text-zinc-600">
                    Chair of Modern Diplomatic Studies
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-y-6 rounded-3xl border-2 border-ink bg-white p-[18px] shadow-amber-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col-reverse items-center gap-[5.5px] pb-[2.91px] text-center ${
                index > 0 ? 'md:border-l md:border-zinc-200' : ''
              } ${index % 2 === 1 ? 'border-l border-zinc-200' : ''}`}
            >
              <dt className="text-xs font-bold uppercase leading-[17.6px] tracking-[0.6px] text-zinc-600">
                {stat.label}
              </dt>
              <dd className={`h3 ${stat.accent ? '!text-amber-500' : ''}`}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
