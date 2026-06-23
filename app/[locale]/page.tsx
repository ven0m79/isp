import { MainLayout } from "@app/components/templates";
import NewsGrid from "@app/components/molecules/NewsGrid/NewsGrid";

export default async function Root({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <MainLayout>
      <NewsGrid initialPosts={[]} />
    </MainLayout>
  );
}
