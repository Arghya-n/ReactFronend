import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";

function SelectComponent() {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default SelectComponent;
