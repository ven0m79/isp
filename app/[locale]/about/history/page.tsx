import { MainLayout } from "@app/components/templates";
import { readFileSync } from "fs";
import Image from "next/image";
import { join } from "path";

type Event = {
  year: string;
  text: string;
};

type ImageItem = {
  src: string;
  alt: string;
  caption: string;
};

type HistorySection = {
  title: string;
  paragraphs: string[];
  images: ImageItem[];
};

type Person = {
  name: string;
  role: string;
  src: string;
};

const events: Event[] = [
  {
    year: "1986",
    text: "Аварія на четвертому енергоблоці Чорнобильської АЕС і початок науково-технічного супроводу робіт на зруйнованому блоці.",
  },
  {
    year: "1987",
    text: "Створення Комплексної експедиції Інституту атомної енергії ім. І. В. Курчатова для супроводу об’єкта «Укриття».",
  },
  {
    year: "1992",
    text: "Постановою Кабінету Міністрів України № 55 створено МНТЦ «Укриття» НАН України.",
  },
  {
    year: "1993",
    text: "На МНТЦ «Укриття» покладено функції наукового керівника робіт зі зняття з експлуатації енергоблоків ЧАЕС.",
  },
  {
    year: "1996",
    text: "Генеральним директором МНТЦ «Укриття» став О. О. Ключников.",
  },
  {
    year: "1997",
    text: "Розроблено Shelter Implementation Plan, що визначив роботи з перетворення об’єкта «Укриття» на екологічно безпечну систему.",
  },
  {
    year: "2004",
    text: "МНТЦ «Укриття» перетворено на Інститут проблем безпеки атомних електростанцій НАН України.",
  },
  {
    year: "2016",
    text: "ІПБ АЕС очолив А. В. Носовський.",
  },
];

const titleImages: Record<string, ImageItem[]> = {
  ЧАЕС: [
    {
      src: "/history/chaes.jpg",
      alt: "Чорнобильська АЕС",
      caption: "ЧАЕС",
    },
  ],
  "Легасов В. А.": [
    {
      src: "/history/legasov.jpg",
      alt: "Легасов В. А.",
      caption: "Легасов В. А.",
    },
  ],
  "Веліхов Є. П.": [
    {
      src: "/history/velihov.jpg",
      alt: "Веліхов Є. П.",
      caption: "Веліхов Є. П.",
    },
  ],
  "Бар’яхтар В. Г.": [
    {
      src: "/history/baryahtar.jpg",
      alt: "Бар’яхтар В. Г.",
      caption: "Бар’яхтар В. Г.",
    },
  ],
  "Карасьов В. С.": [
    {
      src: "/history/karasev.jpg",
      alt: "Карасьов В. С.",
      caption: "Карасьов В. С.",
    },
  ],
  "Токаревський В. В.": [
    {
      src: "/history/tokarevskiy.jpg",
      alt: "Токаревський В. В.",
      caption: "Токаревський В. В.",
    },
  ],
  "Ключников О. О.": [
    {
      src: "/history/kluchnikov.jpg",
      alt: "Ключников О. О.",
      caption: "Ключников О. О.",
    },
  ],
  "Носовський А. В.": [
    {
      src: "/history/nosovskiy-1.jpg",
      alt: "Носовський А. В.",
      caption: "Носовський А. В.",
    },
    {
      src: "/history/nosovskiy-2.jpg",
      alt: "Носовський А. В.",
      caption: "Носовський А. В.",
    },
  ],
  "Колектив ІПБ АЕС": [
    {
      src: "/history/collective.jpg",
      alt: "Колектив ІПБ АЕС",
      caption: "Колектив ІПБ АЕС",
    },
  ],
};

const people: Person[] = [
  {
    name: "В. А. Легасов",
    role: "ініціатор створення комплексної експедиції в Чорнобилі",
    src: "/history/legasov.jpg",
  },
  {
    name: "Є. П. Веліхов",
    role: "ініціатор створення МНТЦ «Укриття»",
    src: "/history/velihov.jpg",
  },
  {
    name: "В. Г. Бар’яхтар",
    role: "віце-президент АН України",
    src: "/history/baryahtar.jpg",
  },
  {
    name: "В. С. Карасьов",
    role: "перший керівник МНТЦ «Укриття»",
    src: "/history/karasev.jpg",
  },
  {
    name: "В. В. Токаревський",
    role: "генеральний директор МНТЦ «Укриття» з 1993 року",
    src: "/history/tokarevskiy.jpg",
  },
  {
    name: "О. О. Ключников",
    role: "генеральний директор МНТЦ «Укриття» з 1996 року",
    src: "/history/kluchnikov.jpg",
  },
  {
    name: "А. В. Носовський",
    role: "директор ІПБ АЕС з 2016 року",
    src: "/history/nosovskiy-1.jpg",
  },
];

function getHistoryText(): string {
  return readFileSync(
    join(process.cwd(), "content", "institute-history.uk.txt"),
    "utf8",
  );
}

