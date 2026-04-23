import { MainLayout } from "@app/components/templates";

const activities = [
  "Організація наукових семінарів та конференцій молодих учених",
  "Підтримка публікаційної активності молодих дослідників",
  "Сприяння участі у міжнародних стажуваннях та грантових програмах",
  "Менторська підтримка аспірантів та молодших наукових співробітників",
  "Популяризація ядерної науки та безпеки серед студентів",
];

export default function CouncilOfYoungScientists() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Рада молодих вчених
        </h2>

        <p className="text-sm leading-relaxed">
          Рада молодих вчених (РМВ) ІПБ АЕС НАН України об'єднує науковців та аспірантів віком до 35 років.
          Діяльність РМВ спрямована на підтримку молодих дослідників, розвиток наукових компетенцій та інтеграцію
          у міжнародну наукову спільноту.
        </p>

        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: "🎓", label: "Голова РМВ", value: "Марченко Д.С., к.т.н." },
            { icon: "👥", label: "Членів ради", value: "12 осіб" },
            { icon: "📅", label: "Засновано", value: "2005 рік" },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex flex-col items-center bg-[#EFF4FB] rounded-lg p-3 border border-[#c8d8ea] text-center gap-1">
              <span className="text-2xl">{icon}</span>
              <span className="text-xs text-[#51749E]">{label}</span>
              <span className="text-sm font-semibold">{value}</span>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-base">Напрями діяльності</h3>
        <ul className="flex flex-col gap-2">
          {activities.map((a) => (
            <li key={a} className="flex gap-2 items-start text-sm">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0061AA]" />
              {a}
            </li>
          ))}
        </ul>
      </article>
    </MainLayout>
  );
}
