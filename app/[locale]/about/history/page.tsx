import { MainLayout } from "@app/components/templates";
import Image from "next/image";

const events = [
  { year: "1986", text: "Катастрофа на Чорнобильській АЕС спонукала до створення спеціалізованої наукової бази з ядерної безпеки в Україні." },
  { year: "1991", text: "Постановою Президії НАН України засновано Інститут проблем безпеки атомних електростанцій." },
  { year: "1995", text: "Введено в дію першу науково-дослідну лабораторію аналізу безпеки реакторів типу ВВЕР." },
  { year: "2001", text: "Підписано перші угоди про співробітництво з МАГАТЕ та Євроатомом." },
  { year: "2010", text: "Отримано сертифікат ISO 9001 — система управління якістю визнана на міжнародному рівні." },
  { year: "2016", text: "30-та річниця Чорнобильської катастрофи: Інститут опублікував масштабну монографію про наслідки аварії." },
  { year: "2024", text: "Продовження наукової діяльності в умовах воєнного часу; активна участь у міжнародних програмах ядерної безпеки." },
];

export default function History() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Історія Інституту
        </h2>

        <div className="float-right ml-6 mb-4">
          <Image
            src="/ipbAes1.webp"
            width={160}
            height={160}
            alt="ІПБ АЕС"
            style={{ width: 160, height: "auto" }}
          />
        </div>

        <p className="leading-relaxed text-sm">
          Інститут проблем безпеки атомних електростанцій НАН України веде свій відлік від трагічних подій квітня
          1986 року. Катастрофа на Чорнобильській АЕС наочно продемонструвала потребу в потужному науковому центрі,
          здатному комплексно досліджувати проблеми безпеки ядерних об'єктів і розробляти ефективні заходи
          захисту людей та довкілля.
        </p>

        <div className="clear-both" />

        <h3 className="font-semibold text-base mt-2">Хронологія</h3>

        <ol className="flex flex-col gap-3">
          {events.map(({ year, text }) => (
            <li key={year} className="flex gap-4 items-start">
              <span className="shrink-0 w-12 text-center font-bold text-sm bg-[#0061AA] text-white rounded px-1 py-0.5">
                {year}
              </span>
              <p className="text-sm leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </article>
    </MainLayout>
  );
}
