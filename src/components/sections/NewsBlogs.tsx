const articles = [
  {
    category: 'Op-Ed • The Atlantic',
    date: 'Oct 12, 2025',
    title: 'The Vanishing Art of Civic Rhetoric and Deliberative Reason',
    text: 'Why the decline of formal collegiate debates and long-form prose has destabilized democratic legislatures, and how rhetorical humility might yet restore public trust.',
    action: 'Read Full Commentary',
  },
  {
    category: 'Publishing Announcement',
    date: 'Sep 28, 2025',
    title: 'New Book Announcement: Pre-orders Open for Fall 2026 Release',
    text: 'Oxford University Press announces the upcoming release of Prof. Sterling’s magnum opus, “The Anxieties of Peace: Treaties that Forged the Modern Map.”',
    action: 'View Press Release & Details',
  },
  {
    category: 'Academic Honors',
    date: 'Aug 14, 2025',
    title: "Awarded the Chancellor's Medal for Contribution to the Humanities",
    text: 'Bestowed in Edinburgh during the Triennial Convocation in recognition of three decades devoted to historical epistemology and public educational outreach.',
    action: 'Read Convocation Citation',
  },
];

export default function NewsBlogs() {
  return (
    <section id="news" className="bg-stone-50 py-12">
      <div className="container-page flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-[672px] flex-col items-start gap-[3px] pt-0.5">
            <span className="eyebrow pill bg-amber-500/20">Broadsheet &amp; Essays</span>
            <h2 className="h2">
              News, Op-Eds &amp;
              <br />
              Dispatches
            </h2>
            <p className="lede">Recent essays, public policy editorials, and academic announcements.</p>
          </div>
          <a href="#dispatch" className="btn-label text-link shrink-0">
            Explore the Dispatches Archive
            <img src="/assets/nw-arrow.svg" alt="" />
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col justify-between rounded-3xl border-2 border-ink/15 bg-white p-[18px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold uppercase leading-[17.6px] tracking-[0.72px] text-amber-500">
                    {article.category}
                  </span>
                  <time className="shrink-0 text-xs font-bold leading-[17.6px] tracking-[0.72px] text-zinc-600">
                    {article.date}
                  </time>
                </div>
                <h3 className="font-display text-xl font-extrabold leading-[27.5px] text-ink">
                  {article.title}
                </h3>
                <p className="text-sm leading-[22.75px]">{article.text}</p>
              </div>
              <a
                href="#dispatch"
                className="text-link self-start pb-[3.41px] pt-[23px] text-xs font-extrabold uppercase leading-4 tracking-[0.6px] text-ink"
              >
                {article.action}
                <img src="/assets/nw-arrow-sm.svg" alt="" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
