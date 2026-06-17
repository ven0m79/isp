import { MainLayout } from "@app/components/templates";
import Link from "next/link";

export default function QMS() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Система управління якістю
        </h2>

        <p className="text-sm leading-relaxed">
          ІПБ АЕС НАН України впровадив і підтримує систему управління якістю (СУЯ) відповідно до
          міжнародного стандарту ISO 9001. СУЯ охоплює всі основні процеси наукової та господарської
          діяльності Інституту і підтверджується щорічними зовнішніми аудитами.
        </p>

        <div className="flex items-center gap-4 bg-[#EFF4FB] rounded-lg p-4 border border-[#c8d8ea]">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#0061AA" strokeWidth="2" fill="none"/>
            <path d="M14 24l7 7 13-13" stroke="#0061AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <p className="font-bold text-sm">ISO 9001:2015</p>
            <p className="text-xs text-gray-600 mt-0.5">Сертифікована система управління якістю</p>
            <p className="text-xs text-[#51749E] mt-0.5">Сертифікат чинний до 2026 року</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {[
            { href: "/qms/quality-policy", label: "Політика у сфері якості" },
            { href: "/qms/certificates-and-licenses", label: "Сертифікати та Ліцензії" },
            { href: "/qms/forms", label: "Бланки" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea] hover:bg-[#dce8f5] hover:border-[#0061AA] transition text-sm font-medium">
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
