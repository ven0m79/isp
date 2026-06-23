import Image from "next/image";
import { MainLayout } from "@app/components/templates";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  HandRaisedIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

type CommitteeSection = {
  title: string;
  members: string[];
};

type UnionDocument = {
  title: string;
  file: string;
  period: string;
  size: string;
  kind: "collective" | "sectoral";
};

const assetPath = "/activity/union-committee";

const responsibilities = [
  "Контролює дотримання чинного законодавства про працю.",
  "Вивчає проєкти нормативних документів з питань, що стосуються членів профспілки, подає зауваження і пропозиції до відповідних органів.",
  "Пропонує заходи соціального захисту працівників, що звільняються внаслідок реорганізації або скорочення штату.",
  "Бере участь у врегулюванні колективних трудових спорів щодо умов праці, заробітної плати та виконання колективного договору.",
  "Доводить до адміністрації мотивовані думки щодо оплати праці, норм праці, матеріального заохочення і тарифних ставок.",
  "Веде переговори з адміністрацією, укладає колективний договір і контролює його виконання.",
];

const committeeSections: CommitteeSection[] = [
  {
    title: "Керівництво профкому",
    members: [
      "Голова профкому - Одінцов Олексій Олександрович.",
      "Заступник голови профкому - Кудлай Володимир Георгійович.",
    ],
  },
  {
    title: "Виробнича комісія",
    members: ["Балибердіна Юлія Петрівна - член комісії."],
  },
  {
    title: "Організаційно-масова комісія",
    members: ["Фещенко Тетяна Тофілієвна - голова комісії."],
  },
  {
    title: "Комісія із соціального страхування і оздоровлення",
    members: [
      "Одінцов Олексій Олексійович - голова комісії.",
      "Слепченко Галина Станіславовна - член комісії.",
    ],
  },
  {
    title: "Житлово-побутова комісія",
    members: ["Слепченко Галина Станіславовна - голова комісії."],
  },
];

const documents: UnionDocument[] = [
  {
    title: "Колективний договір ІПБ АЕС",
    file: "collective-agreement-2021-2022.pdf",
    period: "2021-2022",
    size: "721 KB",
    kind: "collective",
  },
  {
    title: "Колективний договір ІПБ АЕС",
    file: "collective-agreement-2018-2019.pdf",
    period: "2018-2019",
    size: "1.17 MB",
    kind: "collective",
  },
  {
    title: "Галузева угода між НАН України та Профспілкою працівників НАН України",
    file: "sectoral-agreement-2026-2027.pdf",
    period: "2026-2027",
    size: "6.41 MB",
    kind: "sectoral",
  },
  {
    title: "Галузева угода між НАН України та Профспілкою працівників НАН України",
    file: "sectoral-agreement-2021-2022.pdf",
    period: "2021-2022",
    size: "15.41 MB",
    kind: "sectoral",
  },
];

const stats = [
  { value: "80%", label: "співробітників у профспілці" },
  { value: "5 років", label: "виборчий цикл профкому" },
  { value: "щороку", label: "звітна конференція" },
];

