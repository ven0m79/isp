import Image from "next/image";
import { MainLayout } from "@app/components/templates";
import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import ProtocolTabs, { ProtocolGroup } from "../scientists-council/ProtocolTabs";

type CouncilGroup = {
  group: string;
  people: string[];
};

type DocumentLink = {
  title: string;
  href: string;
};

type DefenseArchive = {
  name: string;
  topic: string;
  specialty: string;
  documents: DocumentLink[];
};

const localPath = "/specialized-scientists-council/";

const councilGroups: CouncilGroup[] = [
  {
    group: "Голова ради",
    people: [
      "Носовський Анатолій Володимирович, д-р техн. наук, професор, директор ІПБ АЕС НАН України, спеціальність 05.14.14.",
    ],
  },
  {
    group: "Заступник голови",
    people: [
      "Талерко Микола Миколайович, д-р техн. наук, зав. відділу ІПБ АЕС НАН України, спеціальність 21.06.01.",
    ],
  },
  {
    group: "Вчений секретар",
    people: [
      "Кучмагра Олександр Аркадійович, канд. техн. наук, ст. наук. співр., пров. наук. співр. ІПБ АЕС НАН України, спеціальність 21.06.01.",
    ],
  },
  {
    group: "Члени ради",
    people: [
      "Бондарьков Михайло Дмитрович, д-р техн. наук, директор ДНДУ «Чорнобильський центр з проблем ядерної безпеки, радіоактивних відходів та радіоекології», спеціальність 21.06.01;",
      "Борисенко Володимир Іванович, д-р техн. наук, зав. відділення ІПБ АЕС НАН України, спеціальність 05.14.14;",
      "Габєлков Сергій Володимирович, д-р фіз.-мат. наук, ст. наук. співр., завідувач відділу ІПБ АЕС НАН України, спеціальність 05.14.14;",
      "Гаргер Євгеній Костянтинович, д-р фіз.-мат. наук, проф., гол. наук. співр., ІПБ АЕС НАН України, спеціальність 21.06.01;",
      "Желтоножський Віктор Олександрович, д-р фіз.-мат. наук, проф., пров. наук. співр. Інституту ядерних досліджень НАН України, спеціальність 05.14.14;",
      "Зімін Леонід Борисович, д-р техн. наук, ст. наук. співр., пров. наук. співр. ІПБ АЕС НАН України, спеціальність 05.14.14;",
      "Корольов Олександр Вікторович, д-р техн. наук, професор кафедри Одеського національного політехнічного університету, спеціальність 05.14.14;",
      "Павлович Володимир Миколайович, д-р фіз.-мат. наук, проф., керівник відділу Інституту ядерних досліджень НАН України, спеціальність 05.14.14;",
      "Прістер Борис Самуїлович, академік УААН, д-р біол. наук, проф., гол. наук. співр. ІПБ АЕС НАН України, спеціальність 21.06.01;",
      "Рязанов Василь Васильович, д-р ф.-м. наук, ст. наук. співр., пров. наук. співр. Інституту ядерних досліджень НАН України, спеціальність 05.14.14;",
      "Скорбун Анатолій Дмитрович, д-р техн. наук, гол. наук. співр. відділу ІПБ АЕС НАН України, спеціальність 21.06.01;",
      "Шараєвський Ігор Георгійович, д-р техн. наук, ст. наук. співр., доц., зав. сектору ІПБ АЕС НАН України, спеціальність 05.14.14.",
    ],
  },
];

const specialties = [
  "05.14.14 «Теплові та ядерні енергоустановки»",
  "21.06.01 «Екологічна безпека» (технічні науки)",
];

const informationDocuments: DocumentLink[] = [
  {
    title: "Паспорт спеціальності 21.06.01 – екологічна безпека",
    href: `${localPath}info-passport-210601.pdf`,
  },
  {
    title: "Паспорт спеціальності 05.14.14 – теплові та ядерні енергоустановки",
    href: `${localPath}info-passport-051414.pdf`,
  },
  {
    title: "Перелік документів, які подає до спеціалізованої вченої ради",
    href: `${localPath}info-documents-list.pdf`,
  },
  {
    title: "Основні вимоги до оформлення дисертацій",
    href: `${localPath}info-dissertation-requirements.pdf`,
  },
  {
    title: "Основні вимоги до оформлення авторефератів дисертацій",
    href: `${localPath}info-abstract-requirements.pdf`,
  },
];

