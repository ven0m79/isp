import { MainLayout } from "@app/components/templates";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getTranslations } from "next-intl/server";
import MonographsCatalog, { type MonographRecord } from "./MonographsCatalog";

export default async function Monographs() {
  const t = await getTranslations("monographsPage");
  const catalog = JSON.parse(
    await readFile(path.join(process.cwd(), "public", "publications", "monographs", "catalog.json"), "utf8"),
  ) as MonographRecord[];

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f5f9fc] to-[#dcebf6] p-5 shadow-sm md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("eyebrow")}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-3xl">{t("title")}</h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#294e70]">{t("subtitle")}</p>
        </header>
        <MonographsCatalog catalog={catalog} />
      </article>
    </MainLayout>
  );
}
