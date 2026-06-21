"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

type TabId = "about" | "review" | "authors" | "archive";

type ContentSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type MetadataItem = {
  label: string;
  value: string;
};

type IssueSummary = {
  key: string;
  number: string;
  part?: string;
  year: string;
  doi?: string;
};

type IssueArticle = {
  id: string;
  title: string;
  authorsPages: string;
  details: string[];
  pdf: string | null;
  doi?: string;
  sourceUnavailable?: boolean;
};

type IssueData = Pick<IssueSummary, "key" | "number" | "part" | "year"> & {
  articles: IssueArticle[];
};

const tabs: Array<{ id: TabId; image: string; width: number }> = [
  { id: "about", image: "journal-overview.webp", width: 100 },
  { id: "review", image: "peer-review.webp", width: 116 },
  { id: "authors", image: "author-guidelines.webp", width: 159 },
  { id: "archive", image: "issue-archive.webp", width: 110 },
];

const issueEntries: Array<Omit<IssueSummary, "key">> = [
  { number: "32", year: "2019", doi: "10.31717/1813-3584.18.32" },
  { number: "31", year: "2018", doi: "10.31717/1813-3584.18.31" },
  { number: "30", year: "2018", doi: "10.31717/1813-3584.18.30" },
  { number: "29", year: "2017" }, { number: "28", year: "2017" },
  { number: "27", year: "2016" }, { number: "26", year: "2016" },
  { number: "25", year: "2015" }, { number: "24", year: "2015" },
  { number: "23", year: "2014" }, { number: "22", year: "2014" },
  { number: "21", year: "2013" }, { number: "20", year: "2013" },
  { number: "19", year: "2012" }, { number: "18", year: "2012" },
  { number: "17", year: "2011" }, { number: "16", year: "2011" },
  { number: "15", year: "2011" }, { number: "14", year: "2010" },
  { number: "13", year: "2010" }, { number: "12", year: "2009" },
  { number: "11", year: "2009" }, { number: "10", year: "2008" },
  { number: "9", year: "2008" }, { number: "8", year: "2007" },
  { number: "7", year: "2007" }, { number: "6", year: "2006" },
  { number: "5", year: "2006" }, { number: "4", year: "2006" },
  { number: "3", part: "2", year: "2005" }, { number: "3", part: "1", year: "2005" },
  { number: "2", year: "2005" }, { number: "1", year: "2004" },
];

const issues: IssueSummary[] = issueEntries.map((issue) => ({
  ...issue,
  key: issue.part ? `${issue.number}-${issue.part}` : issue.number,
}));

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-gray-700">
          <span aria-hidden="true" className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#1682BF]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Sections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="mb-3 border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">{section.title}</h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mb-3 text-justify text-sm leading-7 text-gray-700">{paragraph}</p>)}
          {section.items ? <BulletList items={section.items} /> : null}
        </section>
      ))}
    </div>
  );
}

