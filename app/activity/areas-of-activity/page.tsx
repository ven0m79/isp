import { MainLayout } from "@app/components/templates";

const areas = [
  {
    title: "Аналіз безпеки реакторних установок",
    text: "Розробка та верифікація розрахункових кодів, детермінований та імовірнісний аналіз безпеки, оцінка стійкості активних зон реакторів.",
  },
  {
    title: "Радіаційний захист та дозиметрія",
    text: "Нормування радіаційного опромінення персоналу та населення, розробка методів і засобів захисту від іонізуючого випромінювання.",
  },
  {
    title: "Радіоекологія та поводження з РАВ",
    text: "Дослідження міграції радіонуклідів у навколишньому середовищі, оцінка радіаційного стану Чорнобильської зони відчуження.",
  },
  {
    title: "Проектування об'єктів ядерно-паливного циклу",
    text: "Наукове супроводження проектів будівництва та модернізації ядерних об'єктів, обґрунтування ядерної та радіаційної безпеки.",
  },
  {
    title: "Нормативно-технічна база",
    text: "Розробка нормативних документів, стандартів і регламентів для регулювання ядерної та радіаційної безпеки в Україні.",
  },
];

export default function AreasOfActivity() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Напрями діяльності
        </h2>

        <p className="text-sm leading-relaxed">
          Наукові дослідження Інституту охоплюють широкий спектр задач, пов'язаних із забезпеченням безпеки
          атомної енергетики та радіаційним захистом населення.
        </p>

        <div className="flex flex-col gap-3">
          {areas.map(({ title, text }, i) => (
            <div key={title} className="flex gap-4 p-4 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[#0061AA] text-white font-bold flex items-center justify-center text-sm">
                {i + 1}
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-sm">{title}</p>
                <p className="text-xs leading-relaxed text-gray-700">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
