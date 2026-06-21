export type RegisteredUnitPageConfig = {
  unitId: string;
  namespace: string;
  assetDir: string;
  portraitFile?: string;
  workFiles: string[];
};

export const registeredUnitPages = {
  "atomic-energy": {
    unitId: "atomic-energy",
    namespace: "structure.atomicEnergyStandard",
    assetDir: "/structure/atomic-energy",
    portraitFile: "portrait.webp",
    workFiles: [],
  },
  "nuclear-installations-safety": {
    unitId: "nuclear-installations-safety",
    namespace: "structure.nuclearInstallationsSafetyStandard",
    assetDir: "/structure/nuclear-installations-safety",
    workFiles: [],
  },
  "radiation-ecology": {
    unitId: "radiation-ecology",
    namespace: "structure.radiationEcologyStandard",
    assetDir: "/structure/radiation-ecology",
    portraitFile: "mykola-talerko.jpg",
    workFiles: [],
  },
  "hazardous-facilities-safety": {
    unitId: "hazardous-facilities-safety",
    namespace: "structure.hazardousFacilitiesSafety",
    assetDir: "/structure/hazardous-facilities-safety",
    portraitFile: "portrait.jpg",
    workFiles: ["work-01.jpg", "work-02.jpg", "work-03.jpg"],
  },
  "npp-decommissioning": {
    unitId: "npp-decommissioning",
    namespace: "structure.nppDecommissioning",
    assetDir: "/structure/npp-decommissioning",
    portraitFile: "portrait.jpg",
    workFiles: ["work-01.webp", "work-02.webp", "work-03.webp", "work-04.webp"],
  },
  "building-technologies": {
    unitId: "building-technologies",
    namespace: "structure.buildingTechnologies",
    assetDir: "/structure/building-technologies",
    portraitFile: "portrait.jpg",
    workFiles: ["work-01.jpg", "work-02.jpg"],
  },
  "radiation-monitoring": {
    unitId: "radiation-monitoring",
    namespace: "structure.radiationMonitoring",
    assetDir: "/structure/radiation-monitoring",
    portraitFile: "portrait.jpg",
    workFiles: ["work-01.jpg", "work-02.jpg", "work-03.jpg", "work-04.jpg", "work-05.jpg", "work-06.jpg", "work-07.jpg", "work-08.jpg"],
  },
  "nuclear-safety": {
    unitId: "nuclear-safety",
    namespace: "structure.nuclearSafety",
    assetDir: "/structure/nuclear-safety",
    portraitFile: "portrait.jpg",
    workFiles: [],
  },
  "radiation-materials": {
    unitId: "radiation-materials",
    namespace: "structure.radiationMaterials",
    assetDir: "/structure/radiation-materials",
    portraitFile: "portrait.png",
    workFiles: ["work-01.png", "work-02.jpg", "work-03.jpg", "work-04.jpg", "work-05.png"],
  },
} as const satisfies Record<string, RegisteredUnitPageConfig>;

export type RegisteredUnitPageId = keyof typeof registeredUnitPages;
