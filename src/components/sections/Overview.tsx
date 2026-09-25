import { BookOpen, GraduationCap, MessageCircle, Mic } from 'lucide-react';
import SectionShell from '../SectionShell';

const stats = [
  { value: '120K+', label: 'Curious readers & listeners' },
  { value: '350', label: 'Lectures and workshops' },
  { value: '40+', label: 'Influencer consultants' },
  { value: '60', label: 'Countries reached' },
];

const pillars = [
  { Icon: BookOpen, title: 'Books', text: 'Deep, practical reads on building an audience.' },
  { Icon: Mic, title: 'Podcast', text: 'Weekly conversations with creators who did it.' },
  { Icon: GraduationCap, title: 'Lectures', text: 'Structured lessons from people in the field.' },
  { Icon: MessageCircle, title: 'Consulting', text: 'One-to-one chat with influencer experts.' },
];

export default function Overview() {
  return (
    <SectionShell
      id="overview"
      index="01"
      eyebrow="Overview"
      title={
        <>
          One home for everyone who wants to <em>grow with intent.</em>
        </>
      }
      intro="Asme brings together the books, podcasts, lectures and expert conversations that help creators and curious minds turn attention into something that lasts."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="liquid-glass bg-white/[0.03] rounded-3xl p-6">
            <p className="text-white text-4xl mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              {s.value}
            </p>
            <p className="text-white/60 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map(({ Icon, title, text }) => (
          <div key={title} className="liquid-glass bg-white/[0.03] rounded-3xl p-6">
            <div className="liquid-glass rounded-full p-3 w-fit text-white/80 mb-5">
              <Icon size={20} />
            </div>
            <h3 className="text-white font-medium mb-2">{title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
