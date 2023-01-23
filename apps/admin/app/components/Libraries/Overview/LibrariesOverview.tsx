import TableContainer from "@/components/Table";
import Paper from "@mui/material/Paper";

const columns = [
  { name: "test1", value: "Test1" },
  { name: "test2", value: "Test2" },
  { name: "test3", value: "Test3" },
];

const rows = [
  { test1: "ceva1", test2: "ceva2", test3: "ceva3" },
  { test1: "altceva1", test2: "altceva2", test3: "altceva3" },
];

const LibrariesOverview: React.FC = () => {
  return (
    <Paper>
      <TableContainer columns={columns} rows={rows} />
    </Paper>
  );
};

export default LibrariesOverview;
