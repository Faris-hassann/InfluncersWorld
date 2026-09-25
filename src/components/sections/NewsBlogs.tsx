import { ArrowUpRight, Newspaper } from 'lucide-react';
import SectionShell, { serif } from '../SectionShell';

const featured = {
  tag: 'News',
  title: 'Asme launches live consulting with 40 influencer experts',
  excerpt:
    'Members can now book one-to-one chats with creators and strategists across growth, brand deals and monetization.',
  date: 'Sep 18, 2026',
};

const posts = [
  { tag: 'Blog', title: 'Why your best content gets ignored (and how to fix it)', date: 'Sep 10, 2026', read: '6 min read' },
  { tag: 'Blog', title: 'A creator\'s guide to sustainable posting', date: 'Sep 2, 2026', read: '5 min read' },
  { tag: 'News', title: 'The Asme podcast crosses 1 million listens', date: 'Aug 24, 2026', read: '3 min read' },
  { tag: 'Blog', title: 'Reading list: five books every new creator needs', date: 'Aug 15, 2026', read: '4 min read' },
];

export default function NewsBlogs() {
  return (
    <SectionShell
      id="news"
      index="09"
      eyebrow="News & Blogs"
      title={
        <>
          Fresh from <em>the desk.</em>
        </>
      }
      intro="Product news, industry notes and long-form writing from the Asme team and guest contributors."
    >
      <div className="grid lg:grid-cols-5 gap-4">
        <article className="lg:col-span-3 liquid-glass bg-gradient-to-br from-indigo-500/30 to-purple-900/30 rounded-3xl p-8 min-h-[320px] flex flex-col justify-between">
          <span className="liquid-glass rounded-full px-4 py-1 text-white text-xs w-fit flex items-center gap-2">
            <Newspaper size={14} /> {featured.tag}
          </span>
          <div>
            <p className="text-white/60 text-sm mb-3">{featured.date}</p>
            <h3 className="text-white text-3xl md:text-4xl leading-tight mb-4" style={serif}>
              {featured.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-lg">{featured.excerpt}</p>
            <a
              href="#news"
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              Read more <ArrowUpRight size={16} />
            </a>
          </div>
        </article>

        <div className="lg:col-span-2 grid gap-4">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#news"
              className="liquid-glass bg-white/[0.03] rounded-3xl p-5 hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center justify-between text-xs text-white/40 mb-2">
                <span className="uppercase tracking-widest">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-white leading-snug">{p.title}</h4>
                <ArrowUpRight size={18} className="text-white/40 group-hover:text-white transition-colors shrink-0" />
              </div>
              <p className="text-white/40 text-xs mt-2">{p.read}</p>
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
