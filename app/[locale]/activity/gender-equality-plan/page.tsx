import { MainLayout } from "@app/components/templates";
import { ArrowDownTrayIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { getTranslations } from "next-intl/server";

const pdfPath = "/activity/gender-equality-plan/gender-equality-plan.pdf";

export default async function GenderEqualityPlan() {
  const t = await getTranslations("genderEqualityPage");
  const principles = t.raw("principles") as string[];
  const groups = t.raw("scope.groups") as string[];

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("eyebrow")}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">{t("title")}</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#294e70] md:text-base">{t("intro")}</p>
        </header>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6">
            <h2 className="text-xl font-bold">{t("purpose.title")}</h2>
            <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("purpose.description")}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <li key={principle} className="flex gap-3 rounded-lg bg-[#EFF4FB] p-4 text-sm leading-6 text-[#294e70]">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0061AA]" />
                  {principle}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-[#8fbad6] bg-[#EFF4FB] p-5 md:p-6">
            <h2 className="text-xl font-bold">{t("scope.title")}</h2>
            <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("scope.description")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {groups.map((group) => (
                <span key={group} className="rounded-full border border-[#8fbad6] bg-white px-3 py-1.5 text-xs font-bold text-[#07518F]">
                  {group}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-5 overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm">
          <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#07518F] text-white">
                <DocumentTextIcon className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-bold">{t("document.title")}</h2>
                <p className="mt-1 text-sm leading-6 text-[#51749E]">{t("document.description")}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={pdfPath} target="_blank" rel="noreferrer" className="rounded-lg border border-[#8fbad6] bg-[#EFF4FB] px-4 py-2.5 text-sm font-bold text-[#07518F] transition hover:bg-[#dcebf6]">
                {t("document.open")}
              </a>
              <a href={pdfPath} download className="inline-flex items-center gap-2 rounded-lg bg-[#07518F] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0061AA]">
                <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                {t("document.download")}
              </a>
            </div>
          </div>
        </section>
      </article>
    </MainLayout>
  );
}
