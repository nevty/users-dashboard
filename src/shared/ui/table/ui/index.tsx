import { TableColumnI } from "../types";
import { TableBody } from "./body";
import { TableHead } from "./head";

interface TableProps<T> {
    data: T[];
    columns: TableColumnI<T>[];
  }  

export const Table = <T,>({ data, columns }: TableProps<T>) => (
    <table className="w-full font-medium text-xs md:text-sm">
      <TableHead columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
  