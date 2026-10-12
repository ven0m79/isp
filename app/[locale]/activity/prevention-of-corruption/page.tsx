import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MainLayout } from "@app/components/templates";

const assets = "/activity/prevention-of-corruption";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("corruptionPage");
  return { title: t("title"), description: t("intro") };
}

export default async function PreventionOfCorruption() {
  const t = await getTranslations("corruptionPage");
  const sectionClass = "rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-6";
  const headingClass = "border-l-4 border-[#0061AA] pl-4 text-xl font-bold";
  const linkClass = "flex items-center justify-between gap-4 rounded-lg border border-[#c8d8ea] bg-[#f4f9fc] p-4 font-semibold text-[#07518F] transition-colors hover:bg-[#dcebf6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0061AA]";

  return (
    <MainLayout>
      <article className="flex flex-col gap-5 p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <h1 className="text-2xl font-bold leading-tight md:text-3xl">{t("title")}</h1>
          <p className="mt-5 text-justify indent-8 text-base leading-8 text-[#294e70]">{t("intro")}</p>
        </header>

        <section id="report" className={`${sectionClass} scroll-mt-24`}>
          <h2 className={headingClass}>{t("reportTitle")}</h2>
          <Image src={`${assets}/images/stop-corruption.webp`} alt={t("stopAlt")} width={500} height={150}
            className="mx-auto mt-6 h-auto max-w-full rounded-lg" />
          <p className="mt-5 text-justify indent-8 text-base leading-8 text-[#294e70]">{t("requirements")}</p>
          <p className="mt-4 text-justify indent-8 text-base leading-8 text-[#294e70]">{t("review")}</p>
          <div className="mt-5 rounded-lg border border-[#8fbad6] bg-[#EFF4FB] p-4">
            <p className="text-sm font-semibold">{t("emailLabel")}</p>
            <a href="mailto:a.corruption@ispnpp.kiev.ua" className="mt-2 inline-block break-all text-lg font-bold text-[#07518F] underline underline-offset-4 hover:text-[#0061AA]">
              a.corruption@ispnpp.kiev.ua
            </a>
          </div>
          <a href={`${assets}/documents/corruption-report-template.zip`} download className={`${linkClass} mt-4`}>
            <span>{t("template")}</span>
            <span className="shrink-0 text-xs">{t("templateFormat")}</span>
          </a>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>{t("legislationTitle")}</h2>
          <div className="mt-5 grid gap-3">
            {[
              { key: "strategy", href: "https://zakon.rada.gov.ua/laws/show/1699-18" },
              { key: "resolution", href: "https://zakon.rada.gov.ua/laws/show/265-2015-%D0%BF" },
            ].map(({ key, href }) => (
              <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <span>{t(key)}<span className="mt-2 block text-xs font-normal text-[#51749E]">{t("officialSource")}</span></span>
                <span aria-hidden="true" className="shrink-0">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>{t("programTitle")}</h2>
          <div className="mt-5 grid gap-3">
            {[
              { key: "order", file: "anti-corruption-order" },
              { key: "program", file: "anti-corruption-program" },
            ].map(({ key, file }) => (
              <a key={key} href={`${assets}/documents/${file}.pdf`} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <span>{t(key)}</span>
                <span className="shrink-0 rounded bg-[#07518F] px-2 py-1 text-xs font-bold text-white">PDF</span>
              </a>
            ))}
          </div>
          <a href="#report" className="mt-6 block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0061AA]">
            <Image src={`${assets}/images/anti-corruption-header.webp`} alt={t("bannerAlt")} width={596} height={212}
              className="mx-auto h-auto max-w-full rounded-lg" />
          </a>
        </section>
      </article>
    </MainLayout>
  );
}
