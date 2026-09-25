import { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import SectionShell from '../SectionShell';

const tips = {
  Growth: [
    'Post on a schedule you can keep for a year, not a month.',
    'Reply to every comment in the first hour. It signals life to the algorithm and to people.',
    'Collaborate sideways: partner with creators of a similar size, not only bigger ones.',
  ],
  Content: [
    'Lead with the payoff. Your first three seconds decide the next thirty.',
    'One idea per piece. If you need "and also", make a second post.',
    'Keep a swipe file of hooks that stopped your own scroll.',
  ],
  Monetization: [
    'Own an email list before you chase sponsors. Platforms change, lists stay.',
    'Price on outcomes for the brand, not on follower count.',
    'Turn your most-asked question into your first digital product.',
  ],
} as const;

type Category = keyof typeof tips;
const categories = Object.keys(tips) as Category[];

export default function Tips() {
  const [active, setActive] = useState<Category>('Growth');

  return (
    <SectionShell
      id="tips"
      index="05"
      eyebrow="Tips & Tricks"
      title={
        <>
          Small moves, <em>big compounding.</em>
        </>
      }
      intro="Field-tested habits from our lectures and consultants, short enough to use today."
    >
      <div role="tablist" className="liquid-glass rounded-full p-1 w-fit flex mb-8 max-w-full overflow-x-auto">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              active === c ? 'bg-white text-black' : 'text-white/80 hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {tips[active].map((tip, i) => (
          <article key={tip} className="liquid-glass bg-white/[0.03] rounded-3xl p-6">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
              <Lightbulb size={16} />
              Tip {i + 1}
            </div>
            <p className="text-white leading-relaxed">{tip}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
