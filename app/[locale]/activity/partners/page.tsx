import { MainLayout } from "@app/components/templates";
import Image from "next/image";

const partnerGroups = [
  {
    group: "Державні органи та регулятори",
    items: ["Держатомрегулювання України", "Міністерство енергетики України", "НАЕК «Енергоатом»"],
  },
  {
    group: "Міжнародні організації",
    items: ["МАГАТЕ (Відень)", "Євроатом / JRC (Петтен)", "WANO (Всесвітня асоціація ядерних операторів)"],
  },
  {
    group: "Наукові установи",
    items: ["ННЦ ХФТІ (Харків)", "Інститут ядерних досліджень НАН України", "КПІ ім. Ігоря Сікорського"],
  },
];

export default function Partners() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Партнери
        </h2>

        <div className="float-right ml-6 mb-4">
          <Image
            src="/fond-nanu.webp"
            width={160}
            height={70}
            alt="Фонд НАН України"
            style={{ width: 160, height: "auto" }}
          />
        </div>

        <p className="text-sm leading-relaxed">
          Інститут підтримує широку мережу партнерських відносин з провідними науковими, регулюючими та
          промисловими організаціями як в Україні, так і за кордоном. Партнерство реалізується у форматі
          спільних досліджень, договорів про науково-технічне співробітництво та участі в консорціумах.
        </p>

        <div className="clear-both" />

        <div className="flex flex-col gap-4">
          {partnerGroups.map(({ group, items }) => (
            <div key={group} className="rounded-lg border border-[#c8d8ea] overflow-hidden">
              <div className="bg-[#51749E] text-white text-sm font-semibold px-4 py-2">{group}</div>
              <ul className="flex flex-col divide-y divide-[#e0eaf3]">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 items-center px-4 py-2 text-sm bg-[#EFF4FB]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0061AA] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
