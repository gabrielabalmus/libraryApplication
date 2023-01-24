import { ColumnFlex } from "@/components/Flex";
import LayoutTitle from "~/components/LayoutTitle";
import LibrariesForm from "~/components/Libraries/Form/LibrariesForm";
import { createLibrary } from "~/components/Libraries/Libraries.const";

const CreateLibrary: React.FC = () => {
  return (
    <ColumnFlex>
      <LayoutTitle title={createLibrary} backUrl={'/libraries'}/>
      <LibrariesForm />
    </ColumnFlex>
  );
};

export default CreateLibrary;
