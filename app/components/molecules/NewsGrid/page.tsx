"use client";

import Image from "next/image";
import { Link } from "@app/i18n/navigation";
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";

const PER_PAGE = 10;
const API_BASE = "https://ispnpp.kiev.ua/wp-json/wp/v2/posts";

type WpPost = {
  id: number;
  link: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
};

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

async function loadPage(
  page: number,
  categoryId: number | null
): Promise<{ posts: WpPost[]; hasMore: boolean }> {
  const cat = categoryId ? `&categories=${categoryId}` : "";
  const res = await fetch(
    `${API_BASE}?_embed&per_page=${PER_PAGE}&page=${page}${cat}`
  );
  if (!res.ok) return { posts: [], hasMore: false };
  const posts: WpPost[] = await res.json();
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
  return { posts, hasMore: page < totalPages };
}

function NewsCard({ post }: { post: WpPost }) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const imgSrc = media?.source_url;
  const imgAlt = media?.alt_text || post.title.rendered;
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 220);
  const date = new Date(post.date).toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={post.link}
      className="flex flex-col rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] hover:bg-[#dce8f5] hover:border-[#0061AA] transition overflow-hidden"
    >
      <div className="relative w-full h-44 bg-[#dce8f5] flex items-center justify-center shrink-0">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="8" fill="#c8d8ea" />
            <path d="M8 36l10-13 7 9 5-6 8 10H8z" fill="#51749E" opacity=".5" />
            <circle cx="34" cy="16" r="5" fill="#51749E" opacity=".4" />
          </svg>
        )}
      </div>

      <div className="flex flex-col gap-1.5 p-3">
        <span className="text-xs text-[#51749E]">{date}</span>
        <h3
          className="text-sm font-semibold text-[#002766] leading-snug"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        {excerpt && (
          <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

export default function NewsGrid({
  initialPosts,
  initialHasMore,
  categoryId,
}: {
  initialPosts: WpPost[];
  initialHasMore: boolean;
  categoryId: number | null;
}) {
  const t = useTranslations("news");
  const [posts, setPosts] = useState<WpPost[]>(initialPosts);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    setLoading(true);
    const next = page + 1;
    const { posts: newPosts, hasMore: more } = await loadPage(next, categoryId);
    setPosts((prev) => [...prev, ...newPosts]);
    setHasMore(more);
    setPage(next);
    setLoading(false);
  }, [page, categoryId]);

  if (posts.length === 0) {
    return (
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-[#002766] border-b-2 border-[#51749E] pb-2">
          {t("title")}
        </h2>
        <p className="text-sm text-gray-500 text-center py-8">{t("unavailable")}</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-[#002766] border-b-2 border-[#51749E] pb-2">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={loadMore}
          disabled={loading}
          className="self-center mt-2 px-6 py-2 rounded-full border border-[#0061AA] text-[#0061AA] text-sm font-medium hover:bg-[#0061AA] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? t("loading") : t("loadMore")}
        </button>
      )}
    </section>
  );
}
