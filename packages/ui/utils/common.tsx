import dayjs, { Dayjs } from "dayjs";
import moment from "moment";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

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

export const getYearFromDate = (date: Dayjs | null) => {
  return (
    (date &&
      checkIfValidDate(date) &&
      dayjs(date).isBetween("1900", "2099", "year") &&
      dayjs(date).get("year").toString()) ||
    dayjs().year().toString()
  );
};

export const getCorrectYear = (year: string | null) => {
  return (
    (year &&
      checkIfNumber(year) &&
      year.length === 4 &&
      dayjs(year).isBetween("1900", "2099", "year") &&
      parseInt(year)) ||
    dayjs().year()
  );
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

export const removeDateDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

export const Months = [
  { value: 1, name: "January" },
  { value: 2, name: "February" },
  { value: 3, name: "March" },
  { value: 4, name: "April" },
  { value: 5, name: "May" },
  { value: 6, name: "June" },
  { value: 7, name: "July" },
  { value: 8, name: "August" },
  { value: 9, name: "September" },
  { value: 10, name: "October" },
  { value: 11, name: "November" },
  { value: 12, name: "December" },
];
