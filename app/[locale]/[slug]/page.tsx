import { notFound } from "next/navigation";
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
  return (
    <MainLayout>
      <article className="p-2 text-[#002766] md:p-4">
        <header className="rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f4f9fc] to-[#dcebf6] p-5 shadow-sm md:p-8">
          <Link
            href="/"
            className="inline-flex text-sm font-bold text-[#07518F] transition-colors hover:text-[#002766] hover:underline"
          >
            <span aria-hidden="true">&larr; </span>
            {t("title")}
          </Link>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#51749E]">{t("title")}</p>
          <h1
            className="mt-2 max-w-5xl text-2xl font-bold leading-tight md:text-4xl"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </header>

        <section className="mt-5 rounded-xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-6">
          <div
            className="max-w-4xl text-base leading-8 text-[#294e70] [&_a]:font-medium [&_a]:text-[#0061AA] [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-snug [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-snug [&_img]:mx-auto [&_img]:my-7 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-lg [&_li]:mb-2 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-5 [&_strong]:font-bold [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: post.content?.rendered ?? "" }}
          />
        </section>
      </article>
    </MainLayout>
  );
}
