import { Button, ButtonBase, TextField } from "@mui/material";
import React, { useState } from "react";

function NewComponent(props) {
  const [value, setvalue] = useState({});
  const handleClick = (v) => {
    setvalue(v);
  };
  return (
    <div>
      <p>{value.id}</p>
      <p>{value.name}</p>
      <p>{value.qty}</p>
      {props.productDetails.map((product) => (
        <div>
          <Button variant="outlined" onClick={() => handleClick(product)}>
            Product
          </Button>
        </div>
      ))}
    </div>
  );
}

export default NewComponent;
