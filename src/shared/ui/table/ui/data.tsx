import { TableColumnI } from '../types';

interface TableDataProps<T> {
  column: TableColumnI<T>;
  item: T;
}

export const TableData = <T,>({ column, item }: TableDataProps<T>) => (
  <td className="px-5 py-3">
    <div className="justify-center flex text-white">
      {column.renderRow(item)}
    </div>
  </td>
);
