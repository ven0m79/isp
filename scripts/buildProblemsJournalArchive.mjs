import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import htmlParser from "next/dist/compiled/node-html-parser/index.js";

const { parse } = htmlParser;

const issues = [];
for (let number = 1; number <= 32; number += 1) {
  if (number === 3) {
    issues.push({ key: "3-1", number: "3", part: "1", year: "2005" });
    issues.push({ key: "3-2", number: "3", part: "2", year: "2005" });
  } else {
    const year = number === 1 ? "2004"
      : number === 2 ? "2005"
      : number <= 6 ? "2006"
      : number <= 8 ? "2007"
      : number <= 10 ? "2008"
      : number <= 12 ? "2009"
      : number <= 14 ? "2010"
      : number <= 17 ? "2011"
      : number <= 19 ? "2012"
      : number <= 21 ? "2013"
      : number <= 23 ? "2014"
      : number <= 25 ? "2015"
      : number <= 27 ? "2016"
      : number <= 29 ? "2017"
      : number <= 31 ? "2018"
      : "2019";
    issues.push({ key: String(number), number: String(number), year });
  }
}

const normalize = (value) => value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
const outputRoot = path.join("public", "publications", "problems-journal", "issues");
const downloads = [];
const unavailablePdfs = new Set(["25:11", "26:2"]);

fs.mkdirSync(outputRoot, { recursive: true });

for (const issue of issues) {
  const sourcePath = path.join(os.tmpdir(), `isp-journal-issue-${issue.key}.html`);
  const root = parse(fs.readFileSync(sourcePath, "utf8"));
  const content = root.querySelector(".entry-content");
  if (!content) throw new Error(`Missing article content for issue ${issue.key}`);

  const articles = [];
  let title = "";
  let authorsPages = "";
  let details = [];
  let lastArticle = null;

  for (const node of content.childNodes) {
    if (node.nodeType !== 1) continue;

    const tagName = node.tagName?.toUpperCase();
    const text = normalize(node.text || "");

    if (tagName === "H5") {
      title = text;
      authorsPages = "";
      details = [];
      continue;
    }

    if (tagName === "H6") {
      authorsPages = text;
      continue;
    }

    const links = node.querySelectorAll?.("a") ?? [];
    const pdfLink = links.find((link) => /\.pdf(?:\?|$)/i.test(link.getAttribute("href") || ""));
    const doiLink = links.find((link) => /^https?:\/\/doi\.org\//i.test(link.getAttribute("href") || ""));

    if (pdfLink) {
      const index = articles.length + 1;
      const filename = `article-${String(index).padStart(2, "0")}.pdf`;
      const localPdf = `/publications/problems-journal/issues/issue-${issue.key}/${filename}`;
      const sourceUnavailable = unavailablePdfs.has(`${issue.key}:${index}`);
      const article = {
        id: String(index),
        title: title || `Article ${index}`,
        authorsPages,
        details,
        pdf: sourceUnavailable ? null : localPdf,
        ...(sourceUnavailable ? { sourceUnavailable: true } : {}),
      };
      articles.push(article);
      lastArticle = article;
      if (!sourceUnavailable) {
        downloads.push({ issue: issue.key, source: pdfLink.getAttribute("href"), destination: localPdf.slice(1) });
      }
      continue;
    }

    if (doiLink && lastArticle) {
      lastArticle.doi = doiLink.getAttribute("href").replace(/^https?:\/\/doi\.org\//i, "");
      continue;
    }

    if (tagName === "P" && text && !/^(Завантажити статтю|DOI)$/i.test(text)) {
      details.push(text);
    }
  }

  const issueDirectory = path.join(outputRoot, `issue-${issue.key}`);
  fs.mkdirSync(issueDirectory, { recursive: true });
  fs.writeFileSync(
    path.join(issueDirectory, "index.json"),
    `${JSON.stringify({ ...issue, articles }, null, 2)}\n`,
    "utf8",
  );
  console.log(`issue ${issue.key}: ${articles.length} articles`);
}

fs.writeFileSync(path.join(os.tmpdir(), "problems-journal-downloads.json"), JSON.stringify(downloads, null, 2), "utf8");
console.log(`total: ${downloads.length} PDFs`);
