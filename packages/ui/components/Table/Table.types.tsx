export interface TableColumns {
  name: string;
  value: string;
}

export interface TableRows {
  [key: string]: string;
}

export interface TableProps {
  columns: TableColumns[];
  rows: TableRows[];
}
