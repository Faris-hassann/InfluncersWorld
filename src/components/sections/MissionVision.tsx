import { Compass, Eye, Target } from 'lucide-react';
import SectionShell, { serif } from '../SectionShell';

const values = ['Curiosity first', 'Honest advice', 'Craft over hype', 'Community always'];

export default function MissionVision() {
  return (
    <SectionShell
      id="mission"
      index="02"
      eyebrow="Mission & Vision"
      title={
        <>
          Why we exist, and <em>where we are going.</em>
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <article className="liquid-glass bg-white/[0.03] rounded-3xl p-8">
          <div className="liquid-glass rounded-full p-3 w-fit text-white/80 mb-6">
            <Target size={20} />
          </div>
          <h3 className="text-white text-3xl mb-4" style={serif}>
            Our mission
          </h3>
          <p className="text-white/60 leading-relaxed">
            To make expert knowledge about influence and creative careers accessible, practical and
            honest, so anyone with something to say can build an audience without losing themselves
            in the process.
          </p>
        </article>

        <article className="liquid-glass bg-white/[0.03] rounded-3xl p-8">
          <div className="liquid-glass rounded-full p-3 w-fit text-white/80 mb-6">
            <Eye size={20} />
          </div>
          <h3 className="text-white text-3xl mb-4" style={serif}>
            Our vision
          </h3>
          <p className="text-white/60 leading-relaxed">
            A world where every curious person has a trusted place to learn, ask and be guided, and
            where influence is measured by the value people create for others.
          </p>
        </article>
      </div>

      <div className="liquid-glass bg-white/[0.03] rounded-3xl p-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-center gap-3 text-white/80 shrink-0">
          <Compass size={20} />
          <span className="text-sm font-medium">What guides us</span>
        </div>
        <ul className="flex flex-wrap gap-3">
          {values.map((v) => (
            <li key={v} className="liquid-glass rounded-full px-5 py-2 text-white text-sm">
              {v}
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
