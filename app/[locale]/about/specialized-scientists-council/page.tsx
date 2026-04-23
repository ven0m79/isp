import { MainLayout } from "@app/components/templates";

export default function SpecializedScientistsCouncil() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Спеціалізована вчена рада
        </h2>

        <p className="text-sm leading-relaxed">
          Спеціалізована вчена рада ІПБ АЕС НАН України уповноважена проводити захист дисертаційних робіт на
          здобуття наукового ступеня доктора та кандидата технічних і фізико-математичних наук за спеціальностями,
          пов'язаними з ядерною та радіаційною безпекою.
        </p>

        <div className="bg-[#EFF4FB] rounded-lg p-4 border border-[#c8d8ea] flex flex-col gap-2">
          <h3 className="font-semibold text-sm">Спеціальності для захисту</h3>
          {[
            "05.14.14 — Теплові та ядерні енергоустановки",
            "01.04.16 — Фізика ядра, елементарних частинок і високих енергій",
            "03.00.01 — Радіобіологія",
          ].map((spec) => (
            <div key={spec} className="flex gap-2 items-start text-sm">
              <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[#0061AA]" />
              {spec}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-base">Голова ради</h3>
          <p className="text-sm">Шугайло Олексій Петрович — доктор технічних наук, професор, директор ІПБ АЕС НАН України.</p>

          <h3 className="font-semibold text-base mt-2">Контакт для подання документів</h3>
          <p className="text-sm">
            Секретаріат спеціалізованої вченої ради:<br />
            03028, м. Київ, вул. Лисогірська, 12<br />
            тел.: +38 (044) 525-05-86<br />
            e-mail: <span className="text-[#0061AA]">office@ispnpp.kiev.ua</span>
          </p>
        </div>
      </article>
    </MainLayout>
  );
}
