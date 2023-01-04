import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import { StyledGrid, StyledParagraph, StyledTitle } from "./Login.style";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    parola: "",
  });

  const handleInputChange = (value: string, field: string) => {
    setFormData((form) => ({ ...form, [field]: value }));
  };

  return (
    <form method="post" onSubmit={() => {}}>
      <StyledGrid container item>
        <StyledTitle variant="h5">Biblioteca online!</StyledTitle>

        <StyledParagraph>
          Va rugam sa introduceti datele de logare.
        </StyledParagraph>

        <TextField
          error={false}
          label="Email*"
          value={formData.email}
          variant="outlined"
          helperText=""
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e.target.value, "email")
          }
          sx={{ mb: 1.5 }}
        />
        <TextField
          error={false}
          label="Parola*"
          value={formData.parola}
          variant="outlined"
          helperText=""
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e.target.value, "parola")
          }
          sx={{ mb: 4 }}
        />

        <Button
          title="Logare"
          variant={ButtonVariant.contained}
          handleClick={() => {}}
        />
      </StyledGrid>
    </form>
  );
};

export default LoginForm;
