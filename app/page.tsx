import { MainLayout } from "@app/components/templates";
import NewsGrid from "@app/components/molecules/NewsGrid/page";

export default function Root() {
  return (
    <MainLayout>
      <NewsGrid />
    </MainLayout>
  );
}
