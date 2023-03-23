import { ColumnFlex } from "@/components/Flex";
import { ImageUploaderContainerProps } from "./ImageUploader.type";
import { UploadImage } from "./ImageUploader.const";
import ButtonMaterial from "@mui/material/Button";
import { StyledImage } from "./ImageUploader.style";

const ImageUploaderContainer: React.FC<ImageUploaderContainerProps> = ({
  onImageChange,
  errorMessage,
  image,
}) => (
  <ColumnFlex gap="10px">
    <ButtonMaterial variant="contained" component="label">
      {UploadImage}
      <input type="file" accept="image/*" onChange={onImageChange} hidden />
    </ButtonMaterial>

    {image && <StyledImage src={image} />}
    {errorMessage && <p>{errorMessage}</p>}
  </ColumnFlex>
);

export default ImageUploaderContainer;
