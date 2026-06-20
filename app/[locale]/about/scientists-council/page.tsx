import { MainLayout } from "@app/components/templates";
import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import ProtocolTabs, { ProtocolGroup } from "./ProtocolTabs";

const competences = [
  "визначення стратегії розвитку Інституту та перспективних напрямків наукової і науково-технічної діяльності;",
  "проведення наукової і науково-технічної оцінки тематики та результатів науково-дослідних робіт;",
  "затвердження поточних (щорічних) планів наукових досліджень і науково-технічних (експериментальних) розробок;",
  "удосконалення та розвиток структури Інституту;",
  "затвердження тем дисертацій здобувачів і призначення наукових керівників (консультантів);",
  "затвердження результатів атестації наукових працівників, аспірантів, докторантів, здобувачів;",
  "затвердження результатів конкурсу на вакантні посади наукових працівників;",
  "висування видатних наукових праць для присудження премій, медалей та інших видів відзнак, у тому числі міжнародних;",
  "присвоєння працівникам Інституту вчених звань професора та старшого дослідника і подання відповідних рішень на затвердження до атестаційної колегії центрального органу виконавчої влади, що забезпечує формування та реалізує державну політику у сфері наукової і науково-технічної діяльності;",
  "затвердження річних звітів про діяльність Інституту та розгляд і схвалення кошторисів установи.",
];

const members = [
  {
    group: "Голова Вченої ради",
    people: [
      "Носовський А. В. – академік НАН України, д-р техн. наук, проф., директор.",
    ],
  },
  {
    group: "Заступник голови Вченої ради",
    people: [
      "Борисенко В. І. – член-кор. НАН України, д-р техн. наук, с. д., зав. відділення.",
    ],
  },
  {
    group: "Секретар Вченої ради",
    people: [
      "Сімейко К. В. – д-р техн. наук, с. д., в. о. ученого секретаря, зав. лабораторії.",
    ],
  },
  {
    group: "Члени Вченої ради",
    people: [
      "Паскевич С. А. – канд. біол. наук, заступник директора з наукової роботи;",
      "Краснов В. О. – т. в. о. заступника директора з наукової роботи, зав. відділення;",
      "Рудько В. М. – зав. відділення;",
      "Булавін Л. А. – академік НАН України, д-р фіз.-мат. наук, проф., гол. н. с.;",
      "Кучмагра О. А. – канд. техн. наук, с. н. с., пров. н. с.;",
      "Талерко М. М. – д-р техн. наук, с. н. с., зав. відділу;",
      "Габєлков С. В. – д-р фіз.-мат. наук, с. н. с., зав. відділу;",
      "Шараєвський І. Г. – д-р техн. наук, c. н. с., зав. сектору;",
      "Одінцов О. О. – канд. техн. наук, с. н. с., зав. сектору, керівник профспілкового комітету;",
      "Жиганюк І. В. – канд. фіз.-мат. наук, с. д., зав. лабораторії;",
      "Деренговський В. В. – канд. техн. наук, с. д., зав. відділу;",
      "Торяник А. Ю. – пров. інж., голова Ради молодих вчених.",
    ],
  },
];

const documents = [
  {
    title: "Положення про Вчену раду",
    href: "/protocols-vchena-rada/polozhennya-pro-vchenu-radu.pdf",
  },
  {
    title:
      "Витяг з протоколу бюро ВФТПЕ НАН України – Затвердження складу Вченої ради ІПБ АЕС НАН України",
    href: "/protocols-vchena-rada/vityag-sklad-vchenoi-rady.pdf",
  },
];

