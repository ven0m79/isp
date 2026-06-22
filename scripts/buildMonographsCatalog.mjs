import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import htmlParser from "next/dist/compiled/node-html-parser/index.js";

const { parse } = htmlParser;
const normalize = (value) => value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
const sourceRoot = parse(fs.readFileSync(path.join(os.tmpdir(), "isp-monografii.html"), "utf8"));
const sourceContent = sourceRoot.querySelector(".entry-content");
const outputRoot = path.join("public", "publications", "monographs");
const downloads = [];
const catalog = [];
let year = "";

if (!sourceContent) throw new Error("Missing monographs index content");

for (const node of sourceContent.childNodes) {
  if (node.nodeType !== 1 || node.tagName?.toUpperCase() !== "P") continue;
  const text = normalize(node.text || "");

  if (/^20\d{2}$/.test(text)) {
    year = text;
    continue;
  }

  const detailLink = node.querySelectorAll("a").find((link) => {
    const href = link.getAttribute("href") || "";
    return /ispnpp\.kiev\.ua/i.test(href) && !/doi\.org|facebook\.com/i.test(href);
  });
  if (!detailLink) continue;

  const index = catalog.length + 1;
  const id = String(index).padStart(2, "0");
  const detailPath = path.join(os.tmpdir(), `isp-monograph-detail-${id}.html`);
  const detailRoot = parse(fs.readFileSync(detailPath, "utf8"));
  const detailContent = detailRoot.querySelector(".entry-content");
  if (!detailContent) throw new Error(`Missing detail content for monograph ${id}`);

  const coverImage = detailContent.querySelectorAll("img").find((image) => {
    const src = image.getAttribute("src") || "";
    return /\.(?:jpe?g|png|webp)(?:\?|$)/i.test(src)
      && !/DownloadFile|plugins\/ultimate-social-media|share_icons/i.test(src);
  });

  let coverSource = null;
  if (coverImage) {
    const candidates = [{ url: coverImage.getAttribute("src"), width: 0 }];
    const srcset = coverImage.getAttribute("srcset") || "";
    for (const candidate of srcset.split(",")) {
      const match = candidate.trim().match(/^(\S+)\s+(\d+)w$/);
      if (match) candidates.push({ url: match[1], width: Number(match[2]) });
    }
    coverSource = candidates.sort((a, b) => b.width - a.width)[0]?.url || null;
  }

  const descriptions = [];
  const authors = [];
  let readingAuthors = false;
  for (const child of detailContent.childNodes) {
    if (child.nodeType !== 1) continue;
    const childText = normalize(child.text || "");
    if (!childText || /^Завантажити$/i.test(childText)) continue;
    const containsDocumentLink = child.querySelectorAll?.("a").some((link) => /\.(?:pdf|docx?)(?:\?|$)/i.test(link.getAttribute("href") || ""));
    if (containsDocumentLink) continue;
    if (/^(АВТОР(?:И|И:|:)?|Автори:|Authors?:)$/i.test(childText)) {
      readingAuthors = true;
      continue;
    }
    if (child.tagName?.toUpperCase() === "P") {
      (readingAuthors ? authors : descriptions).push(childText);
    }
  }

  const pdfLinks = detailContent.querySelectorAll("a")
    .map((link) => link.getAttribute("href"))
    .filter((href) => href && /\.pdf(?:\?|$)/i.test(href));
  const pdfSource = [...new Set(pdfLinks)][0] || null;
  const cover = coverSource ? `/publications/monographs/covers/monograph-${id}-cover.webp` : null;
  const pdf = pdfSource ? `/publications/monographs/documents/monograph-${id}.pdf` : null;

  catalog.push({ id, year, citation: text, descriptions, authors, cover, pdf });
  if (coverSource) downloads.push({ type: "cover", id, source: coverSource, destination: `public${cover}` });
  if (pdfSource) downloads.push({ type: "pdf", id, source: pdfSource, destination: `public${pdf}` });
}

fs.mkdirSync(outputRoot, { recursive: true });
fs.writeFileSync(path.join(outputRoot, "catalog.json"), `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
fs.writeFileSync(path.join(os.tmpdir(), "monographs-downloads.json"), JSON.stringify(downloads, null, 2), "utf8");

console.log(`catalog: ${catalog.length}`);
console.log(`covers: ${downloads.filter((item) => item.type === "cover").length}`);
console.log(`pdfs: ${downloads.filter((item) => item.type === "pdf").length}`);
