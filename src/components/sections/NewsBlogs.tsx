import { useEffect, useState } from 'react';
import BilingualCopy from '../BilingualCopy';
import { documents } from '../../content/documents';
import { api, type News, type Article, type ArticleCategory, htmlToPlainText } from '../../lib/api';
import { DirectImage } from '../../lib/images';

export default function NewsBlogs() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<ArticleCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    let active = true;
    Promise.all([
      api.getNews().catch(() => []),
      api.getArticles().catch(() => []),
      api.getCategories().catch(() => []),
    ]).then(([newsData, articlesData, catsData]) => {
      if (active) {
        if (newsData.length > 0) setNewsList(newsData);
        if (articlesData.length > 0) setArticles(articlesData);
        if (catsData.length > 0) setCategories(catsData);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const featuredNews = newsList[0];
  const otherNews = newsList.slice(1);

  const filteredArticles =
    selectedCategory === 'all'
      ? articles
      : articles.filter((a) => a.articleCategoryId === selectedCategory);

  return (
    <section id="news" className="bg-stone-50 py-12">
      <div className="container-page flex flex-col gap-10">
        <div>
          <span className="eyebrow pill bg-amber-500/20">News &amp; Announcements</span>
          <h2 className="h2 mt-2">The Next Chapter of Influencers Planet</h2>
        </div>

        {/* Featured News from Backend or Fallback */}
        <article className="overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-ink-4">
          <div className="grid items-center gap-6 bg-amber-50 lg:grid-cols-2">
            <div className="relative h-full min-h-[340px] max-h-[560px] w-full overflow-hidden bg-stone-900">
              <DirectImage
                src={featuredNews?.imageUrl || '/assets/germien-amer-book-signing.jpg'}
                alt={featuredNews?.title || 'Germien Amer at a desk with a publishing agreement'}
                fallbackSrc="/assets/germien-amer-book-signing.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col items-start gap-4 p-6 sm:p-10">
              <span className="eyebrow pill bg-amber-500">
                {featuredNews ? 'Latest Announcement' : 'Eighth Book · Publishing Agreement'}
              </span>
              <time
                dateTime={featuredNews?.publishedOn || '2026-10-06'}
                className="text-sm font-bold text-zinc-600"
              >
                {featuredNews?.publishedOn
                  ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(
                      new Date(featuredNews.publishedOn)
                    )
                  : 'Cairo · October 6, 2026'}
              </time>
              <h3 className="h3">
                {lang === 'ar' && featuredNews?.titleAr
                  ? featuredNews.titleAr
                  : featuredNews?.title || 'The Professions Behind Digital Influence'}
              </h3>
              <p className="text-lg leading-8 text-zinc-700">
                {featuredNews
                  ? htmlToPlainText(lang === 'ar' && featuredNews.descriptionAr ? featuredNews.descriptionAr : featuredNews.description).slice(0, 220) + '…'
                  : 'Public relations and mass communication open a new exploration of the people, expertise and technologies that create influence.'}
              </p>
              <a href="#book-announcement" className="btn-label press rounded-full border-2 border-ink bg-white px-6 py-3">
                Read the Full Announcement ↓
              </a>
            </div>
          </div>

          <div id="book-announcement" className="scroll-mt-28 p-6 sm:p-10">
            {featuredNews?.description ? (
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${
                      lang === 'en'
                        ? 'border-ink bg-amber-500 text-ink'
                        : 'border-zinc-200 bg-white text-zinc-600 hover:border-amber-500'
                    }`}
                  >
                    English
                  </button>
                  {featuredNews.descriptionAr && (
                    <button
                      type="button"
                      onClick={() => setLang('ar')}
                      className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${
                        lang === 'ar'
                          ? 'border-ink bg-amber-500 text-ink'
                          : 'border-zinc-200 bg-white text-zinc-600 hover:border-amber-500'
                      }`}
                    >
                      العربية
                    </button>
                  )}
                </div>
                <div
                  lang={lang}
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                  className="editorial-copy flex flex-col gap-4 text-base leading-8 sm:text-lg text-zinc-800"
                  dangerouslySetInnerHTML={{
                    __html:
                      lang === 'ar' && featuredNews.descriptionAr
                        ? featuredNews.descriptionAr
                        : featuredNews.description,
                  }}
                />
              </div>
            ) : (
              <BilingualCopy
                english={documents.newsEn}
                arabic={documents.newsAr}
                englishTitle="Germien Amer Signs an Agreement for Her Eighth Book, “Influential Power Creator on Influencer Planet”"
                arabicTitle="چرمين عامر توقع عقد كتابها الثامن «صُنّاع النفوذ الإعلامي على كوكب المؤثرين»"
                skipEnglish={2}
                skipArabic={2}
              />
            )}
          </div>
        </article>

        {/* Additional News from Database if available */}
        {otherNews.length > 0 && (
          <div className="flex flex-col gap-6">
            <h3 className="h3">More Stories &amp; Updates</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {otherNews.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-ink-4"
                >
                  {item.imageUrl && (
                    <div className="h-56 w-full overflow-hidden bg-stone-900">
                      <DirectImage
                        src={item.imageUrl}
                        alt={item.title}
                        fallbackSrc="/assets/germien-amer-book-signing.jpg"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <span className="text-xs font-bold text-amber-600">
                      {item.publishedOn
                        ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(
                            new Date(item.publishedOn)
                          )
                        : ''}
                    </span>
                    <h4 className="font-display text-xl font-bold text-ink">{item.title}</h4>
                    {item.titleAr && (
                      <p className="text-sm font-medium text-amber-700" dir="rtl">
                        {item.titleAr}
                      </p>
                    )}
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                      {htmlToPlainText(item.description)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Articles Section with Category Filtering & Direct Image Rendering */}
        {articles.length > 0 && (
          <div id="articles" className="mt-8 flex flex-col gap-6 scroll-mt-24">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow pill bg-amber-500">Articles &amp; Thought Leadership</span>
                <h3 className="h3 mt-2">Specialized Media &amp; Influence Articles</h3>
              </div>
              {/* Category Filter Pills */}
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className={`rounded-full border px-4 py-1.5 text-xs font-bold transition-colors ${
                      selectedCategory === 'all'
                        ? 'border-ink bg-amber-500 text-ink'
                        : 'border-zinc-300 bg-white text-zinc-600 hover:border-amber-500'
                    }`}
                  >
                    All ({articles.length})
                  </button>
                  {categories.map((cat) => {
                    const count = articles.filter((a) => a.articleCategoryId === cat.id).length;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
                          selectedCategory === cat.id
                            ? 'border-ink bg-amber-500 text-ink'
                            : 'border-zinc-300 bg-white text-zinc-600 hover:border-amber-500'
                        }`}
                      >
                        {cat.imageUrl && (
                          <img
                            src={cat.imageUrl}
                            alt=""
                            className="size-4 shrink-0 rounded-full object-cover"
                            onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                          />
                        )}
                        <span>{cat.nameEn} {cat.nameAr ? `/ ${cat.nameAr}` : ''}</span>
                        <span className="opacity-75">({count})</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((art) => {
                const primaryImage = art.imageUrls && art.imageUrls.length > 0 ? art.imageUrls[0] : '';
                const secondaryImages = art.imageUrls && art.imageUrls.length > 1 ? art.imageUrls.slice(1) : [];
                return (
                  <article
                    key={art.id}
                    className="flex flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-ink-4"
                  >
                    {primaryImage || art.articleCategory?.imageUrl ? (
                      <div className="group relative h-56 w-full overflow-hidden bg-stone-900">
                        <DirectImage
                          src={primaryImage || art.articleCategory?.imageUrl || ''}
                          alt={art.titleEn}
                          fallbackSrc="/assets/germien-amer-book-signing.jpg"
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                        {art.articleCategory && (
                          <span className="absolute top-3 left-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-extrabold text-ink shadow-sm">
                            {art.articleCategory.nameEn}
                          </span>
                        )}
                        {art.imageUrls && art.imageUrls.length > 1 && (
                          <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2.5 py-0.5 text-xs font-bold text-white backdrop-blur-sm">
                            +{art.imageUrls.length} images
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="flex h-40 w-full items-center justify-center bg-amber-100 p-6 text-ink">
                        <span className="font-display text-lg font-bold">Influencers Planet</span>
                      </div>
                    )}

                    {/* Multiple images thumbnail preview strip if article has multiple images */}
                    {secondaryImages.length > 0 && (
                      <div className="flex gap-1.5 overflow-x-auto border-b border-zinc-200 bg-stone-50 p-2">
                        {art.imageUrls.map((img, idx) => (
                          <div key={idx} className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-ink/20">
                            <DirectImage
                              src={img}
                              alt={`${art.titleEn} image ${idx + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <span className="text-xs font-bold text-zinc-500">
                        {art.publishedOn
                          ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(
                              new Date(art.publishedOn)
                            )
                          : ''}
                      </span>
                      <h4 className="font-display text-lg font-bold text-ink">{art.titleEn}</h4>
                      {art.titleAr && (
                        <p className="text-xs font-medium text-amber-700" dir="rtl">
                          {art.titleAr}
                        </p>
                      )}
                      <p className="mt-1 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                        {htmlToPlainText(art.descriptionEn)}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
