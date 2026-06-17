import { MainLayout } from "@app/components/templates";

export default function PreventionOfCorruption() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Запобігання проявам корупції
        </h2>

        <p className="text-sm leading-relaxed">
          ІПБ АЕС НАН України здійснює заходи з запобігання корупції відповідно до Закону України
          «Про запобігання корупції» та внутрішніх антикорупційних програм НАН України.
        </p>

        <div className="flex flex-col gap-3">
          {[
            { title: "Уповноважена особа", text: "Коваленко Тетяна Андріївна — відповідальна за реалізацію антикорупційної програми Інституту." },
            { title: "Антикорупційна програма", text: "Внутрішній документ, що визначає заходи та процедури запобігання корупційним ризикам у діяльності Інституту." },
            { title: "Повідомлення про корупцію", text: "Повідомити про можливі прояви корупції можна на e-mail: anticor@ispnpp.kiev.ua або за тел. довіри НАН України." },
          ].map(({ title, text }) => (
            <div key={title} className="p-4 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea] flex flex-col gap-1">
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs leading-relaxed text-gray-700">{text}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 text-xs text-amber-900 leading-relaxed">
          Відповідно до вимог законодавства, інформація про осіб, які повідомили про корупцію, є конфіденційною
          та захищена від будь-яких форм переслідування.
        </div>
      </article>
    </MainLayout>
  );
}
