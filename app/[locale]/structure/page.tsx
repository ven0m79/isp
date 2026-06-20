import { MainLayout } from "@app/components/templates";
import { getLocale, getTranslations } from "next-intl/server";
import StructureChart from "./StructureChart";
import { StructureLocale } from "./structureData";

export default async function StructurePage() {
  const locale = (await getLocale()) as StructureLocale;
  const t = await getTranslations("structure");

  return (
    <MainLayout>
      <section className="p-2 text-[#002766] md:p-4">
        <div className="overflow-x-auto rounded-xl border border-[#c8d8ea] bg-white shadow-sm">
          <StructureChart locale={locale} />
        </div>
        <p className="mt-3 text-center text-xs text-[#51749E] md:hidden">
          {t("scrollHint")}
        </p>
      </section>
    </MainLayout>
  );
}
