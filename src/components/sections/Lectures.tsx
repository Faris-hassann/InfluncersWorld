import { useState } from 'react';

const platforms = [
  { icon: '/assets/pc-apple.svg', label: 'Apple Podcasts' },
  { icon: '/assets/pc-spotify.svg', label: 'Spotify' },
  { icon: '/assets/pc-youtube.svg', label: 'YouTube Archive' },
];

// Waveform bars: [height in px, colour]. The grey tail is the unplayed part.
const waveform: [number, string][] = [
  [16, '#f59e0b'],
  [24, '#fbbf24'],
  [32, '#fcd34d'],
  [20, '#f59e0b'],
  [28, '#fbbf24'],
  [12, '#ffffff'],
  [24, '#f59e0b'],
  [28, '#fcd34d'],
  [20, '#52525b'],
  [32, '#52525b'],
  [16, '#52525b'],
  [24, '#52525b'],
  [28, '#52525b'],
  [12, '#52525b'],
  [20, '#52525b'],
  [8, '#52525b'],
  [24, '#52525b'],
  [16, '#52525b'],
  [28, '#52525b'],
  [20, '#52525b'],
];

const lectures = [
  {
    day: '14',
    month: 'Nov',
    year: '2025',
    highlight: true,
    tag: 'Public Keynote',
    tagClass: 'bg-ink text-white',
    title: 'Sorbonne University, Paris — The Geopolitics of Cultural Memory',
    detail: 'Grand Amphithéâtre Descartes • Simultaneous English & French Translation',
    action: 'Register Seat',
    actionClass: 'btn-label press border-2 border-ink bg-amber-500 px-[26px] py-3',
  },
  {
    day: '03',
    month: 'Dec',
    year: '2025',
    highlight: false,
    tag: 'Author Dialogue',
    tagClass: 'bg-amber-100 text-amber-900',
    title: 'Edinburgh International Book Festival — Civic Virtues & Republics',
    detail: 'Main Pavilion • In conversation with Lord Alistair Campbell',
    action: 'Sold Out / Standby',
    actionClass:
      'bg-[#f1f1f3] px-5 py-2 text-sm font-bold uppercase leading-5 tracking-[0.7px] text-zinc-600',
    disabled: true,
  },
  {
    day: '19',
    month: 'Jan',
    year: '2026',
    highlight: true,
    tag: 'Scholarly Colloquium',
    tagClass: 'bg-ink text-amber-300',
    title: 'Yale University — Ethics in the Age of Algorithmic Hegemony',
    detail: 'Whitney Humanities Center • Department of Political Philosophy',
    action: 'Watch Archive Video',
    actionClass: 'btn-label press border-2 border-ink bg-white px-[26px] py-3',
  },
];

