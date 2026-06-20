import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { localizedRoute, StructureLocale } from "../structureData";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[10px_1fr] gap-3">
          <span className="mt-[11px] h-2 w-2 rounded-full bg-[#0061AA]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function AtomicEnergyContent() {
  const locale = (await getLocale()) as StructureLocale;
  const t = await getTranslations("structure.atomicEnergy");
  const biography = t.raw("biography") as string[];
  const directions = t.raw("directions") as string[];
  const results = t.raw("results") as string[];

  return (
    <div className="mt-6 space-y-6">
      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <p className="text-sm font-semibold leading-6 text-[#51749E]">{t("position")}</p>
        <h2 className="mt-2 text-2xl font-bold text-[#002766]">{t("name")}</h2>
        <div className="mt-5 flow-root space-y-4 text-justify text-sm leading-7 text-gray-700">
          <Image
            src="/administration/borisenko.webp"
            alt={t("name")}
            width={300}
            height={400}
            sizes="(min-width: 640px) 180px, 112px"
            className="float-left mb-3 mr-5 h-auto w-28 rounded-lg border border-[#c8d8ea] object-cover shadow-sm sm:w-[180px]"
          />
          {biography.map((paragraph) => <p key={paragraph} className="indent-6">{paragraph}</p>)}
        </div>
        <div className="mt-5 rounded-lg border-l-4 border-[#0061AA] bg-[#EFF4FB] px-5 py-4 font-semibold text-[#002766]">
          {t("publications")}
        </div>
      </section>

      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <h2 className="border-l-4 border-[#0061AA] pl-4 text-xl font-bold text-[#002766]">{t("structureTitle")}</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <a href={localizedRoute(locale, "/structure/nuclear-installations-safety")} className="rounded-lg border border-[#8eacca] bg-[#EFF4FB] p-4 font-semibold text-[#002766] transition hover:border-[#0061AA] hover:bg-white">
            {t("nuclearInstallationsSafety")}
          </a>
          <a href={localizedRoute(locale, "/structure/radiation-ecology")} className="rounded-lg border border-[#8eacca] bg-[#EFF4FB] p-4 font-semibold text-[#002766] transition hover:border-[#0061AA] hover:bg-white">
            {t("radiationEcology")}
          </a>
        </div>
      </section>

      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <h2 className="border-l-4 border-[#0061AA] pl-4 text-xl font-bold text-[#002766]">{t("directionsTitle")}</h2>
        <BulletList items={directions} />
      </section>

      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <h2 className="border-l-4 border-[#0061AA] pl-4 text-xl font-bold text-[#002766]">{t("resultsTitle")}</h2>
        <p className="mt-4 text-sm leading-7 text-gray-700">{t("resultsIntro")}</p>
        <BulletList items={results} />
      </section>
    </div>
  );
}
