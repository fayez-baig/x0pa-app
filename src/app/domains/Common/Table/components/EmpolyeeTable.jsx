import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Delete16 as Delete } from "@carbon/icons-react";
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Button,
} from "carbon-components-react";
import Modal from "../../components/modal/Modal";
import { tableHeaders } from "./../../kernel/tableHeaders";

const EmpolyeeTable = ({ data: rows, handleDelete, handleAdd }) => {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} setOpen={setOpen} handleAdd={handleAdd} />
      <DataTable rows={rows} headers={tableHeaders} isSortable>
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getTableProps,
          onInputChange,
          getBatchActionProps,
        }) => (
          <TableContainer title="Employee Data">
            <TableToolbar>
              <TableToolbarContent>
                <TableToolbarSearch
                  persistent="true"
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                  onChange={onInputChange}
                />

                <Button onClick={() => setOpen(true)}>Add Employee</Button>
                <Button
                  kind="danger"
                  onClick={() => {
                    sessionStorage.clear();
                    history.push("/");
                  }}
                >
                  Log out
                </Button>
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader
                      key={header.key}
                      {...getHeaderProps({ header })}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </TableHead>
              {rows.length > 0 ? (
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                      <TableCell
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(row.id)}
                      >
                        <Delete />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <TableRow>
                  <TableCell>No Data Found</TableCell>
                </TableRow>
              )}
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </>
  );
};

export default EmpolyeeTable;
