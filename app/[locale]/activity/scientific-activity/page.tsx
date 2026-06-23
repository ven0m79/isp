import Image from "next/image";
import { MainLayout } from "@app/components/templates";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
  BoltIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  FireIcon,
  FolderOpenIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

type ResearchDirection = {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  projects: string[];
};

type ScientificDocument = {
  title: string;
  file: string;
  year: string;
  size: string;
  kind: "method" | "result" | "proposal" | "implementation" | "event";
};

type DocumentGroup = {
  title: string;
  description: string;
  documents: ScientificDocument[];
};

type ResearchCase = {
  title: string;
  year: string;
  area: string;
  image: string;
  summary: string;
  result: string;
};

const assetPath = "/activity/scientific-activity";

const directions: ResearchDirection[] = [
  {
    title: "Перспективні ядерно-енергетичні технології",
    summary: "Науковий та техніко-економічний аналіз сучасних і перспективних ядерних енергетичних установок, оптимальний вибір технологій для України.",
    image: "research-results.webp",
    imageAlt: "Абстрактна ілюстрація дослідницьких результатів",
    projects: [
      "Науковий та техніко-економічний аналіз сучасних і перспективних ядерних енергетичних установок для впровадження в Україні.",
      "Наукові і техніко-економічні основи оптимального вибору перспективних ядерно-енергетичних технологій для України.",
    ],
  },
  {
    title: "Діагностика та безпека обладнання АЕС",
    summary: "Розвиток методів нейтронної, теплогідравлічної, вібраційної та інтегральної діагностики для реакторних установок і генеруючого обладнання.",
    image: "diagnostics.webp",
    imageAlt: "Технічна ілюстрація діагностики обладнання",
    projects: [
      "Системи діагностики параметрів тепловидільних збірок і внутрішньокорпусних пристроїв реакторів ВВЕР.",
      "Методи нейтронної діагностики для визначення параметрів безпеки ядерних установок.",
      "Контроль коефіцієнтів реактивності ядерного реактора та діагностика технічного стану головних циркуляційних насосів.",
    ],
  },
  {
    title: "Об'єкт \"Укриття\", паливовмісні матеріали та відходи",
    summary: "Дослідження стану паливовмісних матеріалів, сценарії поводження з відпрацьованим паливом, графітом і радіоактивними відходами ЧАЕС.",
    image: "shelter-processes.webp",
    imageAlt: "Дослідження процесів у комплексі НБК-ОУ",
    projects: [
      "Дослідницькі роботи в об'єкті \"Укриття\".",
      "Безпечне поводження з відпрацьованим ядерним паливом на основі методів комп'ютерного моделювання.",
      "Верифікація радіонуклідних векторів для характеризації радіоактивних відходів Чорнобильської АЕС.",
      "Склад скидного газу при спалюванні опроміненого графіту ядерних установок.",
    ],
  },
  {
    title: "Радіоекологія та екологічна безпека",
    summary: "Моделювання поширення забруднення, оцінка впливів радіаційно небезпечних об'єктів і підтримка аварійного реагування.",
    image: "environmental-impact.webp",
    imageAlt: "Ілюстрація екологічного моніторингу",
    projects: [
      "Прогнозування наслідків природних пожеж на радіоактивно забруднених територіях України.",
      "Вплив вторинного підйому радіоактивних аерозолів у Чорнобильській зоні відчуження.",
      "Превентивна оцінка територій впливу можливих радіаційних аварій.",
      "Комплексна оцінка сукупних впливів радіаційно небезпечних об'єктів Чорнобильської зони.",
    ],
  },
  {
    title: "Фізичні методи та радіаційні ефекти",
    summary: "Фізико-хімічні, статистичні та експериментальні методи для аналізу ядерних матеріалів, рідин і джерел випромінювання.",
    image: "irradiated-liquids.webp",
    imageAlt: "Мікроскопічна ілюстрація радіаційних ефектів у рідинах",
    projects: [
      "Статистичні властивості інтервалів між актами радіоактивного розпаду.",
      "Вплив радіаційного опромінення на структурні та фізичні властивості рідин у ядерних технологіях.",
      "Фізико-хімічні процеси у паливовмісних матеріалах комплексу НБК-ОУ електрокінетичними методами.",
    ],
  },
  {
    title: "Наукова організація, результати та впровадження",
    summary: "Документування відкриття і завершення НДР, результати тематик, акти впровадження та наукові заходи Інституту.",
    image: "conferences.webp",
    imageAlt: "Заголовок наукової конференції",
    projects: [
      "Структура відображення інформації при відкритті нових НДР і за завершеною темою.",
      "Акти впровадження НДР.",
      "Конференції, інші наукові та публічні заходи за 2017-2022 роки.",
    ],
  },
];

