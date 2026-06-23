"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

export type ScientificArticleEntry = {
  citation: string;
  url: string | null;
};

export type ScientificArticleSection = {
  title: string;
  entries: ScientificArticleEntry[];
};

export type ScientificArticleYear = {
  year: string;
  sections: ScientificArticleSection[];
};

const yearsPageSize = 3;

export default function ScientificArticlesCatalog({ years }: { years: ScientificArticleYear[] }) {
  const t = useTranslations("scientificArticlesPage");
  const [query, setQuery] = useState("");
  const [year, setYear] = useState(years[0]?.year ?? "all");
  const [visibleYearCount, setVisibleYearCount] = useState(yearsPageSize);

  const filteredYears = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return years
      .filter((yearGroup) => year === "all" || yearGroup.year === year)
      .map((yearGroup) => ({
        ...yearGroup,
        sections: yearGroup.sections
          .map((section) => ({
            ...section,
            entries: section.entries.filter((entry) => (
              !normalizedQuery || entry.citation.toLocaleLowerCase().includes(normalizedQuery)
            )),
          }))
          .filter((section) => section.entries.length > 0),
      }))
      .filter((yearGroup) => yearGroup.sections.length > 0);
  }, [query, year, years]);

  const resultsCount = filteredYears.reduce(
    (total, yearGroup) => total + yearGroup.sections.reduce((sum, section) => sum + section.entries.length, 0),
    0,
  );
  const visibleYears = year === "all" ? filteredYears.slice(0, visibleYearCount) : filteredYears;

  return (
    <div className="mt-6">
      <div className="grid gap-3 rounded-xl border border-[#c8d8ea] bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_180px]">
        <label>
          <span className="sr-only">{t("searchLabel")}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleYearCount(yearsPageSize);
            }}
            placeholder={t("searchPlaceholder")}
            className="h-11 w-full rounded-lg border border-[#b8cee2] bg-[#f8fbfd] px-4 text-sm text-[#002766] outline-none transition placeholder:text-gray-500 focus:border-[#1682BF] focus:ring-2 focus:ring-[#1682BF]/20"
          />
        </label>
        <label>
          <span className="sr-only">{t("yearLabel")}</span>
          <select
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
              setVisibleYearCount(yearsPageSize);
            }}
            className="h-11 w-full cursor-pointer rounded-lg border border-[#b8cee2] bg-[#f8fbfd] px-4 text-sm font-semibold text-[#07518F] outline-none transition focus:border-[#1682BF] focus:ring-2 focus:ring-[#1682BF]/20"
          >
            <option value="all">{t("allYears")}</option>
            {years.map((yearGroup) => <option key={yearGroup.year} value={yearGroup.year}>{yearGroup.year}</option>)}
          </select>
        </label>
      </div>

      <p className="my-4 text-sm font-semibold text-[#51749E]">
        {t("results", { count: resultsCount })}
      </p>

      {visibleYears.length > 0 ? (
        <div className="space-y-6">
          {visibleYears.map((yearGroup) => (
            <article key={yearGroup.year} className="rounded-2xl border border-[#b8cee2] bg-[#EFF4FB] p-4 shadow-sm md:p-6">
              <header className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#c8d8ea] pb-4">
                <h2 className="text-2xl font-bold text-[#002766]">{yearGroup.year}</h2>
              </header>

              <div className="space-y-4">
                {yearGroup.sections.map((section) => (
                  <section key={`${yearGroup.year}-${section.title}`} className="rounded-xl border border-[#c8d8ea] bg-white p-4 md:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold uppercase tracking-wide text-[#07518F]">{section.title}</h3>
                      <span className="rounded-full bg-[#dcebf6] px-2.5 py-1 text-xs font-bold text-[#51749E]">
                        {section.entries.length}
                      </span>
                    </div>
                    <ol className="mt-4 space-y-3 pl-5 marker:font-bold marker:text-[#1682BF]">
                      {section.entries.map((entry, index) => (
                        <li key={`${yearGroup.year}-${section.title}-${index}`} className="pl-1 text-sm leading-7 text-[#294e70]">
                          <span className="break-words">{entry.citation}</span>
                        </li>
                      ))}
                    </ol>
                  </section>
                ))}
              </div>
            </article>
          ))}

          {year === "all" && visibleYearCount < filteredYears.length ? (
            <div className="text-center">
              <button
                type="button"
                onClick={() => setVisibleYearCount((count) => count + yearsPageSize)}
                className="rounded-lg border border-[#8fbad6] bg-[#dcebf6] px-5 py-2.5 text-sm font-bold text-[#07518F] transition hover:bg-[#cfe3f1]"
              >
                {t("showMore")}
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="rounded-xl border border-[#c8d8ea] bg-white p-8 text-center text-sm text-gray-600 shadow-sm">
          {t("noResults")}
        </div>
      )}
    </div>
  );
}
