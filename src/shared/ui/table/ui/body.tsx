import { TableColumnI } from '../types';
import { TableData } from './data';

interface TableBodyProps<T> {
  columns: TableColumnI<T>[];
  data: T[];
  isLoading?: boolean;
}

export const TableBody = <T,>({ data, columns }: TableBodyProps<T>) => (
  <tbody>
    {data.map((item, itemIndex) => (
      <tr key={itemIndex} className="border-b-[#222B44] border-b-2">
        {columns.map((col) => (
          <TableData key={col.columnId} item={item} column={col} />
        ))}
      </tr>
    ))}
  </tbody>
);
