import { MainLayout } from "@app/components/templates";
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return <MainLayout><>
    <h1>Page not found, спробуй ще..</h1>;
  </>
  </MainLayout>;
};

export default NotFoundPage;
