import { ErrorMessage } from "~/const";
import cloudinary from "cloudinary";
import { v4 as uuid } from "uuid";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (image: string) => {
  try {
    const { public_id } = await cloudinary.v2.uploader.upload(image, {
      public_id: uuid(),
    });

    return public_id;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};

export const removeImage = async (imageName: string) => {
  try {
    const { public_id } = await cloudinary.v2.uploader.destroy(imageName);

    return public_id;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};

export const getImage = async (imageName: string): Promise<string> => {
  try {
    const { secure_url } = await cloudinary.v2.api.resource(imageName);

    return secure_url;
  } catch (err) {
    return "";
  }
};
