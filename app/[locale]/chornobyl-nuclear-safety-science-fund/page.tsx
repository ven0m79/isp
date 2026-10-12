import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MainLayout } from "@app/components/templates";

const documentRoot = "/chornobyl-nuclear-safety-science-fund";
const statementFiles = [
  "statement-uah-2022-2024",
  "statement-currency-2022-2024",
  "statement-2021-2022-september",
  "statement-2021-2022-december-1",
  "statement-2021-2022-december-2",
  "statement-may-2022-july-2023",
  "statement-usd-april-2022-july-2023",
];
const foreignBank = 'JSC CB “PRIVATBANK”, 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE';
const foreignRecipient = 'CO CF “CHORNOBYL NUCLEAR SAFETY SCIENCE FUND”';
const accounts = [
  { currency: "uah", iban: "UA733052990000026001026708582", correspondents: [] },
  {
    currency: "usd", iban: "UA533052990000026004026714175",
    correspondents: [
      { account: "001-1-000080", swift: "CHASUS33", bank: "JP Morgan Chase Bank, New York, USA" },
      { account: "890-0085-754", swift: "IRVT US 3N", bank: "The Bank of New York Mellon, New York, USA" },
    ],
  },
  {
    currency: "eur", iban: "UA203052990000026004016709510",
    correspondents: [
      { account: "400886700401", swift: "COBADEFF", bank: "Commerzbank AG, Frankfurt am Main, Germany" },
      { account: "6231605145", swift: "CHASDEFX", bank: "J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY" },
    ],
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("fundPage");
  return { title: t("title"), description: t("subtitle") };
}

function DocumentLink({ file, label }: { file: string; label: string }) {
  return (
    <a href={`${documentRoot}/${file}.pdf`} target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-between gap-4 rounded-lg border border-[#c8d8ea] bg-[#f4f9fc] p-4 font-semibold text-[#07518F] transition-colors hover:bg-[#dcebf6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0061AA]">
      <span>{label}</span>
      <span className="shrink-0 rounded bg-[#07518F] px-2 py-1 text-xs font-bold text-white">PDF</span>
    </a>
  );
}

export default async function FundPage() {
  const t = await getTranslations("fundPage");
  const activities = t.raw("activities") as string[];
  const statements = t.raw("statements") as string[];
  const sectionClass = "rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-6";
  const headingClass = "border-l-4 border-[#0061AA] pl-4 text-xl font-bold";
  const renderDetail = (label: string, value: string) => (
    <div key={label} className="min-w-0">
      <dt className="text-sm text-[#51749E]">{label}</dt>
      <dd className="mt-1 break-words font-medium [overflow-wrap:anywhere]">{value}</dd>
    </div>
  );

  return (
    <MainLayout>
      <article className="flex flex-col gap-5 p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <Image src="/fond-nanu.webp" alt="" width={200} height={87} className="mb-5 h-auto max-w-full" />
          <h1 className="text-2xl font-bold leading-tight md:text-3xl">{t("title")}</h1>
          <p className="mt-4 text-base leading-7 text-[#294e70]">{t("subtitle")}</p>
          <nav aria-label={t("documentsTitle")} className="mt-5 flex flex-wrap gap-3">
            {[["charter", t("charter")], ["report-2022-2024", t("report")]].map(([file, label]) => (
              <a key={file} href={`${documentRoot}/${file}.pdf`} target="_blank" rel="noopener noreferrer"
                className="rounded-lg bg-[#07518F] px-4 py-3 text-sm font-bold text-white hover:bg-[#0061AA]">{label} · PDF</a>
            ))}
            <a href="#statements" className="rounded-lg border border-[#8fbad6] bg-white px-4 py-3 text-sm font-bold text-[#07518F] hover:bg-[#dcebf6]">{t("statementsTitle")}</a>
          </nav>
        </header>

        <section className={sectionClass}>
          <h2 className={headingClass}>{t("about")}</h2>
          <p className="mt-5 whitespace-pre-line text-base leading-8 text-[#294e70]">{t("intro")}</p>
          <h3 className="mt-7 text-lg font-bold">{t("activitiesTitle")}</h3>
          <ul className="mt-4 list-disc space-y-4 pl-5 text-base leading-7 text-[#294e70]">
            {activities.map((activity) => <li key={activity}>{activity}</li>)}
          </ul>
        </section>

        <section id="statements" className={`${sectionClass} scroll-mt-24`}>
          <h2 className={headingClass}>{t("statementsTitle")}</h2>
          <div className="mt-5 grid gap-3">
            {statementFiles.map((file, index) => <DocumentLink key={file} file={file} label={statements[index]} />)}
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>{t("bankTitle")}</h2>
          <div className="mt-5 grid gap-5">
            {accounts.map(({ currency, iban, correspondents }) => (
              <section key={currency} className="min-w-0 rounded-xl border border-[#c8d8ea] bg-[#f4f9fc] p-4 md:p-5">
                <h3 className="mb-5 text-lg font-bold">{t(currency)}</h3>
                <dl className="grid gap-4 text-sm leading-6 md:text-base">
                  {renderDetail(t("recipient"), currency === "uah" ? "БО БФ ЧОРНОБИЛЬСЬКИЙ НАУКОВИЙ ФОНД ЯДЕРНОЇ БЕЗПЕКИ" : foreignRecipient)}
                  {currency === "uah" && renderDetail(t("code"), "44684536")}
                  {renderDetail(t("iban"), iban)}
                  {renderDetail(t("bank"), currency === "uah" ? t("uahBank") : foreignBank)}
                  {currency !== "uah" && renderDetail(t("swift"), "PBANUA2X")}
                  {currency !== "uah" && renderDetail(t("address"), t("companyAddress"))}
                </dl>
                {correspondents.length > 0 && (
                  <div className="mt-6 border-t border-[#c8d8ea] pt-5">
                    <h4 className="font-bold">{t("correspondents")}</h4>
                    {correspondents.map((correspondent, index) => (
                      <div key={correspondent.account}>
                        {index > 0 && <p className="mt-4 font-semibold text-[#51749E]">{t("or")}</p>}
                        <dl className="mt-4 grid gap-3 text-sm leading-6 md:text-base">
                          {renderDetail(t("bank"), correspondent.bank)}
                          {renderDetail(t("account"), correspondent.account)}
                          {renderDetail(t("correspondentSwift"), correspondent.swift)}
                        </dl>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>
      </article>
    </MainLayout>
  );
}
