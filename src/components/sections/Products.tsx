import { useEffect, useState } from 'react';
import { api, type Book, htmlToPlainText } from '../../lib/api';
import { DirectImage } from '../../lib/images';

const initialBooks = [
  {
    badge: 'First in the Series',
    title: 'The Power of Influencers on Social Media',
    titleAr: 'قوة المؤثرين على وسائل التواصل الاجتماعي',
    subtitle: 'In the Digital Revolution',
    edition: 'Arabic & English · 2023',
    text: 'Why a phone and a following now rival newspapers and broadcasters, and what that shift means for audiences, brands and regulators.',
    style: 'bg-ink text-white',
    icon: '/assets/bk-icon1.svg',
    imageUrl: '',
    youtubeUrl: '',
  },
  {
    badge: 'Braille Edition',
    title: '50 Metaversal Shots',
    titleAr: '50 لقطة ميتالفرسية',
    subtitle: 'Fifty Glimpses of the Metaverse',
    edition: '2024 · Braille edition with Al-Akhbar Braille Foundation',
    text: 'Fifty short readings on life, identity and influence in virtual worlds, also published in Braille so readers with visual impairments can access it.',
    style: 'bg-amber-600 text-white',
    icon: '/assets/bk-icon2.svg',
    imageUrl: '',
    youtubeUrl: '',
  },
  {
    badge: 'Signature Title',
    title: 'Influencers Planet',
    titleAr: 'كوكب المؤثرين',
    subtitle: 'The Rules of a New Media World',
    edition: 'Arabic & English · 2025',
    text: 'The book that named the platform: a guide to the influencer economy, digital credibility and the ethics every creator should follow.',
    style: 'bg-amber-400 text-ink',
    icon: '/assets/bk-icon3.svg',
    imageUrl: '',
    youtubeUrl: '',
  },
];

const initiatives = [
  {
    icon: '/assets/pr-icon1.svg',
    title: 'The Influencer Code of Conduct',
    text: 'The first ethical and professional code for influencers in the region segmented by age, covering transparency, paid-content disclosure and audience protection.',
    action: 'Read the Code',
  },
  {
    icon: '/assets/pr-icon2.svg',
    title: 'Child Influencer Protection Framework',
    text: 'A dedicated framework for children on camera, addressing privacy, exploitation, financial rights and digital working conditions.',
    action: 'Request the Framework',
  },
  {
    icon: '/assets/pr-icon3.svg',
    title: 'Influencers Planet Blogs & Vlogs',
    text: 'More than 120 short pieces on influence, AI and cybersecurity, published weekly on social media since 2025.',
    action: 'Watch the Latest',
  },
];

