import { Header } from '@widgets/header';
import { PageLayout } from '@shared/ui';

export const MainDashboardPage = () => {
  return (
    <PageLayout className="font-sans">
      <div className="px-4 py-6 sm:px-10 sm:py-8">
        <Header />
      </div>
    </PageLayout>
  );
};

