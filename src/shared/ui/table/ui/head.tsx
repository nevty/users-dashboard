import cx from 'clsx';
import { TableColumnI } from '../types';
import { TableColumn } from './column';

interface TableHeadProps<T> {
  columns: TableColumnI<T>[];
}

export const TableHead = <T,>({ columns }: TableHeadProps<T>) => (
  <thead>
    <tr className="text-gray-400 rounded-lg bg-[#0E0C15]">
      {columns.map(({ columnId, label, onSort, className }) => {
        return (
          <th key={columnId} className={cx('px-5 py-3', className)}>
            <TableColumn label={label} columnId={columnId} onSort={onSort} />
          </th>
        );
      })}
    </tr>
  </thead>
);
