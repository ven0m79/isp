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

  return (
    <MainLayout>
      <article className="mx-auto flex w-full max-w-[920px] flex-col gap-7 px-2 py-2 text-[#002766] md:gap-9 md:px-4">
        <Link
          href="/"
          className="self-start text-sm font-medium text-[#0061AA] transition-colors hover:text-[#002766] hover:underline"
        >
          <span aria-hidden="true">&larr; </span>
          {t("title")}
        </Link>

        <h1
          className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.015em] text-[#002766] md:text-4xl"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {imgSrc && (
          <div className="relative aspect-video w-full max-w-[680px] self-center overflow-hidden rounded-xl bg-[#dce8f5] shadow-sm">
            <Image
              src={imgSrc}
              alt={imgAlt}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 920px"
              className="object-cover"
            />
          </div>
        )}

        <div
          className="text-[17px] leading-8 text-slate-700 [&_a]:font-medium [&_a]:text-[#0061AA] [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-snug [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-snug [&_img]:mx-auto [&_img]:my-7 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl [&_li]:mb-2 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-5 [&_strong]:font-bold [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6"
          dangerouslySetInnerHTML={{ __html: post.content?.rendered ?? "" }}
        />
      </article>
    </MainLayout>
  );
}
