import dayjs, { Dayjs } from "dayjs";

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

export const checkIfValidDate = (value: Dayjs | null) => {
  return value && dayjs(value).isValid()
    ? dayjs(value).locale("ro").format()
    : "";
};

export const checkIfNumber = (value: string) => {
  return /^\d+$/.test(value);
};

export const checkIfEmail = (email: string) => {
  return /@/.test(email);
};

export const toFindDuplicates = (arry: string[]) => {
  return arry.filter((item, index) => arry.indexOf(item) !== index);
};
