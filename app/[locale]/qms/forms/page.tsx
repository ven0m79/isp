import { MainLayout } from "@app/components/templates";

const forms = [
  { code: "Ф-01", title: "Заявка на виконання науково-дослідної роботи", type: "DOCX" },
  { code: "Ф-02", title: "Технічне завдання на НДР", type: "DOCX" },
  { code: "Ф-03", title: "Акт здачі-приймання науково-технічної продукції", type: "DOCX" },
  { code: "Ф-04", title: "Звіт про виконання НДР (форма)", type: "DOCX" },
  { code: "Ф-05", title: "Заявка на участь у конференції", type: "DOCX" },
  { code: "Ф-06", title: "Журнал реєстрації вхідної кореспонденції", type: "XLSX" },
];

const typeColor: Record<string, string> = {
  DOCX: "bg-blue-100 text-blue-800",
  XLSX: "bg-green-100 text-green-800",
  PDF:  "bg-red-100 text-red-800",
};

export default function Forms() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Бланки
        </h2>

        <p className="text-sm leading-relaxed">
          Стандартизовані форми документів для оформлення науково-дослідних робіт, звітності та
          внутрішнього документообігу Інституту відповідно до вимог СУЯ.
        </p>

        <div className="flex flex-col gap-2">
          {forms.map(({ code, title, type }) => (
            <div key={code}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea] hover:bg-[#dce8f5] transition cursor-pointer">
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" className="shrink-0">
                <rect x="1" y="1" width="22" height="26" rx="3" fill="white" stroke="#51749E" strokeWidth="1.2"/>
                <path d="M6 9h12M6 13h12M6 17h8" stroke="#51749E" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span className="text-xs font-bold text-[#51749E] shrink-0 w-10">{code}</span>
              <span className="flex-1 text-sm">{title}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded shrink-0 ${typeColor[type]}`}>{type}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <path d="M7 2v8M4 7l3 3 3-3" stroke="#0061AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 11h10" stroke="#0061AA" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