export default function JournalTabs() {
  const t = useTranslations("problemsJournal");
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const [selectedIssue, setSelectedIssue] = useState<IssueData | null>(null);
  const [issueLoading, setIssueLoading] = useState(false);
  const [issueError, setIssueError] = useState(false);
  const metadata = t.raw("about.metadata") as MetadataItem[];
  const aboutSections = t.raw("about.sections") as ContentSection[];
  const reviewSections = t.raw("review.sections") as ContentSection[];
  const authorSections = t.raw("authors.sections") as ContentSection[];

  const openIssue = async (issue: IssueSummary) => {
    setIssueLoading(true);
    setIssueError(false);
    setSelectedIssue(null);

    try {
      const response = await fetch(`/publications/problems-journal/issues/issue-${issue.key}/index.json`);
      if (!response.ok) throw new Error(`Issue manifest returned ${response.status}`);
      setSelectedIssue(await response.json() as IssueData);
    } catch {
      setIssueError(true);
    } finally {
      setIssueLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <div role="tablist" aria-label={t("tabsLabel")} className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`journal-tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={activeTab === tab.id}
            aria-controls={`journal-panel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`flex min-h-14 items-center justify-center gap-3 rounded-lg border px-4 py-3 text-sm font-bold transition ${activeTab === tab.id ? "border-[#8fbad6] bg-[#dcebf6] text-[#07518F] shadow-sm" : "border-[#c8d8ea] bg-white text-[#07518F] hover:bg-[#EFF4FB]"}`}
          >
            <span>{t(`tabs.${tab.id}`)}</span>
          </button>
        ))}
      </div>

      <div id={`journal-panel-${activeTab}`} role="tabpanel" aria-labelledby={`journal-tab-${activeTab}`} className="mt-4 rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        {activeTab === "about" ? (
          <div className="space-y-7">
            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {metadata.map((item) => <div key={item.label} className="rounded-lg bg-[#EFF4FB] p-4"><dt className="text-xs font-bold uppercase tracking-wide text-[#51749E]">{item.label}</dt><dd className="mt-1 text-sm leading-6 text-[#002766]">{item.value}</dd></div>)}
            </dl>
            <p className="inline-flex rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] px-4 py-2 text-sm font-bold text-[#07518F]">DOI: 10.31717/1813-3584</p>
            <Sections sections={aboutSections} />
          </div>
        ) : null}

        {activeTab === "review" ? (
          <div className="space-y-7">
            <Sections sections={reviewSections} />
            <a href="/publications/problems-journal/reviewer-form.docx" className="inline-flex rounded-lg border border-[#8fbad6] bg-[#dcebf6] px-4 py-2 text-sm font-bold text-[#07518F] hover:bg-[#cfe3f1]">{t("review.downloadForm")}</a>
          </div>
        ) : null}

        {activeTab === "authors" ? (
          <div className="space-y-7">
            <div className="flex flex-wrap gap-3">
              <a href="/publications/problems-journal/publication-ethics-uk.pdf" className="rounded-lg border border-[#8fbad6] bg-[#dcebf6] px-4 py-2 text-sm font-bold text-[#07518F] hover:bg-[#cfe3f1]">{t("authors.ethicsUk")}</a>
              <a href="/publications/problems-journal/publication-ethics-en.pdf" className="rounded-lg border border-[#07518F] px-4 py-2 text-sm font-bold text-[#07518F] hover:bg-[#EFF4FB]">{t("authors.ethicsEn")}</a>
            </div>
            <Sections sections={authorSections} />
          </div>
        ) : null}

        {activeTab === "archive" ? (
          <div>
            {selectedIssue ? (
              <div>
                <button type="button" onClick={() => setSelectedIssue(null)} className="mb-5 rounded-lg border border-[#07518F] px-4 py-2 text-sm font-bold text-[#07518F] hover:bg-[#EFF4FB]">{t("archive.back")}</button>
                <div className="mb-6 border-b border-[#c8d8ea] pb-4">
                  <h2 className="text-2xl font-bold text-[#002766]">{selectedIssue.part ? t("archive.issuePart", { number: selectedIssue.number, part: selectedIssue.part }) : t("archive.issue", { number: selectedIssue.number })}</h2>
                  <p className="mt-1 text-sm text-gray-600">{selectedIssue.year} · {t("archive.articlesCount", { count: selectedIssue.articles.length })}</p>
                </div>
                <div className="space-y-4">
                  {selectedIssue.articles.map((article) => (
                    <article key={article.id} className="rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] p-4 md:p-5">
                      <h3 className="font-bold leading-6 text-[#002766]">{article.title}</h3>
                      {article.authorsPages ? <p className="mt-2 text-sm font-semibold leading-6 text-[#51749E]">{article.authorsPages}</p> : null}
                      {article.details.length > 0 ? <details className="mt-3"><summary className="cursor-pointer text-sm font-bold text-[#07518F]">{t("archive.details")}</summary><div className="mt-3 space-y-2">{article.details.map((detail) => <p key={detail} className="text-justify text-sm leading-7 text-gray-700">{detail}</p>)}</div></details> : null}
                      <div className="mt-4 flex flex-wrap gap-3">
                        {article.pdf ? <a href={article.pdf} target="_blank" rel="noreferrer" className="rounded-lg border border-[#8fbad6] bg-[#dcebf6] px-4 py-2 text-xs font-bold text-[#07518F] hover:bg-[#cfe3f1]">{t("archive.downloadPdf")}</a> : <span className="rounded-lg bg-gray-200 px-4 py-2 text-xs font-semibold text-gray-600">{t("archive.pdfUnavailable")}</span>}
                        {article.doi ? <span className="rounded-lg border border-[#07518F] px-4 py-2 text-xs font-bold text-[#07518F]">DOI: {article.doi}</span> : null}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <p className="mb-5 text-sm leading-7 text-gray-700">{t("archive.intro")}</p>
                {issueLoading ? <p className="rounded-lg bg-[#EFF4FB] p-5 text-center text-sm font-semibold text-[#07518F]">{t("archive.loading")}</p> : null}
                {issueError ? <p className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{t("archive.loadError")}</p> : null}
                {!issueLoading ? <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {issues.map((issue) => (
                    <article key={issue.key} className="rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] p-4 transition hover:border-[#07518F] hover:shadow-sm">
                      <button type="button" onClick={() => void openIssue(issue)} className="block h-full w-full cursor-pointer text-left">
                        <h2 className="font-bold text-[#002766]">{issue.part ? t("archive.issuePart", { number: issue.number, part: issue.part }) : t("archive.issue", { number: issue.number })}</h2>
                        <p className="mt-1 text-sm text-gray-600">{issue.year}</p>
                        {issue.doi ? <p className="mt-3 text-xs font-bold text-[#07518F]">DOI: {issue.doi}</p> : null}
                      </button>
                    </article>
                  ))}
                </div> : null}
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
