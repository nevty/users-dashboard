export type SortDirection = 'asc' | 'desc' | null;

export interface TableColumnI<T> {
  columnId: string;
  label: string;
  className?: string;
  onSort?: (params: {sortDirection: SortDirection, columnId: string}) => void
  renderRow: (item: T) => JSX.Element;
}
