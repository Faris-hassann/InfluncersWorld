import { Clock, PlayCircle, Users } from 'lucide-react';
import SectionShell from '../SectionShell';

const lectures = [
  { title: 'Finding your niche and your voice', speaker: 'Layla Haddad', level: 'Beginner', length: '45 min', seats: '1.2K' },
  { title: 'Storytelling for short-form video', speaker: 'Omar Nasser', level: 'Intermediate', length: '60 min', seats: '980' },
  { title: 'Pricing your first brand partnership', speaker: 'Sara Idris', level: 'Intermediate', length: '50 min', seats: '860' },
  { title: 'Analytics that actually matter', speaker: 'Karim Yousef', level: 'Advanced', length: '75 min', seats: '540' },
  { title: 'Turning followers into a business', speaker: 'Nour Ali', level: 'Advanced', length: '90 min', seats: '470' },
];

export default function Lectures() {
  return (
    <SectionShell
      id="lectures"
      index="04"
      eyebrow="Lectures"
      title={
        <>
          Learn from the people <em>in the arena.</em>
        </>
      }
      intro="Recorded and live sessions taught by working creators, from your first hundred followers to your first hundred thousand."
    >
      <div className="grid gap-3">
        {lectures.map((l, i) => (
          <article
            key={l.title}
            className="liquid-glass bg-white/[0.03] rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-white/5 transition-colors"
          >
            <span className="text-white/30 text-3xl w-10 shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium">{l.title}</h3>
              <p className="text-white/50 text-sm">{l.speaker}</p>
            </div>
            <div className="flex items-center gap-4 text-white/60 text-sm flex-wrap">
              <span className="liquid-glass rounded-full px-4 py-1 text-white/80 text-xs">{l.level}</span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {l.length}
              </span>
              <span className="flex items-center gap-1">
                <Users size={14} /> {l.seats}
              </span>
            </div>
            <button
              aria-label={`Watch ${l.title}`}
              className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all w-fit"
            >
              <PlayCircle size={20} />
            </button>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
