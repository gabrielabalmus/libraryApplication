import { ColumnFlex } from "@/components/Flex";
import LayoutTitle from "~/components/LayoutTitle";
import LibrariesOverview from "~/components/Libraries/Overview";
import {
  ErrorDelete,
  initialLibraries,
  Libraries,
  NewLibrary,
  SuccessDelete,
} from "~/components/Libraries/Libraries.const";
import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import {
  getPaginatedLibraries,
  deleteLibrary,
} from "~/server/libraries.server";
import { badRequest, goodRequest } from "~/server/request.server";
import { ErrorMessage } from "~/const";
import { useCallback, useState } from "react";
import {
  PaginatedLibraries,
} from "~/components/Libraries/Libraries.type";
import { debounce, isString } from "lodash";
import { ActionArgs, ActionFunction, LoaderArgs } from "@remix-run/node";
import { checkIfNumber } from "~/components/Libraries/Libraries.helper";
import { useSearchParams, URLSearchParamsInit } from "react-router-dom";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const search = url.searchParams.get("search") || "";

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const libraries = await getPaginatedLibraries({
      page: pageNumber,
      search,
    });

    return goodRequest({ libraries });
  } catch (error: any) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: false,
    });
  }
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData();

    const intent = formData.get("intent");

    if (intent === "delete") {
      const libraryId = formData.get("libraryId");

      if (!isString(libraryId)) {
        return badRequest({
          message: ErrorDelete,
          success: false,
        });
      }

      await deleteLibrary({ libraryId });

      return goodRequest({
        message: SuccessDelete,
        success: true,
      });
    }

    return badRequest({
      message: ErrorMessage,
      success: false,
    });
  } catch (error: any) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: false,
    });
  }
};

const PaginatedLibraries: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useLoaderData();
  const submit = useSubmit();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const search = searchParams.get("search") || "";

  let pageNumber = 1;
  if (page && checkIfNumber(page)) pageNumber = parseInt(page);

  const libraries = (data && data.libraries) || initialLibraries;

  const [searchValue, setSearchValue] = useState<string>(search);

  const handleCreateLibrary = () => {
    navigate(`${location.pathname}/create`);
  };

  const handleChangePage = (pageNumber: number) => {
    setSearchParams({ ...searchParams, page: pageNumber.toString() });
  };

  const debounceSearchChange = useCallback(
    debounce((value: string) => {
      const params: URLSearchParamsInit = value && { search: value };
      setSearchParams(params);
    }, 500),
    []
  );

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    debounceSearchChange(value);
  };

  const handleDelete = (id: string) => {
    submit(
      {
        libraryId: id,
        intent: "delete",
      },
      {
        method: "delete",
        action: `/libraries${location.search}`,
      }
    );
  };

  return (
    <ColumnFlex>
      <LayoutTitle title={Libraries}>
        <Button
          title={NewLibrary}
          variant={ButtonVariant.contained}
          onClick={handleCreateLibrary}
        />
      </LayoutTitle>

      <LibrariesOverview
        libraries={libraries}
        page={pageNumber}
        onPageChange={handleChangePage}
        search={searchValue}
        onSearchChange={handleSearchChange}
        onDelete={handleDelete}
      />
    </ColumnFlex>
  );
};

export default PaginatedLibraries;