function parseHistoryText(text: string): {
  intro: string;
  sections: HistorySection[];
} {
  const titles = new Set(Object.keys(titleImages));
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const sections: HistorySection[] = [];
  let intro = "";
  let current: HistorySection | null = null;

  for (const line of lines) {
    if (titles.has(line)) {
      current = {
        title: line,
        paragraphs: [],
        images: titleImages[line],
      };
      sections.push(current);
      continue;
    }

    if (!current) {
      intro = intro ? `${intro} ${line}` : line;
      continue;
    }

    current.paragraphs.push(line);
  }

  return { intro, sections: combineSharedSections(sections) };
}

function combineSharedSections(sections: HistorySection[]): HistorySection[] {
  const combined: HistorySection[] = [];

  for (let index = 0; index < sections.length; index += 1) {
    const section = sections[index];
    const nextSection = sections[index + 1];

    if (
      section.title === "Веліхов Є. П." &&
      nextSection?.title === "Бар’яхтар В. Г."
    ) {
      combined.push({
        title: "Веліхов Є. П. і Бар’яхтар В. Г.",
        paragraphs: nextSection.paragraphs,
        images: [...section.images, ...nextSection.images],
      });
      index += 1;
      continue;
    }

    combined.push(section);
  }

  return combined;
}

function SectionImages({
  images,
  align,
}: {
  images: ImageItem[];
  align: "left" | "right";
}) {
  return (
    <div
      className={`mb-4 grid gap-3 ${
        align === "left" ? "md:float-left md:mr-5" : "md:float-right md:ml-5"
      }`}
    >
      {images.map((image) => (
        <figure
          key={`${image.src}-${image.caption}`}
          className="w-full overflow-hidden rounded-md border border-[#c8d8ea] bg-white md:w-[240px]"
        >
          <div className="relative h-[260px] bg-[#dbe8f6]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 240px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="border-t border-[#c8d8ea] bg-[#EFF4FB] px-3 py-2 text-xs font-medium text-[#51749E]">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function FullWidthImage({ image }: { image: ImageItem }) {
  return (
    <figure className="overflow-hidden rounded-md border border-[#c8d8ea] bg-white">
      <div className="relative min-h-[260px] bg-[#dbe8f6] md:min-h-[430px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
      <figcaption className="border-t border-[#c8d8ea] bg-[#EFF4FB] px-3 py-2 text-xs font-medium text-[#51749E]">
        {image.caption}
      </figcaption>
    </figure>
  );
}

function HistoryTextSection({
  section,
  index,
}: {
  section: HistorySection;
  index: number;
}) {
  const hasCollectiveImage = section.images.some(
    (image) => image.caption === "Колектив ІПБ АЕС",
  );
  const align = index % 2 === 0 ? "left" : "right";

  return (
    <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
      <div className="flex flex-col gap-3 p-5 md:p-6">
        <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766]">
          {section.title}
        </h3>

        {hasCollectiveImage ? (
          <FullWidthImage image={section.images[0]} />
        ) : section.images.length > 0 ? (
          <SectionImages images={section.images} align={align} />
        ) : null}

        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-sm leading-7 text-gray-700 indent-6 [overflow-wrap:anywhere] [text-align:justify]"
          >
            {paragraph}
          </p>
        ))}
        <div className="clear-both" />
      </div>
    </section>
  );
}

export default function History() {
  const { intro, sections } = parseHistoryText(getHistoryText());

  return (
    <MainLayout>
      <article className="flex flex-col gap-6 p-2 text-[#002766]">
        <header className="overflow-hidden rounded-lg border border-[#c8d8ea] bg-[#EFF4FB]">
          <div className="relative min-h-[180px] bg-[#dbe8f6] md:min-h-[260px]">
            <Image
              src="/history/history-header.jpg"
              alt="Історія Інституту"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="p-5 md:p-6">
            <h2 className="border-b-2 border-[#51749E] pb-2 text-xl font-bold">
              Історія Інституту
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 indent-6 [text-align:justify]">
              {intro}
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-5">
          {sections.map((section, index) => (
            <HistoryTextSection
              key={section.title}
              section={section}
              index={index}
            />
          ))}

          <section className="rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] p-5">
            <h3 className="mb-4 text-lg font-bold text-[#002766]">
              Люди, які формували історію
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {people.map((person) => (
                <figure
                  key={person.name}
                  className="overflow-hidden rounded-lg border border-[#c8d8ea] bg-white"
                >
                  <div className="relative aspect-[4/5] bg-[#dbe8f6]">
                    <Image
                      src={person.src}
                      alt={person.name}
                      fill
                      sizes="(min-width: 1280px) 220px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="flex min-h-[92px] flex-col gap-1 p-3 text-sm">
                    <span className="font-bold text-[#002766]">{person.name}</span>
                    <span className="leading-relaxed text-gray-700">{person.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-lg border border-[#c8d8ea] bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-[#002766]">Хронологія</h3>

          <ol className="grid gap-4 md:grid-cols-2">
            {events.map(({ year, text }) => (
              <li key={year} className="grid grid-cols-[60px_1fr] gap-3">
                <span className="h-fit rounded bg-[#0061AA] px-2 py-1 text-center text-sm font-bold text-white">
                  {year}
                </span>
                <p className="text-sm leading-relaxed text-gray-700">{text}</p>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </MainLayout>
  );
}
