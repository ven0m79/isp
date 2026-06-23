import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { basename, join } from "node:path";
import { pipeline } from "node:stream/promises";
import { spawn } from "node:child_process";
import sharp from "sharp";

const outputDir = "public/activity/scientific-activity";
const pdfDir = join(outputDir, "documents");
const imageDir = join(outputDir, "images");
const gs = "C:/Program Files/gs/gs10.03.1/bin/gswin64c.exe";

const pdfs = [
  ["research-info-opening-2025.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2026/06/vidkryttja-2025.pdf"],
  ["research-info-completed-2025.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2026/06/zavershennja-2025-1.pdf"],
  ["conferences-events-2017-2022.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2023/06/zahody-17-23.pdf"],
  ["implementation-act-1.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2025/02/%D0%90%D0%BA%D1%82-%D0%B2%D0%BF%D1%80%D0%BE%D0%B2%D0%B0%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-1.pdf"],
  ["implementation-act-2.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2025/02/%D0%90%D0%BA%D1%82-%D0%B2%D0%BF%D1%80%D0%BE%D0%B2%D0%B0%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-2.pdf"],
  ["implementation-act-3.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2025/02/%D0%90%D0%BA%D1%82-%D0%B2%D0%BF%D1%80%D0%BE%D0%B2%D0%B0%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-3.pdf"],
  ["implementation-act-4.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2025/02/%D0%90%D0%BA%D1%82-%D0%B2%D0%BF%D1%80%D0%BE%D0%B2%D0%B0%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-4.pdf"],
  ["implementation-act-5.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2025/02/%D0%90%D0%BA%D1%82-%D0%B2%D0%BF%D1%80%D0%BE%D0%B2%D0%B0%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-5.pdf"],
  ["implementation-act-6.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2025/02/%D0%90%D0%BA%D1%82-%D0%B2%D0%BF%D1%80%D0%BE%D0%B2%D0%B0%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-6.pdf"],
  ["results-2024.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2023/03/rezultaty2024.pdf"],
  ["proposal-2026-graphite.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2025/07/zapyt_2025_S.pdf"],
  ["proposals-2023.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2022/07/zapyty-2022.pdf"],
  ["results-2022.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2022/07/results-2022.pdf"],
  ["proposals-2024.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2023/06/zapyty-2024.pdf"],
  ["proposals-2021.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2020/06/zaprosy-2021.pdf"],
  ["results-2023.pdf", "https://www.ispnpp.kiev.ua/wp-content/uploads/2023/03/results2023.pdf"],
];

const images = [
  ["proposals.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2020/06/zapyty.jpg"],
  ["conferences.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2019/04/shapka-konf-aes.jpg"],
  ["research-results.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2023/03/banner-982162__340.jpg"],
  ["science-day.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2018/05/den-nauki.jpg"],
  ["science.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2023/03/science.jpg"],
  ["diagnostics.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2023/03/154576_26d446afb460c76738904dedac7c.jpg"],
  ["decay-statistics.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2017/05/otchet_4.jpg"],
  ["fcm-state.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2017/05/otchet_2.jpg"],
  ["decommissioning.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2017/05/otchet_7.jpg"],
  ["environmental-impact.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2017/05/otchet_1.jpg"],
  ["accident-assessment.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2017/05/otchet_5.jpg"],
  ["shelter-processes.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2017/10/doslid-issledov.jpg"],
  ["neutron-diagnostics.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2020/01/Learning-and-Development_crop.jpg"],
  ["reactivity-control.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2017/05/otchet_3.jpg"],
  ["equipment-state.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2017/05/otchet_6.jpg"],
  ["waste-vectors.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2021/04/untitled23456.png"],
  ["irradiated-liquids.webp", "https://www.ispnpp.kiev.ua/wp-content/uploads/2020/01/microbiota_science_crop.png"],
];

async function download(url, path) {
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0" },
  });
  if (!response.ok || !response.body) {
    throw new Error(`Failed ${response.status} ${url}`);
  }
  await pipeline(response.body, createWriteStream(path));
}

async function compressPdf(path) {
  const input = await readFile(path);
  const temporary = `${path}.compressed`;
  await new Promise((resolve, reject) => {
    const child = spawn(gs, [
      "-sDEVICE=pdfwrite",
      "-dCompatibilityLevel=1.4",
      "-dPDFSETTINGS=/ebook",
      "-dNOPAUSE",
      "-dQUIET",
      "-dBATCH",
      "-dColorImageResolution=140",
      "-dGrayImageResolution=140",
      `-sOutputFile=${temporary}`,
      path,
    ]);
    child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`Ghostscript exited ${code}`))));
    child.on("error", reject);
  });
  const compressed = await readFile(temporary);
  if (compressed.length < input.length) {
    await rename(temporary, path);
    return { before: input.length, after: compressed.length };
  }
  await rm(temporary, { force: true });
  return { before: input.length, after: input.length };
}

await mkdir(pdfDir, { recursive: true });
await mkdir(imageDir, { recursive: true });

const results = [];
for (const [name, url] of pdfs) {
  const path = join(pdfDir, name);
  await download(url, path);
  const sizes = await compressPdf(path);
  results.push({ type: "pdf", name, ...sizes });
}

for (const [name, url] of images) {
  const temporary = join(imageDir, basename(url));
  const target = join(imageDir, name);
  await download(url, temporary);
  await sharp(temporary).webp({ quality: 70 }).toFile(target);
  await rm(temporary, { force: true });
  results.push({ type: "image", name });
}

await writeFile(join(outputDir, "media-manifest.json"), JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
