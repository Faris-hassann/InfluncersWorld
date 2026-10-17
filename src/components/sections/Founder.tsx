import BilingualCopy from '../BilingualCopy';
import { documents } from '../../content/documents';

const profile = documents.profileEn.slice(2).map(text => text.replace('Doctor in Mass Communication from Lincolin University, Malaya', 'Doctorate in Mass Communication from Lincoln University College, Malaysia').replace('for three consecutive years (2020–2021–2023)', 'in 2020, 2021 and 2023'));
const arabicProfile = documents.profileAr.slice(1).map(text => text.replace('ألّفت خلالها ثمانية كتب', 'ألّفت سبعة كتب ووقّعت عقد كتابها الثامن'));

export default function Founder() {
  return <section id="founder" className="bg-stone-50 py-12"><div className="container-page grid items-start gap-10 lg:grid-cols-12">
    <figure className="overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-amber-4 lg:sticky lg:top-28 lg:col-span-5">
      <img src="/assets/germien-amer-leaders-award.jpg" alt="Dr. Germien Amer receiving a Leaders Platform award on stage" width="1280" height="700" loading="lazy" className="aspect-[16/10] w-full object-cover" />
      <figcaption className="p-6"><span className="eyebrow text-amber-600">Recognition</span><h3 className="h3 mt-2">Dr. Germien Amer</h3><p className="mt-2 leading-7">Writer &amp; media professional · Corporate communication expert · Researcher in digital media and influence communication</p><a href="#portfolio" className="btn-label text-link mt-4">Career &amp; Credentials <span aria-hidden>→</span></a></figcaption>
    </figure>
    <article className="lg:col-span-7"><BilingualCopy english={profile} arabic={arabicProfile} englishTitle="About Dr. Germien Amer" arabicTitle="عن د. جرمين عامر" /></article>
  </div></section>;
}
