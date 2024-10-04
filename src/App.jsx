import { TextField } from "@mui/material";

import FirstComponent from "./components/FirstComponent";
import BasicForm from "./components/BasicForm";
import Component4 from "./components/Component4";
import DataTable from "./components/DataTable";

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
  const studentDetails = [
    { id: 1, name: "Nazmus Sakib", age: 30 },
    { id: 2, name: "Mubasshir Naib", age: 24 },
    { id: 3, name: "Shaikat Hossain shohag", age: 29 },
    { id: 4, name: "Hasib islam", age: 25 },
  ];
  const productDetails = [
    {
      id: 1,
      name: "shirt",
      details: "It is shirt.It has 2 in quantity sakib",
      qty: 2,
    },
    {
      id: 2,
      name: "pant",
      details: "It is pant.It has 3 in quantity",
      qty: 3,
    },
    {
      id: 3,
      name: "t-shirt",
      details: "It is t-shirt. It has 5 in quantity",
      qty: 5,
    },
  ];
  return (
    <div>
      {/* <FirstComponent productinfo={products} /> */}
      <Component4 studentDetails={studentDetails} />
      <DataTable productDetails={productDetails} />
    </div>
  );
}

export default App;
