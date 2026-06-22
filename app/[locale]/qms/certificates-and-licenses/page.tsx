import { MainLayout } from "@app/components/templates";
import { getTranslations } from "next-intl/server";
import CertificateGallery, { type CertificateDocument } from "./CertificateGallery";
import Link from "next/link";

const documentAssets = [
  { imageSrc: "/qms/certificates-and-licenses/iso-9001.webp", width: 1000, height: 1452 },
  { imageSrc: "/qms/certificates-and-licenses/radioactive-materials-license.webp", width: 1240, height: 1754 },
  { imageSrc: "/qms/certificates-and-licenses/ionizing-radiation-license.webp", width: 1240, height: 1753 },
];

type DocumentText = Pick<CertificateDocument, "title" | "description" | "status">;

export default async function CertificatesAndLicenses() {
  const t = await getTranslations("certificatesLicensesPage");
  const documentText = t.raw("documents") as DocumentText[];
  const documents = documentAssets.map((asset, index) => ({ ...asset, ...documentText[index] }));

  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("eyebrow")}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">{t("title")}</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#294e70] md:text-base">{t("subtitle")}</p>
        </header>

        <section className="my-5 grid gap-3 md:grid-cols-3">
          {(t.raw("facts") as string[]).map((fact) => (
            <p key={fact} className="rounded-xl border border-[#c8d8ea] bg-white p-4 text-sm leading-6 text-[#294e70] shadow-sm">{fact}</p>
          ))}
        </section>
        <CertificateGallery documents={documents} openLabel={t("openLabel")} closeLabel={t("closeLabel")} />
      </article>
      <Link href="/qms" className="mt-5 inline-flex rounded-lg border border-[#8fbad6] bg-[#dcebf6] px-4 py-2.5 text-sm font-bold text-[#07518F] transition hover:bg-[#cfe3f1]">
        {t("backToQms")}
      </Link>
    </MainLayout>
  );
}
