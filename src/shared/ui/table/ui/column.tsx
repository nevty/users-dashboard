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
  const [sortDirection, toggleSort] = useState<SortDirection>(null);

  const onClick = () => {
    if (!onSort) return;
    switch (sortDirection) {
      case 'asc': {
        toggleSort('desc');
        onSort({ columnId, sortDirection: 'desc' });
        return;
      }
      case 'desc': {
        toggleSort(null);
        onSort({ columnId, sortDirection: null });
        return;
      }
      default: {
        toggleSort('asc');
        onSort({ columnId, sortDirection: 'asc' });
      }
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
      {onSort && sortDirection && (
        <div className="w-5 h-5">
          {sortDirection === 'asc' ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </div>
      )}
    </div>
  );
};
