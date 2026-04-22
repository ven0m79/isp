import { MainLayout } from "@app/components/templates";

const certs = [
  { name: "ISO 9001:2015", scope: "Система управління якістю наукових досліджень", issuer: "Bureau Veritas Certification", valid: "2023–2026" },
  { name: "Ліцензія № АЕ 000150", scope: "Виконання робіт та надання послуг з ядерної та радіаційної безпеки", issuer: "Держатомрегулювання України", valid: "Безстрокова" },
  { name: "Акредитація ІТЛ-087", scope: "Випробувальна лабораторія радіаційного контролю", issuer: "НААУ", valid: "2022–2025" },
];

export default function CertificatesAndLicenses() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Сертифікати та Ліцензії
        </h2>

        <p className="text-sm leading-relaxed">
          Інститут має всі необхідні дозволи та підтвердження компетентності для провадження наукової
          та науково-технічної діяльності у сфері ядерної та радіаційної безпеки.
        </p>

        <div className="flex flex-col gap-3">
          {certs.map(({ name, scope, issuer, valid }) => (
            <div key={name} className="p-4 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea] flex gap-4 items-start">
              <svg width="36" height="44" viewBox="0 0 36 44" fill="none" className="shrink-0">
                <rect x="1" y="1" width="34" height="42" rx="4" fill="white" stroke="#0061AA" strokeWidth="1.5"/>
                <path d="M9 14h18M9 20h18M9 26h12" stroke="#0061AA" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="18" cy="35" r="4" fill="#0061AA" fillOpacity="0.15" stroke="#0061AA" strokeWidth="1"/>
                <path d="M15.5 35l2 2 3-3" stroke="#0061AA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col gap-0.5">
                <p className="font-bold text-sm">{name}</p>
                <p className="text-xs text-gray-700">{scope}</p>
                <p className="text-xs text-[#51749E] mt-1">Видавник: {issuer}</p>
                <p className="text-xs text-gray-500">Дія: {valid}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