const protocolGroups: ProtocolGroup[] = [
  {
    year: "2021",
    items: [
      {
        title: "Протокол засідання від 01.02.2021 р.",
        href: `${localPath}protocol-2021-02-01.pdf`,
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        title: "Протокол засідання від 30.11.2020 р.",
        href: `${localPath}protocol-2020-11-30.pdf`,
      },
      {
        title: "Протокол засідання від 03.07.2020 р.",
        href: `${localPath}protocol-2020-07-03.pdf`,
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        title: "Протокол засідання від 13.05.2019 р.",
        href: `${localPath}protocol-2019-05-13.pdf`,
      },
      {
        title: "Протокол засідання від 11.03.2019 р.",
        href: `${localPath}protocol-2019-03-11.pdf`,
      },
      {
        title: "Протокол засідання від 04.02.2019 р.",
        href: `${localPath}protocol-2019-02-04.pdf`,
      },
    ],
  },
  {
    year: "2018",
    items: [
      {
        title: "Протокол засідання від 17.12.2018 р.",
        href: `${localPath}protocol-2018-12-17.pdf`,
      },
      {
        title: "Протокол засідання від 18.06.2018 р.",
        href: `${localPath}protocol-2018-06-18.pdf`,
      },
      {
        title: "Протокол засідання від 16.03.2018 р.",
        href: `${localPath}protocol-2018-03-16.pdf`,
      },
    ],
  },
  {
    year: "2017",
    items: [
      {
        title: "Протокол засідання від 29.11.2017 р.",
        href: `${localPath}protocol-2017-11-29.pdf`,
      },
    ],
  },
];

