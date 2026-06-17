import { MainLayout } from "@app/components/templates";

const partners = [
  { org: "МАГАТЕ", full: "Міжнародне агентство з атомної енергії", country: "Австрія, Відень" },
  { org: "ЄК / JRC", full: "Об'єднаний дослідницький центр Єврокомісії", country: "Нідерланди, Петтен" },
  { org: "GRS", full: "Товариство ядерної безпеки та реакторних досліджень", country: "Германія, Кельн" },
  { org: "IRSN", full: "Інститут ядерної та радіаційної безпеки", country: "Франція, Фонтене-о-Роз" },
  { org: "NRC", full: "Комісія з ядерного регулювання США", country: "США, Вашингтон" },
];

export default function InternationalActivity() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Міжнародна діяльність
        </h2>

        <p className="text-sm leading-relaxed">
          Інститут активно співпрацює з провідними міжнародними організаціями та науковими установами у сфері
          ядерної безпеки. Міжнародне співробітництво реалізується у формі спільних науково-дослідних проектів,
          обміну фахівцями та участі у міжнародних технічних комітетах.
        </p>

        <h3 className="font-semibold text-base">Ключові партнери</h3>
        <div className="flex flex-col gap-2">
          {partners.map(({ org, full, country }) => (
            <div key={org} className="flex gap-4 items-start p-3 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
              <span className="shrink-0 w-14 text-center font-bold text-[#0061AA] text-xs bg-white border border-[#0061AA] rounded px-1 py-1">
                {org}
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium">{full}</p>
                <p className="text-xs text-gray-500">{country}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm leading-relaxed">
          Щорічно фахівці Інституту беруть участь у понад 20 міжнародних конференціях і семінарах,
          а також проводять спільні дослідження у рамках програм технічного співробітництва МАГАТЕ.
        </p>
      </article>
    </MainLayout>
  );
}
