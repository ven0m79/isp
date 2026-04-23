import { MainLayout } from "@app/components/templates";

const staff = [
  { title: "Директор", name: "Шугайло Олексій Петрович", degree: "доктор технічних наук, професор" },
  { title: "Заступник директора з наукової роботи", name: "Василенко Ігор Михайлович", degree: "доктор фізико-математичних наук" },
  { title: "Заступник директора з загальних питань", name: "Коваленко Тетяна Андріївна", degree: "кандидат технічних наук" },
  { title: "Учений секретар", name: "Бондаренко Сергій Вікторович", degree: "кандидат технічних наук" },
];

export default function Administration() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Керівництво
        </h2>

        <p className="text-sm leading-relaxed">
          Інститут очолює досвідчений колектив керівників — фахівців у галузі ядерної та радіаційної безпеки,
          реакторної фізики та управління науковими установами.
        </p>

        <div className="flex flex-col gap-3">
          {staff.map(({ title, name, degree }) => (
            <div key={name} className="flex gap-4 items-center bg-[#EFF4FB] rounded-lg p-4 border border-[#c8d8ea]">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#51749E] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="10" r="6" fill="white" fillOpacity="0.85"/>
                  <ellipse cx="14" cy="24" rx="10" ry="6" fill="white" fillOpacity="0.85"/>
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-[#51749E] font-medium">{title}</span>
                <span className="text-sm font-bold">{name}</span>
                <span className="text-xs text-gray-500">{degree}</span>
              </div>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
