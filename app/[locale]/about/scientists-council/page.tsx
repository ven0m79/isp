import { MainLayout } from "@app/components/templates";
import Image from "next/image";

const members = [
  { name: "Шугайло О.П.", role: "Голова вченої ради, директор інституту, д.т.н., проф." },
  { name: "Василенко І.М.", role: "Заступник голови, д.ф.-м.н." },
  { name: "Бондаренко С.В.", role: "Секретар вченої ради, к.т.н." },
  { name: "Грищенко В.М.", role: "Д.т.н., зав. відділу безпеки реакторів" },
  { name: "Єрмоленко Л.О.", role: "К.ф.-м.н., зав. відділу радіаційного захисту" },
  { name: "Лисенко М.І.", role: "Д.т.н., зав. відділу аналізу аварій" },
  { name: "Павленко О.В.", role: "К.т.н., зав. відділу проектування" },
  { name: "Сидоренко Н.В.", role: "К.б.н., зав. відділу радіоекології" },
];

export default function ScientistsCouncil() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Вчена рада
        </h2>

        <div className="float-right ml-6 mb-4">
          <Image
            src="/nanu100.webp"
            width={140}
            height={60}
            alt="НАН України 100 років"
            style={{ width: 140, height: "auto" }}
          />
        </div>

        <p className="text-sm leading-relaxed">
          Вчена рада Інституту є колегіальним дорадчим органом, який розглядає найважливіші питання наукової
          діяльності: затвердження тематики досліджень, рекомендації щодо присвоєння вчених звань, оцінку
          результатів наукових праць та видавничої діяльності.
        </p>

        <div className="clear-both" />

        <h3 className="font-semibold text-base">Склад вченої ради</h3>

        <div className="grid grid-cols-1 gap-2">
          {members.map(({ name, role }) => (
            <div key={name} className="flex gap-3 items-start py-2 px-3 rounded border border-[#c8d8ea] bg-[#EFF4FB]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
                <circle cx="10" cy="7" r="4" fill="#51749E"/>
                <ellipse cx="10" cy="17" rx="7" ry="4" fill="#51749E"/>
              </svg>
              <div>
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-gray-600">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
