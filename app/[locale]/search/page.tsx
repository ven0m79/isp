import { getTranslations } from "next-intl/server";
import { Link } from "@app/i18n/navigation";
import { MainLayout } from "@app/components/templates";
import type { WpPost } from "@app/components/molecules/NewsGrid/NewsGrid";
import { vacancies } from "../vacancies/vacanciesData";
import NewsSearchResults from "./NewsSearchResults";
import { searchSitePages } from "./staticPageSearch";

const API_BASE = "https://isp.npe.kiev.ua/wp-json/wp/v2/posts";
const PER_PAGE = 10;

async function searchNews(query: string): Promise<{ posts: WpPost[]; hasMore: boolean }> {
  try {
    const res = await fetch(
      `${API_BASE}?_embed&per_page=${PER_PAGE}&page=1&search=${encodeURIComponent(query)}`,
      { signal: AbortSignal.timeout(10000) }
    );
    if (!res.ok) return { posts: [], hasMore: false };
    const posts: WpPost[] = await res.json();
    const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
    return { posts, hasMore: totalPages > 1 };
  } catch {
    return { posts: [], hasMore: false };
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();

  const t = await getTranslations("search");

  if (!query) {
    return (
      <MainLayout>
        <article className="flex flex-col gap-4 text-[#002766] p-2">
          <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">{t("title")}</h2>
          <p className="text-sm text-gray-500">{t("emptyQuery")}</p>
        </article>
      </MainLayout>
    );
  }

  const normalizedQuery = query.toLocaleLowerCase();

  const [{ posts, hasMore }, navT, matchedPages] = await Promise.all([
    searchNews(query),
    getTranslations("nav"),
    searchSitePages(query),
  ]);

  const matchedVacancies = vacancies.filter((v) =>
    [v.title, v.department, v.type, v.conditions, ...v.requirements]
      .join(" ")
      .toLocaleLowerCase()
      .includes(normalizedQuery)
  );

  const hasAnyResults = posts.length > 0 || matchedVacancies.length > 0 || matchedPages.length > 0;

  return (
    <MainLayout>
      <article className="flex flex-col gap-6 text-[#002766] p-2">
        <div className="flex flex-col gap-1 border-b-2 border-[#51749E] pb-2">
          <h2 className="text-xl font-bold">{t("title")}</h2>
          <p className="text-sm text-gray-500">{t("resultsFor", { query })}</p>
        </div>

        {!hasAnyResults ? (
          <div className="p-6 text-center rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
            <p className="text-sm text-gray-500">{t("noResults")}</p>
            <p className="text-xs text-gray-400 mt-1">{t("noResultsHint")}</p>
          </div>
        ) : (
          <>
            <section className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-[#002766]">{t("newsTitle")}</h3>
              <NewsSearchResults key={query} query={query} initialPosts={posts} initialHasMore={hasMore} />
            </section>

            <section className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-[#002766]">{t("vacanciesTitle")}</h3>
              {matchedVacancies.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {matchedVacancies.map((v) => (
                    <Link
                      key={v.id}
                      href="/vacancies"
                      className="flex flex-col gap-1 p-4 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea] hover:border-[#0061AA] transition"
                    >
                      <span className="text-sm font-semibold">{v.title}</span>
                      <span className="text-xs text-[#51749E]">{v.department}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">{t("noResults")}</p>
              )}
            </section>

            <section className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-[#002766]">{t("pagesTitle")}</h3>
              {matchedPages.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {matchedPages.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className="p-3 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea] hover:border-[#0061AA] transition text-sm font-medium"
                    >
                      {navT(item.nameKey)}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">{t("noResults")}</p>
              )}
            </section>
          </>
        )}
      </article>
    </MainLayout>
  );
}
