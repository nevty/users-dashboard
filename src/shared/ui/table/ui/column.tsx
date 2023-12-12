import cx from 'clsx';
import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../../icons';
import { SortDirection } from '../types';

type TableColumnProps = {
  columnId: string;
  label: string;
  onSort?: (params: { sortDirection: SortDirection; columnId: string }) => void;
};

export const TableColumn = ({ onSort, label, columnId }: TableColumnProps) => {
  const [sortDirection, toggleSort] = useState<SortDirection>('asc');

  const onClick = () => {
    if (!onSort) return;
    if (sortDirection === 'asc') {
      toggleSort('desc');
      onSort({ columnId, sortDirection: 'desc' });
    } else {
      toggleSort('asc');
      onSort({ columnId, sortDirection: 'asc' });
    }
  };

  return (
    <div
      className={cx('justify-center flex gap-2.5', {
        'cursor-pointer': Boolean(onSort),
      })}
      onClick={() => onClick()}
    >
      <div className="text-gray-400 text-center whitespace-nowrap">{label}</div>
      {onSort && (
        <div className="w-5 h-5">
          {sortDirection === 'asc' ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </div>
      )}
    </div>
  );
};
