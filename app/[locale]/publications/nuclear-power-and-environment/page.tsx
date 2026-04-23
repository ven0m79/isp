import { MainLayout } from "@app/components/templates";
import Image from "next/image";

const issues = [
  { vol: "№ 21", year: "2024", title: "Вплив АЕС на екосистеми річкових водосховищ-охолоджувачів" },
  { vol: "№ 20", year: "2023", title: "Радіоекологічний моніторинг Прип'ятського ландшафту" },
  { vol: "№ 19", year: "2022", title: "Теплові викиди АЕС та зміна мікроклімату прилеглих територій" },
];

export default function NuclearPowerAndEnvironment() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Ядерна енергетика та довкілля
        </h2>

        <div className="float-right ml-6 mb-4">
          <Image
            src="/titul-npe.webp"
            width={130}
            height={170}
            alt="Ядерна енергетика та довкілля — обкладинка"
            style={{ width: 130, height: "auto" }}
          />
        </div>

        <div className="flex flex-col gap-1 text-xs text-gray-600">
          <p><span className="font-semibold">ISSN:</span> 2311-8253</p>
          <p><span className="font-semibold">Мова:</span> Українська</p>
          <p><span className="font-semibold">Виходить:</span> 2 рази на рік</p>
          <p><span className="font-semibold">Засновник:</span> ІПБ АЕС НАН України</p>
          <p><span className="font-semibold">З:</span> 2013 року</p>
        </div>

        <p className="text-sm leading-relaxed">
          Збірник наукових праць, присвячений дослідженню комплексного впливу об'єктів ядерно-паливного
          циклу на навколишнє природне середовище: атмосферу, водні ресурси, ґрунти та біоту. Видання
          індексується в міжнародних наукометричних базах даних.
        </p>

        <div className="clear-both" />

        <h3 className="font-semibold text-base">Останні випуски</h3>
        <div className="flex flex-col gap-2">
          {issues.map(({ vol, year, title }) => (
            <div key={vol} className="flex gap-3 items-start p-3 rounded border border-[#c8d8ea] bg-[#EFF4FB] text-sm">
              <span className="shrink-0 font-bold text-[#0061AA] text-xs w-12">{vol}<br/><span className="font-normal text-gray-500">{year}</span></span>
              <span className="leading-snug">{title}</span>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
