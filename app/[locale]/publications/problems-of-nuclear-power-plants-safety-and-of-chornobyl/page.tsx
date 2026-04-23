import { MainLayout } from "@app/components/templates";

const issues = [
  { vol: "Вип. 42", year: "2024", title: "Аналіз безпеки реакторів в умовах зовнішніх впливів" },
  { vol: "Вип. 41", year: "2023", title: "Радіоактивне забруднення ґрунтів зони відчуження: 37 років після аварії" },
  { vol: "Вип. 40", year: "2022", title: "Імовірнісний аналіз безпеки АЕС України: сучасний стан" },
  { vol: "Вип. 39", year: "2021", title: "Методи оцінки ризиків від іонізуючого випромінювання" },
];

export default function ProblemsJournal() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Проблеми безпеки АЕС і Чорнобиля
        </h2>

        <div className="flex gap-4 items-start bg-[#EFF4FB] rounded-lg p-4 border border-[#c8d8ea]">
          <div className="shrink-0 flex flex-col gap-0.5 text-xs text-gray-600">
            <p><span className="font-semibold">ISSN:</span> 1813-3584</p>
            <p><span className="font-semibold">Мова:</span> Українська, Англійська</p>
            <p><span className="font-semibold">Виходить:</span> 2 рази на рік</p>
            <p><span className="font-semibold">Засновник:</span> ІПБ АЕС НАН України</p>
            <p><span className="font-semibold">З:</span> 2003 року</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed">
          Науковий журнал присвячений актуальним проблемам ядерної та радіаційної безпеки атомних
          електростанцій, аналізу наслідків Чорнобильської катастрофи та розробці заходів з підвищення
          надійності ядерних об'єктів. Включений до переліку фахових видань ВАК України.
        </p>

        <h3 className="font-semibold text-base">Останні випуски</h3>
        <div className="flex flex-col gap-2">
          {issues.map(({ vol, year, title }) => (
            <div key={vol} className="flex gap-3 items-start p-3 rounded border border-[#c8d8ea] bg-[#EFF4FB] text-sm">
              <span className="shrink-0 font-bold text-[#0061AA] text-xs w-16">{vol}<br/><span className="font-normal text-gray-500">{year}</span></span>
              <span className="leading-snug">{title}</span>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
