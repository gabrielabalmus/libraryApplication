import { LibrarySchedule } from "@prisma/client";

export interface LibrariesResponse {
  name: string;
  city: {
    name: string;
  };
  address: string;
  phone: string;
  schedule: LibrarySchedule;
}

export interface PaginatedLibraries {
  name: string;
  city: string;
  address: string;
  phone: string;
  schedule: LibrarySchedule;
}

export interface ContactOverviewProps {
  libraries: { count: number; data: PaginatedLibraries[] };
  page: number;
  onPageChange: (page: number) => void;
}
