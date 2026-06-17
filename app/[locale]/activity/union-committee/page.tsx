import { MainLayout } from "@app/components/templates";

export default function UnionCommittee() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Профспілка
        </h2>

        <p className="text-sm leading-relaxed">
          Первинна профспілкова організація ІПБ АЕС НАН України є структурним підрозділом Профспілки
          працівників НАН України і діє з метою захисту трудових, соціально-економічних та культурних
          прав і інтересів членів трудового колективу.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Голова профкому", value: "Савченко О.М." },
            { label: "Членів профспілки", value: "87 осіб" },
            { label: "Заснована", value: "1992 рік" },
            { label: "Засідання", value: "щоквартально" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col p-3 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
              <span className="text-xs text-[#51749E]">{label}</span>
              <span className="text-sm font-semibold mt-0.5">{value}</span>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-base">Напрями роботи</h3>
        <ul className="flex flex-col gap-2 text-sm">
          {[
            "Контроль дотримання трудового законодавства та колективного договору",
            "Організація оздоровлення та відпочинку працівників і їхніх дітей",
            "Надання матеріальної допомоги членам профспілки",
            "Культурно-масові заходи та відзначення корпоративних свят",
            "Представництво інтересів трудового колективу в переговорах з адміністрацією",
          ].map((item) => (
            <li key={item} className="flex gap-2 items-start">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0061AA]" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </MainLayout>
  );
}
