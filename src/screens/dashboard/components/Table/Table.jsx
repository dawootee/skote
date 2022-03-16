import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Order ID", width: 150 },
  { field: "billingName", headerName: "Billing Name", width: 150 },
  { field: "date", headerName: "Date", width: 150 },
  {
    field: "total",
    headerName: "Total",
    width: 150,
  },
  {
    field: "paymentstatus",
    headerName: "Payment Status",
    width: 150,
  },
  {
    field: "paymentmethod",
    headerName: "Payment Method",
    width: 150,
  },
  {
    field: "viewdetails",
    headerName: "View Details",
    width: 150,
  },
];

const rows = [
  {
    id: "#SK2540",
    billingName: "Neal Matthews",
    date: "07 Oct, 2019",
    total: "$400",
    paymentstatus: "Paid",
    paymentmethod: "Mastercard",
    viewdetails: "View Details",
  },
  {
    id: "#SK2540",
    billingName: "Neal Matthews",
    date: "07 Oct, 2019",
    total: "$400",
    paymentstatus: "Chargeback",
    paymentmethod: "Mastercard",
    viewdetails: "View Details",
  },
  {
    id: "#SK2540",
    billingName: "Neal Matthews",
    date: "07 Oct, 2019",
    total: "$400",
    paymentstatus: "Paid",
    paymentmethod: "Mastercard",
    viewdetails: "View Details",
  },
  {
    id: "#SK2540",
    billingName: "Neal Matthews",
    date: "07 Oct, 2019",
    total: "$400",
    paymentstatus: "Refund",
    paymentmethod: "Mastercard",
    viewdetails: "View Details",
  },
  {
    id: "#SK2540",
    billingName: "Neal Matthews",
    date: "07 Oct, 2019",
    total: "$400",
    paymentstatus: "Paid",
    paymentmethod: "Mastercard",
    viewdetails: "View Details",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
