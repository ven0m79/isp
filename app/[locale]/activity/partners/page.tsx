import { MainLayout } from "@app/components/templates";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Partner = {
  name: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
};

const partnerAssets = [
  "/activity/international-activity/chnpp-logo.webp",
  "/activity/international-activity/sauezn.webp",
  "/activity/partners/energoatom.webp",
  "/activity/partners/environment-ministry.webp",
  "/activity/partners/kharkiv-physics.webp",
  "/activity/partners/metrology.webp",
  "/activity/international-activity/sstc-nrs.webp",
  "/activity/partners/energoproekt.webp",
  "/activity/partners/niisk.webp",
  "/activity/partners/nuclear-regulator.webp",
  "/activity/partners/bnfl.webp",
  "/activity/international-activity/jaea.webp",
  "/activity/international-activity/china-cooperation.webp",
];

export default async function Partners() {
  const t = await getTranslations("partnersPage");
  const partnerText = t.raw("items") as Partner[];
  const partners = partnerText.map((partner, index) => ({ ...partner, image: partnerAssets[index] }));
  const nationalPartners = partners.slice(0, 10);
  const internationalPartners = partners.slice(10);

  const renderPartner = (partner: Partner & { image: string }) => (
    <article key={partner.name} className="overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm">
                <div className="relative h-44 border-b border-[#dce7f1] bg-[#f8fbfd]">
                  <Image
                    src={partner.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-contain p-4"
                  />
                </div>
      <div className="p-5">
        <h3 className="min-h-14 text-base font-bold leading-7 text-[#002766]">{partner.name}</h3>
        <p className="mt-2 text-sm leading-6 text-[#294e70]">{partner.address}</p>
        <p className="mt-3 text-xs leading-5 text-[#51749E]">{partner.phone}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {partner.email ? (
            <a href={`mailto:${partner.email}`} className="rounded-lg border border-[#8fbad6] bg-[#EFF4FB] px-3 py-2 text-xs font-bold text-[#07518F] hover:bg-[#dcebf6]">
              {t("email")}
            </a>
          ) : null}
          {partner.website ? (
            <a href={partner.website} target="_blank" rel="noreferrer" className="rounded-lg bg-[#07518F] px-3 py-2 text-xs font-bold text-white hover:bg-[#0061AA]">
              {t("website")}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("eyebrow")}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">{t("title")}</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#294e70] md:text-base">{t("intro")}</p>
        </header>

        <section className="mt-6">
          <h2 className="text-xl font-bold md:text-2xl">{t("nationalTitle")}</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {nationalPartners.map(renderPartner)}
          </div>
        </section>

        <section className="mt-7 rounded-xl border border-[#c8d8ea] bg-[#EFF4FB] p-5 md:p-6">
          <h2 className="text-xl font-bold md:text-2xl">{t("internationalTitle")}</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {internationalPartners.map(renderPartner)}
          </div>
        </section>
      </article>
    </MainLayout>
  );
}
