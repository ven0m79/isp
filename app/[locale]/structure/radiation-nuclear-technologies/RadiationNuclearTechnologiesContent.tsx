import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { localizedRoute, StructureLocale } from "../structureData";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[10px_1fr] gap-3">
          <span className="mt-[11px] h-2 w-2 rounded-full bg-[#1682BF]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function RadiationNuclearTechnologiesContent() {
  const locale = (await getLocale()) as StructureLocale;
  const t = await getTranslations("structure.radiationNuclearTechnologies");
  const biography = t.raw("biography") as string[];
  const departments = t.raw("departments") as Array<{ title: string; route: string }>;
  const directions = t.raw("directions") as string[];
  const results = t.raw("results") as string[];
  const projects = t.raw("projects") as string[];

  return (
    <div className="mt-6 space-y-6">
      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <p className="text-sm font-semibold leading-6 text-[#51749E]">{t("position")}</p>
        <h2 className="mt-2 text-2xl font-bold text-[#002766]">{t("name")}</h2>
        <p className="mt-1 text-sm font-semibold text-[#51749E]">{t("phone")}</p>
        <div className="mt-5 flow-root space-y-4 text-justify text-sm leading-7 text-gray-700">
          <Image
            src="/structure/radiation-nuclear-technologies/volodymyr-rudko.jpg"
            alt={t("name")}
            width={263}
            height={350}
            sizes="(min-width: 640px) 180px, 112px"
            className="float-left mb-3 mr-5 h-auto w-28 rounded-lg border border-[#c8d8ea] object-cover shadow-sm sm:w-[180px]"
            priority
          />
          {biography.map((paragraph) => <p key={paragraph} className="indent-6">{paragraph}</p>)}
        </div>
        <div className="mt-5 rounded-lg border-l-4 border-[#1682BF] bg-[#EFF4FB] px-5 py-4 font-semibold text-[#002766]">
          {t("achievements")}
        </div>
      </section>

      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <h2 className="border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">{t("structureTitle")}</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {departments.map((department) => (
            <a
              key={department.route}
              href={localizedRoute(locale, department.route)}
              className="rounded-lg border border-[#8eacca] bg-[#EFF4FB] p-4 font-semibold text-[#002766] transition hover:border-[#1682BF] hover:bg-white"
            >
              {department.title}
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <h2 className="border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">{t("directionsTitle")}</h2>
        <BulletList items={directions} />
      </section>

      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <h2 className="border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">{t("resultsTitle")}</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700">
          {results.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <h3 className="mt-6 text-lg font-bold text-[#002766]">{t("projectsTitle")}</h3>
        <BulletList items={projects} />
      </section>
    </div>
  );
}
