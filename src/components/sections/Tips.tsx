const tips = [
  {
    number: '#01',
    icon: '/assets/tp-1.svg',
    title: 'The Triad Reading Method',
    text: "Never read a seminal philosophical text in isolation. Always triangulate the primary treatise against its contemporary adversary's rebuttal and the underlying tax/commercial records of that precise decade to expose material motives behind ideological assertions.",
    application: 'Primary Historiography',
  },
  {
    number: '#02',
    icon: '/assets/tp-2.svg',
    title: 'Dialectical Stress-Testing',
    text: 'Before crystallizing your thesis, construct an unyielding, eloquent defense of the exact opposite perspective. If you cannot dismantle your own counter-argument using undeniable empirical proofs, your foundational premise remains intellectually inadequate.',
    application: 'Rigorous Rhetoric',
  },
  {
    number: '#03',
    icon: '/assets/tp-3.svg',
    title: "The Scholar's Daily Writing Ritual",
    text: 'Protect the first three hours of daylight with uncompromising ascetic discipline. Do not access electronic dispatches or modern news ephemera until 750 words of drafted argumentation have been penned onto physical paper or isolated word-processing buffers.',
    application: 'Deep Work Preservation',
  },
  {
    number: '#04',
    icon: '/assets/tp-4.svg',
    title: 'Archival Footnote Tracking',
    text: 'The most profound breakthroughs inhabit the marginal footnotes of obscure regional clerks. Learn to follow marginal references back through notary ledgers and probate inventories rather than relying solely on canonized grand narratives.',
    application: 'Archival Discovery',
  },
];

export default function Tips() {
  return (
    <section id="tips" className="bg-stone-50 py-12">
      <div className="container-page flex flex-col gap-12">
        <div className="flex max-w-[768px] flex-col items-start gap-[3.2px] pt-0.5">
          <span className="eyebrow pill bg-amber-500">Scholastic &amp; Creator Craft</span>
          <h2 className="h2">
            Intellectual Toolkits for
            <br />
            the Inquiring Mind
          </h2>
          <p className="lede">
            Distilled methodologies refined over four decades of archival labor, seminar direction, and
            manuscript preparation for graduate researchers and civic thinkers.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {tips.map((tip) => (
            <article
              key={tip.number}
              className="flex flex-col items-start gap-2 rounded-3xl border-2 border-ink bg-white p-[30px] shadow-amber-4"
            >
              <div className="flex w-full items-center justify-between">
                <span className="font-display text-3xl font-extrabold leading-9 text-amber-500">
                  {tip.number}
                </span>
                <img src={tip.icon} alt="" />
              </div>
              <h3 className="font-display text-xl font-extrabold leading-7 text-ink">{tip.title}</h3>
              <p className="text-base leading-[26px]">{tip.text}</p>
              <span className="mt-auto pt-[7px]">
                <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-[3.5px] text-xs font-extrabold uppercase leading-4 tracking-[0.6px] text-ink">
                  Application: {tip.application}
                </span>
              </span>
            </article>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-3xl border-2 border-amber-500 bg-ink p-[30px] shadow-amber-6 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-3xl border-2 border-white bg-amber-500">
              <img src="/assets/tp-pdf.svg" alt="" />
            </span>
            <div className="flex flex-col gap-[3px] pt-[5.5px]">
              <p className="text-xs font-extrabold uppercase leading-[17.6px] tracking-[1.2px] text-amber-500">
                Complimentary Resource
              </p>
              <h3 className="pt-[3.91px] font-display text-xl font-extrabold leading-7 text-white">
                The Scholar's Handbook for Archival Inquiry (32-Page PDF)
              </h3>
              <p className="text-sm leading-[23.2px] text-zinc-300">
                Includes cataloging worksheets, primary source citation templates, and reading cadence
                charts.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="btn-label press shrink-0 self-start rounded-full border-2 border-white bg-amber-500 px-[30px] py-4 text-center lg:self-auto"
          >
            Download PDF Guide
          </a>
        </div>
      </div>
    </section>
  );
}
