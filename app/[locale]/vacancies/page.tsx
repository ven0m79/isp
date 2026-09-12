import { MainLayout } from "@app/components/templates";
import { vacancies, statusColors } from "./vacanciesData";

export default function Vacancies() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-6 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Вакансії
        </h2>

        <p className="text-sm leading-relaxed">
          Інститут проблем безпеки атомних електростанцій НАН України запрошує на роботу фахівців
          у галузі ядерної та радіаційної безпеки. Ми пропонуємо цікаву наукову роботу,
          стабільний соціальний пакет та можливості для професійного зростання.
        </p>

        {vacancies.length === 0 ? (
          <div className="p-6 text-center rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mx-auto mb-3">
              <circle cx="20" cy="20" r="18" stroke="#c8d8ea" strokeWidth="2"/>
              <path d="M14 20h12M20 14v12" stroke="#51749E" strokeWidth="2" strokeLinecap="round" opacity=".4"/>
            </svg>
            <p className="text-sm text-gray-500">На даний момент відкритих вакансій немає.</p>
            <p className="text-xs text-gray-400 mt-1">Ви можете надіслати резюме на загальну адресу: <a href="mailto:hr@ispnpp.kiev.ua" className="text-[#0061AA] hover:underline">hr@ispnpp.kiev.ua</a></p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {vacancies.map((v) => (
              <div key={v.id} className="flex flex-col gap-3 p-4 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-base font-semibold">{v.title}</h3>
                    <span className="text-xs text-[#51749E]">{v.department}</span>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${statusColors[v.type] ?? "bg-gray-100 text-gray-700"}`}>
                    {v.type}
                  </span>
                </div>

                {/* Requirements */}
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Вимоги</p>
                  <ul className="flex flex-col gap-1">
                    {v.requirements.map((r, i) => (
                      <li key={i} className="flex gap-2 text-xs leading-relaxed text-gray-700">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                          <circle cx="7" cy="7" r="6" stroke="#51749E" strokeWidth="1.2"/>
                          <path d="M4.5 7l2 2 3-3" stroke="#51749E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conditions */}
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Умови</p>
                  <p className="text-xs leading-relaxed text-gray-700">{v.conditions}</p>
                </div>

                {/* Apply */}
                <a
                  href="mailto:hr@ispnpp.kiev.ua"
                  className="self-start mt-1 px-4 py-2 rounded-full bg-[#0061AA] text-white text-xs font-medium hover:bg-[#004f8c] transition"
                >
                  Надіслати резюме
                </a>
              </div>
            ))}
          </div>
        )}

        {/* General application note */}
        <div className="p-4 rounded-lg border border-[#c8d8ea] bg-white text-sm leading-relaxed">
          <p className="font-semibold mb-1">Як подати заявку</p>
          <p className="text-xs text-gray-600">
            Надішліть резюме та супровідний лист на адресу відділу кадрів:{" "}
            <a href="mailto:hr@ispnpp.kiev.ua" className="text-[#0061AA] hover:underline font-medium">
              hr@ispnpp.kiev.ua
            </a>
            . У темі листа вкажіть назву вакансії. Ми розглядаємо всі заявки та зв'яжемося з кандидатами,
            які відповідають вимогам, протягом 10 робочих днів.
          </p>
        </div>
      </article>
    </MainLayout>
  );
}
