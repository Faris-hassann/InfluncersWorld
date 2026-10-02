import type { CSSProperties } from 'react';

interface Book {
  badge: string;
  press: string;
  icon: string;
  coverTitle: string[];
  subtitle: string;
  edition: string;
  title: string;
  text: string;
  retailers: string[];
  // Cover colourways, straight from the design.
  cover: string;
  coverStyle?: CSSProperties;
  badgeClass: string;
  pressClass: string;
  titleClass: string;
  subtitleClass: string;
  authorClass: string;
  orb?: boolean;
}

const books: Book[] = [
  {
    badge: 'Bestseller',
    press: 'Oxford Press',
    icon: '/assets/bk-icon1.svg',
    coverTitle: ['The', 'Architecture', 'of', 'Statecraft'],
    subtitle: 'Power, Ethics, and Empire',
    edition: 'Hardcover Edition • 2023',
    title: 'The Architecture of Statecraft',
    text: 'An authoritative dissection of how institutional trust decays when imperial ambitions eclipse core ethical tenets. Analyzes eighteen historical dynasties.',
    retailers: ['Amazon', 'Barnes & Noble', 'Bookshop.org'],
    cover: 'border-amber-500 bg-ink',
    badgeClass: 'bg-amber-500 text-ink',
    pressClass: 'font-bold text-amber-200',
    titleClass: 'text-white',
    subtitleClass: 'text-amber-300',
    authorClass: 'font-bold text-zinc-300',
    orb: true,
  },
  {
    badge: 'Award Winner',
    press: 'Cambridge Press',
    icon: '/assets/bk-icon2.svg',
    coverTitle: ['Echoes of', 'the Agora'],
    subtitle: 'Ancient Philosophy for Modern Republics',
    edition: 'International Book Award • 2020',
    title: 'Echoes of the Agora',
    text: 'Examining the democratic experiments of fifth-century Athens and Renaissance Florence to construct a resilient blueprint for modern representative governance.',
    retailers: ['Amazon', 'Barnes & Noble', "Powell's Books"],
    cover: 'border-ink',
    coverStyle: {
      backgroundImage: 'linear-gradient(127.23deg, rgb(217, 119, 6) 0%, rgb(180, 83, 9) 100%)',
    },
    badgeClass: 'bg-ink text-amber-500',
    pressClass: 'font-bold text-amber-100',
    titleClass: 'text-white',
    subtitleClass: 'text-amber-100',
    authorClass: 'font-bold text-amber-200',
  },
  {
    badge: 'Critical Acclaim',
    press: 'Pelican Editions',
    icon: '/assets/bk-icon3.svg',
    coverTitle: ['Winds of', 'Commerce'],
    subtitle: 'Trade Routes of Human Civilization',
    edition: 'Scholarly Edition • 2017',
    title: 'Winds of Commerce',
    text: 'A sweeping history tracing spice passages, silk caravans, and maritime choke-points that laid the financial architecture of the modern nation-state.',
    retailers: ['Read Digital Sample', 'University Press'],
    cover: 'border-ink bg-amber-400',
    badgeClass: 'bg-ink text-white',
    pressClass: 'font-semibold text-ink/70',
    titleClass: 'text-ink',
    subtitleClass: 'text-ink/80',
    authorClass: 'font-extrabold text-ink',
  },
];

