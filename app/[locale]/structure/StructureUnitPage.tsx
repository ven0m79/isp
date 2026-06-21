import { MainLayout } from "@app/components/templates";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import {
  getStructureUnit,
  localizedRoute,
  StructureLocale,
} from "./structureData";

export default async function StructureUnitPage({
  unitId,
  children,
}: {
  unitId: string;
  children?: ReactNode;
}) {
  const locale = (await getLocale()) as StructureLocale;
  const t = await getTranslations("structure");
  const unit = getStructureUnit(unitId);

  if (!unit) notFound();

  const title = t(`units.${unit.id}.title`);

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <div className="overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm">
          <header className="bg-gradient-to-r from-[#07518F] to-[#1682BF] p-2 sm:p-4 md:p-5">
            <div className="flex flex-col items-center gap-5 md:flex-row md:gap-7">
              <svg
                viewBox="0 0 120 120"
                aria-hidden="true"
                className="h-24 w-24 shrink-0 sm:h-28 sm:w-28"
              >
                <circle cx="60" cy="60" r="56" fill="none" stroke="#8fc5e8" strokeWidth="2" />
                <g fill="none" stroke="#ffffff" strokeWidth="2.2">
                  <ellipse cx="60" cy="60" rx="34" ry="13" />
                  <ellipse cx="60" cy="60" rx="34" ry="13" transform="rotate(60 60 60)" />
                  <ellipse cx="60" cy="60" rx="34" ry="13" transform="rotate(120 60 60)" />
                </g>
                <circle cx="60" cy="60" r="5" fill="#ffffff" />
                <circle cx="94" cy="60" r="3.2" fill="#ffffff" />
                <circle cx="43" cy="30.6" r="3.2" fill="#ffffff" />
                <circle cx="43" cy="89.4" r="3.2" fill="#ffffff" />
              </svg>

              <div className="min-w-0 flex-1 text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#b9daf0] sm:text-sm">
                  {t(`kinds.${unit.kind}`)}
                </p>
                <h1 id="unit-title" className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl md:text-[26px]">
                  {title}
                </h1>
              </div>

              <a
                href={localizedRoute(locale, "/structure")}
                className="inline-flex w-full shrink-0 items-center justify-center rounded-lg border border-white px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#0061AA] sm:w-auto md:min-w-38"
              >
                {t("back")}
              </a>
            </div>
          </header>
        </div>
        {children}
      </article>
    </MainLayout>
  );
}
