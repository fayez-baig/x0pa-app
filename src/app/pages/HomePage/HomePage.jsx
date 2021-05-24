import EmpolyeeTable from "../../domains/Common/Table/components/EmpolyeeTable";
import TableDataContainer from "../../domains/Common/Table/containers/TableDataContainer";
import { DataTableSkeleton } from "carbon-components-react";
import SomethingWentWrong from "./../../domains/Common/components/something-went-wrong/SomethingWentWrong";

const HomePage = () => {
  return (
    <TableDataContainer>
      {({ data, isLoading, isError, handleDelete, handleAdd }) => (
        <>
          {isError && <SomethingWentWrong />}
          {isLoading ? (
            <DataTableSkeleton />
          ) : (
            !isError && (
              <EmpolyeeTable
                data={data}
                handleDelete={handleDelete}
                handleAdd={handleAdd}
              />
            )
          )}
        </>
      )}
    </TableDataContainer>
  );
};

export default HomePage;
