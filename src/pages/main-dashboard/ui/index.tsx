import { Header } from '@widgets/header';
import { UserTable } from '@widgets/user-table';
import { PageLayout } from '@shared/ui';

export const MainDashboardPage = () => {
  return (
    <PageLayout className="font-sans">
      <div className="px-4 py-6 sm:px-10 sm:py-8">
        <Header />
      </div>
      <div className="sm:px-10 sm:pb-9">
        <div className="bg-gray-900 flex flex-col h-full md:rounded-2xl max-md:max-w-full">
          <PageLayout.Container>
            <div className="text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap self-start">
              Моя организация
            </div>
          </PageLayout.Container>
          <div className="bg-slate-800 self-stretch shrink-0 h-px max-md:max-w-full" />
          <PageLayout.Container>
            <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap self-start">
              Пользователи
            </div>
            <UserTable />
          </PageLayout.Container>
        </div>
      </div>
    </PageLayout>
  );
};
