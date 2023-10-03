import { ReaderResponse, ReaderState } from "~/types/Readers.type";

export const fromSingleReaderResponse = (
  reader: ReaderResponse
): ReaderState => ({ ...reader, city: reader.city.id });
