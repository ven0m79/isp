import { MainLayout } from "@app/components/templates";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

type Responsibility = {
  process: string;
  owner: string;
};

export default async function QMS() {
  const t = await getTranslations("qmsPage");
  const principles = t.raw("principles.items") as string[];
  const responsibilities = t.raw("responsibilities.items") as Responsibility[];
  const documents = t.raw("documentation.items") as string[];

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("eyebrow")}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">{t("title")}</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#294e70] md:text-base">{t("subtitle")}</p>

          <div className="mt-6 flex max-w-3xl items-center gap-4 rounded-xl border border-[#b8cee2] bg-white p-4 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#07518F] text-white">
              <svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="m6 13 4.5 4.5L20 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#002766]">ISO 9001:2015</p>
              <p className="mt-1 text-sm leading-6 text-[#51749E]">{t("certification")}</p>
            </div>
          </div>
        </header>
        <nav aria-label={t("linksLabel")} className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link href="/qms/quality-policy" className="rounded-xl border border-[#8fbad6] bg-[#dcebf6] p-4 text-sm font-bold text-[#07518F] transition hover:bg-[#cfe3f1]">
            {t("qualityPolicyLink")}
          </Link>
          <Link href="/qms/certificates-and-licenses" className="rounded-xl border border-[#8fbad6] bg-[#dcebf6] p-4 text-sm font-bold text-[#07518F] transition hover:bg-[#cfe3f1]">
            {t("certificatesLink")}
          </Link>
        </nav>
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6">
            <h2 className="text-xl font-bold">{t("scope.title")}</h2>
            <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("scope.description")}</p>
          </section>

          <section className="rounded-xl border border-[#c8d8ea] bg-[#EFF4FB] p-5 md:p-6">
            <h2 className="text-xl font-bold">{t("leadership.title")}</h2>
            <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("leadership.description")}</p>
          </section>
        </div>

        <section className="mt-5 rounded-xl border border-[#c8d8ea] bg-[#EFF4FB] p-5 md:p-6">
          <h2 className="text-xl font-bold">{t("principles.title")}</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {principles.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg bg-white p-4 text-sm leading-6 text-[#294e70]">
                <span aria-hidden="true" className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dcebf6] text-xs font-bold text-[#07518F]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-5 rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6">
          <h2 className="text-xl font-bold">{t("responsibilities.title")}</h2>
          <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("responsibilities.intro")}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {responsibilities.map((item) => (
              <div key={item.process} className="rounded-lg border border-[#dce7f1] p-4">
                <h3 className="text-sm font-bold text-[#07518F]">{item.process}</h3>
                <p className="mt-2 text-sm leading-6 text-[#294e70]">{item.owner}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6">
          <h2 className="text-xl font-bold">{t("documentation.title")}</h2>
          <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("documentation.intro")}</p>
          <ol className="mt-4 grid gap-3 md:grid-cols-2">
            {documents.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-lg border border-[#dce7f1] p-4 text-sm leading-6 text-[#294e70]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#07518F] text-xs font-bold text-white">{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </section>
      </article>
    </MainLayout>
  );
}
