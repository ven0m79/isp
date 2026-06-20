import { MainLayout } from "@app/components/templates";
import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import ProtocolTabs, { ProtocolGroup } from "../scientists-council/ProtocolTabs";

const info = {
  title: "Рада молодих вчених",
  description:
    "Рада молодих вчених ІПБ АЕС НАН України об'єднує молодь з вищою освітою не нижче другого (магістерського) рівня віком до 35 років включно або з науковим ступенем доктора наук віком до 40 років включно.",
};

const competences = [
  "захист і реалізація професійних, інтелектуальних та юридичних інтересів молодих співробітників;",
  "сприяння розвитку науки і науково-технічної діяльності;",
  "організація молодіжних семінарів та наукових заходів;",
  "участь у програмах обміну досвідом та міжнародних проєктах;",
  "підтримка молодих науковців у здобутті наукових ступенів;",
  "забезпечення можливостей підготовки та перепідготовки кадрів;",
  "сприяння кар'єрному зростанню молодих спеціалістів;",
  "організація стажування та участь у міжнародних форумах.",
];

const members = [
  {
    group: "Голова Ради молодих вчених",
    people: [
      "Торяник А. Ю. – провідний інженер",
    ],
  },
  {
    group: "Статус членства",
    people: [
      "Загальна кількість членів ради: 18 осіб",
      "Молоді вчені активно беруть участь у науково-дослідних роботах за бюджетною, програмно-цільовою та конкурсною тематиками",
      "3 молодих науковців працюють над дисертаціями на здобуття ступеня доктора наук",
      "6 молодих науковців працюють на здобуття ступеня доктора філософії",
      "6 працівників навчаються в аспірантурі",
      "8 працівників здобувають фахову вищу або другу вищу освіту",
    ],
  },
];

const documents = [
  {
    title: "Положення про Раду молодих вчених",
    href: "/council-of-young-scientists/polojennja-pro-molodijnu-radu.pdf",
  },
  {
    title: "Наказ про затвердження Положення Ради молодих вчених",
    href: "/council-of-young-scientists/nakaz-rada-molodyx-vchenyx.pdf",
  },
];

const protocolGroups: ProtocolGroup[] = [
  {
    year: "2022",
    items: [
      { title: "Протокол засідання від 27.09.2022 р.", href: "/council-of-young-scientists/protokol-27092022.pdf" },
      { title: "Протокол засідання від 23.06.2022 р.", href: "/council-of-young-scientists/protokol-23062022.pdf" },
      { title: "Протокол засідання від 28.02.2022 р.", href: "/council-of-young-scientists/protokol-28022022.pdf" },
      { title: "Протокол засідання від 18.01.2022 р.", href: "/council-of-young-scientists/protokol-18012022.pdf" },
    ],
  },
  {
    year: "2021",
    items: [
      { title: "Протокол засідання від 30.11.2021 р.", href: "/council-of-young-scientists/protokol-30112021.pdf" },
      { title: "Протокол засідання від 29.09.2021 р.", href: "/council-of-young-scientists/protokol-29092021.pdf" },
      { title: "Протокол засідання від 28.07.2021 р.", href: "/council-of-young-scientists/protokol-28072021.pdf" },
      { title: "Протокол засідання від 26.05.2021 р.", href: "/council-of-young-scientists/protokol-26052021.pdf" },
      { title: "Протокол засідання від 25.03.2021 р.", href: "/council-of-young-scientists/protokol-25032021.pdf" },
      { title: "Протокол засідання від 20.01.2021 р.", href: "/council-of-young-scientists/protokol-20012021.pdf" },
    ],
  },
  {
    year: "2018-2017",
    items: [
      { title: "Протокол засідання від 13.03.2018 р.", href: "/council-of-young-scientists/protokol-13032018.pdf" },
      { title: "Протокол засідання від 27.09.2017 р.", href: "/council-of-young-scientists/protokol-27092017.pdf" },
      { title: "Протокол засідання від 15.03.2017 р.", href: "/council-of-young-scientists/protokol-15032017.pdf" },
      { title: "Протокол засідання від 02.03.2017 р.", href: "/council-of-young-scientists/protokol-02032017.pdf" },
    ],
  },
];

export default function CouncilOfYoungScientists() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-6 p-2 text-[#002766]">
        <header className="overflow-hidden rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] shadow-sm">
          <div className="p-5 md:p-6">
            <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
              {info.title}
            </h2>
            <p className="mt-4 indent-6 text-sm leading-relaxed text-gray-700 text-justify">
              {info.description}
            </p>
          </div>
        </header>

        <div className="grid gap-5">
          {/* Competences Section */}
          <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
            <div className="p-5 md:p-6 space-y-4">
              <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766] flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5" />
                Напрями діяльності
              </h3>
              <ul className="space-y-2">
                {competences.map((comp, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-700">
                    <span className="text-[#0061AA] font-bold min-w-fit">•</span>
                    <span className="text-justify">{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Members Section */}
          <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
            <div className="p-5 md:p-6 space-y-5">
              <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766] flex items-center gap-2">
                <UserGroupIcon className="w-5 h-5" />
                Склад Ради молодих вчених
              </h3>
              {members.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-bold text-[#0061AA] text-sm md:text-base">
                    {section.group}
                  </h4>
                  <ul className="space-y-1 ml-4">
                    {section.people.map((person, pidx) => (
                      <li key={pidx} className="text-sm text-gray-700 leading-relaxed">
                        {person}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Documents Section */}
          <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
            <div className="p-5 md:p-6 space-y-4">
              <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766] flex items-center gap-2">
                <ArrowDownTrayIcon className="w-5 h-5" />
                Документи
              </h3>
              <div className="space-y-2">
                {documents.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md border border-[#c8d8ea] hover:bg-[#EFF4FB] hover:border-[#0061AA] transition-all group"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4 text-[#0061AA] group-hover:text-[#002766]" />
                    <span className="text-sm font-medium text-[#0061AA] group-hover:text-[#002766]">
                      {doc.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Protocols Section */}
          <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
            <div className="p-5 md:p-6 space-y-4">
              <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766]">
                Протоколи засідань
              </h3>
              <ProtocolTabs groups={protocolGroups} />
            </div>
          </section>

          {/* Additional Info Section */}
          <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
            <div className="p-5 md:p-6 space-y-4">
              <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766]">
                Інформація про діяльність
              </h3>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p className="text-justify indent-6">
                  За ініціативи молоді та підтримки дирекції Ради молодих вчених ІПБ АЕС НАН України
                  регулярно проводяться молодіжні семінари та наукові заходи. Щороку організовується не менше 7 молодіжних семінарів.
                </p>
                <p className="text-justify indent-6">
                  Молоді вчені ІПБ АЕС активно беруть участь у науково-дослідних роботах за бюджетною, програмно-цільовою та конкурсною тематиками,
                  а також у міжнародних проєктах з НАТО та МАГАТЕ. На постійній основі беруть участь у багатьох міжнародних та національних заходах.
                </p>
                <p className="text-justify indent-6">
                  Встановлені програми підтримки молодих вчених, включаючи призначення на вищі керівні посади після захисту дисертацій,
                  участь у програмах підготовки кадрового резерву та міжнародних стажуваннях.
                </p>
                <p className="text-justify indent-6">
                  Здобутки молодих вчених ІПБ АЕС регулярно відзначаються нагородами та грамотами від НАН України та її відділень.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </MainLayout>
  );
}
