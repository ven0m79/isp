import { MainLayout } from "@app/components/templates";

export default function About() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-6 p-2 text-[#002766]">
        <header className="overflow-hidden rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] shadow-sm">
          <div className="p-5 md:p-6">
            <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
              Про Інститут
            </h2>
            <p className="mt-4 indent-6 text-sm leading-relaxed text-gray-700 text-justify">
              Інститут проблем безпеки атомних електростанцій (ІПБ АЕС) НАН України бере свій початок від створення МНТЦ «Укриття» у 1992 році.
              ІПБ АЕС виконує науково-технічний супровід робіт з безпеки ядерних об’єктів, зняття з експлуатації енергоблоків, радіоекології
              та міжнародної наукової співпраці.
            </p>
          </div>
        </header>

        <div className="grid gap-5">
          <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
            <div className="p-5 md:p-6 space-y-4">
              <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766]">
                Історія та розвиток
              </h3>
              <p className="indent-6 text-sm leading-7 text-gray-700 text-justify">
                Інститут розпочав роботу як Міжгалузевий науково-технічний центр «Укриття» у 1992 році, коли було організовано
                науковий супровід робіт з перетворення об’єкта «Укриття» на екологічно безпечну систему та зняття з експлуатації
                блоків Чорнобильської АЕС.
              </p>
              <p className="indent-6 text-sm leading-7 text-gray-700 text-justify">
                У 2004 році центр було перетворено на Інститут проблем безпеки АЕС у складі Відділення фізико-технічних проблем
                енергетики НАН України. ІПБ АЕС став провідною установою з проєктування і методичного супроводу робіт з безпеки АЕС.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
            <div className="p-5 md:p-6 space-y-4">
              <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766]">
                Сфера діяльності
              </h3>
              <p className="indent-6 text-sm leading-7 text-gray-700 text-justify">
                Інститут проводить дослідження з ядерної та радіаційної безпеки, аналізу аварійних процесів, надійності обладнання,
                поводження з радіоактивними відходами, моніторингу та методів аварійного реагування. Його роботи спрямовані на
                зниження ризиків і підвищення безпеки експлуатації АЕС в Україні.
              </p>
              <p className="indent-6 text-sm leading-7 text-gray-700 text-justify">
                Співробітники ІПБ АЕС також беруть участь у міжнародних проєктах та обміні досвідом, готують наукові кадри та
                розробляють сучасні підходи до забезпечення безпеки ядерних технологій.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-[#c8d8ea] bg-white shadow-sm">
            <div className="p-5 md:p-6 space-y-4">
              <h3 className="border-l-4 border-[#0061AA] pl-4 text-lg font-bold text-[#002766]">
                Місія
              </h3>
              <p className="indent-6 text-sm leading-7 text-gray-700 text-justify">
                Створювати, набувати, розвивати, розповсюджувати та застосовувати наукові знання і передові технології з метою
                безпечного використання ядерної енергії, запобігання та зменшення наслідків радіаційних аварій на благо суспільства.
              </p>
            </div>
          </section>
        </div>
      </article>
    </MainLayout>
  );
}
