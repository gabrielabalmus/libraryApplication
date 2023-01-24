import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TableActions: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
  };

  return (
    <IconButton disableRipple onClick={handleClick}>
      <DeleteOutlineIcon />
    </IconButton>
  );
};

export default TableActions;
