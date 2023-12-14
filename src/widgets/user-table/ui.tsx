import Drawer from 'rc-drawer';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { UserTransactionHistory } from '@features/user-transaction-history';
import { User } from '@entities/user';
import {
  Search,
  Table,
  Pagination,
  SortDirection,
  CloseIcon,
} from '@shared/ui';
import { fetchUserList } from './api';
import { createUserColumns } from './lib';

export const UserTable = () => {
  const [currentPage, onPageChange] = useState(1);
  const [searchQuery, onSearch] = useState('');
  const [tokenSort, onTokenSort] = useState<SortDirection>(null);
  const [selectedUser, selectUser] = useState<User | null>(null);

  const columns = useMemo(() => createUserColumns(onTokenSort, selectUser), []);

  const { data, isError, isFetching } = useQuery({
    queryKey: ['user-list', currentPage, searchQuery, tokenSort],
    queryFn: () => fetchUserList(currentPage, searchQuery, tokenSort),
    staleTime: 30 * 1000,
  });

  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <>
      <div className="mt-7">
        <Search
          onSearch={onSearch}
          defaultValue={searchQuery}
          isDisabled={isFetching}
        />
      </div>
      <div className="mt-5 overflow-x-auto">
        <Table
          data={data?.users || []}
          columns={columns}
          isLoading={isFetching}
        />
      </div>
      <div className="mt-5 flex justify-center">
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={data?.pages || 1}
          isDisabled={isFetching}
        />
      </div>
      <Drawer
        open={Boolean(selectedUser)}
        onClose={() => selectUser(null)}
        classNames={{
          wrapper: '!w-full sm:!w-1/2 lg:!w-2/5',
        }}
      >
        {selectedUser && (
          <div className="flex flex-col px-4 py-8 sm:px-5 sm:py-14 gap-3">
            <div className="flex justify-between">
              <span className="text-lg font-semibold">
                {selectedUser.email}
              </span>
              <button
                type="button"
                className="bg-transparent px-2 py-1"
                onClick={() => selectUser(null)}
              >
                <CloseIcon />
              </button>
            </div>
            <UserTransactionHistory user={selectedUser} />
          </div>
        )}
      </Drawer>
    </>
  );
};
