import BilingualCopy from '../BilingualCopy';
import { documents } from '../../content/documents';

export default function MissionVision() {
  return <section id="mission" className="bg-amber-50/40 py-12"><div className="container-page flex flex-col gap-8">
    <span className="eyebrow pill self-start bg-amber-500">Meaningful, Credible &amp; Responsible Impact</span>
    <div className="rounded-3xl border-2 border-ink bg-white p-6 shadow-amber-4 sm:p-10"><BilingualCopy english={documents.missionEn} arabic={documents.missionAr} englishTitle="Our Mission" arabicTitle="رسالتنا" skipEnglish={1} skipArabic={1} /></div>
  </div></section>;
}
