import { getTranslations } from "next-intl/server";
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
};

const nodes: NodeLayout[] = [
  { id: "leadership", x: 24, y: 72, width: 250, height: 54 },
  { id: "scientific-council", x: 335, y: 72, width: 250, height: 54 },
  { id: "specialized-scientific-council", x: 646, y: 72, width: 250, height: 54 },
  { id: "atomic-energy", x: 24, y: 190, width: 250, height: 68 },
  { id: "nuclear-installations-safety", x: 24, y: 292, width: 250, height: 62 },
  { id: "radiation-ecology", x: 24, y: 370, width: 250, height: 62 },
  { id: "radiation-nuclear-technologies", x: 335, y: 180, width: 250, height: 88 },
  { id: "hazardous-facilities-safety", x: 335, y: 292, width: 250, height: 70 },
  { id: "npp-decommissioning", x: 335, y: 378, width: 250, height: 70 },
  { id: "building-technologies", x: 335, y: 464, width: 250, height: 70 },
  { id: "nuclear-radiation-safety", x: 646, y: 190, width: 250, height: 68 },
  { id: "radiation-monitoring", x: 646, y: 292, width: 250, height: 62 },
  { id: "nuclear-safety", x: 646, y: 370, width: 250, height: 62 },
  { id: "radiation-materials", x: 646, y: 448, width: 250, height: 86 },
  { id: "scientific-organization", x: 24, y: 620, width: 202, height: 62 },
  { id: "safety-quality-labor", x: 247, y: 620, width: 202, height: 62 },
  { id: "human-resources", x: 470, y: 620, width: 202, height: 62 },
  { id: "legal-service", x: 693, y: 620, width: 202, height: 62 },
  { id: "planning-production", x: 24, y: 704, width: 202, height: 62 },
  { id: "accounting-service", x: 247, y: 704, width: 202, height: 62 },
  { id: "office", x: 470, y: 704, width: 202, height: 62 },
  { id: "operational-technical-support", x: 693, y: 704, width: 202, height: 78 },
];

const unitById = new Map(structureUnits.map((unit) => [unit.id, unit]));

function Node({
  node,
  locale,
  lines,
  title,
}: {
  node: NodeLayout;
  locale: StructureLocale;
  lines: string[];
  title: string;
}) {
  const unit = unitById.get(node.id);
  if (!unit) return null;

  const isPrimary = unit.kind === "governance" || unit.kind === "division";
  const isGovernance = unit.kind === "governance";
  const lineHeight = isGovernance ? 19 : unit.kind === "division" ? 18 : 16;
  const firstLineY = node.y + node.height / 2 - ((lines.length - 1) * lineHeight) / 2 + 5;

  return (
    <a href={localizedRoute(locale, unit.route)} aria-label={title}>
      <g className="group cursor-pointer outline-none" tabIndex={0}>
        <title>{title}</title>
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
        {lines.map((line, index) => (
          <text
            key={`${line}-${index}`}
            x={node.x + node.width / 2}
            y={firstLineY + index * lineHeight}
            textAnchor="middle"
            className={isPrimary ? "pointer-events-none fill-white" : "pointer-events-none fill-[#002766]"}
            fontSize={isGovernance ? 16 : unit.kind === "division" ? 15 : 12}
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

export default async function StructureChart({ locale }: { locale: StructureLocale }) {
  const t = await getTranslations("structure");

  return (
    <svg
      viewBox="0 0 920 820"
      role="img"
      aria-labelledby="structure-title structure-description"
      className="h-auto min-w-[760px] w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="structure-title">{t("title")}</title>
      <desc id="structure-description">{t("description")}</desc>
      <rect width="920" height="820" rx="16" className="fill-white" />
      <text x="460" y="34" textAnchor="middle" className="fill-[#002766]" fontSize="22" fontWeight="700">{t("title")}</text>

      <g aria-hidden="true">
        <rect x="10" y="178" width="278" height="277" rx="14" fill="#DBEAFE" fillOpacity="0.58" stroke="#93C5FD" strokeWidth="1.5" />
        <rect x="320" y="168" width="280" height="386" rx="14" fill="#DBEAFE" fillOpacity="0.58" stroke="#93C5FD" strokeWidth="1.5" />
        <rect x="632" y="178" width="278" height="376" rx="14" fill="#DBEAFE" fillOpacity="0.58" stroke="#93C5FD" strokeWidth="1.5" />
      </g>
      <text x="460" y="152" textAnchor="middle" className="fill-[#51749E]" fontSize="12" fontWeight="700" letterSpacing="1.5">{t("scientific").toUpperCase()}</text>
      <text x="460" y="604" textAnchor="middle" className="fill-[#51749E]" fontSize="12" fontWeight="700" letterSpacing="1.2">{t("support").toUpperCase()}</text>

      {nodes.map((node) => (
        <Node
          key={node.id}
          node={node}
          locale={locale}
          lines={t.raw(`chart.nodes.${node.id}`) as string[]}
          title={t(`units.${node.id}.title`)}
        />
      ))}
    </svg>
  );
}
