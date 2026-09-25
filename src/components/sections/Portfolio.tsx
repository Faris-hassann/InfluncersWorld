import { ArrowUpRight, Award, MapPin } from 'lucide-react';
import SectionShell, { serif } from '../SectionShell';

const projects = [
  { title: 'Brand voice for a travel start-up', tag: 'Strategy', tone: 'from-sky-500/40 to-indigo-900/40' },
  { title: 'Podcast launch, 0 to 50K downloads', tag: 'Podcast', tone: 'from-fuchsia-500/40 to-purple-900/40' },
  { title: 'Creator course series', tag: 'Education', tone: 'from-amber-500/40 to-red-900/40' },
  { title: 'Community-led product campaign', tag: 'Campaign', tone: 'from-emerald-500/40 to-cyan-900/40' },
];

const skills = ['Audience strategy', 'Storytelling', 'Public speaking', 'Brand partnerships', 'Podcast production'];

export default function Portfolio() {
  return (
    <SectionShell
      id="portfolio"
      index="06"
      eyebrow="Personal Portfolio"
      title={
        <>
          The work <em>behind the words.</em>
        </>
      }
      intro="A selection of projects, talks and launches from the person behind Asme."
    >
      <div className="grid lg:grid-cols-3 gap-4">
        <aside className="liquid-glass bg-white/[0.03] rounded-3xl p-8 lg:row-span-2">
          <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-full w-20 h-20 flex items-center justify-center text-white text-3xl mb-6" style={serif}>
            A
          </div>
          <h3 className="text-white text-3xl mb-1" style={serif}>
            Your Name Here
          </h3>
          <p className="text-white/50 text-sm flex items-center gap-1 mb-5">
            <MapPin size={14} /> Cairo, Egypt
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Creator, author and educator with a decade of helping people find their voice online.
            Replace this text with your own story.
          </p>
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
            <Award size={14} /> Skills
          </p>
          <ul className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <li key={s} className="liquid-glass rounded-full px-4 py-1 text-white/80 text-xs">
                {s}
              </li>
            ))}
          </ul>
        </aside>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#portfolio"
              className={`liquid-glass rounded-3xl bg-gradient-to-br ${p.tone} p-6 min-h-[200px] flex flex-col justify-between group`}
            >
              <span className="liquid-glass rounded-full px-4 py-1 text-white text-xs w-fit">{p.tag}</span>
              <div className="flex items-end justify-between gap-4">
                <h4 className="text-white text-2xl leading-tight" style={serif}>
                  {p.title}
                </h4>
                <ArrowUpRight size={20} className="text-white/60 group-hover:text-white transition-colors shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
