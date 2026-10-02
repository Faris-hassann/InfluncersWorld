const expertise = [
  {
    icon: '/assets/ov-economy.svg',
    title: 'Classical Political Economy',
    text: 'From Aristotelian oikonomia to modern media networks and state trade ecosystems.',
  },
  {
    icon: '/assets/ov-geopolitics.svg',
    title: 'Historical Geopolitics',
    text: 'Comparative analysis of oceanic empires, buffer federations, and treaty collapse.',
  },
  {
    icon: '/assets/ov-ethics.svg',
    title: 'Ethics in Modern Statecraft',
    text: 'Moral jurisprudence, institutional memory, and state restraint in times of crisis.',
  },
  {
    icon: '/assets/ov-philosophy.svg',
    title: 'Philosophical Inquiry',
    text: 'Stoic, humanist, and Enlightenment paradigms evaluated for civic survival.',
  },
];

export default function Overview() {
  return (
    <section id="overview" className="bg-stone-50 py-12">
      <div className="container-page grid items-start gap-10 lg:grid-cols-12">
        <aside className="flex flex-col gap-4 rounded-3xl border-2 border-ink bg-white p-[30px] shadow-amber-4 lg:col-span-4">
          <div className="flex flex-col items-start gap-[3.2px] pt-[2.2px]">
            <span className="eyebrow inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-0.5">
              <img src="/assets/ov-badge.svg" alt="" />
              Domain Matrix
            </span>
            <h3 className="h3 pt-[3.42px]">Areas of Primary Inquiry</h3>
            <p className="text-sm leading-[23.2px]">
              Decades of archival research synthesized across four cornerstone disciplines of civic
              leadership, media power, and civic heritage.
            </p>
          </div>

          <ul className="flex flex-col gap-2 pt-1">
            {expertise.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-2 rounded-2xl border border-zinc-200 bg-mist p-[15px]"
              >
                <img src={item.icon} alt="" />
                <div>
                  <h4 className="font-display text-base font-bold leading-6 text-ink">{item.title}</h4>
                  <p className="text-sm leading-[23.2px]">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#portfolio" className="btn-label text-link pb-[3.41px] pt-[7px]">
            Review Complete Academic C.V.
            <img src="/assets/ov-arrow.svg" alt="" />
          </a>
        </aside>

        <article className="flex flex-col gap-4 lg:col-span-8">
          <div className="flex flex-col items-start gap-1 pt-0.5">
            <span className="eyebrow pill bg-amber-500/20">Curriculum Overview</span>
            <h2 className="h2">The Lifelong Discipline of Historical Inquiry</h2>
          </div>

          <div className="flex flex-col gap-4 text-lg leading-[29.25px]">
            <p>
              <span className="float-left mr-3 mt-1 font-display text-5xl font-extrabold leading-[40.8px] text-amber-500">
                F
              </span>
              or over thirty-five years, Arthur C. Sterling has occupied the intersection between
              cloistered archival rigor and vigorous civic dialogue. Having earned his doctorate at
              Oxford under the venerable Regius Chair of Modern History, Sterling dedicated his early
              academic career to decoding the socio-economic correspondence of the late Mediterranean
              merchant republics, illuminating how institutional trust precipitates material
              prosperity.
            </p>
            <p>
              Appointed Chair of Modern Diplomatic Studies in 2004, he broadened his inquiries to
              interrogate why sovereign entities repeatedly misjudge their adversaries’ ideological
              commitments. His subsequent public treatises, translated into twenty-two languages,
              argue persuasively that current geopolitical fragmentations are rarely unprecedented
              disruptions; rather, they reflect enduring cycles of institutional amnesia that can be
              mitigated solely through rigorous historical consciousness.
            </p>
            <p>
              Beyond his tenured faculty obligations, Sterling has served as an advisor to the Council
              on Foreign Relations, acted as chief editorial curator for the Oxford Antiquarian Press,
              and delivered keynote lectures at major international assemblies from Geneva to Tokyo.
            </p>
          </div>

          <div className="pt-2">
            <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border-2 border-ink/15 bg-white p-[18px] shadow-[0_1px_1px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center">
              <p className="flex flex-col">
                <span className="text-xs font-bold uppercase leading-[17.6px] tracking-[1.2px] text-zinc-600">
                  Current Chair &amp; Fellowship
                </span>
                <span className="font-display text-lg font-bold leading-7 text-ink">
                  Institute for Advanced Continental Research, Geneva
                </span>
              </p>
              <a
                href="#contact"
                className="btn-label press shrink-0 rounded-full border border-ink bg-amber-500 px-[21px] py-[11px]"
              >
                Request Syllabi Access
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
