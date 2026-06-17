import { MainLayout } from "@app/components/templates";

const measures = [
  "Забезпечення рівних можливостей при прийомі на роботу та кар'єрному зростанні",
  "Проведення щорічного аналізу гендерного складу наукових підрозділів",
  "Підтримка участі жінок-науковців у міжнародних конференціях і грантових програмах",
  "Запровадження гнучкого графіку роботи для осіб із сімейними обов'язками",
  "Організація інформаційних заходів щодо протидії дискримінації та переслідуванню",
  "Моніторинг дотримання принципів гендерної рівності при формуванні керівних органів",
];

export default function GenderEqualityPlan() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          План ґендерної рівності
        </h2>

        <p className="text-sm leading-relaxed">
          ІПБ АЕС НАН України дотримується принципів гендерної рівності відповідно до законодавства України
          та вимог міжнародних наукових програм. План ґендерної рівності розроблено з метою усунення бар'єрів
          для рівноправної участі жінок та чоловіків у науковій діяльності Інституту.
        </p>

        <div className="bg-[#EFF4FB] rounded-lg p-4 border border-[#c8d8ea]">
          <p className="text-xs text-[#51749E] font-medium mb-1">Поточний показник</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full bg-[#0061AA] rounded-full" style={{ width: "42%" }} />
            </div>
            <span className="text-sm font-bold text-[#0061AA] shrink-0">42% жінок</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">серед наукових співробітників Інституту</p>
        </div>

        <h3 className="font-semibold text-base">Заходи плану</h3>
        <ul className="flex flex-col gap-2">
          {measures.map((m) => (
            <li key={m} className="flex gap-2 items-start text-sm">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0061AA]" />
              {m}
            </li>
          ))}
        </ul>
      </article>
    </MainLayout>
  );
}
