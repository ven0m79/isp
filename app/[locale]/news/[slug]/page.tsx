import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@app/i18n/navigation";
import { MainLayout } from "@app/components/templates";
import type { WpPost } from "@app/components/molecules/NewsGrid/NewsGrid";

const API = "https://isp.npe.kiev.ua/wp-json/wp/v2";

async function getPost(slug: string): Promise<WpPost | null> {
  try {
    const res = await fetch(`${API}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return null;
    const posts: WpPost[] = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const t = await getTranslations("news");
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const imgSrc = media?.source_url;
  const imgAlt = media?.alt_text || post.title.rendered;
  const date = new Date(post.date).toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <MainLayout>
      <article className="flex flex-col gap-6 text-[#002766] p-2">
        <Link href="/" className="self-start text-sm text-[#0061AA] hover:underline">
          ← {t("title")}
        </Link>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          {imgSrc && (
            <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-lg bg-[#dce8f5] md:h-64 md:w-2/5">
              <Image src={imgSrc} alt={imgAlt} fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#51749E]">{date}</span>
            <h1
              className="text-xl font-bold leading-snug md:text-2xl"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </div>
        </div>

        <div
          className="text-sm leading-relaxed text-gray-700 [&_a]:text-[#0061AA] [&_a]:underline [&_h2]:mt-4 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:mt-3 [&_h3]:text-base [&_h3]:font-semibold [&_img]:my-4 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-lg [&_img]:mx-auto [&_p]:mb-3"
          dangerouslySetInnerHTML={{ __html: post.content?.rendered ?? "" }}
        />
      </article>
    </MainLayout>
  );
}
