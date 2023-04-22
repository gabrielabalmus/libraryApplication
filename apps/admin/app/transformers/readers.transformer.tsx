import {
  ReadersResponse,
  ReaderResponse,
  ReaderState,
  PaginatedReaders,
} from "~/types/Readers.type";
import {
  ReaderState as ReaderByEmailState,
  ReaderResponse as ReaderByEmailResponse,
} from "~/types/Loans.type";

export const fromPaginatedReadersResponse = (
  readers: ReadersResponse[]
): PaginatedReaders[] =>
  readers.map((item) => ({
    ...item,
    city: item.city.name,
  }));

export const fromSingleReaderResponse = (
  reader: ReaderResponse
): ReaderState => ({ ...reader, city: reader.city.id });

export const fromReaderByEmail = (
  reader: ReaderByEmailResponse
): ReaderByEmailState => ({ ...reader, city: reader.city.name });
