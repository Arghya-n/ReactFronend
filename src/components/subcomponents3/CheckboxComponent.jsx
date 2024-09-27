import React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { FormLabel } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CheckboxComponent() {
  return (
    <>
      <FormLabel>Color</FormLabel>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />

      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
    </>
  );
}

export default CheckboxComponent;
