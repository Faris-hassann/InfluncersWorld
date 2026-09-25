import { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, Headphones, Mic, Play } from 'lucide-react';
import SectionShell, { serif } from '../SectionShell';

const books = [
  { title: 'The Attention Playbook', author: 'Layla Haddad', pages: 248, price: '$24', tone: 'from-indigo-500/40 to-purple-900/40' },
  { title: 'Make It Worth Following', author: 'Omar Nasser', pages: 192, price: '$19', tone: 'from-rose-500/40 to-orange-900/40' },
  { title: 'Small Audience, Big Income', author: 'Sara Idris', pages: 214, price: '$22', tone: 'from-emerald-500/40 to-teal-900/40' },
];

const episodes = [
  { title: 'From 0 to 100K without burning out', guest: 'Nour Ali', length: '48 min' },
  { title: 'Brand deals that do not feel like ads', guest: 'Karim Yousef', length: '39 min' },
  { title: 'What algorithms really reward', guest: 'Dina Farouk', length: '54 min' },
  { title: 'Building a team around your name', guest: 'Yara Samir', length: '42 min' },
];

type Tab = 'books' | 'podcast';

export default function Products() {
  const [tab, setTab] = useState<Tab>('books');
  const [playing, setPlaying] = useState<number | null>(null);

  const tabClass = (t: Tab) =>
    `rounded-full px-6 py-2 text-sm font-medium transition-colors ${
      tab === t ? 'bg-white text-black' : 'text-white/80 hover:text-white'
    }`;

  return (
    <SectionShell
      id="products"
      index="03"
      eyebrow="Products"
      title={
        <>
          Books &amp; <em>Podcast.</em>
        </>
      }
      intro="Read it, listen to it, put it to work. Two ways to learn from people who have done the thing."
    >
      <div role="tablist" className="liquid-glass rounded-full p-1 w-fit flex mb-8">
        <button role="tab" aria-selected={tab === 'books'} onClick={() => setTab('books')} className={tabClass('books')}>
          <span className="flex items-center gap-2">
            <BookOpen size={16} /> Books
          </span>
        </button>
        <button role="tab" aria-selected={tab === 'podcast'} onClick={() => setTab('podcast')} className={tabClass('podcast')}>
          <span className="flex items-center gap-2">
            <Mic size={16} /> Podcast
          </span>
        </button>
      </div>

      {tab === 'books' ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((b) => (
            <article key={b.title} className="liquid-glass bg-white/[0.03] rounded-3xl p-5 flex flex-col">
              <div
                className={`bg-gradient-to-br ${b.tone} rounded-2xl aspect-[4/5] p-6 flex flex-col justify-end mb-5`}
              >
                <p className="text-white text-3xl leading-tight" style={serif}>
                  {b.title}
                </p>
                <p className="text-white/70 text-sm mt-2">{b.author}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="text-white text-sm font-medium">{b.price}</p>
                  <p className="text-white/40 text-xs">{b.pages} pages</p>
                </div>
                <button className="liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-1">
                  Get the book <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="liquid-glass bg-white/[0.03] rounded-3xl p-2">
          {episodes.map((e, i) => (
            <div
              key={e.title}
              className="flex items-center gap-4 rounded-2xl p-4 hover:bg-white/5 transition-colors"
            >
              <button
                aria-label={playing === i ? `Pause ${e.title}` : `Play ${e.title}`}
                onClick={() => setPlaying(playing === i ? null : i)}
                className="liquid-glass rounded-full p-3 text-white shrink-0"
              >
                {playing === i ? <Headphones size={18} /> : <Play size={18} />}
              </button>
              <div className="min-w-0 flex-1">
                <p className="text-white font-medium truncate">{e.title}</p>
                <p className="text-white/50 text-sm">with {e.guest}</p>
              </div>
              <span className="text-white/50 text-sm flex items-center gap-1 shrink-0">
                <Clock size={14} /> {e.length}
              </span>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
