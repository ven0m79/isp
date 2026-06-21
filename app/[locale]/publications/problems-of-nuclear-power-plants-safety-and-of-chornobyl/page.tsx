import { MainLayout } from "@app/components/templates";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getLocale, getTranslations } from "next-intl/server";
import EnglishJournalContent from "./EnglishJournalContent";
import JournalTabs from "./JournalTabs";

export default async function ProblemsJournal() {
  const locale = await getLocale();

  if (locale === "en") {
    const content = await readFile(
      path.join(process.cwd(), "public", "publications", "problems-journal", "about-journal-en.txt"),
      "utf8",
    );

    return (
      <MainLayout>
        <EnglishJournalContent content={content} />
      </MainLayout>
    );
  }

  const t = await getTranslations("problemsJournal");

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-xl bg-gradient-to-r from-[#07518F] to-[#1682BF] p-5 text-white shadow-sm md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#b9daf0]">{t("eyebrow")}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-3xl">{t("title")}</h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#e5f2fa]">{t("subtitle")}</p>
        </header>
        <JournalTabs />
      </article>
    </MainLayout>
  );
}