export default function Products() {
  const [liveBooks, setLiveBooks] = useState<Book[]>([]);

  useEffect(() => {
    let active = true;
    api
      .getBooks()
      .then((data) => {
        if (active && data.length > 0) {
          setLiveBooks(data);
        }
      })
      .catch((err) => console.warn('Could not load books from API:', err));
    return () => {
      active = false;
    };
  }, []);

  const hasLive = liveBooks.length > 0;

  return (
    <section id="products" className="bg-stone-50 py-12">
      <div className="container-page flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-[672px] flex-col items-start gap-1">
            <span className="eyebrow pill bg-amber-500/20">Published Works</span>
            <h2 className="h2">Published Books. A New Chapter in Influence.</h2>
            <p className="lede">
              Written over four consecutive years and showcased at the Cairo International Book Fair in
              Arabic and English, the series traces how influence is built, monetised, abused and protected.
            </p>
          </div>
          <a href="#contact" className="btn-label text-link">
            View All Publications <img src="/assets/bk-arrow.svg" alt="" />
          </a>
        </div>

        {/* Books Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {hasLive
            ? liveBooks.map((book, index) => {
                const year = book.publishedOn ? new Date(book.publishedOn).getFullYear() : '2026';
                const excerpt = htmlToPlainText(book.description);
                return (
                  <article
                    key={book.id}
                    className="flex flex-col rounded-3xl border-2 border-ink bg-white p-[18px] shadow-ink-4 transition-transform hover:-translate-y-1"
                  >
                    {/* Direct Image Box */}
                    <div className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl border-2 border-ink bg-stone-900 text-center">
                      {book.imageUrl ? (
                        <div className="relative h-[290px] w-full overflow-hidden bg-stone-950">
                          <DirectImage
                            src={book.imageUrl}
                            alt={book.title}
                            fallbackSrc="/assets/germien-amer-book-signing.jpg"
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                        </div>
                      ) : (
                        <div className="flex h-[290px] w-full items-center justify-center bg-ink p-6 text-white">
                          <img src="/assets/bk-icon1.svg" alt="" className="size-16 opacity-80" />
                        </div>
                      )}

                      <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-extrabold uppercase text-ink shadow-sm">
                          Book #{index + 1}
                        </span>
                        <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-ink backdrop-blur-sm">
                          {year}
                        </span>
                      </div>

                      <div className="relative z-10 flex flex-col p-4 text-left">
                        <h3 className="font-display text-lg font-black text-white line-clamp-2">
                          {book.title}
                        </h3>
                        {book.titleAr && (
                          <p className="text-xs font-medium text-amber-300 line-clamp-1" dir="rtl">
                            {book.titleAr}
                          </p>
                        )}
                        <p className="mt-1 text-[11px] font-extrabold tracking-widest uppercase text-zinc-300">
                          Dr. Germien Amer
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-2 pt-4">
                      <p className="eyebrow text-amber-600">Edition · {year}</p>
                      <p className="text-sm leading-[22.75px] text-zinc-700 line-clamp-4">
                        {excerpt || 'Comprehensive exploration of media influence, communication, and digital trends.'}
                      </p>
                      <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                        <a
                          href="#contact"
                          className="rounded-xl border border-amber-500/40 bg-amber-50 px-3 py-2 text-xs font-bold text-ink hover:bg-amber-100"
                        >
                          Request a Copy
                        </a>
                        {book.youtubeUrl && (
                          <a
                            href={book.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 rounded-xl border border-red-500/40 bg-red-50 px-3 py-2 text-xs font-bold text-red-800 hover:bg-red-100"
                          >
                            <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            Video
                          </a>
                        )}
                        <a
                          href="#contact"
                          className="rounded-xl border border-ink/20 px-3 py-2 text-xs font-bold text-ink hover:bg-stone-100"
                        >
                          Read an Excerpt
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })
            : initialBooks.map((book) => (
                <article
                  key={book.title}
                  className="flex flex-col rounded-3xl border-2 border-ink bg-white p-[18px] shadow-ink-4"
                >
                  <div
                    className={`flex min-h-[350px] flex-col justify-between rounded-2xl border-2 border-ink p-[30px] text-center ${book.style}`}
                  >
                    <span className="self-start rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase text-ink">
                      {book.badge}
                    </span>
                    <div className="flex flex-col items-center gap-2">
                      <img src={book.icon} alt="" />
                      <h3 className="font-display text-2xl font-extrabold">{book.title}</h3>
                      <p className="text-sm italic">{book.subtitle}</p>
                    </div>
                    <p className="text-xs font-extrabold uppercase tracking-widest">Dr. Germien Amer</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 pt-4">
                    <p className="eyebrow text-amber-600">{book.edition}</p>
                    <p className="text-sm leading-[22.75px]">{book.text}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      <a
                        href="#contact"
                        className="rounded-xl border border-amber-500/40 bg-amber-50 px-3 py-2 text-xs font-bold text-ink"
                      >
                        Request a Copy
                      </a>
                      <a
                        href="#contact"
                        className="rounded-xl border border-ink/20 px-3 py-2 text-xs font-bold text-ink"
                      >
                        {book.badge === 'Braille Edition' ? 'About the Braille Edition' : 'Read an Excerpt'}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
        </div>

        <p className="text-sm text-zinc-600">
          <strong className="text-ink">Also by Dr. Amer:</strong> Tale of Influencers Planets (2026) ·
          Cyber-crime&apos;s Theatre (2026) · Two further titles to be announced ·{' '}
          <strong className="text-ink">Forthcoming:</strong> Influential Power Creator on Influencer Planet
          (eighth book; publishing agreement signed October 6, 2026)
        </p>

        <div className="flex flex-col gap-4 rounded-3xl border-2 border-amber-500/50 bg-gradient-to-r from-amber-50 via-white to-amber-50 p-[30px]">
          <div className="flex flex-col items-start">
            <span className="eyebrow pill bg-amber-500">Beyond the Books</span>
            <h3 className="h3 pt-2">Frameworks for a Responsible Influence Economy</h3>
            <p className="text-sm leading-[23.2px]">
              Practical tools built from the research, for creators, parents, brands and institutions.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {initiatives.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border-2 border-ink/20 bg-white p-[18px]"
              >
                <img src={item.icon} alt="" />
                <h4 className="font-display text-lg font-bold text-ink">{item.title}</h4>
                <p className="text-sm leading-[23.2px]">{item.text}</p>
                <a
                  href="#contact"
                  className="eyebrow press mt-auto self-start rounded-full border border-ink bg-amber-500 px-4 py-2"
                >
                  {item.action}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
