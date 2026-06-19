import Image from "next/image";
import { Link } from "@app/i18n/navigation";
import { MainLayout } from "@app/components/templates";

const paragraphs = [
  "Народилась 20 грудня 1984 р. Після закінчення факультету економіки та менеджменту Європейського університету в м. Києві отримала диплом за спеціальності «фінанси». З 2002 по 2005 рр. працювала у ВАТ «Промінь» економістом планово-виробничого відділу.",
  "З 2006 р. по листопад 2010 р. працювала на посаді головного спеціаліста відділу бухгалтерського обліку в Іванківському районному центрі зайнятості Київської області.",
  "В Інституті проблем безпеки АЕС НАН України працює з 2010 р. та пройшла шлях від економіста ІІ категорії до Заступник директора з фінансово-економічної роботи.",
];

export default function PoluljahPage() {
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
                src="/administration/poluljah.webp"
                alt="Полюлях Інна Анатоліївна"
                fill
                sizes="(min-width: 768px) 260px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <header className="flex flex-col justify-center gap-4 p-5 md:p-7">
              <div className="border-l-4 border-[#0061AA] pl-4">
                <p className="mb-2 text-sm font-semibold leading-relaxed text-[#51749E]">
                  Заступник директора з фінансово-економічної роботи
                </p>
                <h2 className="text-2xl font-bold leading-snug text-[#002766]">
                  Полюлях Інна Анатоліївна
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">В ІПБ АЕС</p>
                  <p className="text-gray-700">з 2010 року</p>
                </div>
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">Освіта</p>
                  <p className="text-gray-700">фінанси</p>
                </div>
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">Напрям</p>
                  <p className="text-gray-700">економіка</p>
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
      </article>
    </MainLayout>
  );
}
