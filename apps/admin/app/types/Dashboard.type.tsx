import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Dayjs } from "dayjs";

export interface FilterState {
  year: string;
  library: string;
  status: string;
}

export interface RaportDatasets {
  data: string[];
  backgroundColor: string;
}

export interface RaportState {
  labels: string[];
  datasets: RaportDatasets[];
}

export interface DataRaport {
  month: number;
  total: number;
}

export interface DashboardReportProps {
  filter: FilterState;
  raport: RaportState;
  onYearChange: (value: Dayjs | null) => void;
  onLibraryChange: (value: AutocompleteOptions | null) => void;
  onStatusChange: (value: AutocompleteOptions | null) => void;
  libraries: AutocompleteOptions[];
}
