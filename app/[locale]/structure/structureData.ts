export type StructureLocale = "uk" | "en";

export type LocalizedText = Record<StructureLocale, string>;

export type StructureUnit = {
  id: string;
  title: LocalizedText;
  shortTitle?: LocalizedText;
  parent?: string;
  route: string;
  kind: "governance" | "division" | "department" | "support";
};

export const structureUnits: StructureUnit[] = [
  {
    id: "leadership",
    title: { uk: "Керівництво", en: "Administration" },
    route: "/about/administration",
    kind: "governance",
  },
  {
    id: "scientific-council",
    title: { uk: "Вчена рада", en: "Scientific Council" },
    route: "/about/scientists-council",
    kind: "governance",
  },
  {
    id: "specialized-scientific-council",
    title: {
      uk: "Спеціалізована вчена рада",
      en: "Specialized Scientific Council",
    },
    route: "/about/specialized-scientists-council",
    kind: "governance",
  },
  {
    id: "atomic-energy",
    title: {
      uk: "Відділення атомної енергетики",
      en: "Division for Nuclear Power Engineering",
    },
    shortTitle: { uk: "ВАЕ", en: "DNPE" },
    route: "/structure/atomic-energy",
    kind: "division",
  },
  {
    id: "nuclear-installations-safety",
    title: {
      uk: "Відділ безпеки ядерних установок",
      en: "Department for Safety of Nuclear Installations",
    },
    parent: "atomic-energy",
    route: "/structure/nuclear-installations-safety",
    kind: "department",
  },
  {
    id: "radiation-ecology",
    title: {
      uk: "Відділ радіаційної екології",
      en: "Department of Radiation Ecology",
    },
    parent: "atomic-energy",
    route: "/structure/radiation-ecology",
    kind: "department",
  },
  {
    id: "radiation-nuclear-technologies",
    title: {
      uk: "Відділення проектування об'єктів з радіаційно-ядерними технологіями",
      en: "Division for Design of Facilities with Radiation and Nuclear Technologies",
    },
    shortTitle: { uk: "ВПОРЯТ", en: "DDFRNT" },
    route: "/structure/radiation-nuclear-technologies",
    kind: "division",
  },
  {
    id: "hazardous-facilities-safety",
    title: {
      uk: "Відділ аналізу безпеки радіаційно небезпечних об'єктів",
      en: "Department for Safety Analysis of Radiation-Hazardous Facilities",
    },
    parent: "radiation-nuclear-technologies",
    route: "/structure/hazardous-facilities-safety",
    kind: "department",
  },
  {
    id: "npp-decommissioning",
    title: {
      uk: "Відділ зняття з експлуатації атомних електростанцій",
      en: "Department for Nuclear Power Plants Decommissioning",
    },
    parent: "radiation-nuclear-technologies",
    route: "/structure/npp-decommissioning",
    kind: "department",
  },
  {
    id: "building-technologies",
    title: {
      uk: "Відділ будівельних технологій і конструкцій",
      en: "Department of Building Technologies and Structures",
    },
    parent: "radiation-nuclear-technologies",
    route: "/structure/building-technologies",
    kind: "department",
  },
  {
    id: "nuclear-radiation-safety",
    title: {
      uk: "Відділення ядерної та радіаційної безпеки",
      en: "Division for Nuclear and Radiation Safety",
    },
    shortTitle: { uk: "ВЯРБ", en: "DNRS" },
    route: "/structure/nuclear-radiation-safety",
    kind: "division",
  },
  {
    id: "radiation-monitoring",
    title: {
      uk: "Відділ радіаційного моніторингу",
      en: "Department of Radiation Monitoring",
    },
    parent: "nuclear-radiation-safety",
    route: "/structure/radiation-monitoring",
    kind: "department",
  },
  {
    id: "nuclear-safety",
    title: {
      uk: "Відділ ядерної безпеки",
      en: "Department of Nuclear Safety",
    },
    parent: "nuclear-radiation-safety",
    route: "/structure/nuclear-safety",
    kind: "department",
  },
  {
    id: "radiation-materials",
    title: {
      uk: "Відділ радіаційного матеріалознавства та радіаційного приладобудування",
      en: "Department of Radiation Materials Science and Radiation Instrumentation",
    },
    parent: "nuclear-radiation-safety",
    route: "/structure/radiation-materials",
    kind: "department",
  },
  {
    id: "scientific-organization",
    title: {
      uk: "Науково-організаційний відділ",
      en: "Scientific and Organizational Department",
    },
    route: "/structure/scientific-organization",
    kind: "support",
  },
  {
    id: "safety-quality-labor",
    title: {
      uk: "Відділ РБ, якості та охорони праці",
      en: "Department of Radiation Safety, Quality and Occupational Safety",
    },
    route: "/structure/safety-quality-labor",
    kind: "support",
  },
  {
    id: "human-resources",
    title: { uk: "Відділ кадрів", en: "Human Resources Department" },
    route: "/structure/human-resources",
    kind: "support",
  },
  {
    id: "legal-service",
    title: { uk: "Юридична служба", en: "Legal Service" },
    route: "/structure/legal-service",
    kind: "support",
  },
  {
    id: "planning-production",
    title: {
      uk: "Планово-виробничий відділ",
      en: "Planning and Production Department",
    },
    route: "/structure/planning-production",
    kind: "support",
  },
  {
    id: "accounting-service",
    title: { uk: "Бухгалтерська служба", en: "Accounting Service" },
    route: "/structure/accounting-service",
    kind: "support",
  },
  {
    id: "office",
    title: { uk: "Канцелярія", en: "Office" },
    route: "/structure/office",
    kind: "support",
  },
  {
    id: "operational-technical-support",
    title: {
      uk: "Відділ експлуатаційно-технічного забезпечення наукових досліджень",
      en: "Department of Operational and Technical Support for Scientific Research",
    },
    route: "/structure/operational-technical-support",
    kind: "support",
  },
];

export function getStructureUnit(id: string): StructureUnit | undefined {
  return structureUnits.find((unit) => unit.id === id);
}

export function localizedRoute(locale: StructureLocale, route: string): string {
  return locale === "en" ? `/en${route}` : route;
}
