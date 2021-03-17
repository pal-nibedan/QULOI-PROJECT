import React from "react";
import MUIDataTable from "mui-datatables";

function Table() {
  const columns = [
    "Description",
    "Name",
    "Price",
    "Unit",
    "Tax",
    "Exchange Rate",
    "Final Payment",
  ];
  const data = [
    [
      "Freight",
      "Joe James",
      "285277",
      "Per Container",
      "-",
      "1.00",
      "INR20000",
    ],
    [
      "Free In",
      "John Walsh",
      "2837435",
      "Per Container",
      "-",
      "1.00",
      "INR20000",
    ],
    [
      "Temporary",
      "Bob Herm",
      "10000",
      "Per Container",
      "-",
      "1.00",
      "INR20000",
    ],
    [
      "Freight",
      "James Houston",
      "878578",
      "Per Container",
      "10%",
      "1.00",
      "INR20000",
    ],
  ];
  const options = {
    filterType: "checkbox",
    sort: true,
    edit: true,
  };

  return (
    <div className="table">
      <MUIDataTable
        title={"Manage Charges"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default Table;
