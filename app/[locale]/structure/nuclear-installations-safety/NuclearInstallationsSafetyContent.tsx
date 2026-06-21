import { getTranslations } from "next-intl/server";

type Sector = {
  title: string;
  head: string;
  paragraphs: string[];
  results?: string[];
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-slate-700">
          <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#1682BF]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function NuclearInstallationsSafetyContent() {
  const t = await getTranslations("structure.nuclearInstallationsSafety");
  const sectors = t.raw("sectors") as Sector[];

  return (
    <div className="mt-6 space-y-6 text-slate-800">
      <section className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <div
          className="flex min-h-72 items-center justify-center rounded-xl border-2 border-dashed border-[#b8cee2] bg-[#f5f9fc] p-5 text-center text-sm font-semibold text-[#52728d]"
          aria-label={t("portraitPlaceholder")}
        >
          {t("portraitPlaceholder")}
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-[#07518F]">{t("structureTitle")}</h2>
            <BulletList items={t.raw("structure") as string[]} />
          </div>

          <div className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-[#07518F]">{t("activitiesTitle")}</h2>
            <BulletList items={t.raw("activities") as string[]} />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-[#07518F]">{t("resultsTitle")}</h2>
        <div className="space-y-5">
          {sectors.map((sector) => (
            <article key={sector.title} className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-6">
              <h3 className="text-xl font-bold text-[#07518F]">{sector.title}</h3>
              <p className="mt-2 border-l-4 border-[#1682BF] bg-[#f1f7fb] px-4 py-3 font-semibold text-[#234b68]">
                {sector.head}
              </p>
              <div className="mt-5 space-y-4 leading-relaxed text-slate-700">
                {sector.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {sector.results && <div className="mt-5"><BulletList items={sector.results} /></div>}
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
