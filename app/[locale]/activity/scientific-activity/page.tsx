import { MainLayout } from "@app/components/templates";

const projects = [
  { code: "НДР-01", title: "Верифікація розрахункових кодів аналізу безпеки реакторів ВВЕР", years: "2022–2024" },
  { code: "НДР-02", title: "Оцінка ризиків від радіоактивного забруднення ґрунтів Чорнобильської зони", years: "2023–2025" },
  { code: "НДР-03", title: "Розробка нормативів радіаційного захисту персоналу АЕС нового покоління", years: "2023–2026" },
  { code: "НДР-04", title: "Прогнозування поведінки радіонуклідів у підземних водах", years: "2021–2024" },
];

export default function ScientificActivity() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Наукова діяльність
        </h2>

        <p className="text-sm leading-relaxed">
          Щорічно Інститут виконує декілька десятків науково-дослідних робіт за держбюджетною тематикою та
          господарськими договорами з вітчизняними і зарубіжними замовниками. Основу складають фундаментальні
          та прикладні дослідження у галузі ядерної безпеки.
        </p>

        <div className="grid grid-cols-3 gap-3">
          {[
            { num: "40+", label: "НДР щорічно" },
            { num: "200+", label: "публікацій на рік" },
            { num: "15+", label: "патентів" },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col items-center bg-[#EFF4FB] rounded-lg py-4 border border-[#c8d8ea]">
              <span className="text-2xl font-bold text-[#0061AA]">{num}</span>
              <span className="text-xs text-center mt-1 px-1">{label}</span>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-base">Поточні науково-дослідні роботи</h3>
        <div className="flex flex-col gap-2">
          {projects.map(({ code, title, years }) => (
            <div key={code} className="grid grid-cols-[56px_1fr_72px] gap-3 items-center p-3 rounded border border-[#c8d8ea] bg-[#EFF4FB] text-sm">
              <span className="font-bold text-[#0061AA] text-xs">{code}</span>
              <span className="leading-snug">{title}</span>
              <span className="text-xs text-gray-500 text-right">{years}</span>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
