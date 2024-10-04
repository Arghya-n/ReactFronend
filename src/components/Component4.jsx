import React from "react";
import NewComponent from "./NewComponent";

function Component4(props) {
  const productDetails = [
    {
      id: 1,
      name: "shirt",
      qty: 2,
    },
    {
      id: 2,
      name: "pant",
      qty: 3,
    },
    {
      id: 3,
      name: "t-shirt",
      qty: 5,
    },
  ];
  return (
    <div>
      {props.studentDetails.map((studentDetail) => (
        <div>
          {studentDetail.age > 25 ? (
            <NewComponent productDetails={productDetails} />
          ) : (
            <p>age is less than or equal 25</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Component4;
