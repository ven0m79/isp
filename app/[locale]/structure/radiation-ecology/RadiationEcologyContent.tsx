import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Sector = {
  title: string;
  head?: string;
  directions: string[];
};

type ResearchArea = {
  title: string;
  description: string;
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

export default async function RadiationEcologyContent() {
  const t = await getTranslations("structure.radiationEcology");
  const sectors = t.raw("sectors") as Sector[];
  const researchAreas = t.raw("researchAreas") as ResearchArea[];

  return (
    <div className="mt-6 space-y-6 text-slate-800">
      <section className="grid overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm md:grid-cols-[260px_minmax(0,1fr)]">
        <div className="relative min-h-[360px] bg-[#eaf3f9]">
          <Image
            src="/structure/radiation-ecology/mykola-talerko.jpg"
            alt={t("headName")}
            fill
            sizes="(min-width: 768px) 260px, 100vw"
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="p-5 md:p-7">
          <p className="font-bold uppercase tracking-[0.08em] text-[#52728d]">{t("headPosition")}</p>
          <h2 className="mt-2 text-2xl font-bold text-[#07518F] md:text-3xl">{t("headName")}</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-slate-700">
            {(t.raw("biography") as string[]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-6">
          <h2 className="mb-4 text-xl font-bold text-[#07518F]">{t("directionsTitle")}</h2>
          <BulletList items={t.raw("directions") as string[]} />
        </div>
        <div className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-6">
          <h2 className="mb-4 text-xl font-bold text-[#07518F]">{t("tasksTitle")}</h2>
          <BulletList items={t.raw("tasks") as string[]} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-[#07518F]">{t("structureTitle")}</h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {sectors.map((sector) => (
            <article key={sector.title} className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-[#07518F]">{sector.title}</h3>
              {sector.head && <p className="mt-3 border-l-4 border-[#1682BF] bg-[#f1f7fb] px-4 py-3 font-semibold text-[#234b68]">{sector.head}</p>}
              <div className="mt-4"><BulletList items={sector.directions} /></div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-[#07518F]">{t("resultsTitle")}</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {researchAreas.map((area, index) => (
            <article key={area.title} className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#e5f2fa] font-bold text-[#07518F]">{index + 1}</div>
              <h3 className="text-lg font-bold text-[#07518F]">{area.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-700">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-[#c8d8ea] bg-[#f5f9fc] p-5 md:p-6">
        <h2 className="mb-4 text-xl font-bold text-[#07518F]">{t("cooperationTitle")}</h2>
        <BulletList items={t.raw("cooperation") as string[]} />
      </section>
    </div>
  );
}
