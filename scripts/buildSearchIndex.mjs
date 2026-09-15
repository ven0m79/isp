import fs from "node:fs";
import path from "node:path";

// Pages whose body text is hardcoded directly in JSX/data literals (no
// next-intl namespace to read from). Extracts every string/template literal
// in each page's source file as a rough plain-text index for site search.
// Re-run this (or `npm run dev`/`npm run build`, which do it automatically)
// whenever one of these pages' content changes.
const PAGES = [
  ["about", "about/page.tsx"],
  ["aboutHistory", "about/history/page.tsx"],
  ["aboutAdministration", "about/administration/page.tsx"],
  ["aboutRegulations", "about/regulations/page.tsx"],
  ["aboutScientistsCouncil", "about/scientists-council/page.tsx"],
  ["aboutSpecializedCouncil", "about/specialized-scientists-council/page.tsx"],
  ["aboutYoungScientists", "about/council-of-young-scientists/page.tsx"],
  ["activity", "activity/page.tsx"],
  ["activityScientific", "activity/scientific-activity/page.tsx"],
  ["activityCorruption", "activity/prevention-of-corruption/page.tsx"],
  ["activityUnion", "activity/union-committee/page.tsx"],
  ["activityProcurement", "activity/information-on-procurement-procedures/page.tsx"],
  ["publications", "publications/page.tsx"],
  ["contacts", "contacts/page.tsx"],
];

const STRING_LITERAL = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/gs;

function extractText(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const literals = source.match(STRING_LITERAL) ?? [];
  return literals
    .map((literal) => literal.slice(1, -1))
    .join(" ")
    .replace(/\\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const root = path.join(process.cwd(), "app", "[locale]");
const index = {};

for (const [nameKey, relativePath] of PAGES) {
  const filePath = path.join(root, ...relativePath.split("/"));
  if (!fs.existsSync(filePath)) {
    console.warn(`[buildSearchIndex] skipping "${nameKey}": ${filePath} not found`);
    continue;
  }
  index[nameKey] = extractText(filePath);
}

const outPath = path.join(root, "search", "searchIndex.generated.json");
fs.writeFileSync(outPath, JSON.stringify(index, null, 2) + "\n", "utf8");
console.log(`[buildSearchIndex] wrote ${Object.keys(index).length} pages to ${path.relative(process.cwd(), outPath)}`);