const documentGroups: DocumentGroup[] = [
  {
    title: "Методичне оформлення НДР",
    description: "Як подавати інформацію при відкритті нових робіт і після завершення теми.",
    documents: [
      { title: "Структура відображення інформації при відкритті нових НДР", file: "research-info-opening-2025.pdf", year: "2025", size: "101 KB", kind: "method" },
      { title: "Структура відображення інформації за завершеною темою", file: "research-info-completed-2025.pdf", year: "2025", size: "87 KB", kind: "method" },
    ],
  },
  {
    title: "Результати наукових робіт",
    description: "Підсумкові матеріали за тематиками, що використовуються як база для подальших досліджень.",
    documents: [
      { title: "Результати 2024", file: "results-2024.pdf", year: "2024", size: "109 KB", kind: "result" },
      { title: "Результати 2023", file: "results-2023.pdf", year: "2023", size: "110 KB", kind: "result" },
      { title: "Результати 2022", file: "results-2022.pdf", year: "2022", size: "58 KB", kind: "result" },
    ],
  },
  {
    title: "Запити та пропозиції нової тематики",
    description: "Пакети матеріалів щодо відкриття відомчих тем на наступні роки.",
    documents: [
      { title: "Запит про відкриття відомчої тематики на 2026", file: "proposal-2026-graphite.pdf", year: "2026", size: "69 KB", kind: "proposal" },
      { title: "Пропозиції про відкриття відомчої тематики на 2024", file: "proposals-2024.pdf", year: "2024", size: "90 KB", kind: "proposal" },
      { title: "Пропозиції про відкриття відомчої тематики на 2023", file: "proposals-2023.pdf", year: "2023", size: "81 KB", kind: "proposal" },
      { title: "Пропозиції про відкриття відомчої тематики на 2021", file: "proposals-2021.pdf", year: "2021", size: "102 KB", kind: "proposal" },
    ],
  },
  {
    title: "Впровадження результатів",
    description: "Підтвердження практичного використання результатів науково-дослідних робіт.",
    documents: [
      { title: "Акт впровадження 1", file: "implementation-act-1.pdf", year: "2025", size: "251 KB", kind: "implementation" },
      { title: "Акт впровадження 2", file: "implementation-act-2.pdf", year: "2025", size: "227 KB", kind: "implementation" },
      { title: "Акт впровадження 3", file: "implementation-act-3.pdf", year: "2025", size: "231 KB", kind: "implementation" },
      { title: "Акт впровадження 4", file: "implementation-act-4.pdf", year: "2025", size: "247 KB", kind: "implementation" },
      { title: "Акт впровадження 5", file: "implementation-act-5.pdf", year: "2025", size: "252 KB", kind: "implementation" },
      { title: "Акт впровадження 6", file: "implementation-act-6.pdf", year: "2025", size: "236 KB", kind: "implementation" },
    ],
  },
  {
    title: "Наукові заходи",
    description: "Конференції та публічні наукові заходи, організовані Інститутом.",
    documents: [
      { title: "Основні конференції та наукові заходи за 2017-2022 роки", file: "conferences-events-2017-2022.pdf", year: "2017-2022", size: "283 KB", kind: "event" },
    ],
  },
];

