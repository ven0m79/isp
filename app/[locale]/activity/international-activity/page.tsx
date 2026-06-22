import { MainLayout } from "@app/components/templates";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type PartnerGroup = {
  region: string;
  organizations: string;
};

type Project = {
  title: string;
  partners: string;
};

type CooperationArea = {
  title: string;
  paragraphs: string[];
};

const partnerMarks = [
  ["PF", "UoS", "BNFL"],
  ["CMU", "WG", "CU", "USC", "PNNL", "LLNL"],
  ["FRAMATOME", "EDF", "GSN"],
  ["SIEMENS", "GRS", "GSF", "KIT"],
  ["TEPCO", "JAEA", "NSRA"],
  ["QXME", "QXEDG"],
  ["VINČA"],
  ["ICTP", "IAEA"],
];

const cooperationImages = [
  [
    { src: "/activity/international-activity/jaea.webp", alt: "JAEA", width: 164, height: 82 },
  ],
  [
    { src: "/activity/international-activity/china-cooperation.webp", alt: "China-Ukraine Nuclear Energy", width: 111, height: 140 },
    { src: "/activity/international-activity/sstc-nrs.webp", alt: "SSTC NRS", width: 72, height: 73 },
  ],
  [
    { src: "/activity/international-activity/chnpp-logo.webp", alt: "Chornobyl NPP", width: 140, height: 54 },
    { src: "/activity/international-activity/sauezn.webp", alt: "State Agency of Ukraine on Exclusion Zone Management", width: 99, height: 109 },
  ],
];

export default async function InternationalActivity() {
  const t = await getTranslations("internationalActivityPage");
  const partners = t.raw("partners.items") as PartnerGroup[];
  const projects = t.raw("nato.items") as Project[];
  const cooperation = t.raw("cooperation.items") as CooperationArea[];

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("eyebrow")}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">{t("title")}</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#294e70] md:text-base">{t("intro")}</p>
          <div className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#07518F] shadow-sm">
            {t("agreements")}
          </div>
        </header>

        <section className="mt-6 rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6">
          <h2 className="text-xl font-bold md:text-2xl">{t("partners.title")}</h2>
          <p className="mt-3 text-sm leading-7 text-[#294e70]">{t("partners.intro")}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {partners.map((partner, index) => (
              <div key={partner.region} className="rounded-xl border border-[#dce7f1] bg-[#f8fbfd] p-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#07518F]">{partner.region}</h3>
                <div className="mt-3 flex flex-wrap gap-2" aria-hidden="true">
                  {partnerMarks[index].map((mark, markIndex) => (
                    <span
                      key={mark}
                      className={markIndex % 2 === 0
                        ? "inline-flex h-10 min-w-10 items-center justify-center rounded-lg bg-[#07518F] px-2.5 text-[11px] font-black tracking-wide text-white shadow-sm"
                        : "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-[#8fbad6] bg-white px-2.5 text-[11px] font-black tracking-wide text-[#07518F] shadow-sm"}
                    >
                      {mark}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm leading-7 text-[#294e70]">{partner.organizations}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-xl border border-[#c8d8ea] bg-[#EFF4FB] p-5 md:p-6">
          <div className="inline-flex items-center gap-3 rounded-lg bg-[#07518F] px-3 py-2 text-white">
            <svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="13" r="11.5" stroke="currentColor" />
              <path d="m13 4 2.3 6.7L22 13l-6.7 2.3L13 22l-2.3-6.7L4 13l6.7-2.3L13 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <circle cx="13" cy="13" r="2" fill="currentColor" />
            </svg>
            <span className="text-xs font-black uppercase tracking-[0.14em]">NATO · OTAN</span>
          </div>
          <h2 className="mt-1 text-xl font-bold md:text-2xl">{t("nato.title")}</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07518F] text-xs font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 text-base font-bold leading-6 text-[#002766]">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#294e70]">{project.partners}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-5">
          <h2 className="text-xl font-bold md:text-2xl">{t("cooperation.title")}</h2>
          <div className="mt-4 space-y-4">
            {cooperation.map((area, index) => (
              <article
                key={area.title}
                className={index % 2 === 0
                  ? "rounded-xl border border-[#c8d8ea] bg-white p-5 md:p-6"
                  : "rounded-xl border border-[#8fbad6] bg-[#EFF4FB] p-5 md:p-6"}
              >
                <h3 className="text-lg font-bold text-[#07518F]">{area.title}</h3>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {cooperationImages[index].map((image) => (
                    <div key={image.src} className="flex h-24 min-w-32 items-center justify-center rounded-lg border border-[#dce7f1] bg-white p-3 shadow-sm">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="max-h-16 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-3 space-y-3">
                  {area.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-[#294e70]">{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </article>
    </MainLayout>
  );
}
