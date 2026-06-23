"use client";

import { Link } from "@app/i18n/navigation";
import { useTranslations } from "next-intl";

export type NewsPost = {
  id: number;
  href: string;
  date: string;
  title: string;
  excerpt: string;
};

function NewsCard({ post }: { post: NewsPost }) {
  const date = new Date(post.date).toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={post.href}
      className="flex flex-col rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] hover:bg-[#dce8f5] hover:border-[#0061AA] transition overflow-hidden"
    >
      <div className="relative w-full h-44 bg-[#dce8f5] flex items-center justify-center shrink-0">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="8" fill="#c8d8ea" />
          <path d="M8 36l10-13 7 9 5-6 8 10H8z" fill="#51749E" opacity=".5" />
          <circle cx="34" cy="16" r="5" fill="#51749E" opacity=".4" />
        </svg>
      </div>

      <div className="flex flex-col gap-1.5 p-3">
        <span className="text-xs text-[#51749E]">{date}</span>
        <h3 className="text-sm font-semibold text-[#002766] leading-snug">{post.title}</h3>
        {post.excerpt && (
          <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
            {post.excerpt.slice(0, 220)}
          </p>
        )}
      </div>
    </Link>
  );
}

export default function NewsGrid({
  initialPosts,
}: {
  initialPosts: NewsPost[];
}) {
  const t = useTranslations("news");

  if (initialPosts.length === 0) {
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
        {initialPosts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
