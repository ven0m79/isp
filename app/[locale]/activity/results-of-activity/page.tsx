import { MainLayout } from "@app/components/templates";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { getTranslations } from "next-intl/server";

type ArchiveDocument = {
  file: string;
  kind: "report" | "presentation";
  period: string;
  size: string;
  multiYear?: boolean;
};

type YearGroup = {
  year: string;
  documents: ArchiveDocument[];
};

const archivePath = "/activity/results-of-activity";

const yearGroups: YearGroup[] = [
  { year: "2025", documents: [{ file: "report-2025.pdf", kind: "report", period: "2025", size: "1.9 MB" }] },
  { year: "2024", documents: [{ file: "report-2024.pdf", kind: "report", period: "2024", size: "1.6 MB" }] },
  {
    year: "2023",
    documents: [
      { file: "report-2023.pdf", kind: "report", period: "2023", size: "1.8 MB" },
      { file: "presentation-2023.pdf", kind: "presentation", period: "2023", size: "3.1 MB" },
    ],
  },
  {
    year: "2022",
    documents: [
      { file: "report-2022.pdf", kind: "report", period: "2022", size: "1.5 MB" },
      { file: "presentation-2022.pdf", kind: "presentation", period: "2022", size: "2.3 MB" },
      { file: "report-2017-2022.pdf", kind: "report", period: "2017-2022", size: "1 MB", multiYear: true },
      { file: "presentation-2017-2022.pdf", kind: "presentation", period: "2017-2022", size: "8 MB", multiYear: true },
    ],
  },
  { year: "2021", documents: [{ file: "report-2021.pdf", kind: "report", period: "2021", size: "1.4 MB" }] },
  { year: "2020", documents: [{ file: "report-2020.pdf", kind: "report", period: "2020", size: "862 KB" }] },
  { year: "2019", documents: [{ file: "report-2019.pdf", kind: "report", period: "2019", size: "669 KB" }] },
  { year: "2018", documents: [{ file: "report-2018.pdf", kind: "report", period: "2018", size: "539 KB" }] },
  { year: "2017", documents: [{ file: "report-2017.pdf", kind: "report", period: "2017", size: "464 KB" }] },
  {
    year: "2016",
    documents: [
      { file: "report-2016.pdf", kind: "report", period: "2016", size: "294 KB" },
      { file: "report-2012-2016.pdf", kind: "report", period: "2012-2016", size: "507 KB", multiYear: true },
    ],
  },
  { year: "2015", documents: [{ file: "report-2015.pdf", kind: "report", period: "2015", size: "240 KB" }] },
  { year: "2014", documents: [{ file: "report-2014.pdf", kind: "report", period: "2014", size: "307 KB" }] },
  { year: "2013", documents: [{ file: "report-2013.pdf", kind: "report", period: "2013", size: "259 KB" }] },
  { year: "2012", documents: [{ file: "report-2012.pdf", kind: "report", period: "2012", size: "277 KB" }] },
];

export default async function ResultsOfActivity() {
  const t = await getTranslations("resultsOfActivityPage");

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#002766] via-[#07518F] to-[#0873b9] p-6 text-white shadow-lg md:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b9dff4]">{t("eyebrow")}</p>
              <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">{t("title")}</h1>
              <p className="mt-4 text-sm leading-7 text-[#e1f1fa] md:text-base">{t("intro")}</p>
            </div>
            <div className="grid shrink-0 grid-cols-2 gap-2 sm:gap-3">
              <div className="rounded-xl bg-white/10 px-3 py-3 text-center backdrop-blur-sm sm:px-5">
                <strong className="block text-2xl">19</strong>
                <span className="text-[11px] text-[#d7ebf7]">{t("stats.documents")}</span>
              </div>
              <div className="rounded-xl bg-white/10 px-3 py-3 text-center backdrop-blur-sm sm:px-5">
                <strong className="block text-2xl">14</strong>
                <span className="text-[11px] text-[#d7ebf7]">{t("stats.years")}</span>
              </div>
            </div>
          </div>
        </header>

        <nav aria-label={t("yearNavigation")} className="mt-5 flex flex-wrap gap-2 rounded-xl border border-[#c8d8ea] bg-[#f6f9fc] p-3">
          <span className="mr-1 self-center text-xs font-bold uppercase tracking-wider text-[#51749E]">{t("years")}</span>
          {yearGroups.map(({ year }) => (
            <a key={year} href={`#year-${year}`} className="rounded-md border border-[#c8d8ea] bg-white px-2.5 py-1 text-xs font-bold text-[#07518F] transition hover:border-[#0061AA] hover:bg-[#e6f2f9]">
              {year}
            </a>
          ))}
        </nav>

        <div className="mt-6 space-y-5">
          {yearGroups.map(({ year, documents }) => (
            <section key={year} id={`year-${year}`} className="scroll-mt-24 overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-[#dce7f1] bg-[#EFF4FB] px-5 py-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-[#07518F] px-3 py-1.5 text-base font-bold text-white">{year}</span>
                  <h2 className="font-bold">{t("yearHeading", { year })}</h2>
                </div>
                <span className="text-xs font-medium text-[#51749E]">{t("documentCount", { count: documents.length })}</span>
              </div>

              <div className="grid gap-px bg-[#dce7f1] md:grid-cols-2">
                {documents.map((document) => {
                  const href = `${archivePath}/${document.file}`;
                  const isPresentation = document.kind === "presentation";
                  const title = document.multiYear
                    ? t(isPresentation ? "titles.multiYearPresentation" : "titles.multiYearReport", { period: document.period })
                    : t(isPresentation ? "titles.presentation" : "titles.report", { year: document.period });

                  return (
                    <div key={document.file} className="flex flex-col bg-white p-5 transition hover:bg-[#fbfdff]">
                      <div className="flex items-start gap-4">
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isPresentation ? "bg-[#e7f5ee] text-[#18794e]" : "bg-[#e6f2f9] text-[#07518F]"}`}>
                          {isPresentation ? <PresentationChartLineIcon className="h-6 w-6" aria-hidden="true" /> : <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />}
                        </span>
                        <div className="min-w-0">
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${isPresentation ? "bg-[#e7f5ee] text-[#18794e]" : "bg-[#e6f2f9] text-[#07518F]"}`}>
                            {t(`types.${document.kind}`)}
                          </span>
                          <h3 className="mt-2 text-sm font-bold leading-6 md:text-base">{title}</h3>
                          <p className="mt-1 text-xs text-[#6b8297]">PDF · {document.size}</p>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2 pl-0 sm:pl-15">
                        <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#8fbad6] bg-[#f6f9fc] px-3 py-2 text-xs font-bold text-[#07518F] transition hover:bg-[#dcebf6]">
                          <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                          {t("open")}
                        </a>
                        <a href={href} download className="inline-flex items-center gap-2 rounded-lg bg-[#07518F] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#0061AA]">
                          <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
                          {t("download")}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

      </article>
    </MainLayout>
  );
}
