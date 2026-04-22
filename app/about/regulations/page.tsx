import { MainLayout } from "@app/components/templates";

const sections = [
  "Загальні положення",
  "Мета та предмет діяльності",
  "Майно та кошти Інституту",
  "Управління Інститутом",
  "Наукова діяльність",
  "Трудові відносини",
  "Зовнішньоекономічна діяльність",
  "Реорганізація та ліквідація",
];

export default function Regulations() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Статут
        </h2>

        <p className="text-sm leading-relaxed">
          Статут Інституту проблем безпеки атомних електростанцій НАН України — основний установчий документ,
          що визначає правовий статус, цілі, завдання та порядок діяльності Інституту відповідно до чинного
          законодавства України та нормативних актів Національної академії наук України.
        </p>

        <div className="flex items-center gap-4 bg-[#EFF4FB] rounded-lg p-4 border border-[#c8d8ea]">
          <svg width="40" height="48" viewBox="0 0 40 48" fill="none">
            <rect x="2" y="2" width="36" height="44" rx="4" fill="#0061AA" fillOpacity="0.08" stroke="#0061AA" strokeWidth="1.5"/>
            <path d="M10 16h20M10 22h20M10 28h14" stroke="#0061AA" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div>
            <p className="font-semibold text-sm">Статут ІПБ АЕС НАН України</p>
            <p className="text-xs text-gray-500 mt-0.5">Затверджений Президією НАН України</p>
          </div>
        </div>

        <h3 className="font-semibold text-base">Розділи Статуту</h3>
        <ol className="flex flex-col gap-2">
          {sections.map((s, i) => (
            <li key={s} className="flex gap-3 items-center text-sm">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#0061AA] text-white text-xs flex items-center justify-center font-bold">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </article>
    </MainLayout>
  );
}