const defenseArchive: DefenseArchive[] = [
  {
    name: "Кухоцький О. В.",
    topic:
      "«Аналіз безпеки дослідницьких ядерних установок з використанням CFD технологій»",
    specialty: "05.14.14 – теплові та ядерні енергоустановки",
    documents: [
      {
        title: "Повідомлення про захист дисертації (29.12.2020)",
        href: `${localPath}defense-kukhotsky-notice.doc`,
      },
      {
        title: "Автореферат (29.12.2020)",
        href: `${localPath}defense-kukhotsky-abstract.pdf`,
      },
      {
        title: "Дисертація (29.12.2020)",
        href: `${localPath}defense-kukhotsky-dissertation.pdf`,
      },
      {
        title: "Відгук опонента 1 (21.01.2021)",
        href: `${localPath}defense-kukhotsky-review-1.pdf`,
      },
      {
        title: "Відгук опонента 2 (21.01.2021)",
        href: `${localPath}defense-kukhotsky-review-2.pdf`,
      },
    ],
  },
  {
    name: "Горанчук В. В.",
    topic:
      "«Моніторинг активної зони ВВЕР-1000 методами нейтронно-шумової діагностики»",
    specialty: "05.14.14 – теплові та ядерні енергоустановки",
    documents: [
      {
        title: "Автореферат",
        href: `${localPath}defense-goranchuk-abstract.pdf`,
      },
      {
        title: "Дисертація",
        href: `${localPath}defense-goranchuk-dissertation.pdf`,
      },
      {
        title: "Відгук опонента 1",
        href: `${localPath}defense-goranchuk-review-1.pdf`,
      },
      {
        title: "Відгук опонента 2",
        href: `${localPath}defense-goranchuk-review-2.pdf`,
      },
    ],
  },
  {
    name: "Деренговський В. В.",
    topic:
      "«Удосконалений метод багатокритеріального аналізу екологічної безпеки об’єктів із радіаційно-ядерними технологіями»",
    specialty: "21.06.01 – екологічна безпека",
    documents: [
      {
        title: "Автореферат",
        href: `${localPath}defense-derengovsky-abstract.pdf`,
      },
      {
        title: "Дисертація",
        href: `${localPath}defense-derengovsky-dissertation.pdf`,
      },
      {
        title: "Відгук опонента 1",
        href: `${localPath}defense-derengovsky-review-1.pdf`,
      },
      {
        title: "Відгук опонента 2",
        href: `${localPath}defense-derengovsky-review-2.pdf`,
      },
    ],
  },
  {
    name: "Сватюк Н. І.",
    topic:
      "«Радіоекологічний моніторинг гірських районів Закарпаття: вплив просторових та сезонних факторів на нуклідний склад об’єктів довкілля»",
    specialty: "21.06.01 – екологічна безпека, технічні науки",
    documents: [
      {
        title: "Автореферат",
        href: `${localPath}defense-svatyuk-abstract.pdf`,
      },
      {
        title: "Дисертація",
        href: `${localPath}defense-svatyuk-dissertation.pdf`,
      },
      {
        title: "Відгук опонента 1",
        href: `${localPath}defense-svatyuk-review-1.pdf`,
      },
      {
        title: "Відгук опонента 2",
        href: `${localPath}defense-svatyuk-review-2.pdf`,
      },
    ],
  },
  {
    name: "Білодід Е. І.",
    topic:
      "«Науково-технічні основи зменшення надлишкового консерватизму при аналізі безпеки ядерних установок»",
    specialty: "05.14.14 – теплові та ядерні енергоустановки",
    documents: [
      {
        title: "Автореферат",
        href: `${localPath}defense-bilodid-abstract.pdf`,
      },
      {
        title: "Дисертація",
        href: `${localPath}defense-bilodid-dissertation.pdf`,
      },
      {
        title: "Відгук опонента 1",
        href: `${localPath}defense-bilodid-review-1.pdf`,
      },
      {
        title: "Відгук опонента 2",
        href: `${localPath}defense-bilodid-review-2.pdf`,
      },
    ],
  },
  {
    name: "Борисенко В. І.",
    topic:
      "«Вдосконалення методів і засобів оперативного контролю та діагностики нейтронно-фізичних параметрів ядерних установок»",
    specialty: "05.14.14 – теплові та ядерні енергоустановки",
    documents: [
      {
        title: "Повідомлення про захист дисертації",
        href: `${localPath}defense-borisenko-notice.pdf`,
      },
      {
        title: "Протокол засідання спец. ради",
        href: `${localPath}defense-borisenko-protocol.pdf`,
      },
      {
        title: "Автореферат",
        href: `${localPath}defense-borisenko-abstract.pdf`,
      },
      {
        title: "Дисертація",
        href: `${localPath}defense-borisenko-dissertation.pdf`,
      },
      {
        title: "Відгук офіційного опонента 1",
        href: `${localPath}defense-borisenko-review-1.pdf`,
      },
      {
        title: "Відгук офіційного опонента 2",
        href: `${localPath}defense-borisenko-review-2.pdf`,
      },
      {
        title: "Відгук офіційного опонента 3",
        href: `${localPath}defense-borisenko-review-3.pdf`,
      },
    ],
  },
  {
    name: "Калиновський О. К.",
    topic:
      "«Удосконалення моніторингу радіоактивних аерозолів у локальній зоні об’єкта «Укриття» на етапі спорудження нового безпечного конфайнмента «Арка»»",
    specialty: "21.06.01 – екологічна безпека (технічні науки)",
    documents: [
      {
        title: "Анотація",
        href: `${localPath}defense-kalynovsky-annotation.pdf`,
      },
      {
        title: "Автореферат",
        href: `${localPath}defense-kalynovsky-abstract.pdf`,
      },
      {
        title: "Дисертація",
        href: `${localPath}defense-kalynovsky-dissertation.pdf`,
      },
      {
        title: "Відгук опонента 1",
        href: `${localPath}defense-kalynovsky-review-1.pdf`,
      },
      {
        title: "Відгук опонента 2",
        href: `${localPath}defense-kalynovsky-review-2.pdf`,
      },
      {
        title: "Відгук сторонньої організації 1",
        href: `${localPath}defense-kalynovsky-org-review-1.pdf`,
      },
      {
        title: "Відгук сторонньої організації 2",
        href: `${localPath}defense-kalynovsky-org-review-2.pdf`,
      },
      {
        title: "Відгук сторонньої організації 3",
        href: `${localPath}defense-kalynovsky-org-review-3.pdf`,
      },
      {
        title: "Відгук сторонньої організації 4",
        href: `${localPath}defense-kalynovsky-org-review-4.pdf`,
      },
    ],
  },
];

