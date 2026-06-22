import { MainLayout } from "@app/components/templates";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function QualityPolicy() {
  const t = await getTranslations("qualityPolicyPage");
  const directions = t.raw("directions.items") as string[];
  const implementation = t.raw("implementation.items") as string[];
  const principles = t.raw("principles.items") as string[];

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("eyebrow")}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">{t("title")}</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#294e70] md:text-base">{t("intro")}</p>
        </header>

        <section className="mt-6 rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6">
          <h2 className="text-xl font-bold">{t("directions.title")}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {directions.map((direction, index) => (
              <li key={direction} className="flex gap-3 rounded-lg border border-[#dce7f1] bg-[#f8fbfd] p-4 text-sm leading-6 text-[#294e70]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#07518F] text-xs font-bold text-white">{index + 1}</span>
                {direction}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <section className="rounded-xl bg-[#07518F] p-5 text-white md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#b9d9ec]">{t("mission.title")}</p>
            <p className="mt-3 text-base leading-8 text-[#f0f7fb]">{t("mission.description")}</p>
          </section>

          <section className="rounded-xl border border-[#8fbad6] bg-[#EFF4FB] p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("vision.title")}</p>
            <p className="mt-3 text-base leading-8 text-[#294e70]">{t("vision.description")}</p>
          </section>
        </div>

        <section className="mt-5 rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6">
          <h2 className="text-xl font-bold">{t("implementation.title")}</h2>
          <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("implementation.intro")}</p>
          <ul className="mt-4 space-y-3">
            {implementation.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg bg-[#EFF4FB] p-4 text-sm leading-6 text-[#294e70]">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0061AA]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-5 rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6">
          <h2 className="text-xl font-bold">{t("principles.title")}</h2>
          <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("principles.intro")}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {principles.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-[#dce7f1] p-4 text-sm leading-6 text-[#294e70]">
                <svg aria-hidden="true" className="mt-0.5 shrink-0 text-[#07518F]" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="m6 10 2.5 2.5L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-5 rounded-xl border border-[#8fbad6] bg-gradient-to-r from-[#07518F] to-[#0061AA] p-5 text-white md:p-6">
          <p className="max-w-4xl text-sm leading-7 text-[#f0f7fb]">{t("commitment")}</p>
          <div className="mt-5 border-t border-white/30 pt-4">
            <p className="text-xs uppercase tracking-wide text-[#b9d9ec]">{t("signature.role")}</p>
            <p className="mt-1 font-bold">{t("signature.name")}</p>
          </div>
        </footer>

        <Link href="/qms" className="mt-5 inline-flex rounded-lg border border-[#8fbad6] bg-[#dcebf6] px-4 py-2.5 text-sm font-bold text-[#07518F] transition hover:bg-[#cfe3f1]">
          {t("backToQms")}
        </Link>
      </article>
    </MainLayout>
  );
}
