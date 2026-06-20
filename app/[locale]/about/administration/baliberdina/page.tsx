import Image from "next/image";
import { Link } from "@app/i18n/navigation";
import { MainLayout } from "@app/components/templates";

const paragraphs = [
  "Після закінчення факультету «Облік і аудит» Київської державної академії водного транспорту імені гетьмана Петра Канашевича-Сагайдачного отримала диплом за спеціальністю спеціаліст з обліку і аудиту.",
  "З 2001 року по 2013 рік працювала в Управлінні праці та соціального захисту населення Іванківської РДА на посадах спеціаліста 2 категорії, головного спеціаліста та начальника відділу. З 2013 року по 2016 рік працювала в Управлінні державної казначейської служби України Іванківського району Київської області на посаді головного казначея.",
  "В Інституті проблем безпеки атомних електростанцій НАН України працює з 2016 року та пройшла шлях від провідного економіста до головного бухгалтера.",
  "Основними завданнями бухгалтерської служби є ведення бухгалтерського обліку фінансово-господарської діяльності, складання звітності, відображення в документах достовірної і в повному обсязі інформації про господарські операції і результати діяльності, необхідної для оперативного управління бюджетними асигнуваннями, фінансовими і матеріальними ресурсами, а також забезпечення виконання бюджетного законодавства.",
];

const functions = [
  "ведення обліку коштів, розрахунків, доходів і витрат Інституту;",
  "організація контролю та відображення на рахунках бухгалтерського обліку всіх господарських операцій;",
  "складання фінансової звітності Інституту;",
  "надання керівництву повної, правдивої та неупередженої інформації про фінансовий стан, результати діяльності та рух коштів Інституту;",
  "проведення інвентаризаційної роботи, забезпечення перевірки стану бухгалтерського обліку у відділах Інституту;",
  "створення або прийом первинних документів бухгалтерського обліку;",
  "систематизація інформації з документів, підготовка проміжних розрахунків для обліку господарських операцій Інституту;",
  "контроль наявності та руху грошових коштів;",
  "контроль за наявністю та рухом основних засобів, виробничих запасів;",
  "прийом і контроль первинних документів за розрахунками з постачальниками і замовниками, з підзвітними особами;",
  "відображення на рахунках бухгалтерського обліку операцій, пов’язаних з рухом основних засобів та товарно-матеріальних цінностей, одержаних від Державного управління матеріально-технічного забезпечення НАН України;",
  "складання і своєчасне надання місячної і квартальної звітності в статистичне управління та державну фіскальну службу;",
  "своєчасне нарахування і виплата заробітної плати, оплата лікарняних листів тощо.",
];

export default function BaliberdinaPage() {
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
            <div className="relative min-h-[340px] bg-[#dbe8f6] md:h-full">
              <Image
                src="/administration/baliberd.webp"
                alt="Балибердіна Юлія Петрівна"
                fill
                sizes="(min-width: 768px) 260px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <header className="flex flex-col justify-center gap-4 p-5 md:p-7">
              <div className="border-l-4 border-[#0061AA] pl-4">
                <p className="mb-2 text-sm font-semibold leading-relaxed text-[#51749E]">
                  Головний бухгалтер
                </p>
                <h2 className="text-2xl font-bold leading-snug text-[#002766]">
                  Балибердіна Юлія Петрівна
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">В ІПБ АЕС</p>
                  <p className="text-gray-700">з 2016 року</p>
                </div>
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">Освіта</p>
                  <p className="text-gray-700">облік і аудит</p>
                </div>
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">Телефон</p>
                  <a
                    href="tel:+380459352056"
                    className="text-gray-700 hover:text-[#0061AA] hover:underline"
                  >
                    +38(04593)5-20-56
                  </a>
                </div>
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

        <section className="rounded-lg border border-[#c8d8ea] bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-lg font-bold text-[#002766]">
            Виконувані функції
          </h3>
          <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-gray-700">
            {functions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </MainLayout>
  );
}
