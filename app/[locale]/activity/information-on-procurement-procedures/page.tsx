import { MainLayout } from "@app/components/templates";

const procurements = [
  { id: "UA-2024-001", subject: "Комп'ютерне обладнання для наукових досліджень", status: "Завершено", amount: "245 000 грн" },
  { id: "UA-2024-002", subject: "Реактиви та витратні матеріали для лабораторій", status: "Завершено", amount: "87 500 грн" },
  { id: "UA-2024-003", subject: "Технічне обслуговування вимірювальних приладів", status: "В процесі", amount: "56 000 грн" },
  { id: "UA-2024-004", subject: "Ліцензії на програмне забезпечення", status: "Оголошено", amount: "130 000 грн" },
];

const statusColor: Record<string, string> = {
  "Завершено": "bg-green-100 text-green-800",
  "В процесі": "bg-blue-100 text-blue-800",
  "Оголошено": "bg-amber-100 text-amber-800",
};

export default function Procurement() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Інформація за процедурами закупівель
        </h2>

        <p className="text-sm leading-relaxed">
          ІПБ АЕС НАН України здійснює закупівлі відповідно до вимог Закону України «Про публічні закупівлі».
          Уся інформація про процедури закупівель оприлюднюється на порталі{" "}
          <span className="text-[#0061AA] font-medium">prozorro.gov.ua</span>.
        </p>

        <h3 className="font-semibold text-base">Актуальні та завершені закупівлі — 2024</h3>

        <div className="flex flex-col gap-2">
          {procurements.map(({ id, subject, status, amount }) => (
            <div key={id} className="grid grid-cols-[auto_1fr_auto_auto] gap-3 items-center p-3 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
              <span className="text-xs font-mono text-[#51749E] shrink-0">{id}</span>
              <span className="text-sm leading-snug">{subject}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${statusColor[status]}`}>{status}</span>
              <span className="text-sm font-semibold shrink-0 text-right">{amount}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500">
          Детальна інформація доступна на порталі публічних закупівель Prozorro.
        </p>
      </article>
    </MainLayout>
  );
}