function DocumentGrid({ documents }: { documents: DocumentLink[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {documents.map((document) => (
        <a
          key={document.href}
          href={document.href}
          download
          target="_blank"
          rel="noreferrer"
          className="grid grid-cols-[40px_1fr_28px] items-center gap-3 rounded-md border border-[#c8d8ea] bg-[#EFF4FB] p-4 text-sm text-[#002766] transition hover:border-[#0061AA] hover:bg-white"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0061AA]">
            <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-semibold leading-relaxed text-justify">
            {document.title}
          </span>
          <ArrowDownTrayIcon className="h-5 w-5 text-[#0061AA]" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function SpecializedScientistsCouncil() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-6 p-2 text-[#002766]">
        <header className="overflow-hidden rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] shadow-sm">
          <div className="relative">
            <Image
              src="/banned.webp"
              alt="Banner"
              width={300}
              height={120}
              className="absolute right-0 top-0 z-20 max-w-none"
            />
            
            <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6">
              <h2 className="border-b-2 border-[#51749E] pb-2 text-xl font-bold">
                Спеціалізована вчена рада
              </h2>
              <p className="mt-4 indent-6 text-justify text-sm leading-relaxed text-gray-700">
                Спеціалізована вчена рада Д 27.201.01 Інституту проблем безпеки
                АЕС НАН України мала право приймати до розгляду та проводити
                захист дисертацій на здобуття наукового ступеня доктора
                (кандидата) технічних наук.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-[#c8d8ea] bg-white p-5 shadow-sm md:col-span-2">
            <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold">
              Загальна інформація
            </h3>
            <div className="mt-4 space-y-3 indent-6 text-justify text-sm leading-7 text-gray-700">
              <p>
                Наказом Міністерства освіти і науки України від 28.12.2019 р.
                № 1643 затверджено склад спеціалізованої вченої ради Д
                27.201.01 в ІПБ АЕС НАН України терміном до 31.12.2020 р.
              </p>
              <p>
                Рада працювала за спеціальностями 05.14.14 «Теплові та ядерні
                енергоустановки» та 21.06.01 «Екологічна безпека» (технічні
                науки).
              </p>
              <p>З 2021 року діяльність спеціалізованої вченої ради призупинено.</p>
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
              На сторінці зібрано склад ради, спеціальності, інформаційні
              матеріали, протоколи засідань та архів захистів дисертацій.
            </p>
          </div>
        </section>

        <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold">
              Спеціальності
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {specialties.map((specialty) => (
                <div
                  key={specialty}
                  className="grid grid-cols-[32px_1fr] gap-3 rounded-md border border-[#c8d8ea] bg-[#EFF4FB] p-4 text-sm leading-relaxed text-gray-700"
                >
                  <CheckCircleIcon
                    className="mt-0.5 h-5 w-5 text-[#0061AA]"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-[#002766]">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold">
              Інформація пошукачам наукових ступенів
            </h3>
            <div className="mt-4">
              <DocumentGrid documents={informationDocuments} />
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold">
              Склад спеціалізованої вченої ради Д 27.201.01
            </h3>
            <div className="mt-5 grid gap-4">
              {councilGroups.map((memberGroup) => (
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

        <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex flex-col gap-2 border-b border-[#c8d8ea] pb-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold">
                  Архів захистів дисертацій
                </h3>
                <p className="mt-2 indent-6 text-justify text-sm leading-relaxed text-gray-700">
                  Матеріали захистів згруповано за здобувачами. Усі документи
                  відкриваються з локальної директорії сайту.
                </p>
              </div>
              <p className="text-sm font-semibold text-[#51749E]">
                {defenseArchive.length} здобувачів
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {defenseArchive.map((defense) => (
                <div
                  key={defense.name}
                  className="rounded-md border border-[#c8d8ea] bg-[#EFF4FB] p-4"
                >
                  <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-start">
                    <div>
                      <h4 className="text-base font-bold text-[#002766]">
                        {defense.name}
                      </h4>
                      <p className="mt-2 indent-6 text-justify text-sm leading-relaxed text-gray-700">
                        Захист дисертації на тему {defense.topic}, поданої на
                        здобуття наукового ступеня за спеціальністю{" "}
                        {defense.specialty}.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-md border border-[#c8d8ea] bg-white px-3 py-2 text-sm font-semibold text-[#51749E]">
                      <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
                      {defense.documents.length} документів
                    </span>
                  </div>
                  <div className="mt-4">
                    <DocumentGrid documents={defense.documents} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </MainLayout>
  );
}
