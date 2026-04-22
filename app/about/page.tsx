import { MainLayout } from "@app/components/templates";
import Image from "next/image";

export default function About() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Про Інститут
        </h2>

        <div className="float-right ml-6 mb-4 flex flex-col items-center gap-1">
          <Image
            src="/ipbAes1.webp"
            width={180}
            height={180}
            alt="Логотип ІПБ АЕС"
            style={{ width: 180, height: "auto" }}
          />
        </div>

        <p className="leading-relaxed text-sm">
          Інститут проблем безпеки атомних електростанцій Національної академії наук України (ІПБ АЕС НАН України) —
          провідна наукова установа України у галузі ядерної та радіаційної безпеки. Заснований у 1991 році рішенням
          Президії НАН України як відповідь на трагедію Чорнобильської катастрофи, Інститут з перших днів свого
          існування зосередив зусилля на розробці науково обґрунтованих методів підвищення безпеки атомних
          електростанцій.
        </p>

        <p className="leading-relaxed text-sm">
          За роки діяльності Інститут перетворився на визнаний центр компетентності у сфері аналізу безпеки
          ядерних об'єктів, радіаційного захисту персоналу та населення, а також оцінки ризиків, пов'язаних з
          експлуатацією реакторних установок. Наукові розробки Інституту використовуються регулюючими органами,
          операторами АЕС та міжнародними організаціями.
        </p>

        <p className="leading-relaxed text-sm">
          Інститут має два структурні підрозділи: основний офіс у м. Чорнобилі (вул. Кірова, 36а) та
          представництво у м. Києві (вул. Лисогірська, 12). Співробітники установи беруть активну участь у
          міжнародних наукових програмах під егідою МАГАТЕ, Євроатому та Єврокомісії.
        </p>

        <div className="clear-both" />

        <div className="grid grid-cols-3 gap-4 mt-2">
          {[
            { num: "1991", label: "рік заснування" },
            { num: "150+", label: "наукових співробітників" },
            { num: "30+", label: "років досліджень" },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col items-center bg-[#EFF4FB] rounded-lg py-4 px-2">
              <span className="text-3xl font-bold text-[#0061AA]">{num}</span>
              <span className="text-xs text-center mt-1">{label}</span>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
