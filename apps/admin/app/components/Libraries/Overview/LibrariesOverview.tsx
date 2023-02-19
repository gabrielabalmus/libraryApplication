import { ColumnFlex } from "@/components/Flex";
import Input from "@/components/Input";
import TableContainer from "@/components/Table";
import Paper from "@mui/material/Paper";
import { SearchPlaceholder, librariesColumns } from "../Libraries.const";
import { LibrariesOverviewProps } from "../Libraries.type";

const LibrariesOverview: React.FC<LibrariesOverviewProps> = ({
  libraries,
  page,
  search,
  onPageChange,
  onSearchChange,
  onDelete,
}) => {
  return (
    <Paper className="overview-paper">
      <ColumnFlex gap="20px">
        <Input
          placeholder={SearchPlaceholder}
          onChange={onSearchChange}
          width="300px"
          value={search}
        />
        <TableContainer
          columns={librariesColumns}
          rows={libraries.data}
          count={libraries.count}
          page={page}
          onPageChange={onPageChange}
          onDelete={onDelete}
        />
      </ColumnFlex>
    </Paper>
  );
};

export default LibrariesOverview;
