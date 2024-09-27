import { TextField } from "@mui/material";

import FirstComponent from "./components/FirstComponent";
import BasicForm from "./components/BasicForm";

function App() {
  const products = [
    {
      id: 1,
      name: "Bag",
      color: ["red", "green"],
      number: 4,
    },
    {
      id: 2,
      name: "Book",
      color: ["Blue", "red", "Black"],
      number: 3,
    },
    {
      id: 3,
      name: "Shirt",
      color: ["magenta", "red"],
      number: 5,
    },
  ];

  return (
    <div>
      <FirstComponent productinfo={products} />
    </div>
  );
}

export default App;
