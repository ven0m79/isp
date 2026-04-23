import { MainLayout } from "@app/components/templates";
import Link from "next/link";

const links = [
  { href: "/activity/areas-of-activity", label: "Напрями діяльності" },
  { href: "/activity/scientific-activity", label: "Наукова діяльність" },
  { href: "/activity/international-activity", label: "Міжнародна діяльність" },
  { href: "/activity/partners", label: "Партнери" },
  { href: "/activity/results-of-activity", label: "Результати діяльності" },
  { href: "/activity/gender-equality-plan", label: "План ґендерної рівності" },
  { href: "/activity/prevention-of-corruption", label: "Запобігання корупції" },
  { href: "/activity/union-committee", label: "Профспілка" },
  { href: "/activity/information-on-procurement-procedures", label: "Закупівлі" },
];

export default function Activity() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Діяльність
        </h2>

        <p className="text-sm leading-relaxed">
          Інститут здійснює комплексну наукову та науково-технічну діяльність у галузі ядерної та радіаційної безпеки.
          Роботи охоплюють фундаментальні дослідження, прикладні розробки, міжнародне співробітництво та
          нормативно-технічне забезпечення ядерної галузі України.
        </p>

        <div className="grid grid-cols-1 gap-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea] hover:bg-[#dce8f5] hover:border-[#0061AA] transition text-sm font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M6 3l5 5-5 5" stroke="#0061AA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {label}
            </Link>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
