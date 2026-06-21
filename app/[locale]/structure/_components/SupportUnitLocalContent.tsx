import Image from "next/image";
import { getTranslations } from "next-intl/server";

type SupportUnitLocalContentProps = {
  namespace: string;
  portraitSrc: string;
  portraitWidth: number;
  portraitHeight: number;
};

type ContentSection = {
  title: string;
  items: string[];
};

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

export default async function SupportUnitLocalContent({
  namespace,
  portraitSrc,
  portraitWidth,
  portraitHeight,
}: SupportUnitLocalContentProps) {
  const t = await getTranslations(namespace);
  const biography = t.raw("biography") as string[];
  const phones = t.has("phones") ? t.raw("phones") as string[] : [];
  const sections = t.raw("sections") as ContentSection[];

  return (
    <div className="mt-6 space-y-6">
      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <p className="text-sm font-semibold leading-6 text-[#51749E]">{t("position")}</p>
        <h2 className="mt-2 text-2xl font-bold text-[#002766]">{t("name")}</h2>
        {phones.length > 0 ? (
          <div className="mt-2 space-y-1 text-sm font-semibold text-[#07518F]">
            {phones.map((phone) => <p key={phone}>{phone}</p>)}
          </div>
        ) : null}
        <div className="mt-5 flow-root space-y-4 text-justify text-sm leading-7 text-gray-700">
          <Image
            src={portraitSrc}
            alt={t("portraitAlt")}
            width={portraitWidth}
            height={portraitHeight}
            sizes="(min-width: 640px) 220px, 144px"
            className="float-left mb-3 mr-5 h-auto w-36 rounded-lg border border-[#c8d8ea] object-cover shadow-sm sm:w-[220px]"
            priority
          />
          {biography.map((paragraph) => (
            <p key={paragraph} className="indent-6">{paragraph}</p>
          ))}
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
          <h2 className="mb-4 border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">
            {section.title}
          </h2>
          <BulletList items={section.items} />
        </section>
      ))}
    </div>
  );
}
