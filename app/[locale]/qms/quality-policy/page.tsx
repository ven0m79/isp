import { MainLayout } from "@app/components/templates";

const principles = [
  "Орієнтація на задоволення потреб замовників і зацікавлених сторін",
  "Постійне підвищення результативності системи управління якістю",
  "Прийняття рішень на основі об'єктивних даних та ризик-орієнтованого мислення",
  "Залучення та розвиток компетентного персоналу",
  "Управління процесами для досягнення передбачуваних і стабільних результатів",
  "Забезпечення відповідності нормативним вимогам у сфері ядерної безпеки",
];

export default function QualityPolicy() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Політика у сфері якості
        </h2>

        <div className="bg-[#0061AA] text-white rounded-lg p-5 text-sm leading-relaxed italic">
          «Інститут проблем безпеки атомних електростанцій НАН України зобов'язується здійснювати
          наукову та науково-технічну діяльність на найвищому рівні якості, постійно вдосконалюючи
          свої процеси та підвищуючи кваліфікацію персоналу, задля забезпечення безпеки ядерної
          енергетики України та захисту людей і навколишнього середовища.»
          <p className="mt-3 font-bold not-italic">— Директор ІПБ АЕС НАН України</p>
        </div>

        <h3 className="font-semibold text-base">Ключові принципи</h3>
        <ul className="flex flex-col gap-2">
          {principles.map((p) => (
            <li key={p} className="flex gap-2 items-start text-sm">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0061AA]" />
              {p}
            </li>
          ))}
        </ul>

        <p className="text-xs text-gray-500">
          Політика якості затверджена директором Інституту та переглядається щорічно в рамках
          аналізу СУЯ з боку керівництва.
        </p>
      </article>
    </MainLayout>
  );
}
