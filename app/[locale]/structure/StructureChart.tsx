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
  const lineHeight = 16;
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
          className={isPrimary
            ? "fill-[#0061AA] stroke-[#004b86] transition group-hover:fill-[#004f8d] group-focus:stroke-[#f2b705]"
            : "fill-[#EFF4FB] stroke-[#8eacca] transition group-hover:fill-white group-hover:stroke-[#0061AA] group-focus:stroke-[#f2b705]"}
          strokeWidth={isPrimary ? 2 : 1.5}
        />
        {node.lines[locale].map((line, index) => (
          <text
            key={line}
            x={node.x + node.width / 2}
            y={firstLineY + index * lineHeight}
            textAnchor="middle"
            className={isPrimary ? "pointer-events-none fill-white" : "pointer-events-none fill-[#002766]"}
            fontSize={isPrimary ? 13 : 12}
            fontWeight={isPrimary ? 700 : 600}
          >
            {line}
          </text>
        ))}
        <path
          d={`M ${node.x + node.width - 24} ${node.y + node.height / 2 - 4} l 5 4 -5 4`}
          fill="none"
          stroke={isPrimary ? "white" : "#0061AA"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100"
        />
      </g>
    </a>
  );
}

function Branch({ x, top, bottom }: { x: number; top: number; bottom: number }) {
  return <path d={`M ${x} ${top} V ${bottom}`} className="fill-none stroke-[#8eacca]" strokeWidth="2" />;
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

      <path d="M 149 142 V 154 H 771 V 142 M 460 126 V 154" className="fill-none stroke-[#51749E]" strokeWidth="2" />
      <text x="460" y="174" textAnchor="middle" className="fill-[#51749E]" fontSize="12" fontWeight="700" letterSpacing="1.5">{scientific.toUpperCase()}</text>

      <Branch x={149} top={258} bottom={432} />
      <Branch x={460} top={268} bottom={534} />
      <Branch x={771} top={258} bottom={534} />
      <path d="M 149 276 H 36 M 149 354 H 36 M 460 276 H 347 M 460 362 H 347 M 460 448 H 347 M 771 276 H 658 M 771 354 H 658 M 771 432 H 658" className="fill-none stroke-[#8eacca]" strokeWidth="2" />

      <path d="M 460 550 V 584 H 125 V 606 M 460 584 H 794 V 606 M 348 584 V 606 M 571 584 V 606" className="fill-none stroke-[#51749E]" strokeWidth="2" />
      <text x="460" y="604" textAnchor="middle" className="fill-[#51749E]" fontSize="12" fontWeight="700" letterSpacing="1.2">{support.toUpperCase()}</text>

      {nodes.map((node) => <Node key={node.id} node={node} locale={locale} />)}
    </svg>
  );
}
