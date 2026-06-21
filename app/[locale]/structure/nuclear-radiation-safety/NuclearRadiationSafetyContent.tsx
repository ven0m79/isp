import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { localizedRoute, StructureLocale } from "../_data/structureData";
import DepartmentImagePreview from "../_components/DepartmentImagePreview";

type Department = { title: string; route: string };
type Achievement = { id: string; title: string; description: string };

const achievementImages: Record<string, string> = {
  dust: "/structure/nuclear-radiation-safety/dust-suppression-system.jpg",
  gamma: "/structure/nuclear-radiation-safety/aerostat-shelter.jpg",
  monitoring: "/structure/nuclear-radiation-safety/radiation-monitoring-complex.jpg",
  systems: "/structure/nuclear-radiation-safety/safety-control-panels.jpg",
};

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

export default async function NuclearRadiationSafetyContent() {
  const locale = (await getLocale()) as StructureLocale;
  const t = await getTranslations("structure.nuclearRadiationSafety");
  const biography = t.raw("biography") as string[];
  const departments = t.raw("departments") as Department[];
  const directions = t.raw("directions") as string[];
  const achievements = t.raw("achievements") as Achievement[];

  return (
    <div className="mt-6 space-y-6">
      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <p className="text-sm font-semibold leading-6 text-[#51749E]">{t("position")}</p>
        <h2 className="mt-2 text-2xl font-bold text-[#002766]">{t("name")}</h2>
        <div className="mt-5 flow-root space-y-4 text-justify text-sm leading-7 text-gray-700">
          <Image
            src="/structure/nuclear-radiation-safety/viktor-krasnov.jpg"
            alt={t("name")}
            width={426}
            height={600}
            sizes="(min-width: 640px) 180px, 112px"
            className="float-left mb-3 mr-5 h-auto w-28 rounded-lg border border-[#c8d8ea] object-cover shadow-sm sm:w-[180px]"
            priority
          />
          {biography.map((paragraph) => <p key={paragraph} className="indent-6">{paragraph}</p>)}
        </div>
        <div className="mt-5 rounded-lg border-l-4 border-[#1682BF] bg-[#EFF4FB] px-5 py-4 font-semibold text-[#002766]">
          {t("awards")}
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

      <section>
        <h2 className="mb-4 border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">{t("resultsTitle")}</h2>
        <p className="mb-5 text-sm leading-7 text-gray-700">{t("resultsIntro")}</p>
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((achievement) => (
            <article key={achievement.id} className="overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm">
              <DepartmentImagePreview src={achievementImages[achievement.id]} alt={achievement.title} />
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#002766]">{achievement.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{achievement.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
