import { useId, useState } from 'react';

type Props = { english: readonly string[]; arabic: readonly string[]; englishTitle: string; arabicTitle: string; skipEnglish?: number; skipArabic?: number };
const subheadings = new Set(['Influencers Communications', 'Welcome to Influencer Planet', 'Academic and Educational Background', 'Professional Memberships', 'Professional Experience', 'Writing and Thought Leadership', 'Books and Publications', 'Podcasts and Initiatives', 'Awards and Recognition']);

export default function BilingualCopy({ english, arabic, englishTitle, arabicTitle, skipEnglish = 0, skipArabic = 0 }: Props) {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const id = useId();
  const isArabic = language === 'ar';
  return <div className="flex min-w-0 flex-col gap-5">
    <div className="flex flex-wrap gap-2" role="group" aria-label={`Reading language: ${englishTitle}`}>
      {(['en', 'ar'] as const).map(code => <button key={code} type="button" aria-pressed={language === code} aria-controls={id} onClick={() => setLanguage(code)} lang={code} className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${language === code ? 'border-ink bg-amber-500 text-ink' : 'border-zinc-200 bg-white text-zinc-600 hover:border-amber-500'}`}>{code === 'en' ? 'English' : 'العربية'}</button>)}
    </div>
    <div id={id} lang={language} dir={isArabic ? 'rtl' : 'ltr'} className="editorial-copy flex flex-col gap-4">
      <h2 className="h2">{isArabic ? arabicTitle : englishTitle}</h2>
      {(isArabic ? arabic.slice(skipArabic) : english.slice(skipEnglish)).map((paragraph, i) => subheadings.has(paragraph) ? <h3 key={i} className="pt-4 font-display text-2xl font-extrabold text-ink">{paragraph}</h3> : <p key={i} className="text-base leading-8 sm:text-lg">{paragraph}</p>)}
    </div>
  </div>;
}
