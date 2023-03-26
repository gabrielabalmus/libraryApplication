import { ImageUploaderContainerProps } from "./ImageUploader.type";
import { UploadImage } from "./ImageUploader.const";
import { ImageBox, ImagePaper, StyledImage } from "./ImageUploader.style";
import Typography from "@mui/material/Typography";
import { ColumnFlex } from "@/components/Flex";
import FormHelperText from "@mui/material/FormHelperText";
import { ContainedButton } from "@/components/Button/Button.style";

const ImageUploaderContainer: React.FC<ImageUploaderContainerProps> = ({
  onImageChange,
  errorMessage,
  image,
}) => (
  <ColumnFlex gap="10px">
    <ImagePaper error={!!errorMessage}>
      <ContainedButton component="label">
        {UploadImage}
        <input type="file" accept="image/*" onChange={onImageChange} hidden />
      </ContainedButton>

      <ImageBox>
        {image ? (
          <StyledImage src={image} />
        ) : (
          <Typography variant="h1">No image</Typography>
        )}
      </ImageBox>
    </ImagePaper>

    {errorMessage && (
      <FormHelperText error={true}>{errorMessage}</FormHelperText>
    )}
  </ColumnFlex>
);

export default ImageUploaderContainer;
