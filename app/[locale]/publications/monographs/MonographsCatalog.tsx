"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

export type MonographRecord = {
  id: string;
  year: string;
  citation: string;
  descriptions: string[];
  authors: string[];
  cover: string | null;
  pdf: string | null;
};

export default function MonographsCatalog({ catalog }: { catalog: MonographRecord[] }) {
  const t = useTranslations("monographsPage");
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const years = useMemo(() => [...new Set(catalog.map((record) => record.year))], [catalog]);
  const filteredCatalog = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return catalog.filter((record) => {
      const matchesYear = year === "all" || record.year === year;
      const searchableText = [record.citation, ...record.descriptions, ...record.authors].join(" ").toLocaleLowerCase();
      return matchesYear && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [catalog, query, year]);

  return (
    <div className="mt-6">
      <div className="grid gap-3 rounded-xl border border-[#c8d8ea] bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_180px]">
        <label>
          <span className="sr-only">{t("searchLabel")}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("searchPlaceholder")}
            className="h-11 w-full rounded-lg border border-[#b8cee2] bg-[#f8fbfd] px-4 text-sm text-[#002766] outline-none transition placeholder:text-gray-500 focus:border-[#1682BF] focus:ring-2 focus:ring-[#1682BF]/20"
          />
        </label>
        <label>
          <span className="sr-only">{t("yearLabel")}</span>
          <select
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="h-11 w-full cursor-pointer rounded-lg border border-[#b8cee2] bg-[#f8fbfd] px-4 text-sm font-semibold text-[#07518F] outline-none transition focus:border-[#1682BF] focus:ring-2 focus:ring-[#1682BF]/20"
          >
            <option value="all">{t("allYears")}</option>
            {years.map((availableYear) => <option key={availableYear} value={availableYear}>{availableYear}</option>)}
          </select>
        </label>
      </div>

      <p className="my-4 text-sm font-semibold text-[#51749E]">{filteredCatalog.length} {t("items")}</p>

      {filteredCatalog.length > 0 ? (
        <div className="grid gap-5 xl:grid-cols-2">
          {filteredCatalog.map((record) => (
            <article key={record.id} className="flow-root overflow-hidden rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm">
              <div className="mb-4 flex shrink-0 items-center justify-center rounded-lg bg-[#EFF4FB] p-3 sm:float-left sm:mb-4 sm:mr-5">
                {record.cover ? (
                  <div className="relative h-[230px] w-[160px] overflow-hidden rounded-md bg-white shadow-md">
                    <Image src={record.cover} alt="" fill sizes="160px" className="object-contain" />
                  </div>
                ) : (
                  <div className="flex h-[230px] w-[160px] items-center justify-center rounded-md border-2 border-dashed border-[#b8cee2] bg-white p-4 text-center text-xs font-semibold text-[#51749E]">
                    {t("noCover")}
                  </div>
                )}
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1682BF]">{record.year}</p>
              <p className="mt-2 break-words text-[15px] font-bold leading-7 text-[#002766]">{record.citation}</p>

              {(record.descriptions.length > 0 || record.authors.length > 0) ? (
                <details className="mt-4 border-t border-[#dce7f1] pt-3">
                  <summary className="cursor-pointer text-sm font-bold text-[#07518F]">{t("details")}</summary>
                  <div className="mt-3 space-y-3">
                    {record.descriptions.map((paragraph, index) => <p key={`${record.id}-description-${index}`} className="text-justify text-sm leading-7 text-gray-700">{paragraph}</p>)}
                    {record.authors.length > 0 ? (
                      <div className="rounded-lg bg-[#EFF4FB] p-4">
                        <h3 className="text-xs font-bold uppercase tracking-wide text-[#51749E]">{t("authors")}</h3>
                        <p className="mt-2 text-sm leading-7 text-gray-700">{record.authors.join(", ")}</p>
                      </div>
                    ) : null}
                  </div>
                </details>
              ) : null}

              <div className="pt-5">
                {record.pdf ? (
                  <a href={record.pdf} target="_blank" rel="noreferrer" className="inline-flex rounded-lg border border-[#8fbad6] bg-[#dcebf6] px-4 py-2 text-sm font-bold text-[#07518F] transition hover:bg-[#cfe3f1]">
                    {t("downloadPdf")}
                  </a>
                ) : (
                  <span className="inline-flex rounded-lg bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-500">{t("pdfUnavailable")}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-[#c8d8ea] bg-white p-8 text-center text-sm text-gray-600 shadow-sm">{t("noResults")}</div>
      )}
    </div>
  );
}
