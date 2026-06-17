import { MainLayout } from "@app/components/templates";
import Link from "next/link";
import Image from "next/image";

const pubs = [
  { href: "/publications/problems-of-nuclear-power-plants-safety-and-of-chornobyl", label: "Проблеми безпеки АЕС і Чорнобиля", desc: "Науковий журнал, що висвітлює актуальні проблеми ядерної та радіаційної безпеки." },
  { href: "/publications/nuclear-power-and-environment", label: "Ядерна енергетика та довкілля", desc: "Збірник наукових праць з питань впливу ядерної галузі на навколишнє середовище." },
  { href: "/publications/monographs", label: "Монографії", desc: "Наукові монографії, підручники та методичні посібники, підготовлені співробітниками Інституту." },
];

export default function Publications() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Публікації
        </h2>

        <div className="float-right ml-6 mb-4">
          <Image
            src="/titul-npe.webp"
            width={120}
            height={158}
            alt="Ядерна енергетика та довкілля"
            style={{ width: 120, height: "auto" }}
          />
        </div>

        <p className="text-sm leading-relaxed">
          Інститут є засновником двох наукових видань та активно публікує монографії, збірники праць і
          нормативно-технічні документи. Щорічно друкується понад 200 наукових статей у вітчизняних та
          зарубіжних виданнях.
        </p>

        <div className="clear-both" />

        <div className="flex flex-col gap-3">
          {pubs.map(({ href, label, desc }) => (
            <Link key={href} href={href}
              className="flex flex-col gap-1 p-4 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea] hover:bg-[#dce8f5] hover:border-[#0061AA] transition">
              <span className="text-sm font-semibold text-[#0061AA]">{label}</span>
              <span className="text-xs text-gray-700 leading-relaxed">{desc}</span>
            </Link>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
