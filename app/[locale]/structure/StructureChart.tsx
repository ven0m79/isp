import {
  localizedRoute,
  StructureLocale,
  structureUnits,
} from "./structureData";

type NodeLayout = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  lines: Record<StructureLocale, string[]>;
};

const nodes: NodeLayout[] = [
  { id: "leadership", x: 24, y: 72, width: 250, height: 54, lines: { uk: ["Керівництво"], en: ["Administration"] } },
  { id: "scientific-council", x: 335, y: 72, width: 250, height: 54, lines: { uk: ["Вчена рада"], en: ["Scientific Council"] } },
  { id: "specialized-scientific-council", x: 646, y: 72, width: 250, height: 54, lines: { uk: ["Спеціалізована", "вчена рада"], en: ["Specialized", "Scientific Council"] } },

  { id: "atomic-energy", x: 24, y: 190, width: 250, height: 68, lines: { uk: ["Відділення", "атомної енергетики"], en: ["Division for Nuclear", "Power Engineering"] } },
  { id: "nuclear-installations-safety", x: 24, y: 292, width: 250, height: 62, lines: { uk: ["Відділ безпеки", "ядерних установок"], en: ["Safety of Nuclear", "Installations"] } },
  { id: "radiation-ecology", x: 24, y: 370, width: 250, height: 62, lines: { uk: ["Відділ радіаційної", "екології"], en: ["Department of", "Radiation Ecology"] } },

  { id: "radiation-nuclear-technologies", x: 335, y: 180, width: 250, height: 88, lines: { uk: ["Відділення проектування", "об'єктів з радіаційно-", "ядерними технологіями"], en: ["Design of Facilities with", "Radiation and Nuclear", "Technologies"] } },
  { id: "hazardous-facilities-safety", x: 335, y: 292, width: 250, height: 70, lines: { uk: ["Відділ аналізу безпеки", "радіаційно небезпечних", "об'єктів"], en: ["Safety Analysis of", "Radiation-Hazardous", "Facilities"] } },
  { id: "npp-decommissioning", x: 335, y: 378, width: 250, height: 70, lines: { uk: ["Відділ зняття з", "експлуатації атомних", "електростанцій"], en: ["Nuclear Power Plants", "Decommissioning"] } },
  { id: "building-technologies", x: 335, y: 464, width: 250, height: 70, lines: { uk: ["Відділ будівельних", "технологій і конструкцій"], en: ["Building Technologies", "and Structures"] } },

  { id: "nuclear-radiation-safety", x: 646, y: 190, width: 250, height: 68, lines: { uk: ["Відділення ядерної та", "радіаційної безпеки"], en: ["Division for Nuclear and", "Radiation Safety"] } },
  { id: "radiation-monitoring", x: 646, y: 292, width: 250, height: 62, lines: { uk: ["Відділ радіаційного", "моніторингу"], en: ["Department of", "Radiation Monitoring"] } },
  { id: "nuclear-safety", x: 646, y: 370, width: 250, height: 62, lines: { uk: ["Відділ ядерної", "безпеки"], en: ["Department of", "Nuclear Safety"] } },
  { id: "radiation-materials", x: 646, y: 448, width: 250, height: 86, lines: { uk: ["Відділ радіаційного", "матеріалознавства та", "приладобудування"], en: ["Radiation Materials Science", "and Radiation", "Instrumentation"] } },

  { id: "scientific-organization", x: 24, y: 620, width: 202, height: 62, lines: { uk: ["Науково-організаційний", "відділ"], en: ["Scientific and", "Organizational Department"] } },
  { id: "safety-quality-labor", x: 247, y: 620, width: 202, height: 62, lines: { uk: ["Відділ РБ, якості та", "охорони праці"], en: ["Radiation Safety, Quality", "and Occupational Safety"] } },
  { id: "human-resources", x: 470, y: 620, width: 202, height: 62, lines: { uk: ["Відділ кадрів"], en: ["Human Resources", "Department"] } },
  { id: "legal-service", x: 693, y: 620, width: 202, height: 62, lines: { uk: ["Юридична служба"], en: ["Legal Service"] } },
  { id: "planning-production", x: 24, y: 704, width: 202, height: 62, lines: { uk: ["Планово-виробничий", "відділ"], en: ["Planning and Production", "Department"] } },
  { id: "accounting-service", x: 247, y: 704, width: 202, height: 62, lines: { uk: ["Бухгалтерська служба"], en: ["Accounting Service"] } },
  { id: "office", x: 470, y: 704, width: 202, height: 62, lines: { uk: ["Канцелярія"], en: ["Office"] } },
  { id: "operational-technical-support", x: 693, y: 704, width: 202, height: 78, lines: { uk: ["Відділ експлуатаційно-", "технічного забезпечення", "наукових досліджень"], en: ["Operational and Technical", "Support for Scientific", "Research"] } },
];

