import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ActionsProps } from "../Table.type";

const TableActions: React.FC<ActionsProps> = ({onDelete}) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onDelete()
  };

  return (
    <IconButton onClick={handleClick}>
      <DeleteOutlineIcon />
    </IconButton>
  );
};

export default TableActions;
