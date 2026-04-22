import { MainLayout } from "@app/components/templates";

const contacts = [
  {
    label: "Поштова адреса",
    value: "03028, м. Київ, пр. Академіка Палладіна, 46",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.75A1.75 1.75 0 1 1 10 5.25a1.75 1.75 0 0 1 0 3.5z" fill="#0061AA"/>
      </svg>
    ),
  },
  {
    label: "Телефон приймальні",
    value: "+38 (044) 424-00-99",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4.5 3A1.5 1.5 0 0 0 3 4.5v.75C3 12.47 7.53 17 15.25 17h.75A1.5 1.5 0 0 0 17.5 15.5v-2a1.5 1.5 0 0 0-1.09-1.44l-2.25-.6a1.5 1.5 0 0 0-1.55.46l-.68.81a9.07 9.07 0 0 1-4.65-4.65l.81-.68a1.5 1.5 0 0 0 .46-1.55l-.6-2.25A1.5 1.5 0 0 0 6.5 3H4.5z" fill="#0061AA"/>
      </svg>
    ),
  },
  {
    label: "Факс",
    value: "+38 (044) 424-00-98",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="7" width="14" height="10" rx="1.5" stroke="#0061AA" strokeWidth="1.4" fill="none"/>
        <rect x="6" y="3" width="8" height="5" rx="1" stroke="#0061AA" strokeWidth="1.4" fill="none"/>
        <circle cx="14" cy="12" r="1" fill="#0061AA"/>
      </svg>
    ),
  },
  {
    label: "Електронна пошта",
    value: "office@ispnpp.kiev.ua",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#0061AA" strokeWidth="1.4" fill="none"/>
        <path d="M2 7l8 5 8-5" stroke="#0061AA" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Режим роботи",
    value: "Пн–Пт: 9:00 – 17:30 (обід 13:00 – 14:00)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#0061AA" strokeWidth="1.4"/>
        <path d="M10 6v4l2.5 2.5" stroke="#0061AA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const departments = [
  { name: "Відділ ядерної безпеки", phone: "+38 (044) 424-11-01", email: "nuclear@ispnpp.kiev.ua" },
  { name: "Відділ радіаційної безпеки", phone: "+38 (044) 424-11-02", email: "radiation@ispnpp.kiev.ua" },
  { name: "Відділ радіоекології", phone: "+38 (044) 424-11-03", email: "ecology@ispnpp.kiev.ua" },
  { name: "Бухгалтерія", phone: "+38 (044) 424-11-10", email: "finance@ispnpp.kiev.ua" },
  { name: "Відділ кадрів", phone: "+38 (044) 424-11-20", email: "hr@ispnpp.kiev.ua" },
];

export default function Contacts() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-6 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Контакти
        </h2>

        {/* Main contacts */}
        <div className="flex flex-col gap-2">
          {contacts.map(({ label, value, icon }) => (
            <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
              <span className="shrink-0">{icon}</span>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-gray-500">{label}</span>
                <span className="text-sm font-medium">{value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden border border-[#c8d8ea]">
          <iframe
            title="Розташування ІПБ АЕС НАН України"
            src="https://maps.google.com/maps?q=пр.+Академіка+Палладіна+46,+Київ&output=embed&z=15"
            width="100%"
            height="280"
            loading="lazy"
            style={{ border: 0, display: "block" }}
            allowFullScreen
          />
        </div>

        {/* Department contacts */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-base">Контакти підрозділів</h3>
          <div className="flex flex-col gap-2">
            {departments.map(({ name, phone, email }) => (
              <div key={name} className="p-3 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
                <p className="text-sm font-semibold mb-1">{name}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-0.5 text-xs text-gray-600">
                  <span>{phone}</span>
                  <a href={`mailto:${email}`} className="text-[#0061AA] hover:underline">{email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
