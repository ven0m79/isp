import Image from "next/image";
import { getTranslations } from "next-intl/server";
import DepartmentImagePreview from "./DepartmentImagePreview";

type DepartmentLocalContentProps = {
  namespace: string;
  assetDir: string;
  portraitFile: string;
  workFiles: string[];
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-gray-700">
          <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#1682BF]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function DepartmentLocalContent({ namespace, assetDir, portraitFile, workFiles }: DepartmentLocalContentProps) {
  const t = await getTranslations(namespace);
  const biography = t.raw("biography") as string[];
  const directions = t.raw("directions") as string[];
  const results = t.raw("results") as string[];
  const structure = t.has("structure") ? t.raw("structure") as string[] : [];
  const captions = t.has("workCaptions") ? t.raw("workCaptions") as string[] : [];

  return (
    <div className="mt-6 space-y-6">
      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <p className="text-sm font-semibold leading-6 text-[#51749E]">{t("position")}</p>
        <h2 className="mt-2 text-2xl font-bold text-[#002766]">{t("name")}</h2>
        <div className="mt-5 flow-root space-y-4 text-justify text-sm leading-7 text-gray-700">
          <Image src={`${assetDir}/${portraitFile}`} alt={t("name")} width={450} height={600} sizes="(min-width: 640px) 180px, 112px" className="float-left mb-3 mr-5 h-auto w-28 rounded-lg border border-[#c8d8ea] object-cover shadow-sm sm:w-[180px]" priority />
          {biography.map((paragraph) => <p key={paragraph} className="indent-6">{paragraph}</p>)}
        </div>
        {t.has("highlight") ? <div className="mt-5 rounded-lg border-l-4 border-[#1682BF] bg-[#EFF4FB] px-5 py-4 font-semibold text-[#002766]">{t("highlight")}</div> : null}
      </section>

      {structure.length > 0 ? <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7"><h2 className="mb-4 border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">{t("structureTitle")}</h2><BulletList items={structure} /></section> : null}

      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <h2 className="mb-4 border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">{t("directionsTitle")}</h2>
        <BulletList items={directions} />
      </section>

      <section className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
        <h2 className="mb-4 border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">{t("resultsTitle")}</h2>
        <BulletList items={results} />
      </section>

      {workFiles.length > 0 ? <section><h2 className="mb-4 border-l-4 border-[#1682BF] pl-4 text-xl font-bold text-[#002766]">{t("galleryTitle")}</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{workFiles.map((file, index) => { const alt = captions[index] ?? `${t("workPhotoLabel")} ${index + 1}`; return <article key={file} className="overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm"><DepartmentImagePreview src={`${assetDir}/${file}`} alt={alt} /><p className="p-4 text-sm leading-6 text-gray-700">{alt}</p></article>; })}</div></section> : null}
    </div>
  );
}
