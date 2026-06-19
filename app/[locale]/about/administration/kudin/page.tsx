import Image from "next/image";
import { Link } from "@app/i18n/navigation";
import { MainLayout } from "@app/components/templates";

const paragraphs = [
  "Закінчила в 2004 році Національний університет харчових технологій (НУХТ) і отримала повну вищу освіту за спеціальністю “Менеджмент-організацій” та здобула кваліфікацію менеджера-економіста. В 2010 році закінчила навчальний центр Міністерства освіти і науки України з отриманням сертифікату за спеціальністю «Бухгалтер» та отримала свідоцтво навчального центру за програмою «Головний бухгалтер».",
  "Працювала лаборантом кафедри в НУХТ, потім менеджером маркетингового відділу фірми «Юніверсал».",
  "В ІПБ АЕС НАН України почала працювати з жовтня 2004 року на посаді провідного інженера відділу атомної енергетики. Працювала за сумісництвом з 2010 року в ДП СКТБ ІПБ АЕС НАН України на посаді провідного економіста.",
  "З січня 2018 року займала посаду помічника директора ІПБ АЕС НАН України.",
  "З жовтня 2020 року займає посаду заступника директора ІПБ АЕС НАН України.",
  "Здійснює роботу з організаційно-технічного забезпечення адміністративно-розпорядчої діяльності Інституту. Підтримує зв’язок з іншими організаціями і підприємствами, а також державними органами та вирішує справи, які не потребують особистої присутності керівника. Приймає активну участь в окремих питаннях управлінської діяльності та створення умов, що забезпечують максимальну ефективність роботи Інституту.",
  "Є головою ревізійної комісії Українського ядерного товариства.",
  "Має досвід аудиторської перевірки підприємств НАН України.",
  "Нагороджена ювілейною почесною грамотою Президії НАН України та подякою Українського ядерного товариства.",
];

export default function KudinPage() {
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
                src="/administration/kudin.webp"
                alt="Кудін Євгенія Миколаївна"
                fill
                sizes="(min-width: 768px) 260px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <header className="flex flex-col justify-center gap-4 p-5 md:p-7">
              <div className="border-l-4 border-[#0061AA] pl-4">
                <p className="mb-2 text-sm font-semibold leading-relaxed text-[#51749E]">
                  Заступник директора ІПБ АЕС НАН України з загальних питань
                </p>
                <h2 className="text-2xl font-bold leading-snug text-[#002766]">
                  Кудін Євгенія Миколаївна
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">В ІПБ АЕС</p>
                  <p className="text-gray-700">з 2004 року</p>
                </div>
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">Посада</p>
                  <p className="text-gray-700">заступник директора</p>
                </div>
                <div className="rounded-md border border-[#c8d8ea] bg-white px-3 py-2">
                  <p className="font-semibold text-[#0061AA]">Освіта</p>
                  <p className="text-gray-700">менеджер-економіст</p>
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
