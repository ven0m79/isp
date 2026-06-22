import { MainLayout } from "@app/components/templates";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getTranslations } from "next-intl/server";
import ScientificArticlesCatalog, { type ScientificArticleYear } from "./ScientificArticlesCatalog";

type ScientificArticlesData = {
  sourceUrl: string;
  years: ScientificArticleYear[];
};

export default async function ScientificArticlesPage() {
  const [t, catalog] = await Promise.all([
    getTranslations("scientificArticlesPage"),
    readFile(
      path.join(process.cwd(), "public", "publications", "scientific-articles", "catalog.json"),
      "utf8",
    ).then((content) => JSON.parse(content) as ScientificArticlesData),
  ]);
  const recordsCount = catalog.years.reduce(
    (total, year) => total + year.sections.reduce((sum, section) => sum + section.entries.length, 0),
    0,
  );

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("eyebrow")}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">{t("title")}</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#294e70] md:text-base">{t("subtitle")}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#07518F] shadow-sm">
              {t("yearsCount", { count: catalog.years.length })}
            </span>
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#07518F] shadow-sm">
              {t("recordsCount", { count: recordsCount })}
            </span>
          </div>
        </header>

        <ScientificArticlesCatalog years={catalog.years} />
      </article>
    </MainLayout>
  );
}
