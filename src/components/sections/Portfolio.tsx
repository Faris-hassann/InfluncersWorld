const appointments = [
  {
    period: '2018 — 2019',
    icon: '/assets/pf-museum.svg',
    title: 'Curatorial Advisor: British Maritime Exhibition',
    text: 'Curated the landmark historical retrospective “The Navigators of Empire,” drawing over 340,000 visitors to the National Maritime galleries.',
  },
  {
    period: '2016 — Present',
    icon: '/assets/pf-shield.svg',
    title: 'Council on Foreign Cultural Heritage',
    text: 'Advising international multilateral commissions on the preservation of tangible archive documents in zones of geopolitical conflict.',
  },
  {
    period: 'Honors',
    icon: '/assets/pf-cap.svg',
    title: 'Honorary Doctorates',
    text: 'Doctor of Letters (D.Litt.), Sorbonne Université (2018); Doctor of Humane Letters (L.H.D.), Trinity College Dublin (2022).',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-amber-50/30 py-12">
      <div className="container-page flex flex-col gap-12">
        <div className="flex max-w-[672px] flex-col items-start gap-[3.2px] pt-0.5">
          <span className="eyebrow pill bg-amber-500">Institutional Pedigree</span>
          <h2 className="h2">
            Academic Portfolio &amp;
            <br />
            Appointments
          </h2>
          <p className="lede">
            A cumulative record of faculty chairs, institutional trusteeships, and curated public
            exhibitions.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <article className="flex flex-col justify-between gap-10 rounded-3xl border-2 border-ink bg-white p-[30px] shadow-ink-4 lg:col-span-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-extrabold uppercase leading-[17.6px] tracking-[0.72px] text-ink">
                  2012 — Present
                </span>
                <img src="/assets/pf-award.svg" alt="" />
              </div>
              <h3 className="font-display text-2xl font-extrabold leading-8 text-ink">
                Chair of Renaissance &amp; Modern Studies
              </h3>
              <p className="text-xs font-bold uppercase leading-[17.6px] tracking-[0.6px] text-zinc-600">
                Institute for Advanced Research, Cambridge
              </p>
              <p className="pt-1 text-base leading-[26px]">
                Directing a multidisciplinary research cohort of 24 doctoral and postdoctoral scholars
                investigating early modern economic cartography, sovereign debt covenants, and
                republican governance structures.
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold leading-4 text-zinc-600">
              <li>• 18 Monograph Theses Advised</li>
              <li>• Annual Oxford-Cambridge Symposium Lead</li>
            </ul>
          </article>

          <article className="flex flex-col justify-between gap-4 rounded-3xl border-2 border-amber-500 bg-ink p-[30px] shadow-amber-4 lg:col-span-4">
            <div className="flex flex-col gap-[3.1px] pt-[5.5px]">
              <p className="text-xs font-extrabold uppercase leading-[17.6px] tracking-[1.2px] text-amber-500">
                Bibliometric Indices
              </p>
              <h3 className="pt-[3.8px] font-display text-xl font-extrabold leading-7 text-white">
                Citation Record
              </h3>
              <p className="text-sm leading-[23.2px] text-zinc-300">
                Recognized among the most frequently cited modern political historiographers.
              </p>
            </div>
            <dl className="flex flex-col gap-2 py-2">
              <div className="flex flex-col gap-[5.5px] pb-[2.91px]">
                <dd className="font-display text-5xl font-extrabold leading-[60px] text-amber-500">48</dd>
                <dt className="text-xs font-bold uppercase leading-[17.6px] tracking-[0.6px] text-zinc-400">
                  H-Index (Google Scholar)
                </dt>
              </div>
              <div className="flex flex-col gap-[5.5px] pb-[2.91px]">
                <dd className="font-display text-2xl font-extrabold leading-8 text-white">14,200+</dd>
                <dt className="text-xs font-bold uppercase leading-[17.6px] tracking-[0.6px] text-zinc-400">
                  Peer-Reviewed Citations
                </dt>
              </div>
            </dl>
            <a
              href="#contact"
              className="text-link text-xs font-extrabold uppercase leading-4 tracking-[0.6px] text-amber-500"
            >
              Inspect Scholar Metrics Profile
              <img src="/assets/pf-external.svg" alt="" />
            </a>
          </article>

          {appointments.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-[3.2px] rounded-3xl border-2 border-ink/15 bg-white p-[18px] lg:col-span-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase leading-[17.6px] tracking-[0.72px] text-zinc-600">
                  {item.period}
                </span>
                <img src={item.icon} alt="" />
              </div>
              <h4 className="pt-[0.8px] font-display text-lg font-extrabold leading-7 text-ink">
                {item.title}
              </h4>
              <p className="text-sm leading-[23.2px]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
