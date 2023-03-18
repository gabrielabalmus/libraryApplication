import { ErrorMessage } from "~/const";
import cloudinary from "cloudinary";
import { v4 as uuid } from "uuid";

cloudinary.v2.config({
  cloud_name: "digj60j3v",
  api_key: "212858448923675",
  api_secret: "OydaafY1z-JuMcb7RkkcOjHu8BQ",
});

export const uploadImage = async (image: string) => {
  try {
    const { public_id } = await cloudinary.v2.uploader.upload(image, {
      public_id: uuid(),
    });

    return { imageId: public_id };
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};

export const getImage = async (imageName: string) => {
  try {
    const { secure_url } = await cloudinary.v2.api.resource(imageName);

    return secure_url;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