export default function Lectures() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="lectures" className="bg-amber-50/40 py-12">
      <div className="container-page flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[672px] flex-col items-start gap-[3.2px] pt-0.5">
            <span className="eyebrow pill bg-amber-500">Broadcasting &amp; Public Spoken Discourse</span>
            <h2 className="h2">
              The Examined
              <br />
              Century Podcast
            </h2>
            <p className="lede">
              Weekly discussions engaging leading international historians, diplomats, and ethicists on
              structural changes in world civilization.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {platforms.map((platform) => (
              <a
                key={platform.label}
                href="#lectures"
                className="flex items-center gap-1.5 rounded-full border border-ink/20 bg-white px-[17px] py-[9px] text-xs font-bold leading-[17.6px] tracking-[0.72px] text-ink transition-colors hover:border-ink"
              >
                <img src={platform.icon} alt="" />
                {platform.label}
              </a>
            ))}
          </div>
        </div>

        <article className="grid items-center gap-10 rounded-3xl border-2 border-ink bg-white p-[30px] shadow-amber-6 lg:grid-cols-12">
          <div className="flex flex-col gap-[7.3px] lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-extrabold uppercase leading-[17.6px] tracking-[0.72px] text-ink">
                Featured Broadcast
              </span>
              <span className="text-xs font-bold leading-[17.6px] tracking-[0.72px] text-zinc-600">
                Episode #142 • 54:20 Duration
              </span>
            </div>
            <h3 className="h3">The Collapse of Treaties &amp; the Fragility of Sovereign Pacts</h3>
            <p className="pt-[0.7px] text-base leading-[26px]">
              Featuring guest scholar <span className="text-ink">Prof. Elena Vance</span> (Princeton
              Institute for Advanced Study). A meticulous inquiry into the fatal miscalculations that
              undermined the Treaty of Utrecht and the Peace of Westphalia, drawing direct parallels to
              modern collective security failures.
            </p>

            <div className="flex items-center gap-2 rounded-3xl border-2 border-amber-500 bg-zinc-900 p-2.5">
              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                aria-label={playing ? 'Pause episode' : 'Play episode'}
                aria-pressed={playing}
                className="press flex size-12 shrink-0 items-center justify-center rounded-2xl border border-ink bg-amber-500"
              >
                {playing ? (
                  <span className="flex gap-1">
                    <span className="h-4 w-1 rounded-sm bg-ink" />
                    <span className="h-4 w-1 rounded-sm bg-ink" />
                  </span>
                ) : (
                  <img src="/assets/pc-play.svg" alt="" />
                )}
              </button>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex h-8 items-end gap-1 px-1">
                  {waveform.map(([height, color], index) => (
                    <span
                      key={index}
                      className={`w-1 rounded-full ${playing ? 'animate-pulse' : ''}`}
                      style={{ height, backgroundColor: color, animationDelay: `${index * 60}ms` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs font-bold leading-4 text-zinc-300">
                  <span>18:42</span>
                  <span>54:20</span>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col items-start gap-1 rounded-3xl border-2 border-amber-500/40 bg-amber-50 px-[18px] pb-[21.41px] pt-[18px] lg:col-span-4">
            <span className="eyebrow flex items-center gap-1">
              <img src="/assets/pc-quote.svg" alt="" />
              Featured Dialogue
            </span>
            <blockquote className="pt-[3.41px] font-display text-base font-bold leading-[22px] text-ink">
              “When a state ceases to honor the spirit of its treaties, no quantity of written addenda
              can forestall its moral and economic isolation.”
            </blockquote>
            <p className="pt-1 text-xs font-bold leading-[17.6px] tracking-[0.72px] text-zinc-600">
              — Prof. Elena Vance
            </p>
            <a
              href="#news"
              className="text-link pt-1 text-xs font-extrabold uppercase leading-4 text-ink"
            >
              Read Full Annotated Transcript
              <img src="/assets/pc-external.svg" alt="" />
            </a>
          </aside>
        </article>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-1 pt-0.5">
            <span className="eyebrow pill bg-amber-500/20">Colloquia &amp; Public Addresses</span>
            <h3 className="h3">Distinguished Keynote Schedule</h3>
          </div>

          <ul className="flex flex-col gap-1">
            {lectures.map((lecture) => (
              <li
                key={lecture.title}
                className="flex flex-col justify-between gap-4 rounded-3xl border-2 border-ink/15 bg-white p-[18px] md:flex-row md:items-center"
              >
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <div
                    className={`flex w-20 shrink-0 flex-col items-center gap-2 rounded-2xl pb-2 pt-1.5 ${
                      lecture.highlight
                        ? 'border-2 border-ink bg-amber-500 text-ink'
                        : 'border border-zinc-200 bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    <span className="font-display text-[26.4px] font-extrabold leading-[26.4px] tracking-[-0.396px] text-ink">
                      {lecture.day}
                    </span>
                    <span className="text-xs font-extrabold uppercase leading-[17.6px] tracking-[0.72px]">
                      {lecture.month}
                    </span>
                    <span className="text-xs font-extrabold uppercase leading-[17.6px] tracking-[0.72px]">
                      {lecture.year}
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-[3px] pt-[5px]">
                    <span
                      className={`rounded-full px-2.5 py-[1.5px] text-xs font-extrabold uppercase leading-4 ${lecture.tagClass}`}
                    >
                      {lecture.tag}
                    </span>
                    <h4 className="pt-[3.41px] font-display text-lg font-extrabold leading-7 text-ink">
                      {lecture.title}
                    </h4>
                    <p className="text-sm leading-[23.2px]">{lecture.detail}</p>
                  </div>
                </div>
                {lecture.disabled ? (
                  <span className={`shrink-0 self-start rounded-full text-center md:self-auto ${lecture.actionClass}`}>
                    {lecture.action}
                  </span>
                ) : (
                  <a
                    href="#contact"
                    className={`shrink-0 self-start rounded-full text-center md:self-auto ${lecture.actionClass}`}
                  >
                    {lecture.action}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
