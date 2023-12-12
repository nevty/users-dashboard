import { TableColumnI } from '../types';
import { TableData } from './data';

interface TableBodyProps<T> {
  columns: TableColumnI<T>[];
  data: T[];
  isLoading?: boolean;
}

export const TableBody = <T,>({
  data,
  columns,
  isLoading,
}: TableBodyProps<T>) => (
  <tbody>
    {isLoading ? (
      <tr>
        <td colSpan={columns.length}>
          <div className="w-full flex justify-center items-center min-h-[500px]">
            ...Loading
          </div>
        </td>
      </tr>
    ) : (
      data.map((item, itemIndex) => (
        <tr key={itemIndex} className="border-b-[#222B44] border-b-2">
          {columns.map((col) => (
            <TableData key={col.columnId} item={item} column={col} />
          ))}
        </tr>
      ))
    )}
  </tbody>
);
