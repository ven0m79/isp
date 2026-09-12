"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { NewsCard, type WpPost } from "@app/components/molecules/NewsGrid/NewsGrid";

const PER_PAGE = 10;
const API_BASE = "https://isp.npe.kiev.ua/wp-json/wp/v2/posts";

async function loadPage(
  page: number,
  query: string
): Promise<{ posts: WpPost[]; hasMore: boolean }> {
  const res = await fetch(
    `${API_BASE}?_embed&per_page=${PER_PAGE}&page=${page}&search=${encodeURIComponent(query)}`,
    { signal: AbortSignal.timeout(10000) }
  );
  if (!res.ok) return { posts: [], hasMore: false };
  const posts: WpPost[] = await res.json();
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
  return { posts, hasMore: page < totalPages };
}

export default function NewsSearchResults({
  query,
  initialPosts,
  initialHasMore,
}: {
  query: string;
  initialPosts: WpPost[];
  initialHasMore: boolean;
}) {
  const t = useTranslations("search");
  const [posts, setPosts] = useState<WpPost[]>(initialPosts);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    setLoading(true);
    const next = page + 1;
    try {
      const { posts: newPosts, hasMore: more } = await loadPage(next, query);
      setPosts((prev) => [...prev, ...newPosts]);
      setHasMore(more);
      setPage(next);
    } catch {
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, query]);

  if (posts.length === 0) {
    return <p className="text-sm text-gray-500 py-4">{t("noResults")}</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={loadMore}
          disabled={loading}
          className="self-center mt-2 cursor-pointer rounded-full border border-[#0061AA] px-6 py-2 text-sm font-medium text-[#0061AA] transition hover:bg-[#0061AA] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? t("loading") : t("loadMore")}
        </button>
      )}
    </div>
  );
}
