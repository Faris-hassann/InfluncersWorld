export interface Book {
  id: number;
  title: string;
  titleAr?: string | null;
  description: string;
  descriptionAr?: string | null;
  imageUrl: string;
  youtubeUrl?: string | null;
  publishedOn: string;
}

export interface News {
  id: number;
  title: string;
  titleAr?: string | null;
  description: string;
  descriptionAr?: string | null;
  imageUrl: string;
  youtubeUrl?: string | null;
  publishedOn: string;
}

export interface ArticleCategory {
  id: number;
  nameEn: string;
  nameAr: string;
  imageUrl?: string;
  createdOn?: string;
}

export interface Article {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  imageUrls: string[];
  publishedOn: string;
  articleCategoryId?: number | null;
  articleCategory?: ArticleCategory | null;
}

export interface Award {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  imageUrls: string[];
  publishedOn: string;
}

export interface Podcast {
  id: number;
  title: string;
  titleAr?: string | null;
  description: string;
  descriptionAr?: string | null;
  imageUrl: string;
  youtubeUrl?: string | null;
  publishedOn: string;
}

export interface Tip {
  id: number;
  title: string;
  titleAr?: string | null;
  description: string;
  descriptionAr?: string | null;
  imageUrl: string;
  youtubeUrl?: string | null;
  publishedOn: string;
}

export interface ContactPayload {
  firstName: string;
  firstNameAr?: string;
  lastName: string;
  lastNameAr?: string;
  email: string;
  phoneNumber: string;
  description: string;
  descriptionAr?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export const API_BASE_URL = (
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) ||
  'https://infulencers-backend.vercel.app'
).replace(/\/+$/, '');

/**
 * Strips HTML tags and resolves common HTML entities into clean plain text
 */
export function htmlToPlainText(html?: string | null): string {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generic fetcher for backend collections.
 * Gracefully returns an empty array on error or offline.
 */
export async function fetchCollection<T>(
  slug: string,
  options?: {
    pageSize?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
    filter?: Record<string, unknown>;
  }
): Promise<T[]> {
  const query = new URLSearchParams({
    page: '1',
    pageSize: String(options?.pageSize ?? 100),
    order: options?.order ?? 'desc',
  });
  if (options?.sortBy) query.set('sortBy', options.sortBy);
  if (options?.filter) query.set('filter', JSON.stringify(options.filter));

  const url = `${API_BASE_URL}/api/${slug}?${query.toString()}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
      console.warn(`[API] Failed to fetch /api/${slug}: status ${res.status}`);
      return [];
    }
    const json: PaginatedResponse<T> = await res.json();
    return json.data || [];
  } catch (err) {
    console.warn(`[API] Network error fetching /api/${slug}:`, err);
    return [];
  }
}

export const api = {
  getBooks: () => fetchCollection<Book>('books', { sortBy: 'publishedOn', order: 'desc' }),
  getNews: () => fetchCollection<News>('news', { sortBy: 'publishedOn', order: 'desc' }),
  getArticles: (categoryId?: number) =>
    fetchCollection<Article>(
      'articles',
      categoryId
        ? { sortBy: 'publishedOn', order: 'desc', filter: { articleCategoryId: categoryId } }
        : { sortBy: 'publishedOn', order: 'desc' }
    ),
  getAwards: () => fetchCollection<Award>('awards', { sortBy: 'publishedOn', order: 'desc' }),
  getPodcasts: () => fetchCollection<Podcast>('podcasts', { sortBy: 'publishedOn', order: 'desc' }),
  getTips: () => fetchCollection<Tip>('tips-and-tricks', { sortBy: 'publishedOn', order: 'desc' }),
  getCategories: () => fetchCollection<ArticleCategory>('article-categories', { sortBy: 'createdOn', order: 'asc' }),

  submitContact: async (payload: ContactPayload): Promise<{ ok: boolean; message?: string }> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (res.ok || res.status === 201) {
        return { ok: true };
      }
      const data = await res.json().catch(() => ({}));
      return { ok: false, message: data.message || 'Submission failed' };
    } catch (err: any) {
      return { ok: false, message: err?.message || 'Network error' };
    }
  },
};

