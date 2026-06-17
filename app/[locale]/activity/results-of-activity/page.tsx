import { MainLayout } from "@app/components/templates";

const results = [
  { year: "2023", title: "Верифікація коду RELAP5", desc: "Успішна верифікація теплогідравлічного коду для умов реакторів ВВЕР-1000 на основі даних натурних експериментів." },
  { year: "2022", title: "Звіт з аналізу PSA рівня 2", desc: "Розроблено імовірнісний аналіз безпеки другого рівня для діючих блоків Рівненської АЕС." },
  { year: "2021", title: "Монографія з радіоекології", desc: "Опубліковано монографію «Радіоекологічні наслідки Чорнобильської катастрофи: 35 років потому»." },
  { year: "2020", title: "Нормативний документ ПНАЕ", desc: "Розроблено та погоджено з регулятором нові норми та правила з ядерної та радіаційної безпеки." },
];

export default function ResultsOfActivity() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Результати діяльності
        </h2>

        <p className="text-sm leading-relaxed">
          Щорічно Інститут звітує перед Президією НАН України про основні наукові здобутки. Нижче наведено
          найважливіші результати останніх років.
        </p>

        <div className="flex flex-col gap-3">
          {results.map(({ year, title, desc }) => (
            <div key={title} className="flex gap-4 p-4 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
              <div className="shrink-0 flex flex-col items-center">
                <span className="text-xs font-bold text-white bg-[#0061AA] rounded px-2 py-0.5">{year}</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs leading-relaxed text-gray-700">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
