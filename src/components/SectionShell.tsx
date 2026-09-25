import { CSSProperties, ReactNode } from 'react';

interface Props {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
}

export const serif: CSSProperties = { fontFamily: "'Instrument Serif', serif" };

export default function SectionShell({ id, index, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="relative bg-black px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-4">
          {index} — {eyebrow}
        </p>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6"
          style={serif}
        >
          {title}
        </h2>
        {intro ? (
          <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-12">{intro}</p>
        ) : (
          <div className="mb-12" />
        )}
        {children}
      </div>
    </section>
  );
}
