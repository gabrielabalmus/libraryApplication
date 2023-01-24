import { ColumnFlex } from "@/components/Flex";
import LayoutTitle from "~/components/LayoutTitle";
import LibrariesOverview from "~/components/Libraries/Overview";
import { libraries, newLibrary } from "~/components/Libraries/Libraries.const";
import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import { useLocation, useNavigate } from "@remix-run/react";

const Libraries: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCreateLibrary = () => {
    navigate(`${location.pathname}/create`);
  };

  return (
    <ColumnFlex>
      <LayoutTitle title={libraries}>
        <Button
          title={newLibrary}
          variant={ButtonVariant.contained}
          onClick={handleCreateLibrary}
        />
      </LayoutTitle>

      <LibrariesOverview />
    </ColumnFlex>
  );
};

export default Libraries;
