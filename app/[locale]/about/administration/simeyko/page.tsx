import Image from "next/image";
import { Link } from "@app/i18n/navigation";
import { MainLayout } from "@app/components/templates";

const paragraphs = [
  "Сімейко Костянтин Віталійович закінчив у 2011 році Національний авіаційний університет МОН України за спеціальністю «Хімічна технологія палива і вуглецевих матеріалів» й здобув кваліфікацію наукового співробітника (хімічні технології), освітньо-кваліфікаційний рівень – магістр. У 2010 році закінчив Інститут післядипломного навчання Національного авіаційного університету МОН України за спеціальністю «Економіка підприємства» та здобув кваліфікацію економіста, освітньо-кваліфікаційний рівень – спеціаліст (друга вища освіта).",
  "Наукову діяльність розпочав з 2011 року в Інституті газу НАН України на посаді провідного інженера. В цьому ж Інституті закінчив аспірантуру (2014 рік), згодом – докторантуру (2020 рік). Науковій ступінь кандидата технічних наук здобув у 2014 році, доктора технічних наук – у 2021 році. У період 2021–2022 років провадив педагогічну діяльність на посаді професора (за сумісництвом) кафедри хімії і хімічної технології Національного авіаційного університету МОН України. З 2022 року почав працювати в Інституті проблем безпеки атомних електростанцій НАН України на посаді завідувача сектору. З 2023 року працює на посадах виконуючого обов’язки ученого секретаря та завідувача лабораторії. У 2023 році одержав наукове звання «Старший дослідник» за спеціальністю 143 «Атомна енергетика». Наукові дослідження висвітлені у 83 публікаціях, з них 1 монографія та 15 патентів.",
  "Костянтин Сімейко проходив стажування у Комітеті Верховної Ради України з питань паливно-енергетичного комплексу, ядерної безпеки та ядерної політики (2017 рік), а також відділі забезпечення зв’язків Президента України з Кабінетом Міністрів України Адміністрації Президента України (період 2017–2018 років).",
  "На сьогодні є головою науково-аналітичної секції громадської організації «Українське ядерне товариство», заступником голови ради молодих вчених при Відділенні фізико-технічних проблем енергетики НАН України, експертом Українського національного комітету Ради з великих електроенергетичних систем «СІГРЕ», головою організаційного комітету Міжнародної конференції «Перспективи впровадження інновацій у атомну енергетику», співзасновником Лекторію «Наукові зустрічі».",
  "Костянтин Сімейко має такі нагороди та відзнаки: Ювілейна почесна грамота Президії НАН України (2018 рік), лауреат Премії Президента України для молодих вчених (2020 рік), відзнака Президії НАН України для молодих вчених «Талант, натхнення, праця» (2021 рік), дві Подяки Президії НАН України (2023 рік), Подяка та Грамота громадської організації «Українське ядерне товариство» (2022 та 2023 рік відповідно).",
];

export default function SimeykoPage() {
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
                src="/administration/simeyko.webp"
                alt="Сімейко Костянтин Віталійович"
                fill
                sizes="(min-width: 768px) 260px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <header className="flex flex-col justify-center gap-4 p-5 md:p-7">
              <div className="border-l-4 border-[#0061AA] pl-4">
                <p className="mb-2 text-sm font-semibold leading-relaxed text-[#51749E]">
                  Учений секретар
                </p>
                <h2 className="text-2xl font-bold leading-snug text-[#002766]">
                  Сімейко Костянтин Віталійович
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">В ІПБ АЕС</p>
                  <p className="text-gray-700">з 2022 року</p>
                </div>
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">Науковий ступінь</p>
                  <p className="text-gray-700">доктор технічних наук</p>
                </div>
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">Звання</p>
                  <p className="text-gray-700">старший дослідник</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">Телефон</p>
                  <a
                    href="tel:+380445252472"
                    className="text-gray-700 hover:text-[#0061AA] hover:underline"
                  >
                    +38(044)525-24-72
                  </a>
                </div>
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">Тел./факс</p>
                  <a
                    href="tel:+380445250586"
                    className="text-gray-700 hover:text-[#0061AA] hover:underline"
                  >
                    +38(044)525-05-86
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
      </article>
    </MainLayout>
  );
}
