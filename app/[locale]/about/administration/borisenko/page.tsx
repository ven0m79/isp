import { Link } from "@app/i18n/navigation";
import { MainLayout } from "@app/components/templates";
import Image from "next/image";

const paragraphs = [
  "Борисенко Володимир Іванович закінчив фізичний факультет Київського державного університету ім. Т. Г. Шевченка за спеціальністю «Експериментальна ядерна фізика». Розпочав свою виробничу діяльність у 1983 р. контролюючим фізиком теплофізичної лабораторії на Рівненській АЕС. Після закінчення аспірантури Київського державного університету ім. Т. Г. Шевченка у 1987 р. працював в Інституті ядерних досліджень НАН України до 1996 р., де пройшов шлях від молодшого наукового співробітника до завідувача відділу. В період з 1996 по 1999 рр. працював заступником директора з наукової роботи у Державному науково-інженерному центрі систем контролю і аварійного реагування. З 1999 по 2002 рр. працював завідуючим відділом Інституту підтримки експлуатації АЕС, а з 2003 р. працює в ІПБ АЕС спочатку на посаді завідувача відділу системного управління безпекою, а з 2016 р. - завідувача Відділення атомної енергетики.",
  "За час своєї наукової діяльності В. І. Борисенко був керівником багатьох масштабних технічних проектів, серед яких: створення і впровадження на 11 енергоблоках ВВЕР-1000 АЕС України систем представлення параметрів безпеки; адаптація і застосування розрахункового коду RELAP-3D для аналізу безпеки ВВЕР; розробка прикладного програмного забезпечення АКНП та інші.",
  "Загальна кількість наукових публікацій - понад 100.",
  "Здійснює викладацьку діяльність на фізичному факультеті кафедри ядерної фізики Київського національного університету імені Тараса Шевченка за спеціальними курсами «Ядерно-фізичні аспекти ядерних і термоядерних реакторів», «Фізика ядерних реакторів», «Методи розрахунку ядерних реакторів», «Нестаціонарні процеси в ядерних енергетичних установках», «Динаміка ядерних реакторів».",
];

export default function BorisenkoPage() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 p-2 text-[#002766]">
        <Link
          href="/about/administration"
          className="text-sm font-medium text-[#0061AA] transition hover:text-[#002766] hover:underline"
        >
          Назад до керівництва
        </Link>

        <section className="overflow-hidden rounded-lg border border-[#c8d8ea] bg-[#EFF4FB]">
          <div className="grid gap-0 md:grid-cols-[260px_1fr]">
            <div className="relative h-[340px] bg-[#dbe8f6] md:h-full min-h-[340px]">
              <Image
                src="/administration/borisenko.webp"
                alt="Борисенко Володимир Іванович"
                fill
                sizes="(min-width: 768px) 260px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <header className="flex flex-col justify-center gap-4 p-5 md:p-7">
              <div className="border-l-4 border-[#0061AA] pl-4">
                <p className="mb-2 text-sm font-semibold leading-relaxed text-[#51749E]">
                  Директор ІПБ АЕС НАН України, член-кореспондент НАН України, д-р техн.
                  наук, старший дослідник
                </p>
                <h2 className="text-2xl font-bold leading-snug text-[#002766]">
                  Борисенко Володимир Іванович
                </h2>
              </div>

              
            </header>
          </div>
        </section>

        <div className="flex flex-col gap-4 rounded-lg border border-[#c8d8ea] bg-white p-5 shadow-sm">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-gray-700 indent-6 [text-align:justify]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
