import dayjs, { Dayjs } from "dayjs";
import moment from "moment";

export const readFileAsync = (file: File) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;
  });
};

export const checkIfValidDate = (date: any) => {
  return dayjs(date).isValid();
};

export const transformDate = (date: Dayjs | null) => {
  return date && checkIfValidDate(date) ? dayjs(date).format() : "";
};

export const formatLoangDate = (date: Date) => {
  return moment(date).format("DD MMM YYYY, HH:mm");
};

export const formatShortDate = (date: Date) => {
  return moment(date).format("DD MMM YYYY");
};

export const addDateDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

export const checkIfNumber = (value: any) => {
  return /^\d+$/.test(value);
};

export const checkIfEmail = (email: any) => {
  return /@/.test(email);
};

export const toFindDuplicates = (arry: string[]) => {
  return arry.filter((item, index) => arry.indexOf(item) !== index);
};

export const isValidUrl = (url: string) => {
  try {
    const newUrl = new URL(url);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
};
