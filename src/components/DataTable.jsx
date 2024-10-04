import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
} from "@mui/material";

const DataTable = (props) => {
  const [filter, setFilter] = useState("");

  const filteredRows = props.productDetails.filter(
    (row) =>
      row.name.toLowerCase().includes(filter.toLowerCase()) |
      row.details.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Paper>
      {/* Input for filtering */}
      <TextField
        label="Search by name"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: 20 }}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Qty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.details}</TableCell>
                <TableCell>{row.qty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;
