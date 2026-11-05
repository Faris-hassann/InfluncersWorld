import { useEffect, useState } from 'react';
import { api, type Podcast, htmlToPlainText } from '../../lib/api';
import { DirectImage } from '../../lib/images';

const platforms = [
  { icon: '/assets/pc-apple.svg', label: 'Listen on CBR', href: 'https://www.cairobusinessradio.com/' },
  { icon: '/assets/pc-spotify.svg', label: 'Spotify', href: '#contact' },
  { icon: '/assets/pc-youtube.svg', label: 'YouTube', href: 'https://www.youtube.com/@GermienAmer' },
];

export default function Lectures() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let active = true;
    api
      .getPodcasts()
      .then((data) => {
        if (active && data.length > 0) setPodcasts(data);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const featured = podcasts[0];
  const otherEpisodes = podcasts.slice(1);

  return (
    <section id="lectures" className="bg-amber-50/40 py-12">
      <div className="container-page flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[672px] flex-col items-start gap-1">
            <span className="eyebrow pill bg-amber-500">On Air &amp; On Stage</span>
            <h2 className="h2">The #Influencers_Planet Podcast</h2>
            <p className="lede">
              Two seasons on Cairo Business Radio (CBR) examining how influence is built and monetised,
              where it goes wrong, and how audiences can see through it.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {platforms.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target={p.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-ink/20 bg-white px-4 py-2 text-xs font-bold text-ink hover:border-amber-500"
              >
                <img src={p.icon} alt="" />
                {p.label}
              </a>
            ))}
          </div>
        </div>

        {/* Featured Episode */}
        <article className="grid gap-10 rounded-3xl border-2 border-ink bg-white p-[30px] shadow-amber-6 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow pill bg-amber-500">Featured Episode</span>
              <span className="eyebrow self-center text-zinc-600">
                {featured?.publishedOn
                  ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(
                      new Date(featured.publishedOn)
                    )
                  : 'Season 2 · Cairo Business Radio'}
              </span>
            </div>

            {featured?.imageUrl && (
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border-2 border-ink bg-stone-900">
                <DirectImage
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            )}

            <h3 className="h3">
              {featured?.title || 'Who Protects the Child Influencer?'}
            </h3>
            {featured?.titleAr && (
              <p className="text-sm font-medium text-amber-700" dir="rtl">
                {featured.titleAr}
              </p>
            )}
            <p className="text-base leading-[26px] text-zinc-700">
              {featured
                ? htmlToPlainText(featured.description)
                : 'A proposed featured episode exploring privacy, consent, financial rights and working conditions for children whose lives become public content.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {featured?.youtubeUrl ? (
                <a
                  href={featured.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-label press flex items-center gap-2 rounded-full border-2 border-ink bg-amber-500 px-6 py-3"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch Episode
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(!playing)}
                  className="btn-label press self-start rounded-full border-2 border-ink bg-amber-500 px-6 py-3"
                  aria-pressed={playing}
                >
                  {playing ? 'Pause episode' : 'Play episode'}
                </button>
              )}
            </div>
          </div>

          <aside className="flex flex-col gap-4 rounded-3xl border-2 border-amber-500/40 bg-amber-50 p-[18px] lg:col-span-4">
            <span className="eyebrow">From the Microphone</span>
            <blockquote className="font-display text-base font-bold leading-6 text-ink">
              “Our goal is to understand the new language of influence before it becomes the language that shapes us.”
            </blockquote>
            <p className="eyebrow text-zinc-600">— Dr. Germien Amer</p>

            {otherEpisodes.length > 0 && (
              <div className="mt-4 flex flex-col gap-3 border-t border-amber-200/60 pt-4">
                <span className="text-xs font-extrabold uppercase tracking-wide text-ink">Recent Episodes</span>
                {otherEpisodes.slice(0, 3).map((ep) => (
                  <div key={ep.id} className="flex items-center gap-3 rounded-xl bg-white/80 p-2.5">
                    {ep.imageUrl && (
                      <div className="size-10 shrink-0 overflow-hidden rounded-lg bg-stone-900">
                        <DirectImage src={ep.imageUrl} alt={ep.title} className="h-full w-full object-cover" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-bold text-ink">{ep.title}</p>
                      {ep.youtubeUrl && (
                        <a
                          href={ep.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold text-amber-700 hover:underline"
                        >
                          Watch →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <a href="#contact" className="eyebrow text-link mt-auto pt-2">
              Explore All Episodes →
            </a>
          </aside>
        </article>

        <div className="flex flex-col gap-4">
          <div>
            <span className="eyebrow pill bg-amber-500/20">Talks, Panels &amp; Book Signings</span>
            <h3 className="h3 pt-2">Upcoming Appearances</h3>
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-3xl border-2 border-ink/15 bg-white p-[30px] md:flex-row md:items-center">
            <div>
              <h4 className="font-display text-lg font-extrabold text-ink">
                New dates are announced in the Dispatch.
              </h4>
              <p className="text-sm">Invite Dr. Amer to speak at your event in Arabic or English.</p>
            </div>
            <a
              href="#contact"
              className="btn-label press rounded-full border-2 border-ink bg-amber-500 px-6 py-3 text-center"
            >
              Invite Dr. Amer to Speak
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
