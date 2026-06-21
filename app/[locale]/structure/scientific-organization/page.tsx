import Image from "next/image";
import { getTranslations } from "next-intl/server";
import StructureUnitPage from "../_components/StructureUnitPage";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-gray-700">
          <span
            aria-hidden="true"
            className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#1682BF]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function Page() {
  const t = await getTranslations("structure.scientificOrganization");
  const biography = t.raw("biography") as string[];
  const directions = t.raw("directions") as string[];
  const departmentStructure = t.raw("departmentStructure") as string[];

  return (
    <StructureUnitPage unitId="scientific-organization">
      <div className="mt-6 space-y-6">
        <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
          <p className="text-sm font-semibold leading-6 text-[#51749E]">{t("position")}</p>
          <h2 className="mt-2 text-2xl font-bold text-[#002766]">{t("name")}</h2>
          <a
            href="tel:+380445252472"
            className="mt-2 inline-block text-sm font-semibold text-[#07518F] hover:underline"
          >
            {t("phone")}
          </a>
          <div className="mt-5 flow-root space-y-4 text-justify text-sm leading-7 text-gray-700">
            <Image
              src="/structure/scientific-organization/victoriia-havrylenko-portrait.webp"
              alt={t("portraitAlt")}
              width={806}
              height={1105}
              sizes="(min-width: 640px) 220px, 144px"
              className="float-left mb-3 mr-5 h-auto w-36 rounded-lg border border-[#c8d8ea] object-cover shadow-sm sm:w-[220px]"
              priority
            />
            {biography.map((paragraph) => (
              <p key={paragraph} className="indent-6">{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
          <h2 className="mb-4 border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">
            {t("directionsTitle")}
          </h2>
          <BulletList items={directions} />
        </section>

        <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
          <h2 className="mb-4 border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">
            {t("structureTitle")}
          </h2>
          <BulletList items={departmentStructure} />
        </section>
      </div>
    </StructureUnitPage>
  );
}
