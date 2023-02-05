export interface TableColumns {
  name: string;
  value: string;
}

export interface TableProps {
  columns: TableColumns[];
  rows: any[];
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  onDelete: (id: string) => void;
}

export interface ActionsProps {
  onDelete: () => void;
}
