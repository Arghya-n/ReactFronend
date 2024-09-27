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

function TextComponents() {
  return (
    <>
      <TextField label="Name" variant="outlined" name="name" required />

      <TextField label="Email" variant="outlined" name="email" required />

      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        required
      />
    </>
  );
}

export default TextComponents;
