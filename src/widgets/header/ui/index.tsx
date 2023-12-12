import { UserAuth } from '@features/user-auth';
import { PageLayout, OrganizationIcon } from '@shared/ui';
import { Logo } from './logo';
import { HeaderNavigation } from './navigation';

export const Header = () => {
  return (
    <div className="items-center bg-gray-900 flex w-full justify-between gap-5 rounded-lg md:rounded-2xl max-md:flex-wrap">
      <PageLayout.Container>
        <div className="flex items-center grow justify-between gap-8 md:gap-16 my-auto">
          <Logo />
          <HeaderNavigation
            items={[
              {
                title: 'Моя организация',
                icon: (
                  <div className="w-6 h-6">
                    <OrganizationIcon />
                  </div>
                ),
              },
            ]}
          />
          <UserAuth />
        </div>
      </PageLayout.Container>
    </div>
  );
};
