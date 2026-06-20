export type StructureLocale = "uk" | "en";

export type StructureUnit = {
  id: string;
  parent?: string;
  route: string;
  kind: "governance" | "division" | "department" | "support";
  hasShortTitle?: boolean;
};

export const structureUnits: StructureUnit[] = [
  { id: "leadership", route: "/about/administration", kind: "governance" },
  { id: "scientific-council", route: "/about/scientists-council", kind: "governance" },
  { id: "specialized-scientific-council", route: "/about/specialized-scientists-council", kind: "governance" },
  { id: "atomic-energy", route: "/structure/atomic-energy", kind: "division", hasShortTitle: true },
  { id: "nuclear-installations-safety", parent: "atomic-energy", route: "/structure/nuclear-installations-safety", kind: "department" },
  { id: "radiation-ecology", parent: "atomic-energy", route: "/structure/radiation-ecology", kind: "department" },
  { id: "radiation-nuclear-technologies", route: "/structure/radiation-nuclear-technologies", kind: "division", hasShortTitle: true },
  { id: "hazardous-facilities-safety", parent: "radiation-nuclear-technologies", route: "/structure/hazardous-facilities-safety", kind: "department" },
  { id: "npp-decommissioning", parent: "radiation-nuclear-technologies", route: "/structure/npp-decommissioning", kind: "department" },
  { id: "building-technologies", parent: "radiation-nuclear-technologies", route: "/structure/building-technologies", kind: "department" },
  { id: "nuclear-radiation-safety", route: "/structure/nuclear-radiation-safety", kind: "division", hasShortTitle: true },
  { id: "radiation-monitoring", parent: "nuclear-radiation-safety", route: "/structure/radiation-monitoring", kind: "department" },
  { id: "nuclear-safety", parent: "nuclear-radiation-safety", route: "/structure/nuclear-safety", kind: "department" },
  { id: "radiation-materials", parent: "nuclear-radiation-safety", route: "/structure/radiation-materials", kind: "department" },
  { id: "scientific-organization", route: "/structure/scientific-organization", kind: "support" },
  { id: "safety-quality-labor", route: "/structure/safety-quality-labor", kind: "support" },
  { id: "human-resources", route: "/structure/human-resources", kind: "support" },
  { id: "legal-service", route: "/structure/legal-service", kind: "support" },
  { id: "planning-production", route: "/structure/planning-production", kind: "support" },
  { id: "accounting-service", route: "/structure/accounting-service", kind: "support" },
  { id: "office", route: "/structure/office", kind: "support" },
  { id: "operational-technical-support", route: "/structure/operational-technical-support", kind: "support" },
];

export function getStructureUnit(id: string): StructureUnit | undefined {
  return structureUnits.find((unit) => unit.id === id);
}

export function localizedRoute(locale: StructureLocale, route: string): string {
  return locale === "en" ? `/en${route}` : route;
}
