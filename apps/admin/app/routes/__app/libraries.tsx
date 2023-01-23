import { ColumnFlex } from "@/components/Flex";
import LayoutTitle from "~/components/LayoutTitle";
import LibrariesOverview from "~/components/Libraries/Overview";
import { libraries } from "~/components/Libraries/Libraries.const";

const Libraries: React.FC = () => {
  return (
    <ColumnFlex>
      <LayoutTitle title={libraries} />
      <LibrariesOverview />
    </ColumnFlex>
  );
};

export default Libraries;
