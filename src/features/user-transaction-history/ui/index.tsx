import { useQuery } from 'react-query';
import { User } from '@entities/user';
import { fetchUserTransactions } from '../api';
import { TransactionTable } from './table';
import { TimeChart } from './time-chart';

interface UserTransactionsProps {
  user: User;
}

export const UserTransactionHistory = ({ user }: UserTransactionsProps) => {
  const { data, isFetching } = useQuery({
    queryKey: ['user-transactions', user.id],
    queryFn: () => fetchUserTransactions(user.id),
    staleTime: 30 * 1000,
  });

  if (isFetching)
    return (
      <div className="flex w-full justify-center items-center min-h-[350px]">
        ...loading
      </div>
    );
  if (!data) return null;

  const chartData: [Date, number][] = data.map((d) => [
    new Date(d.createdAt),
    d.amount,
  ]);

  return (
    <div className="flex flex-col gap-5">
      <TimeChart data={chartData} userData={user} />
      <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap self-start">
        История операций
      </div>
      <div>
        <TransactionTable data={data} />
      </div>
    </div>
  );
};
