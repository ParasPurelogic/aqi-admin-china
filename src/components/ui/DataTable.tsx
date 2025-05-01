"use client";

import cn from "@/utility/cn";
import ReactDataTable, { TableColumn } from "react-data-table-component";

interface Props<Row>
  extends Omit<React.ComponentProps<typeof ReactDataTable>, "columns"> {
  columns: TableColumn<Row>[];
}

const DataTable = (props: Props<any>) => {
  // Return JSX
  return (
    <div
      className={cn(
        "sa-data-table text-title text-[1.7rem] flex flex-col min-h-[20rem] [--scrollbarTrackColor:transparent]",
        props.className
      )}
    >
      <ReactDataTable
        {...props}
        className=""
        pagination
        sortIcon={<></>}
        paginationPerPage={50}
        paginationRowsPerPageOptions={[25, 50, 100]}
        fixedHeader
        highlightOnHover={props.highlightOnHover ?? true}
        customStyles={{
          head: {
            style: {
              color: "#677580",
              fontWeight: 700,
              fontSize: "1.7rem",
            },
          },
          headCells: {
            style: {
              border: "solid 1px rgba(190,190,190, 0.3)",
              borderBottom: 0,
            },
          },
          rows: {
            style: {
              fontSize: "1.7rem",
              fontWeight: 600,
              padding: 0,
            },
          },
          cells: {
            style: {
              padding: "2.3rem 2.1rem",
              border: "solid 1px rgba(190,190,190, 0.3)",
              borderBottom: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default DataTable;
