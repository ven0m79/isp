import { MainLayout } from "@app/components/templates";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

type Fact = {
  label: string;
  value: string;
};

const journalUrl = "https://npe.kiev.ua/";

export default async function NuclearPowerAndEnvironment() {
  const [locale, t] = await Promise.all([
    getLocale(),
    getTranslations("nuclearPowerJournal"),
  ]);
  const archiveUrl = `${journalUrl}${locale === "uk" ? "uk/" : ""}archives/`;
  const facts = t.raw("facts") as Fact[];
  const scope = t.raw("scope.items") as string[];
  const founders = t.raw("founders.items") as string[];

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="overflow-hidden rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] shadow-sm">
          <div className="grid gap-6 p-5 md:grid-cols-[1fr_180px] md:items-center md:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">
                {t("eyebrow")}
              </p>
              <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">
                {t("title")}
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#294e70] md:text-base">
                {t("subtitle")}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={journalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#07518F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0061AA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07518F]"
                >
                  {t("officialSite")}
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={archiveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-lg border border-[#8fbad6] bg-white px-5 py-3 text-sm font-bold text-[#07518F] transition hover:bg-[#EFF4FB]"
                >
                  {t("archive")}
                </a>
              </div>
              <p className="mt-3 text-xs text-[#51749E]">{t("officialSiteHint")}</p>
            </div>

            <div className="mx-auto rounded-xl border border-white/80 bg-white p-3 shadow-md">
              <Image
                src="/titul-npe.webp"
                width={150}
                height={198}
                alt={t("coverAlt")}
                className="h-auto w-[150px]"
                priority
              />
            </div>
          </div>
        </header>

        <section aria-label={t("factsLabel")} className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-[#c8d8ea] bg-white p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-[#51749E]">{fact.label}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#002766]">{fact.value}</p>
            </div>
          ))}
        </section>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6">
            <h2 className="text-xl font-bold">{t("about.title")}</h2>
            <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("about.description")}</p>
            <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("about.purpose")}</p>
          </section>

          <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6">
            <h2 className="text-lg font-bold">{t("status.title")}</h2>
            <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("status.description")}</p>
            <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("status.cluster")}</p>
          </section>
        </div>

        <div className="mt-5 grid items-stretch gap-4 lg:grid-cols-3">
          <section className="rounded-xl border border-[#c8d8ea] bg-[#EFF4FB] p-5">
            <h2 className="text-lg font-bold">{t("scope.title")}</h2>
            <ul className="mt-3 grid gap-2.5">
              {scope.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-5 text-[#294e70]">
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0061AA]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-[#c8d8ea] bg-white p-5">
            <h2 className="text-lg font-bold">{t("founders.title")}</h2>
            <ul className="mt-3 space-y-2.5">
              {founders.map((founder) => (
                <li key={founder} className="border-l-2 border-[#8fbad6] py-0.5 pl-3 text-sm leading-5 text-[#294e70]">
                  {founder}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl bg-[#07518F] p-5 text-white">
            <h2 className="text-lg font-bold">{t("access.title")}</h2>
            <p className="mt-3 text-sm leading-6 text-[#e7f2fa]">{t("access.description")}</p>
            <p className="mt-4 text-xs font-semibold uppercase leading-5 tracking-wide text-[#b9d9ec]">
              {t("access.indexing")}
            </p>
          </section>
        </div>
      </article>
    </MainLayout>
  );
}
