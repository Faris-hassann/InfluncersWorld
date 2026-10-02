const cards = [
  {
    number: '#1',
    eyebrow: 'Foundational Mandate',
    title: 'Our Mission',
    text: 'The relentless pursuit and pedagogical preservation of historical truth. We strive to elevate civil discourse above transient sensationalism through disciplined archival verification, intellectual humility, and an unyielding commitment to scholarly transparency.',
    points: [
      'Primary Source Verification over second-hand rhetoric',
      'Open-access archival distribution to collegiate institutions',
      'Bridging ideological divides via dialectical historical debate',
    ],
    badge: 'border-ink bg-amber-500 text-ink',
  },
  {
    number: '#2',
    eyebrow: 'The Horizon',
    title: 'Our Vision',
    text: 'Cultivating an enlightened, discerning global citizenry equipped to interrogate power, identify systemic fallacies, and preserve democratic republics through deep-format reading, deliberative logic, and adherence to enduring ethical principles.',
    points: [
      'Revitalization of civic humanities in digital media formats',
      'Global lecture syndication for emerging youth scholars',
      'Restoration of classical rhetoric in public policy decisioning',
    ],
    badge: 'border-amber-500 bg-ink text-amber-500',
  },
];

export default function MissionVision() {
  return (
    <section id="mission" className="bg-amber-50/30 py-12">
      <div className="container-page flex flex-col items-center gap-7">
        <div className="flex max-w-[768px] flex-col items-center gap-1 pt-0.5 text-center">
          <span className="eyebrow pill bg-amber-500">Guiding Philosophies</span>
          <h2 className="h2">
            Mission, Vision &amp;
            <br />
            Intellectual Tenet
          </h2>
          <span className="h-1.5 w-16 rounded-full bg-amber-500" />
        </div>

        <figure className="relative flex w-full flex-col items-center gap-2 overflow-hidden rounded-3xl border-2 border-ink bg-white px-6 pb-[50px] pt-[70px] text-center shadow-amber-6 sm:px-[50px]">
          <img src="/assets/mv-bubble.svg" alt="" className="absolute left-6 top-1" />
          <blockquote className="relative max-w-[896px] font-display text-xl font-bold leading-8 tracking-[-0.24px] text-ink sm:text-2xl sm:leading-[39px]">
            “History does not merely repeat; it rhymes with the moral decisions we either remember or
            neglect.”
          </blockquote>
          <figcaption className="relative text-xs font-extrabold uppercase leading-[17.6px] tracking-[1.2px] text-amber-500">
            — Dr. Germien Amer, Presidential Address to the Historical Academy
          </figcaption>
        </figure>

        <div className="grid w-full gap-10 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-4 rounded-3xl border-2 border-ink bg-white p-[30px] shadow-ink-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-12 w-[50px] shrink-0 items-center justify-center rounded-2xl border-2 font-display text-2xl font-extrabold leading-8 ${card.badge}`}
                >
                  {card.number}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase leading-[17.6px] tracking-[0.6px] text-zinc-600">
                    {card.eyebrow}
                  </p>
                  <h3 className="h3">{card.title}</h3>
                </div>
              </div>
              <p className="text-base leading-[26px]">{card.text}</p>
              <ul className="flex flex-col gap-1 pt-1">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-1 text-sm font-medium leading-[23.2px] text-zinc-900"
                  >
                    <img src="/assets/mv-check.svg" alt="" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
