import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Search, Table, Pagination, SortDirection } from '@shared/ui';
import { fetchUserList } from './api';
import { createUserColumns } from './lib';

export const UserTable = () => {
  const [currentPage, onPageChange] = useState(1);
  const [searchQuery, onSearch] = useState('');
  const [tokenSort, onTokenSort] = useState<SortDirection>(null);

  const columns = useMemo(() => createUserColumns(onTokenSort), [onTokenSort]);

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
    </>
  );
};
