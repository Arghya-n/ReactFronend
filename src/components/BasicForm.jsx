import React, { useState } from "react";
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
import AutocompleteHint from "./subcomponents1/AutocompleteHint";
import RadioButton from "./subcomponents1/RadioButton";
import TextComponents from "./subcomponents2/TextComponent";
import SelectComponent from "./subcomponents2/SelectComponent";
import SubmitButtonComponent from "./subcomponents3/SubmitButtonComponent";
import CheckboxComponent from "./subcomponents3/CheckboxComponent";

const BasicForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        margin: "auto",
        padding: "20px",
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" align="center">
        Basic Form
      </Typography>

      <TextComponents />
      <AutocompleteHint />
      <SelectComponent />

      <RadioButton />
      <CheckboxComponent />
      <SubmitButtonComponent />
    </Box>
  );
};

export default BasicForm;