export default function UnionCommittee() {
  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="overflow-hidden rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f7fbfd] to-[#dcebf6] p-6 shadow-sm md:p-8">
          <div className="grid gap-6 lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#51749E]">
                Первинна профспілкова організація
              </p>
              <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Профспілка</h1>
              <h2 className="mt-3 text-2xl font-bold leading-tight">Захист трудових і соціально-економічних прав працівників</h2>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[#294e70] md:text-base">
                Профспілкова організація ІПБ АЕС НАН України є громадською некомерційною організацією, що представляє
                і захищає законні права та інтереси членів профспілки перед роботодавцями, органами влади, місцевого
                самоврядування, судовими органами та іншими організаціями України.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-[#c8d8ea] bg-white p-4 text-center shadow-sm">
                    <strong className="block text-xl text-[#07518F]">{stat.value}</strong>
                    <span className="mt-1 block text-xs leading-5 text-[#51749E]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-5 lg:grid-cols-[430px_1fr]">
          <aside className="flex items-start gap-5 rounded-2xl border border-[#c8d8ea] bg-[#f6f9fc] p-5 shadow-sm">
            <div className="shrink-0 overflow-hidden rounded-xl border border-[#dce7f1] bg-white shadow-sm">
              <Image
                src={`${assetPath}/images/odintsov.webp`}
                alt="Одінцов Олексій Олександрович"
                width={160}
                height={208}
                className="h-52 w-40 object-contain p-1"
              />
            </div>
            <div className="min-w-0 pt-1">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">Голова профспілкового комітету</p>
              <h2 className="text-xl font-bold">Одінцов Олексій Олексійович</h2>
              <p className="mt-4 text-sm leading-7 text-[#294e70]">
                Вищим органом профспілкової організації є загальні збори або конференція трудового колективу.
                Засідання профспілкового комітету відбуваються кожного непарного вівторка о 18:00.
              </p>
            </div>
          </aside>

          <section className="rounded-2xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#07518F] text-white">
                <HandRaisedIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">Повноваження профкому</p>
                <h2 className="mt-2 text-2xl font-bold">Основні напрями роботи</h2>
              </div>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {responsibilities.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-[#dce7f1] bg-[#fbfdff] p-4">
                  <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#0b77b7]" aria-hidden="true" />
                  <p className="text-sm leading-6 text-[#294e70]">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="mt-6 rounded-2xl border border-[#c8d8ea] bg-[#EFF4FB] p-5 md:p-7">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#07518F] shadow-sm">
              <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">Структура</p>
              <h2 className="mt-2 text-2xl font-bold">Склад профспілкового комітету</h2>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {committeeSections.map((section) => (
              <section key={section.title} className="rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm">
                <h3 className="font-bold text-[#07518F]">{section.title}</h3>
                <ul className="mt-3 space-y-2">
                  {section.members.map((member) => (
                    <li key={member} className="flex gap-2 text-sm leading-6 text-[#294e70]">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0b77b7]" />
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#07518F] text-white">
              <ClipboardDocumentCheckIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">Локальний архів</p>
              <h2 className="mt-2 text-2xl font-bold">Колективні договори та галузеві угоди</h2>
              <p className="mt-2 text-sm leading-7 text-[#294e70]">
                Документи збережено локально. PDF-файли оптимізовано, коли це давало менший розмір без втрати читабельності.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-[#dce7f1] bg-[#dce7f1] md:grid-cols-2">
            {documents.map((document) => {
              const href = `${assetPath}/documents/${document.file}`;
              const isCollective = document.kind === "collective";

              return (
                <div key={document.file} className="flex flex-col bg-white p-5 transition hover:bg-[#fbfdff]">
                  <div className="flex items-start gap-4">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isCollective ? "bg-[#e6f2f9] text-[#07518F]" : "bg-[#e7f5ee] text-[#18794e]"}`}>
                      {isCollective ? <DocumentTextIcon className="h-6 w-6" aria-hidden="true" /> : <ScaleIcon className="h-6 w-6" aria-hidden="true" />}
                    </span>
                    <div>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${isCollective ? "bg-[#e6f2f9] text-[#07518F]" : "bg-[#e7f5ee] text-[#18794e]"}`}>
                        {isCollective ? "Колективний договір" : "Галузева угода"}
                      </span>
                      <h3 className="mt-2 text-sm font-bold leading-6 md:text-base">{document.title}</h3>
                      <p className="mt-1 text-xs text-[#6b8297]">{document.period} · PDF · {document.size}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 sm:pl-15">
                    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#8fbad6] bg-[#f6f9fc] px-3 py-2 text-xs font-bold text-[#07518F] transition hover:bg-[#dcebf6]">
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                      Відкрити
                    </a>
                    <a href={href} download className="inline-flex items-center gap-2 rounded-lg bg-[#07518F] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#0061AA]">
                      <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
                      Завантажити
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </article>
    </MainLayout>
  );
}