const olderResearchCases: ResearchCase[] = [
  {
    title: "Наукові і техніко-економічні основи оптимального вибору перспективних ядерно-енергетичних технологій для України",
    year: "2023",
    area: "Ядерно-енергетичні технології",
    image: "science.webp",
    summary: "Робота спрямована на розробку науково обґрунтованих рекомендацій щодо вибору перспективних ядерно-енергетичних технологій для України.",
    result: "Виконано системний аналіз напрямів розвитку атомної енергетики, типів реакторних технологій та критеріїв їх доцільності для національної енергосистеми.",
  },
  {
    title: "Вплив вторинного підйому радіоактивних аерозолів у Чорнобильській зоні відчуження",
    year: "2023",
    area: "Радіоекологія",
    image: "diagnostics.webp",
    summary: "Дослідження оцінює перерозподіл радіоактивного забруднення під час робіт зі зняття з експлуатації Чорнобильської АЕС.",
    result: "Наукова логіка роботи поєднує просторову неоднорідність території, джерела аерозолю та моделі вітрового перенесення для підтримки радіаційної безпеки робіт.",
  },
  {
    title: "Параметри потенційно ядерно небезпечного скупчення паливовмісних матеріалів об'єкта \"Укриття\"",
    year: "2023",
    area: "Об'єкт \"Укриття\"",
    image: "research-results.webp",
    summary: "Робота пов'язана зі створенням дослідницької системи вимірювання температури та щільності потоку нейтронів біля ядерно небезпечних матеріалів.",
    result: "Поєднано довгостроковий моніторинг, експериментальні вимірювання та чисельне моделювання для контролю підкритичності скупчень паливовмісних матеріалів.",
  },
  {
    title: "Фізико-хімічні процеси у паливовмісних матеріалах комплексу НБК-ОУ",
    year: "2022",
    area: "Паливовмісні матеріали",
    image: "shelter-processes.webp",
    summary: "Мета роботи - переведення оксидів урану, продуктів поділу та активації у стабільні кристалічні сполуки електрокінетичними процесами.",
    result: "Застосовано рентгенофазовий аналіз, електронну мікроскопію, хроматографічні та електродіалізні методи для оцінки трансформації матеріалів.",
  },
  {
    title: "Розробка та вдосконалення методів нейтронної діагностики",
    year: "2020",
    area: "Діагностика ядерних установок",
    image: "neutron-diagnostics.webp",
    summary: "Досліджено можливості вейвлет-аналізу для пошуку прихованої діагностичної інформації у сигналах систем внутрішньореакторного контролю.",
    result: "Аналіз сигналів температури, тиску та детекторів нейтронів дав основу для виявлення закономірностей у довгих рядах вимірювань.",
  },
  {
    title: "Вплив радіаційного опромінення на структурні та фізичні властивості рідин",
    year: "2020",
    area: "Радіаційна фізика",
    image: "irradiated-liquids.webp",
    summary: "Робота стосується теорії впливу радіаційного випромінювання на фізичні властивості рідин, що використовуються у ядерних технологіях.",
    result: "Отримані підходи можуть використовуватися для розрахунку радіаційно-стимульованих процесів у реальних системах.",
  },
  {
    title: "Пропозиції про відкриття відомчої тематики на 2021 та наступні роки",
    year: "2020",
    area: "Планування НДР",
    image: "proposals.webp",
    summary: "Сформовано пакет нових відомчих НДР, затверджених вченою радою Інституту, з очікуваним подальшим використанням результатів.",
    result: "Цей блок показує, як стратегічні напрями Інституту переходять у конкретні теми, строки виконання, мету і очікувані результати.",
  },
  {
    title: "Дослідження стану паливовмісних матеріалів об'єкта \"Укриття\" в умовах нового безпечного конфайнмента",
    year: "2017",
    area: "Об'єкт \"Укриття\"",
    image: "fcm-state.webp",
    summary: "Розглянуто варіанти хімічного складу коріуму та моделювання його взаємодії з бетоном і металевими конструкціями.",
    result: "Результати формують методичну основу для кондиціювання паливовмісних матеріалів у нових умовах експлуатації НБК.",
  },
  {
    title: "Методи та засоби контролю коефіцієнтів реактивності ядерного реактора",
    year: "2017",
    area: "Реакторна безпека",
    image: "reactivity-control.webp",
    summary: "Мета роботи - розробка нових методів визначення параметрів безпеки реактора, зокрема коефіцієнтів реактивності.",
    result: "Робота підтримує виконання вимог ядерної безпеки для реакторів з водою під тиском і програм підвищення безпеки реакторних установок.",
  },
  {
    title: "Статистичні властивості інтервалів між актами радіоактивного розпаду",
    year: "2017",
    area: "Методи вимірювань",
    image: "decay-statistics.webp",
    summary: "Досліджено обробку експериментальних і модельних даних для мінімізації похибки під час розрахунку статистичних параметрів довгих рядів.",
    result: "Показано застосування статистичного аналізу та моделювання Монте-Карло до альфа-випромінювання і нейтронних потоків.",
  },
  {
    title: "Спеціальні методи та заходи зняття з експлуатації ядерних установок",
    year: "2017",
    area: "Зняття з експлуатації",
    image: "decommissioning.webp",
    summary: "Розроблено методичні рекомендації щодо використання спеціальних методів для АЕС з реакторами ВВЕР.",
    result: "Науковий фокус - приведення післяаварійної АЕС та довкілля до екологічно безпечного стану з урахуванням радіаційних наслідків важких аварій.",
  },
  {
    title: "Комплексна оцінка сукупних впливів радіаційно небезпечних об'єктів Чорнобильської зони",
    year: "2017",
    area: "Екологічна безпека",
    image: "environmental-impact.webp",
    summary: "Проаналізовано дані щодо стану біотичних та абіотичних компонентів екосистем у зонах впливу радіаційно небезпечних об'єктів.",
    result: "Сформовано логіку комплексної оцінки впливів на основі літературних даних і результатів багаторічних НДР у Чорнобильській зоні.",
  },
  {
    title: "Превентивна оцінка території впливу можливих радіаційних аварій",
    year: "2017",
    area: "Аварійне реагування",
    image: "accident-assessment.webp",
    summary: "Доопрацьовано алгоритм превентивної підготовки інформації для оцінки радіаційної ситуації у разі аварії на АЕС.",
    result: "Алгоритм включає радіоекологічне районування, оцінку критичності районів і підготовку карт та критеріїв для прогнозування ситуації.",
  },
  {
    title: "Діагностика технічного стану генеруючого обладнання та головних циркуляційних насосів",
    year: "2017",
    area: "Технічна діагностика",
    image: "equipment-state.webp",
    summary: "Розроблено математичні моделі теплових процесів у турбогенераторі та автоматичної діагностики вузлів головних циркуляційних насосів.",
    result: "Методична база використовує сигнали штатних систем контролю вібраційного та шумового фону відповідальних вузлів першого контуру.",
  },
];

