import BilingualCopy from '../BilingualCopy';
import { documents } from '../../content/documents';

const expertise = [
  { icon: '/assets/ov-economy.svg', title: 'Influencers Communications', text: 'Strategic communication, public relations, marketing and the creator economy.' },
  { icon: '/assets/ov-geopolitics.svg', title: 'Trust & Digital Culture', text: 'Credibility, authenticity, storytelling, audience behaviour and algorithms.' },
  { icon: '/assets/ov-ethics.svg', title: 'Ethics & Responsibility', text: 'Transparency, disclosure, misinformation and child-influencer protection.' },
  { icon: '/assets/ov-philosophy.svg', title: 'Technology & Digital Safety', text: 'AI-generated influencers, cybersecurity, privacy and emerging technologies.' },
];

export default function Overview() {
  return <section id="overview" className="bg-stone-50 py-12"><div className="container-page grid items-start gap-10 lg:grid-cols-12">
    <aside className="flex flex-col gap-4 rounded-3xl border-2 border-ink bg-white p-6 shadow-amber-4 lg:sticky lg:top-28 lg:col-span-4">
      <span className="eyebrow pill self-start bg-amber-500/20">Our World of Influence</span><h3 className="h3">Areas of Focus</h3>
      <ul className="flex flex-col gap-3">{expertise.map(item => <li key={item.title} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-mist p-4"><img src={item.icon} alt="" /><div><h4 className="font-display font-bold text-ink">{item.title}</h4><p className="mt-1 text-sm leading-6">{item.text}</p></div></li>)}</ul>
      <a href="#founder" className="btn-label text-link">Meet the Founder <img src="/assets/ov-arrow.svg" alt="" /></a>
    </aside>
    <article className="lg:col-span-8"><BilingualCopy english={documents.overviewEn} arabic={documents.overviewAr} englishTitle="Where Influence Becomes Power" arabicTitle="كوكب المؤثرين — حيث يتحول التأثير إلى قوة" skipEnglish={2} skipArabic={1} /></article>
  </div></section>;
}
