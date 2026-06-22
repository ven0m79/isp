import { MainLayout } from "@app/components/templates";
import { getTranslations } from "next-intl/server";

type Principle = {
  title: string;
  description: string;
};

export default async function AreasOfActivity() {
  const t = await getTranslations("areasOfActivityPage");
  const principles = t.raw("principles") as Principle[];
  const directions = t.raw("directions.items") as string[];

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("eyebrow")}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">{t("title")}</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#294e70] md:text-base">{t("intro")}</p>
        </header>

        <section aria-label={t("principlesLabel")} className="mt-6 grid gap-4 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={index === 1
                ? "rounded-xl bg-[#07518F] p-5 text-white shadow-sm md:p-6"
                : "rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-6"}
            >
              <p className={index === 1
                ? "text-xs font-bold uppercase tracking-[0.14em] text-[#b9d9ec]"
                : "text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]"}
              >
                {principle.title}
              </p>
              <p className={index === 1
                ? "mt-3 text-sm leading-7 text-[#f0f7fb]"
                : "mt-3 text-sm leading-7 text-[#294e70]"}
              >
                {principle.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-5 rounded-xl border border-[#c8d8ea] bg-[#EFF4FB] p-5 md:p-7">
          <h2 className="text-xl font-bold md:text-2xl">{t("directions.title")}</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#294e70]">{t("directions.intro")}</p>

          <ol className="mt-5 grid gap-4 md:grid-cols-2">
            {directions.map((direction, index) => (
              <li key={direction} className="flex gap-4 rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#07518F] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm font-semibold leading-7 text-[#294e70]">{direction}</p>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </MainLayout>
  );
}
