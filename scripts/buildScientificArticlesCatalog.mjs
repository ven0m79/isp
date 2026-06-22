import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceUrl = "https://www.ispnpp.kiev.ua/naukovi-statti/";
const outputPath = path.join(process.cwd(), "public", "publications", "scientific-articles", "catalog.json");

const entities = {
  amp: "&",
  apos: "'",
  gt: ">",
  hellip: "...",
  laquo: "«",
  lt: "<",
  mdash: "—",
  middot: "·",
  nbsp: " ",
  ndash: "–",
  quot: '"',
  raquo: "»",
  rsquo: "’",
};

function decodeHtml(value) {
  return value.replace(/&(#x?[\da-f]+|[a-z]+);/gi, (entity, code) => {
    if (code.startsWith("#x")) return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
    if (code.startsWith("#")) return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
    return entities[code.toLowerCase()] ?? entity;
  });
}

function textContent(html) {
  return decodeHtml(
    html
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<sup[^>]*>(.*?)<\/sup>/gi, "$1")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function normalizeUrl(value, pageUrl) {
  if (!value) return null;
  try {
    return new URL(decodeHtml(value.trim()), pageUrl).href;
  } catch {
    return null;
  }
}

function extractYearPages(html) {
  const pages = [];
  const linkPattern = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gis;
  for (const match of html.matchAll(linkPattern)) {
    const label = textContent(match[2]);
    if (/^(19|20)\d{2}$/.test(label)) {
      pages.push({ year: label, sourceUrl: normalizeUrl(match[1], sourceUrl) });
    }
  }
  return [...new Map(pages.map((page) => [page.year, page])).values()]
    .filter((page) => page.sourceUrl)
    .sort((a, b) => Number(b.year) - Number(a.year));
}

function extractCatalogPage(html, page) {
  const contentStart = html.search(/<div\s+[^>]*class=["'][^"']*\bentry-content\b[^"']*["'][^>]*>/i);
  if (contentStart < 0) throw new Error(`Entry content was not found for ${page.year}`);

  const contentEnd = html.indexOf('class="post-navigation', contentStart);
  const content = html.slice(contentStart, contentEnd > contentStart ? contentEnd : undefined);
  const sections = [];
  let section = { title: "Публікації", entries: [] };
  const blockPattern = /<h[2-6][^>]*>(.*?)<\/h[2-6]>|<li[^>]*>(.*?)<\/li>|<p[^>]*>(.*?)<\/p>/gis;

  for (const match of content.matchAll(blockPattern)) {
    const headingHtml = match[1];
    const entryHtml = match[2] ?? match[3];
    const paragraphText = match[3] === undefined ? "" : textContent(match[3]);
    const paragraphLetters = paragraphText.replace(/[^\p{L}]/gu, "");
    const isParagraphHeading = Boolean(
      paragraphText
      && paragraphText.length <= 80
      && paragraphLetters
      && paragraphLetters === paragraphLetters.toLocaleUpperCase(),
    );

    if (headingHtml !== undefined || isParagraphHeading) {
      const heading = headingHtml === undefined ? paragraphText : textContent(headingHtml);
      if (["Схожі повідомлення", "Останні новини", "Позначки"].includes(heading)) break;
      if (section.entries.length > 0) sections.push(section);
      section = { title: heading, entries: [] };
      continue;
    }

    const citation = textContent(entryHtml);
    if (!citation || citation.length < 12) continue;
    const hrefMatch = entryHtml.match(/<a\s+[^>]*href=["']([^"']+)["']/i);
    section.entries.push({ citation, url: normalizeUrl(hrefMatch?.[1], page.sourceUrl) });
  }

  if (section.entries.length > 0) sections.push(section);
  return { ...page, sections };
}

async function fetchHtml(url) {
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 ISP website migration" } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.text();
}

const landingHtml = await fetchHtml(sourceUrl);
const yearPages = extractYearPages(landingHtml);
const catalog = await Promise.all(
  yearPages.map(async (page) => extractCatalogPage(await fetchHtml(page.sourceUrl), page)),
);

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify({ sourceUrl, years: catalog }, null, 2)}\n`, "utf8");

const records = catalog.reduce(
  (total, year) => total + year.sections.reduce((sum, section) => sum + section.entries.length, 0),
  0,
);
console.log(`Migrated ${records} records across ${catalog.length} years to ${outputPath}`);
