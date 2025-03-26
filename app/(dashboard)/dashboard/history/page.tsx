"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDownIcon } from "lucide-react";
import { toast } from "sonner";
import Logo from "@/public/logo.png"

export type Payment = {
  scanId: string;
  scanStatus: "In Queue" | "Completed" | "In Progress";
  url: string;
  reportUrl: string;
  scanDate: string;
  scanType: "Quick Scan" | "Advanced Scan" | "Full Scan";
};


const columns: ColumnDef<Payment>[] = [
  // {
  //   id: "select",
  //   // header: ({ table }) => (
  //   //   <Checkbox
  //   //     checked={
  //   //       table.getIsAllPageRowsSelected() ||
  //   //       (table.getIsSomePageRowsSelected() && "indeterminate")
  //   //     }
  //   //     onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //   //     aria-label="Select all"
  //   //   />
  //   // ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "scanId",
    header: () => <div>Scan ID</div>,
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("scanId")}</div>;
    },
  },

  {
    accessorKey: "url",
    header: ({ column }) => {
      return <div className="capitalize">Target</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("url")}</div>
    ),
  },
  {
    accessorKey: "scanType",
    header: ({ column }) => {
      return <div className="capitalize">Scan Type</div>;
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("scanType")}</div>
    ),
  },
  {
    accessorKey: "scanStatus",
    header: "Scan Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("scanStatus")}</div>
    ),
  },
  {
    accessorKey: "reportUrl",
    header: "Report",
    cell: ({ row }) => (
      <Button variant="link" className="bg-sky-200 dark:bg-reconswiftSecondary dark:text-black" onClick={() => {if(row.getValue("reportUrl") == "") {toast.info("Scan is in queue. Please wait!")} else {window.open(row.getValue("reportUrl"), "_blank")} }} >
        Download Report
      </Button>
    ),
  }
];

function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [loading, setLoading] = React.useState(true);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/v1/scans", {
      method: "POST",
      body: JSON.stringify({
        request: "scanId scanStatus url scanDate reportUrl scanType",
        sort: -1,
        limit: 0,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((d) => {
        console.log(d)
        setData(d);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (loading) return <div className="h-full flex justify-center items-center float flex-col"><span className="block"><img className="ease-linear duration-1000 animate-bounce" src={Logo.src} height={100} width={100} /></span><span>Loding your data..... Almost there!</span></div>

  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 flex-wrap sm:flex-nowrap py-4">
        <Input
          placeholder="Filter url..."
          value={(table.getColumn("url")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("url")?.setFilterValue(event.target.value)
          }
          className="max-w-sm w-full"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full  sm:w-auto sm:my-2">
              Columns
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border text-center">
        <Table>
          <TableHeader >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="text-center" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          {/* <Button
            variant="outline"
            size="sm"
            onClick={() => {
              alert("Feature not implemented yet.");
            }}
            disabled={true}
          >
            Download
          </Button> */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

function page() {
  return (
    <div className="px-5 sm:px-10 w-full overflow-y-scroll h-5/6">
      <DataTableDemo />
    </div>
  );
}

export default page;