const protocolGroups: ProtocolGroup[] = [
  {
    year: "2026",
    items: [
      { title: "Протокол засідання від 13.04.26р.", href: "/protocols-vchena-rada/protocol-2026-01.pdf" },
      { title: "Протокол засідання від 30.03.26р.", href: "/protocols-vchena-rada/protocol-2026-02.pdf" },
      { title: "Протокол засідання від 12.01.26р.", href: "/protocols-vchena-rada/protocol-2026-03.pdf" },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "Протокол засідання від 31.12.25р.", href: "/protocols-vchena-rada/protocol-2025-01.pdf" },
      { title: "Протокол засідання від 23.10.25р.", href: "/protocols-vchena-rada/protocol-2025-02.pdf" },
      { title: "Протокол засідання від 19.05.25р.", href: "/protocols-vchena-rada/protocol-2025-03.pdf" },
      { title: "Протокол засідання від 10.04.25р.", href: "/protocols-vchena-rada/protocol-2025-04.pdf" },
      { title: "Протокол засідання від 27.03.25р.", href: "/protocols-vchena-rada/protocol-2025-05.pdf" },
      { title: "Протокол засідання від 10.03.25р.", href: "/protocols-vchena-rada/protocol-2025-06.pdf" },
      { title: "Протокол засідання від 09.01.25р.", href: "/protocols-vchena-rada/protocol-2025-07.pdf" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "Протокол засідання від 04.11.2024 р.", href: "/protocols-vchena-rada/protocol-2024-01.pdf" },
      { title: "Протокол засідання від 10.09.2024 р.", href: "/protocols-vchena-rada/protocol-2024-02.pdf" },
      { title: "Протокол засідання від 08.07.2024 р.", href: "/protocols-vchena-rada/protocol-2024-03.pdf" },
      { title: "Протокол засідання від 03.06.2024 р.", href: "/protocols-vchena-rada/protocol-2024-04.pdf" },
      { title: "Протокол засідання від 14.05.2024 р.", href: "/protocols-vchena-rada/protocol-2024-05.pdf" },
      { title: "Протокол засідання від 02.04.2024 р.", href: "/protocols-vchena-rada/protocol-2024-06.pdf" },
      { title: "Протокол засідання від 07.03.2024 р.", href: "/protocols-vchena-rada/protocol-2024-07.pdf" },
      { title: "Протокол засідання від 15.01.2024 р.", href: "/protocols-vchena-rada/protocol-2024-08.pdf" },
      { title: "Протокол засідання від 28.02.2024р.", href: "/protocols-vchena-rada/protocol-2024-09.pdf" },
    ],
  },
  {
    year: "2023",
    items: [
      { title: "Протокол засідання від 09.02.2023 р.", href: "/protocols-vchena-rada/protocol-2023-01.pdf" },
      { title: "Протокол засідання від 27.03.2023р.", href: "/protocols-vchena-rada/protocol-2023-02.pdf" },
      { title: "Протокол засідання від 26.06.2023р.", href: "/protocols-vchena-rada/protocol-2023-03.pdf" },
      { title: "Протокол засідання від 23.11.2023р.", href: "/protocols-vchena-rada/protocol-2023-04.pdf" },
      { title: "Протокол засідання від 29.12.0023р.", href: "/protocols-vchena-rada/protocol-2023-05.pdf" },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "Протокол засідання від 01.02.2022 р.", href: "/protocols-vchena-rada/protocol-2022-01.pdf" },
      { title: "Протокол засідання від 10.03.2022р.", href: "/protocols-vchena-rada/protocol-2022-02.pdf" },
      { title: "Протокол засідання від 26.04.2022р.", href: "/protocols-vchena-rada/protocol-2022-03.pdf" },
      { title: "Протокол засідання від 20.06.2022р.", href: "/protocols-vchena-rada/protocol-2022-04.pdf" },
      { title: "Протокол засідання від 05.09.2022р.", href: "/protocols-vchena-rada/protocol-2022-05.pdf" },
      { title: "Протокол засідання від 20.10.2022р.", href: "/protocols-vchena-rada/protocol-2022-06.pdf" },
    ],
  },
  {
    year: "2021",
    items: [
      { title: "Протокол засідання від 19.01.2021 р.", href: "/protocols-vchena-rada/protocol-2021-01.pdf" },
      { title: "Протокол засідання від 09.02.2021р.", href: "/protocols-vchena-rada/protocol-2021-02.pdf" },
      { title: "Протокол засідання від 15.02.2021р.", href: "/protocols-vchena-rada/protocol-2021-03.pdf" },
      { title: "Протокол засідання від 15.03.2021р.", href: "/protocols-vchena-rada/protocol-2021-04.pdf" },
      { title: "Протокол засідання від 11.05.2021р.", href: "/protocols-vchena-rada/protocol-2021-05.pdf" },
      { title: "Протокол засідання від 17.06.2021р.", href: "/protocols-vchena-rada/protocol-2021-06.pdf" },
      { title: "Протокол засідання від 07.09.2021р.", href: "/protocols-vchena-rada/protocol-2021-07.pdf" },
      { title: "Протокол засідання від 25.11.2021р.", href: "/protocols-vchena-rada/protocol-2021-08.pdf" },
    ],
  },
  {
    year: "2020",
    items: [
      { title: "Протокол засідання від 06.02.2020р.", href: "/protocols-vchena-rada/protocol-2020-01.pdf" },
      { title: "Протокол засідання від 18.02.2020р.", href: "/protocols-vchena-rada/protocol-2020-02.pdf" },
      { title: "Протокол засідання від 16.03.2020р.", href: "/protocols-vchena-rada/protocol-2020-03.pdf" },
      { title: "Протокол засідання від 28.04.2020р.", href: "/protocols-vchena-rada/protocol-2020-04.pdf" },
      { title: "Протокол засідання від 21.05.2020р.", href: "/protocols-vchena-rada/protocol-2020-05.pdf" },
      { title: "Протокол засідання від 02.09.2020р.", href: "/protocols-vchena-rada/protocol-2020-06.pdf" },
      { title: "Протокол засідання від 10.09.2020р.", href: "/protocols-vchena-rada/protocol-2020-07.pdf" },
    ],
  },
  {
    year: "2019",
    items: [
      { title: "Протокол засідання від 12.03.2019р.", href: "/protocols-vchena-rada/protocol-2019-01.pdf" },
      { title: "Протокол засідання від 19.04.2019р.", href: "/protocols-vchena-rada/protocol-2019-02.pdf" },
      { title: "Протокол засідання від 31.05.2019р.", href: "/protocols-vchena-rada/protocol-2019-03.pdf" },
      { title: "Протокол засідання від 06.06.2019р.", href: "/protocols-vchena-rada/protocol-2019-04.pdf" },
      { title: "Протокол засідання від 14.11.2019р.", href: "/protocols-vchena-rada/protocol-2019-05.pdf" },
    ],
  },
  {
    year: "2018",
    items: [
      { title: "Протокол засідання від 09.02.2018р.", href: "/protocols-vchena-rada/protocol-2018-01.pdf" },
      { title: "Протокол засідання від 14.05.2018р.", href: "/protocols-vchena-rada/protocol-2018-02.pdf" },
      { title: "Протокол засідання від 14.09.2018р.", href: "/protocols-vchena-rada/protocol-2018-03.pdf" },
      { title: "Протокол засідання від 22.10.2018р.", href: "/protocols-vchena-rada/protocol-2018-04.pdf" },
      { title: "Протокол засідання від 09.11.2018р.", href: "/protocols-vchena-rada/protocol-2018-05.pdf" },
    ],
  },
  {
    year: "2017",
    items: [
      { title: "Протокол засідання №1 від 16.02.2017р.", href: "/protocols-vchena-rada/protocol-2017-01.pdf" },
      { title: "Протокол засідання №2 від 20.03.2017р.", href: "/protocols-vchena-rada/protocol-2017-02.pdf" },
      { title: "Протокол засідання №3 від 07.04.2017р.", href: "/protocols-vchena-rada/protocol-2017-03.pdf" },
      { title: "Протокол засідання №4 від 29.05.2017р.", href: "/protocols-vchena-rada/protocol-2017-04.pdf" },
      { title: "Протокол засідання №5 від 04.08.2017р.", href: "/protocols-vchena-rada/protocol-2017-05.pdf" },
      { title: "Протокол засідання №6 від 21.08.2017р.", href: "/protocols-vchena-rada/protocol-2017-06.pdf" },
      { title: "Протокол засідання №7 від 20.09.2017р.", href: "/protocols-vchena-rada/protocol-2017-07.pdf" },
      { title: "Протокол засідання №8 від 03.11.2017р.", href: "/protocols-vchena-rada/protocol-2017-08.pdf" },
    ],
  },
];

