import { MainLayout } from "@app/components/templates";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  getStructureUnit,
  localizedRoute,
  StructureLocale,
} from "./structureData";

export default async function StructureUnitPage({ unitId }: { unitId: string }) {
  const locale = (await getLocale()) as StructureLocale;
  const t = await getTranslations("structure");
  const unit = getStructureUnit(unitId);

  if (!unit) notFound();

  const parent = unit.parent ? getStructureUnit(unit.parent) : undefined;
  const title = t(`units.${unit.id}.title`);

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <div className="overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm">
          <svg viewBox="0 0 900 210" role="img" aria-labelledby="unit-title" className="h-auto w-full min-w-[620px]">
            <defs>
              <linearGradient id="unit-header" x1="0" x2="1">
                <stop offset="0" stopColor="#002766" />
                <stop offset="1" stopColor="#0061AA" />
              </linearGradient>
            </defs>
            <rect width="900" height="210" fill="url(#unit-header)" />
            <circle cx="90" cy="105" r="52" fill="none" stroke="#8fc5e8" strokeWidth="2" />
            <circle cx="90" cy="105" r="31" fill="none" stroke="#ffffff" strokeWidth="2" />
            <path d="M 63 105 H 117 M 90 78 V 132 M 71 86 L 109 124 M 109 86 L 71 124" stroke="#ffffff" strokeWidth="2" />
            <text x="165" y="68" fill="#b9daf0" fontSize="13" fontWeight="700" letterSpacing="1.5">
              {t(`kinds.${unit.kind}`).toUpperCase()}
            </text>
            <text id="unit-title" x="165" y="111" fill="#ffffff" fontSize="25" fontWeight="700">
              {unit.hasShortTitle ? t(`units.${unit.id}.shortTitle`) : title}
            </text>
            {unit.hasShortTitle && (
              <text x="165" y="143" fill="#d9ecf8" fontSize="15">{title}</text>
            )}
          </svg>

          <div className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-7">
            <div>
              <h1 className="text-xl font-bold">{title}</h1>
              {parent && (
                <p className="mt-2 text-sm text-[#51749E]">
                  {t("partOf")}{" "}
                  <a className="font-semibold underline decoration-[#8eacca] underline-offset-4 hover:text-[#0061AA]" href={localizedRoute(locale, parent.route)}>
                    {t(`units.${parent.id}.title`)}
                  </a>
                </p>
              )}
            </div>
            <a
              href={localizedRoute(locale, "/structure")}
              className="inline-flex items-center justify-center rounded-md border border-[#0061AA] px-4 py-2 text-sm font-semibold text-[#0061AA] transition hover:bg-[#0061AA] hover:text-white"
            >
              {t("back")}
            </a>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
