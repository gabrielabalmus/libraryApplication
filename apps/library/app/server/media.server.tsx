import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getImage = async (imageName: string): Promise<string> => {
  try {
    const { secure_url } = await cloudinary.v2.api.resource(imageName);

    return secure_url;
  } catch (err) {
    return "";
  }
};
