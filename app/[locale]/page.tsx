import { MainLayout } from "@app/components/templates";
import NewsGrid, { type WpPost } from "@app/components/molecules/NewsGrid/NewsGrid";

const API = "https://ispnpp.kiev.ua/wp-json/wp/v2";
const PER_PAGE = 10;

async function getCategoryId(slug: string): Promise<number | null> {
  try {
    const res = await fetch(`${API}/categories?slug=${slug}`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data: Array<{ id: number }> = await res.json();
    return data[0]?.id ?? null;
  } catch {
    return null;
  }
}

async function getInitialNews(
  categoryId: number | null
): Promise<{ posts: WpPost[]; hasMore: boolean }> {
  try {
    const cat = categoryId ? `&categories=${categoryId}` : "";
    const res = await fetch(
      `${API}/posts?_embed&per_page=${PER_PAGE}&page=1${cat}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return { posts: [], hasMore: false };
    const posts: WpPost[] = await res.json();
    const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
    return { posts, hasMore: totalPages > 1 };
  } catch {
    return { posts: [], hasMore: false };
  }
}

export default async function Root({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const categorySlug = locale === "en" ? "news-en-2" : "news";
  const categoryId = await getCategoryId(categorySlug);
  const { posts, hasMore } = await getInitialNews(categoryId);

  return (
    <MainLayout>
      <NewsGrid initialPosts={posts} initialHasMore={hasMore} categoryId={categoryId} />
    </MainLayout>
  );
}
