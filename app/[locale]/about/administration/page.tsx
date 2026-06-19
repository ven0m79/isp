import { MainLayout } from "@app/components/templates";
import { Link } from "@app/i18n/navigation";
import FlipPhotoCard from "./FlipPhotoCard";

type Contact = {
  label: string;
  value: string;
};

type StaffMember = {
  name: string;
  href?: string;
  position: string;
  credentials?: string[];
  contacts: Contact[];
  photo: string;
  backPhoto: string;
};

const staff: StaffMember[] = [
  {
    name: "Борисенко Володимир Іванович",
    href: "/about/administration/borisenko",
    position: "Директор ІПБ АЕС НАН України",
    credentials: ["член-кореспондент НАН України", "доктор технічних наук, старший дослідник"],
    contacts: [
      { label: "тел (Чорнобиль)", value: "+38(04593)5-10-44" },
      { label: "факс (Чорнобиль)", value: "+38(04593)5-10-44" },
      { label: "тел/факс (Київ)", value: "+38(044)525-05-86" },
    ],
    photo: "/administration/borisenko.webp",
    backPhoto: "/administration/borisenko-back.webp",
  },
  {
    name: "Носовський Анатолій Володимирович",
    href: "/about/administration/nosovskyy/",
    position: "Радник директора ІПБ АЕС НАН України",
    credentials: ["академік НАН України", "доктор технічних наук, професор"],
    contacts: [
      { label: "тел (Чорнобиль)", value: "+38(04593)5-10-44" },
      { label: "факс (Чорнобиль)", value: "+38(04593)5-10-44" },
      { label: "тел/факс (Київ)", value: "+38(044)525-05-86" },
    ],
    photo: "/administration/nosovskyy.webp",
    backPhoto: "/administration/nosovskyy-back.webp",
  },
  {
    name: "Паскевич Сергій Анатолійович",
    href: "/about/administration/paskevich",
    position: "Заступник директора з наукової роботи",
    credentials: ["кандидат біологічних наук"],
    contacts: [
      { label: "тел (Чорнобиль)", value: "+38(04593)5-12-09" },
      { label: "факс (Чорнобиль)", value: "+38(04593)5-10-44" },
    ],
    photo: "/administration/paskevich.webp",
    backPhoto: "/administration/paskevich-back.webp",
  },
  {
    name: "Кудін Євгенія Миколаївна",
    href: "http://www.ispnpp.kiev.ua/kudin/",
    position: "Заступник директора з загальних питань",
    contacts: [{ label: "тел/факс (Київ)", value: "+38(044)525-05-86" }],
    photo: "/administration/kudin.webp",
    backPhoto: "/back-photo3.webp",
  },
  {
    name: "Полюлях Інна Анатоліївна",
    href: "http://www.ispnpp.kiev.ua/poliuliakh/",
    position: "Заступник директора з фінансово-економічної роботи",
    contacts: [{ label: "тел/факс (Чорнобиль)", value: "+38(04593)5-20-56" }],
    photo: "/administration/poluljah.webp",
    backPhoto: "/back-photo4.webp",
  },
  {
    name: "Балибердіна Юлія Петрівна",
    position: "Головний бухгалтер",
    contacts: [{ label: "тел/факс (Чорнобиль)", value: "+38(04593)5-20-56" }],
    photo: "/administration/baliberd.webp",
    backPhoto: "/back-photo5.webp",
  },
  {
    name: "Сімейко Костянтин Віталійович",
    href: "http://www.ispnpp.kiev.ua/simeiko/",
    position: "Учений секретар",
    credentials: ["доктор технічних наук, старший дослідник"],
    contacts: [
      { label: "тел. (Київ)", value: "+38(044)525-24-72" },
      { label: "тел/факс (Київ)", value: "+38(044)525-05-86" },
    ],
    photo: "/administration/simeyko.webp",
    backPhoto: "/back-photo6.webp",
  },
];

function phoneHref(value: string): string {
  return `tel:${value.replace(/[^\d+]/g, "")}`;
}

function StaffCard({ member }: { member: StaffMember }) {
  const isExternalHref = member.href?.startsWith("http");
  const name = member.href ? (
    isExternalHref ? (
    <a
      href={member.href}
      className="text-[#0061AA] transition hover:text-[#002766] hover:underline"
    >
      {member.name}
    </a>
    ) : (
      <Link
        href={member.href}
        className="text-[#0061AA] transition hover:text-[#002766] hover:underline"
      >
        {member.name}
      </Link>
    )
  ) : (
    member.name
  );

  return (
    <section className="flex flex-col overflow-hidden rounded-lg border border-[#c8d8ea] bg-[#EFF4FB] md:flex-row">
      <FlipPhotoCard
        frontSrc={member.photo}
        backSrc={member.backPhoto}
        alt={member.name}
      />

      <div className="flex flex-col justify-center gap-4 p-5 text-sm leading-relaxed">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold leading-snug text-[#002766]">{name}</h3>
          <p className="font-semibold text-[#51749E]">{member.position}</p>
          {member.credentials?.map((credential) => (
            <p key={credential} className="text-gray-700">
              {credential}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 border-l-4 border-[#0061AA] pl-4">
          <p className="font-semibold text-[#002766]">Контактна інформація:</p>
          {member.contacts.map((contact) => (
            <p key={`${contact.label}-${contact.value}`} className="text-gray-700">
              <span className="font-medium text-[#002766]">{contact.label}: </span>
              <a href={phoneHref(contact.value)} className="hover:text-[#0061AA] hover:underline">
                {contact.value}
              </a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Administration() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 p-2 text-[#002766]">
        <h2 className="border-b-2 border-[#51749E] pb-2 text-xl font-bold">
          Керівництво
        </h2>

        <div className="flex flex-col gap-4">
          {staff.map((member) => (
            <StaffCard key={member.name} member={member} />
          ))}
        </div>
      </article>
    </MainLayout>
  );
}
