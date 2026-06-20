import { MainLayout } from "@app/components/templates";
import PostanovaPreview from "./PostanovaPreview";

const sections = [
  "Загальні положення",
  "Основні задання Інституту",
  "Структура Інституту",
  "Управління Інститутом",
  "Фінансове та матеріально-технічне забезпечення Інституту",
  "Принципи діяльності Інституту",
];

export default function Regulations() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-6 p-2 text-[#002766]">
        <header className="overflow-hidden rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] shadow-sm">
          <div className="p-5 md:p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#51749E]">
              23.12.2024
            </p>
            <h2 className="border-b-2 border-[#51749E] pb-2 text-xl font-bold">
              Статут
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Затверджено нову версію Статуту Інституту проблем безпеки
              атомних електростанцій НАН України.
            </p>
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="order-2 rounded-lg border border-[#c8d8ea] bg-white shadow-sm lg:order-1">
            <div className="p-5 md:p-6">
              <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766]">
                Розділи Статуту
              </h3>
              <ol className="mt-5 flex flex-col gap-3">
                {sections.map((section, index) => (
                  <li
                    key={section}
                    className="grid grid-cols-[32px_1fr] items-center gap-3 text-sm leading-relaxed text-gray-700"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0061AA] text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{section}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <aside className="order-1 lg:order-2">
            <PostanovaPreview
              imageSrc="/regulations/postanova.jpg"
              pdfSrc="/regulations/StatutISP-2022.pdf"
            />
          </aside>
        </div>
      </article>
    </MainLayout>
  );
}
