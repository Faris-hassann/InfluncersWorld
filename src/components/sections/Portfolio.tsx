import { useEffect, useState } from 'react';
import { api, type Award, htmlToPlainText } from '../../lib/api';
import { DirectImage } from '../../lib/images';

const cards = [
  {
    eyebrow: '1994 — 2007',
    icon: '/assets/pf-museum.svg',
    title: 'Senior Roles in Banking, Telecom & Development',
    text: 'Marketing Communications Senior Supervisor, Commercial International Bank (CIB); PR & Events Manager for a USAID export project (Expolink); Head of PR & Communications, Orascom Telecom; Assistant Advertising Manager, Dream Park; Reporter, Gulf News (Dubai).',
  },
  {
    eyebrow: 'Academic Qualifications',
    icon: '/assets/pf-cap.svg',
    title: 'Education',
    text: "PhD in Mass Communication, Lincoln University College, Malaysia (2026) · MA in Mass Communication, Liverpool John Moores University, UK (2023) · BA in Journalism & Mass Communication, minor in Political Science, The American University in Cairo · Diploma in Women's Leadership, Afro-Asian Union (2020) · Diploma in Digital Transformation Strategy, Guglielmo Marconi University, Italy",
  },
  {
    eyebrow: 'Honours & Memberships',
    icon: '/assets/pf-shield.svg',
    title: 'Awards & Recognition',
    text: '“Inspirers of Change” Award, Leaders Platform (2024) · Top 50 Most Influential Women, The Fifty Forum (2018) · One of 30 Egyptian Success Stories, Egyptian Women’s Forum (2019) · Top 25 Most Influential Women in Egyptian Banking (2020) · Member, General Union of Egyptian Writers (2025) · Member, Arab Media Professionals Union (2023)',
  },
];

export default function Portfolio() {
  const [awards, setAwards] = useState<Award[]>([]);

  useEffect(() => {
    let active = true;
    api
      .getAwards()
      .then((data) => {
        if (active && data.length > 0) setAwards(data);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="portfolio" className="bg-amber-50/30 py-12">
      <div className="container-page flex flex-col gap-12">
        <div className="flex max-w-[672px] flex-col items-start gap-1">
          <span className="eyebrow pill bg-amber-500">Career &amp; Credentials</span>
          <h2 className="h2">Professional Portfolio &amp; Recognition</h2>
          <p className="lede">
            A record of leadership roles, academic qualifications and industry recognition across
            banking, telecom, development and media.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <article className="flex flex-col gap-4 rounded-3xl border-2 border-ink bg-white p-[30px] shadow-ink-4 lg:col-span-8">
            <div className="flex items-center justify-between">
              <span className="eyebrow pill bg-amber-500">2007 — Present</span>
              <img src="/assets/pf-award.svg" alt="" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-ink">
              Head of Corporate &amp; Internal Communications
            </h3>
            <p className="eyebrow text-zinc-600">The United Bank, Egypt</p>
            <p className="leading-relaxed text-zinc-700">
              Leads corporate, internal and media communication: strategy, brand positioning, spokesperson
              duties, crisis communication and culture integration across three acquired entities. Editor-in-chief
              of the bank&apos;s internal e-magazine.
            </p>
            <ul className="text-sm font-bold text-zinc-600">
              <li>• “Best Communication Channels” rating, Business News Annual Index (2020, 2021, 2023)</li>
              <li>
                • Named by Bankers Lounge Academy among Egypt&apos;s leading banking communication executives for
                eight consecutive years
              </li>
            </ul>
          </article>

          <article className="flex flex-col gap-4 rounded-3xl border-2 border-amber-500 bg-ink p-[30px] shadow-amber-4 lg:col-span-4">
            <p className="eyebrow text-amber-500">Body of Work</p>
            <h3 className="font-display text-xl font-extrabold text-white">Influencers Planet in Numbers</h3>
            <p className="text-sm text-zinc-300">A knowledge platform built in Arabic and English since 2021.</p>
            <dl className="grid grid-cols-2 gap-4">
              {[
                ['7', 'Books'],
                ['100+', 'Articles'],
                ['120+', 'Blogs & Vlogs'],
                ['2', 'Podcast Seasons'],
                ['4', 'Research Papers'],
                ['5', 'Initiatives'],
              ].map(([n, l]) => (
                <div key={l}>
                  <dd className="font-display text-3xl font-extrabold text-amber-500">{n}</dd>
                  <dt className="text-xs font-bold uppercase text-zinc-400">{l}</dt>
                </div>
              ))}
            </dl>
            <a href="#news" className="eyebrow text-amber-500">
              Read the Articles →
            </a>
          </article>

          {cards.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-2 rounded-3xl border-2 border-ink/15 bg-white p-[18px] lg:col-span-4"
            >
              <div className="flex justify-between">
                <span className="eyebrow text-zinc-600">{item.eyebrow}</span>
                <img src={item.icon} alt="" />
              </div>
              <h4 className="font-display text-lg font-extrabold text-ink">{item.title}</h4>
              <p className="text-sm leading-[23.2px] text-zinc-700">{item.text}</p>
            </article>
          ))}
        </div>

        {/* Live Awards Gallery from Backend with Direct Image Rendering */}
        {awards.length > 0 && (
          <div className="flex flex-col gap-6 pt-6">
            <div>
              <span className="eyebrow pill bg-amber-500">Honours &amp; Trophies</span>
              <h3 className="h3 mt-2">Recognized Excellence &amp; Accolades</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {awards.map((award) => {
                const primaryImage = award.imageUrls && award.imageUrls.length > 0 ? award.imageUrls[0] : '';
                return (
                  <article
                    key={award.id}
                    className="flex flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-ink-4"
                  >
                    {primaryImage ? (
                      <div className="group relative h-60 w-full overflow-hidden bg-stone-900">
                        <DirectImage
                          src={primaryImage}
                          alt={award.titleEn}
                          fallbackSrc="/assets/pf-award.svg"
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                        {award.imageUrls.length > 1 && (
                          <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2.5 py-0.5 text-xs font-bold text-white">
                            +{award.imageUrls.length} photos
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex h-40 w-full items-center justify-center bg-amber-100">
                        <img src="/assets/pf-award.svg" alt="" className="size-16" />
                      </div>
                    )}

                    {/* Image gallery strip for multiple images */}
                    {award.imageUrls && award.imageUrls.length > 1 && (
                      <div className="flex gap-1.5 overflow-x-auto border-b border-zinc-200 bg-stone-50 p-2">
                        {award.imageUrls.map((img, idx) => (
                          <div key={idx} className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-ink/20">
                            <DirectImage
                              src={img}
                              alt={`${award.titleEn} photo ${idx + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <span className="text-xs font-bold text-amber-600">
                        {award.publishedOn
                          ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(
                              new Date(award.publishedOn)
                            )
                          : ''}
                      </span>
                      <h4 className="font-display text-lg font-bold text-ink">{award.titleEn}</h4>
                      {award.titleAr && (
                        <p className="text-sm font-medium text-amber-700" dir="rtl">
                          {award.titleAr}
                        </p>
                      )}
                      <p className="text-sm leading-relaxed text-zinc-600 line-clamp-3">
                        {htmlToPlainText(award.descriptionEn)}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
