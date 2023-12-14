import { Table, TableColumnI } from '@shared/ui';
import { TRANSACTION_OPERATION } from '../consts';
import { Transaction } from '../types';

const columns: TableColumnI<Transaction>[] = [
  {
    columnId: 'type',
    label: 'Тип',
    renderRow: (item) => (
      <div className="text-white">{TRANSACTION_OPERATION[item.type]}</div>
    ),
  },
  {
    columnId: 'amount',
    label: 'Сумма',
    renderRow: (item) => {
      const amount = item.amount.toLocaleString();

      return item.type === 'REPLENISH' ? (
        <div className="text-green-500">{`+${amount} ${item.currency}`}</div>
      ) : item.type === 'WRITE_OFF' ? (
        <div className="text-red-500">{`-${amount} ${item.currency}`}</div>
      ) : (
        <div className="text-white">{`${amount} ${item.currency}`}</div>
      );
    },
  },
  {
    columnId: 'date',
    label: 'Дата',
    renderRow: (item) => (
      <div>{new Date(item.createdAt).toLocaleString('ru-Ru')}</div>
    ),
  },
];

interface TransactionTableProps {
  data: Transaction[];
}

export const TransactionTable = ({ data }: TransactionTableProps) => (
  <Table columns={columns} data={data} />
);
