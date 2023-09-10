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

export interface Libraries {
  name: string;
  city: string;
  address: string;
  phone: string;
  schedule: LibrarySchedule;
}

export interface ContactOverviewProps {
  libraries: Libraries[];
}