const unitById = new Map(structureUnits.map((unit) => [unit.id, unit]));

function Node({ node, locale }: { node: NodeLayout; locale: StructureLocale }) {
  const unit = unitById.get(node.id);
  if (!unit) return null;

  const isPrimary = unit.kind === "governance" || unit.kind === "division";
  const isGovernance = unit.kind === "governance";
  const lineHeight = isGovernance ? 19 : unit.kind === "division" ? 18 : 16;
  const firstLineY = node.y + node.height / 2 - ((node.lines[locale].length - 1) * lineHeight) / 2 + 5;

  return (
    <a href={localizedRoute(locale, unit.route)} aria-label={unit.title[locale]}>
      <g className="group cursor-pointer outline-none" tabIndex={0}>
        <title>{unit.title[locale]}</title>
        <rect
          x={node.x}
          y={node.y}
          width={node.width}
          height={node.height}
          rx={isPrimary ? 12 : 7}
          className={isGovernance
            ? "fill-[#002766] stroke-[#00183f] transition group-hover:fill-[#003d80] group-focus:stroke-[#f2b705]"
            : isPrimary
              ? "fill-[#0061AA] stroke-[#004b86] transition group-hover:fill-[#004f8d] group-focus:stroke-[#f2b705]"
              : "fill-[#EFF4FB] stroke-[#8eacca] transition group-hover:fill-white group-hover:stroke-[#0061AA] group-focus:stroke-[#f2b705]"}
          strokeWidth={isGovernance ? 2.5 : isPrimary ? 2 : 1.5}
        />
        {node.lines[locale].map((line, index) => (
          <text
            key={line}
            x={node.x + node.width / 2}
            y={firstLineY + index * lineHeight}
            textAnchor="middle"
            className={isPrimary ? "pointer-events-none fill-white" : "pointer-events-none fill-[#002766]"}
            fontSize={isGovernance ? 18 : unit.kind === "division" ? 16 : 16}
            fontWeight={isPrimary ? 700 : 400}
          >
            {line}
          </text>
        ))}
      </g>
    </a>
  );
}

export default function StructureChart({ locale }: { locale: StructureLocale }) {
  const title = locale === "uk" ? "Структура ІПБ АЕС НАН України" : "Organisational Structure of ISP NPP";
  const scientific = locale === "uk" ? "Наукові підрозділи" : "Scientific Divisions";
  const support = locale === "uk" ? "Адміністративні та допоміжні підрозділи" : "Administrative and Support Units";

  return (
    <svg
      viewBox="0 0 920 820"
      role="img"
      aria-labelledby="structure-title structure-description"
      className="h-auto min-w-[760px] w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="structure-title">{title}</title>
      <desc id="structure-description">
        {locale === "uk" ? "Інтерактивна схема підрозділів Інституту" : "Interactive diagram of the Institute's units"}
      </desc>
      <rect width="920" height="820" rx="16" className="fill-white" />
      <text x="460" y="34" textAnchor="middle" className="fill-[#002766]" fontSize="22" fontWeight="700">{title}</text>

      <g aria-hidden="true">
        <rect x="10" y="178" width="278" height="277" rx="14" fill="#DBEAFE" fillOpacity="0.58" stroke="#93C5FD" strokeWidth="1.5" />
        <rect x="320" y="168" width="280" height="386" rx="14" fill="#DBEAFE" fillOpacity="0.58" stroke="#93C5FD" strokeWidth="1.5" />
        <rect x="632" y="178" width="278" height="376" rx="14" fill="#DBEAFE" fillOpacity="0.58" stroke="#93C5FD" strokeWidth="1.5" />
        <rect x="10" y="608" width="898" height="177" rx="14" fill="#DBEAFE" fillOpacity="0.58" stroke="#93C5FD" strokeWidth="1.5" />
      </g>
      <text x="460" y="152" textAnchor="middle" className="fill-[#51749E]" fontSize="16" fontWeight="700" letterSpacing="1.5">{scientific.toUpperCase()}</text>
      <text x="460" y="594" textAnchor="middle" className="fill-[#51749E]" fontSize="16" fontWeight="700" letterSpacing="1.2">{support.toUpperCase()}</text>

      {nodes.map((node) => <Node key={node.id} node={node} locale={locale} />)}
    </svg>
  );
}
