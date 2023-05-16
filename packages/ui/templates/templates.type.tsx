export interface BorrowedLoanProps {
  reader: string;
  byDate: string;
  number: string;
}

export interface CancelledLoanProps {
  reader: string;
  number: string;
}

export interface NewReaderProps {
  name: string;
  password: string;
}

export interface ReservedLoanProps {
  reader: string;
  byDate: string;
  number: string;
}