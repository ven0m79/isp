import { MainLayout } from "@app/components/templates";

const locations = [
  {
    city: "м. Київ",
    address: "вул. Лисогірська, 12, 03028",
    phone: "+38 (044) 525-05-86",
    fax: "+38 (044) 525-05-86",
    email: "office@ispnpp.kiev.ua",
    hours: "Пн–Пт: 9:00 – 17:30",
    mapSrc:
      "https://maps.google.com/maps?q=вул.+Лисогірська+12,+Київ&output=embed&z=15",
  },
  {
    city: "м. Чорнобиль",
    address: "вул. Кірова, 36а, Київська обл., 07270",
    phone: "+38 (04593) 5-10-14",
    fax: "+38 (04593) 5-10-14",
    email: "ispnpp@ispnpp.kiev.ua",
    hours: "Пн–Пт: 9:00 – 17:30",
    mapSrc:
      "https://maps.google.com/maps?q=Chornobyl,+Kyiv+Oblast,+Ukraine&output=embed&z=13",
  },
];

const departments = [
  { name: "Відділ ядерної безпеки", phone: "+38 (044) 424-11-01", email: "nuclear@ispnpp.kiev.ua" },
  { name: "Відділ радіаційної безпеки", phone: "+38 (044) 424-11-02", email: "radiation@ispnpp.kiev.ua" },
  { name: "Відділ радіоекології", phone: "+38 (044) 424-11-03", email: "ecology@ispnpp.kiev.ua" },
  { name: "Бухгалтерія", phone: "+38 (044) 424-11-10", email: "finance@ispnpp.kiev.ua" },
  { name: "Відділ кадрів", phone: "+38 (044) 424-11-20", email: "hr@ispnpp.kiev.ua" },
];

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
      <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.75A1.75 1.75 0 1 1 10 5.25a1.75 1.75 0 0 1 0 3.5z" fill="#0061AA" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <path d="M4.5 3A1.5 1.5 0 0 0 3 4.5v.75C3 12.47 7.53 17 15.25 17h.75A1.5 1.5 0 0 0 17.5 15.5v-2a1.5 1.5 0 0 0-1.09-1.44l-2.25-.6a1.5 1.5 0 0 0-1.55.46l-.68.81a9.07 9.07 0 0 1-4.65-4.65l.81-.68a1.5 1.5 0 0 0 .46-1.55l-.6-2.25A1.5 1.5 0 0 0 6.5 3H4.5z" fill="#0061AA" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="#0061AA" strokeWidth="1.4" fill="none" />
      <path d="M2 7l8 5 8-5" stroke="#0061AA" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="7.5" stroke="#0061AA" strokeWidth="1.4" />
      <path d="M10 6v4l2.5 2.5" stroke="#0061AA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Contacts() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-6 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Контакти
        </h2>

        {/* Two locations side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locations.map((loc) => (
            <div key={loc.city} className="flex flex-col gap-3">

              {/* Info card */}
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#EFF4FB] border border-[#c8d8ea]">
                <div className="flex items-start gap-2">
                  <PinIcon />
                  <div>
                    <p className="text-sm font-bold">{loc.city}</p>
                    <p className="text-sm text-gray-700">{loc.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <PhoneIcon />
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-[#0061AA]">
                    {loc.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MailIcon />
                  <a href={`mailto:${loc.email}`} className="text-[#0061AA] hover:underline">
                    {loc.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <ClockIcon />
                  {loc.hours}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-[#c8d8ea] flex-1">
                <iframe
                  title={`Карта — ${loc.city}`}
                  src={loc.mapSrc}
                  width="100%"
                  height="240"
                  loading="lazy"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                />
              </div>

            </div>
          ))}
        </div>

        {/* Department contacts */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-base border-t border-[#c8d8ea] pt-4">
            Контакти підрозділів
          </h3>
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