const kindStyles: Record<ScientificDocument["kind"], string> = {
  method: "bg-[#e6f2f9] text-[#07518F]",
  result: "bg-[#e7f5ee] text-[#18794e]",
  proposal: "bg-[#fff4d8] text-[#8a5a00]",
  implementation: "bg-[#f3eafe] text-[#6f42c1]",
  event: "bg-[#fdecec] text-[#b42318]",
};

const kindLabels: Record<ScientificDocument["kind"], string> = {
  method: "Методика",
  result: "Результати",
  proposal: "Тематика",
  implementation: "Впровадження",
  event: "Заходи",
};

const stats = [
  { value: "26", label: "проаналізованих записів" },
  { value: "6", label: "наукових логічних блоків" },
  { value: "16", label: "локальних PDF-файлів" },
  { value: "17", label: "WebP-зображень" },
];

const iconClasses = "h-6 w-6";
const directionIcons = [
  BoltIcon,
  ChartBarSquareIcon,
  ShieldCheckIcon,
  FireIcon,
  BeakerIcon,
  ClipboardDocumentCheckIcon,
];

export default function ScientificActivity() {
  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#002766] via-[#07518F] to-[#0b77b7] text-white shadow-lg">
          <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1fr_330px] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b9dff4]">Наукова діяльність Інституту</p>
              <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Наукова діяльність</h1>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[#e1f1fa] md:text-base">
                Інформацію з архіву наукової діяльності перебудовано за науковою логікою: від стратегічних напрямів
                досліджень до результатів, впровадження та документів, що підтверджують виконання НДР.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/10 px-3 py-4 text-center backdrop-blur-sm">
                  <strong className="block text-2xl">{stat.value}</strong>
                  <span className="text-[11px] leading-4 text-[#d7ebf7]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-6 rounded-2xl border border-[#c8d8ea] bg-[#f6f9fc] p-5 md:p-7">
          <div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">Карта досліджень</p>
              <h2 className="mt-2 text-2xl font-bold">Наукові блоки замість стрічки записів</h2>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {directions.map((direction, index) => {
              const DirectionIcon = directionIcons[index];

              return (
                <section key={direction.title} className="overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm">
                  <div className="relative h-44">
                    <Image
                      src={`${assetPath}/images/${direction.image}`}
                      alt={direction.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002766]/80 via-[#002766]/25 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-[#07518F] shadow-sm">
                      <DirectionIcon className={iconClasses} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold leading-6">{direction.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#294e70]">{direction.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {direction.projects.map((project) => (
                        <li key={project} className="flex gap-3 text-sm leading-6 text-[#294e70]">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0b77b7]" />
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
          <div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">Старші сторінки архіву</p>
              <h2 className="mt-2 text-2xl font-bold">НДР 2017-2023 років у науковій структурі</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-[#294e70]">
                Матеріали зі сторінок 2 і 3 не винесено окремим списком: вони вбудовані в ту саму логіку напрямів,
                але нижче подані як окремі наукові картки з коротким змістом і результатом.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-2">
            {olderResearchCases.map((item) => (
              <article key={item.title} className="flex flex-col overflow-hidden rounded-xl border border-[#dce7f1] bg-[#fbfdff]">
                <div className="relative h-56">
                  <Image
                    src={`${assetPath}/images/${item.image}`}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#07518F] shadow-sm">
                    {item.year}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="grid flex-1 gap-5">
                    <div>
                      <span className="inline-flex rounded-full bg-[#e6f2f9] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#07518F]">
                        {item.area}
                      </span>
                      <h3 className="mt-3 text-base font-bold leading-6 md:text-lg">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#294e70]">{item.summary}</p>
                    </div>
                    <div className="rounded-lg border border-[#dce7f1] bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#51749E]">Науковий результат</p>
                      <p className="mt-2 text-sm leading-6 text-[#294e70]">{item.result}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <div className="rounded-2xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#07518F] text-white">
                <FolderOpenIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">Міні-база документів</p>
                <h2 className="mt-2 text-2xl font-bold">PDF-архів наукової діяльності</h2>
                <p className="mt-2 max-w-4xl text-sm leading-7 text-[#294e70]">
                  Документи збережено локально та стиснуто, коли це давало менший файл без втрати читабельності.
                  Матеріали згруповано за функцією: методика, результати, нова тематика, впровадження і заходи.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-5">
            {documentGroups.map((group) => (
              <section key={group.title} className="overflow-hidden rounded-xl border border-[#c8d8ea] bg-white shadow-sm">
                <div className="border-b border-[#dce7f1] bg-[#EFF4FB] px-5 py-4">
                  <h3 className="text-lg font-bold">{group.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#294e70]">{group.description}</p>
                </div>
                <div className="grid gap-px bg-[#dce7f1] md:grid-cols-2">
                  {group.documents.map((document) => {
                    const href = `${assetPath}/documents/${document.file}`;

                    return (
                      <div key={document.file} className="flex flex-col bg-white p-5 transition hover:bg-[#fbfdff]">
                        <div className="flex items-start gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e6f2f9] text-[#07518F]">
                            <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
                          </span>
                          <div className="min-w-0">
                            <div className="flex flex-wrap gap-2">
                              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${kindStyles[document.kind]}`}>
                                {kindLabels[document.kind]}
                              </span>
                              <span className="rounded-full bg-[#f1f5f9] px-2 py-0.5 text-[10px] font-bold text-[#51749E]">{document.year}</span>
                            </div>
                            <h4 className="mt-2 text-sm font-bold leading-6 md:text-base">{document.title}</h4>
                            <p className="mt-1 text-xs text-[#6b8297]">PDF · {document.size}</p>
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
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Аналіз джерел", "Опрацьовано категорію \"Наукова діяльність\" і всі доступні записи архіву."],
            ["02", "Наукова логіка", "Записи розкладено за напрямами досліджень, а документи - за їх роллю в НДР."],
            ["03", "Локальні матеріали", "PDF і зображення перенесені в публічний каталог сторінки для стабільного завантаження."],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-xl border border-[#c8d8ea] bg-[#f6f9fc] p-5">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{number}</span>
              <h3 className="mt-2 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#294e70]">{text}</p>
            </div>
          ))}
        </section>
      </article>
    </MainLayout>
  );
}