export default function ScientistsCouncil() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-6 p-2 text-[#002766]">
        <header className="overflow-hidden rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] shadow-sm">
          <div className="p-5 md:p-6">
            <h2 className="border-b-2 border-[#51749E] pb-2 text-xl font-bold">
              Вчена рада
            </h2>
            <p className="mt-4 indent-6 text-justify text-sm leading-relaxed text-gray-700">
              Вчена рада ІПБ АЕС є колегіальним органом управління науковою і
              науково-технічною діяльністю Інституту, який виконує
              консультативно-дорадчі функції.
            </p>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-[#c8d8ea] bg-white p-5 shadow-sm md:col-span-2">
            <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold">
              Загальна інформація
            </h3>
            <div className="mt-4 space-y-3 indent-6 text-justify text-sm leading-7 text-gray-700">
              <p>
                Вчена Рада ІПБ АЕС НАН України створена Наказом засідання бюро
                Відділення фізико-технічних проблем енергетики НАН України,
                Протокол № 1 від 20.01.2005 р., Протокол № 55 від 29.03.2016 р.
              </p>
              <p>
                Головою Вченої ради з 2016 р. призначено директора ІПБ АЕС НАН
                України Носовського Анатолія Володимировича.
              </p>
              <p>
                Вчена рада обговорює основні наукові напрями діяльності
                Інституту і рекомендує їх до розгляду Відділенням енергетики та
                енергетичних технологій НАН України та затвердження Президією
                НАН України.
              </p>
              <p>Вчена рада діє на основі Положення про Вчену раду ІПБ АЕС.</p>
            </div>
          </div>

          <div className="rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0061AA]">
                <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#51749E]">Склад ради</p>
                <p className="text-2xl font-bold text-[#002766]">15 осіб</p>
              </div>
            </div>
            <p className="mt-4 indent-6 text-justify text-sm leading-relaxed text-gray-700">
              На сторінці наведено чинний склад ради, компетенції та архів
              протоколів засідань.
            </p>
          </div>
        </section>

        <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold">
              Документи Вченої ради
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {documents.map((document) => (
                <a
                  key={document.title}
                  href={document.href}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="grid grid-cols-[40px_1fr_28px] items-center gap-3 rounded-md border border-[#c8d8ea] bg-[#EFF4FB] p-4 text-sm text-[#002766] transition hover:border-[#0061AA] hover:bg-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0061AA]">
                    <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold leading-relaxed">{document.title}</span>
                  <ArrowDownTrayIcon className="h-5 w-5 text-[#0061AA]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold">
              До виключної компетенції Вченої ради належать питання щодо
            </h3>
            <ol className="mt-5 grid gap-3">
              {competences.map((competence, index) => (
                <li
                  key={competence}
                  className="grid grid-cols-[32px_1fr] gap-3 text-sm leading-7 text-gray-700"
                >
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#0061AA] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="block text-justify">{competence}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold">
              Склад Вченої ради ІПБ АЕС НАН України
            </h3>
            <div className="mt-5 grid gap-4">
              {members.map((memberGroup) => (
                <div
                  key={memberGroup.group}
                  className="rounded-md border border-[#c8d8ea] bg-[#EFF4FB] p-4"
                >
                  <h4 className="text-sm font-bold text-[#002766]">
                    {memberGroup.group}
                  </h4>
                  <div className="mt-3 grid gap-2">
                    {memberGroup.people.map((person) => (
                      <p
                        key={person}
                        className="grid grid-cols-[22px_1fr] gap-2 text-sm leading-relaxed text-gray-700"
                      >
                        <CheckCircleIcon
                          className="mt-0.5 h-5 w-5 text-[#0061AA]"
                          aria-hidden="true"
                        />
                        <span className="block text-justify">{person}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProtocolTabs groups={protocolGroups} />
      </article>
    </MainLayout>
  );
}
