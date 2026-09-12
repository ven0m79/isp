import { getMessages, getTranslations } from "next-intl/server";
import { navItems, type NavItem } from "@molecules/Nav/navItems";
import hardcodedPageIndex from "./searchIndex.generated.json";

export type SitePageResult = { nameKey: string; link: string };

const EXTRA_PAGES: SitePageResult[] = [
  { nameKey: "vacancies", link: "/vacancies" },
  { nameKey: "contacts", link: "/contacts" },
];

// Pages backed by a next-intl namespace: their body text lives in
// messages/*.json, so we search the translated strings directly (locale-aware).
const NAMESPACE_BY_NAME_KEY: Record<string, string> = {
  structure: "structure",
  qms: "qmsPage",
  qmsQuality: "qualityPolicyPage",
  qmsCertificates: "certificatesLicensesPage",
  activityAreas: "areasOfActivityPage",
  activityGender: "genderEqualityPage",
  activityInternational: "internationalActivityPage",
  activityPartners: "partnersPage",
  activityResults: "resultsOfActivityPage",
  publicationsMonographs: "monographsPage",
  publicationsScientificArticles: "scientificArticlesPage",
  publicationsProblems: "problemsJournal",
  publicationsNuclear: "nuclearPowerJournal",
};

function flattenNavItems(items: NavItem[]): SitePageResult[] {
  const flat: SitePageResult[] = [];
  for (const item of items) {
    if (item.link) flat.push({ nameKey: item.nameKey, link: item.link });
    if (item.submenu) flat.push(...flattenNavItems(item.submenu));
  }
  return flat;
}

function flattenStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((entry) => flattenStrings(entry, out));
  else if (value && typeof value === "object") Object.values(value).forEach((entry) => flattenStrings(entry, out));
  return out;
}

export async function searchSitePages(query: string): Promise<SitePageResult[]> {
  const normalizedQuery = query.toLocaleLowerCase();

  const [navT, messages] = await Promise.all([getTranslations("nav"), getMessages()]);
  const messagesRecord = messages as Record<string, unknown>;

  const candidates = [...flattenNavItems(navItems), ...EXTRA_PAGES].filter((item) => item.nameKey !== "news");

  return candidates.filter((item) => {
    if (navT(item.nameKey).toLocaleLowerCase().includes(normalizedQuery)) return true;

    const namespace = NAMESPACE_BY_NAME_KEY[item.nameKey];
    if (namespace) {
      const text = flattenStrings(messagesRecord[namespace]).join(" ").toLocaleLowerCase();
      return text.includes(normalizedQuery);
    }

    const hardcodedText = (hardcodedPageIndex as Record<string, string>)[item.nameKey];
    if (hardcodedText) {
      return hardcodedText.toLocaleLowerCase().includes(normalizedQuery);
    }

    return false;
  });
}
