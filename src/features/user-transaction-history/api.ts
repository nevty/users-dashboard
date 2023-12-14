import { axiosInstance } from '@shared/api';
import { Transaction } from './types';

export const fetchUserTransactions = async (userId: string) => {
  const { data } = await axiosInstance.get<UserTransactionsResponse[]>(
    `user/${userId}/transactions`,
  );
  return data.map(transactionDataMap);
};

interface UserTransactionsResponse {
  id: string;
  provider: string;
  amount: number;
  currency: string;
  meta: null;
  status: string;
  type: 'WRITE_OFF' | 'REPLENISH';
  plan_id: null | string;
  user_id: string;
  referral_id: null | string;
  created_at: string;
  external_id: null | string;
}

const transactionDataMap = ({
  id,
  amount,
  created_at,
  currency,
  status,
  type,
}: UserTransactionsResponse): Transaction => ({
  id,
  amount,
  createdAt: created_at,
  currency,
  status,
  type,
});
