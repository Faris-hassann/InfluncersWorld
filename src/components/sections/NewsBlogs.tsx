import BilingualCopy from '../BilingualCopy';
import { documents } from '../../content/documents';

export default function NewsBlogs() {
  return <section id="news" className="bg-stone-50 py-12"><div className="container-page flex flex-col gap-8">
    <div><span className="eyebrow pill bg-amber-500/20">News &amp; Announcements</span><h2 className="h2 mt-2">The Next Chapter of Influencers Planet</h2></div>
    <article className="overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-ink-4">
      <div className="grid items-center gap-6 bg-amber-50 lg:grid-cols-2">
        <img src="/assets/germien-amer-book-signing.jpg" alt="Germien Amer at a desk with a publishing agreement and the Influencers Planet flag" width="1268" height="1241" loading="lazy" className="max-h-[560px] w-full object-cover object-center" />
        <div className="flex flex-col items-start gap-4 p-6 sm:p-10"><span className="eyebrow pill bg-amber-500">Eighth Book · Publishing Agreement</span><time dateTime="2026-10-06" className="text-sm font-bold">Cairo · October 6, 2026</time><h3 className="h3">The Professions Behind Digital Influence</h3><p className="text-lg leading-8">Public relations and mass communication open a new exploration of the people, expertise and technologies that create influence.</p><a href="#book-announcement" className="btn-label press rounded-full border-2 border-ink bg-white px-6 py-3">Read the Full Announcement ↓</a></div>
      </div>
      <div id="book-announcement" className="scroll-mt-28 p-6 sm:p-10"><BilingualCopy english={documents.newsEn} arabic={documents.newsAr} englishTitle="Germien Amer Signs an Agreement for Her Eighth Book, “Influential Power Creator on Influencer Planet”" arabicTitle="چرمين عامر توقع عقد كتابها الثامن «صُنّاع النفوذ الإعلامي على كوكب المؤثرين»" skipEnglish={2} skipArabic={2} /></div>
    </article>
  </div></section>;
}
