import { MainLayout } from "@app/components/templates";

const books = [
  { year: 2023, authors: "Шугайло О.П., Грищенко В.М.", title: "Методи аналізу безпеки реакторних установок ВВЕР", pages: "348 с." },
  { year: 2021, authors: "Колектив авторів ІПБ АЕС", title: "Радіоекологічні наслідки Чорнобильської катастрофи: 35 років потому", pages: "512 с." },
  { year: 2019, authors: "Єрмоленко Л.О., Лисенко М.І.", title: "Дозиметрія іонізуючого випромінювання на об'єктах ЯПЦ", pages: "276 с." },
  { year: 2017, authors: "Василенко І.М. та ін.", title: "Імовірнісний аналіз безпеки АЕС України", pages: "420 с." },
  { year: 2016, authors: "Колектив авторів", title: "Чорнобиль: 30 років потому. Наукові підсумки", pages: "634 с." },
];

export default function Monographs() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Монографії
        </h2>

        <p className="text-sm leading-relaxed">
          Співробітники Інституту є авторами та співавторами понад 50 наукових монографій з питань ядерної
          та радіаційної безпеки, радіоекології та захисту навколишнього середовища. Нижче наведено
          вибрані видання останніх років.
        </p>

        <div className="flex flex-col gap-3">
          {books.map(({ year, authors, title, pages }) => (
            <div key={title} className="flex gap-4 p-4 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
              <svg width="32" height="40" viewBox="0 0 32 40" fill="none" className="shrink-0 mt-0.5">
                <rect x="1" y="1" width="30" height="38" rx="3" fill="white" stroke="#51749E" strokeWidth="1.2"/>
                <rect x="1" y="1" width="5" height="38" rx="2" fill="#51749E" fillOpacity="0.3"/>
                <path d="M10 12h16M10 17h16M10 22h10" stroke="#51749E" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold leading-snug">{title}</p>
                <p className="text-xs text-gray-600">{authors}</p>
                <p className="text-xs text-[#51749E] mt-0.5">{year} · {pages}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