const artifacts = [
  {
    icon: '/assets/pr-icon1.svg',
    title: "The Reader's Leather Journal",
    text: 'Italian vegetable-tanned hide with 120gsm archival acid-free laid paper for marginalia and thesis drafting.',
    price: '$84.00 USD',
    action: 'Inquire',
  },
  {
    icon: '/assets/pr-icon2.svg',
    title: 'Masterclass Video Vault',
    text: '24-hour recorded symposium on historical dialectics, archived lectures in 4K with downloadable syllabi.',
    price: '$195.00 USD',
    action: 'Access',
  },
  {
    icon: '/assets/pr-icon3.svg',
    title: 'Annotated Primary Source Folios',
    text: 'Exact facsimile prints of rare 17th-century treaty drafts with Prof. Sterling’s critical contextual apparatus.',
    price: '$120.00 USD',
    action: 'Inquire',
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-stone-50 py-12">
      <div className="container-page flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-[672px] flex-col items-start gap-[3.2px] pt-0.5">
            <span className="eyebrow pill bg-amber-500/20">Published Monographs</span>
            <h2 className="h2">
              Acclaimed Major
              <br />
              Treatises
            </h2>
            <p className="lede">
              Authored over three decades and published in collaboration with Oxford University Press,
              Cambridge University Press, and international scholarly houses.
            </p>
          </div>
          <a href="#portfolio" className="btn-label text-link shrink-0">
            View Complete Bibliography
            <img src="/assets/bk-arrow.svg" alt="" />
          </a>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <article
              key={book.title}
              className="flex flex-col rounded-3xl border-2 border-ink bg-white p-[18px] shadow-ink-4"
            >
              <div
                className={`relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-2xl border-2 p-[30px] shadow-md ${book.cover}`}
                style={book.coverStyle}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-extrabold uppercase leading-[17.6px] tracking-[0.6px] ${book.badgeClass}`}
                  >
                    {book.badge}
                  </span>
                  <span className={`text-xs leading-[17.6px] tracking-[0.72px] ${book.pressClass}`}>
                    {book.press}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <img src={book.icon} alt="" />
                  <p
                    className={`pt-[7.41px] font-display text-xl font-extrabold uppercase leading-[25px] tracking-[-0.5px] ${book.titleClass}`}
                  >
                    {book.coverTitle.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className={`text-xs italic leading-4 ${book.subtitleClass}`}>{book.subtitle}</p>
                </div>
                {book.orb && (
                  <span className="absolute -bottom-6 -right-6 size-28 rounded-full bg-amber-500/10" />
                )}
                <p
                  className={`relative text-center text-xs uppercase leading-4 tracking-[1.2px] ${book.authorClass}`}
                >
                  Arthur C. Sterling, Ph.D.
                </p>
              </div>

              <div className="flex flex-col gap-1 pt-[17.5px]">
                <p className="text-xs font-extrabold uppercase leading-[17.6px] tracking-[0.72px] text-amber-500">
                  {book.edition}
                </p>
                <h3 className="pt-[2.9px] font-display text-xl font-extrabold leading-[27.2px] text-ink">
                  {book.title}
                </h3>
                <p className="text-sm leading-[22.75px]">{book.text}</p>
              </div>

              <div className="mt-auto flex flex-col gap-1 pt-4">
                <p className="text-xs font-bold uppercase leading-[17.6px] tracking-[0.72px] text-zinc-600">
                  Acquire Monograph Via:
                </p>
                <div className="flex flex-wrap gap-1">
                  {book.retailers.map((retailer) => (
                    <a
                      key={retailer}
                      href="#contact"
                      className="rounded-xl border border-amber-500/40 bg-amber-50 px-[13px] py-[7px] text-xs font-bold leading-[17.6px] tracking-[0.72px] text-ink transition-colors hover:bg-amber-100"
                    >
                      {retailer}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border-2 border-amber-500/50 bg-gradient-to-r from-amber-50/70 via-white to-amber-50/70 px-[30px] pb-[30px] pt-[46px] shadow-sm">
          <div className="flex flex-col items-start pt-0.5">
            <span className="eyebrow pill bg-amber-500">Influencers Equipment</span>
            <h3 className="h3 pt-2">Curated Scholarly Artifacts</h3>
            <p className="text-sm leading-[23.2px]">
              Archival-grade tools designed specifically for research fellowship and serious creator
              contemplation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {artifacts.map((item) => (
              <article
                key={item.title}
                className="flex flex-col justify-between gap-7 rounded-2xl border-2 border-ink/20 bg-white p-[18px]"
              >
                <div className="flex flex-col items-start gap-[3.2px]">
                  <img src={item.icon} alt="" />
                  <h4 className="pt-[5.21px] font-display text-lg font-bold leading-7 text-ink">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-[23.2px]">{item.text}</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-extrabold leading-5 tracking-[0.28px] text-ink">
                    {item.price}
                  </span>
                  <a
                    href="#contact"
                    className="eyebrow press rounded-full border border-ink bg-amber-500 px-[17px] py-[7px]"
                  >
                    {item.action}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
