import React, { useState } from "react";
import ExpenseInput from "./comp/ExpenseInput";
import Expensedata from "./comp/Expensedata";

const App = () => {
  // const [data, setdata] = useState(() => {
  //   let saveddata = localStorage.getItem("data");

  //   if (!saveddata) {
  //     return [];
  //   }
  //   try {
  //     return JSON.parse(saveddata);
  //   } catch {
  //     localStorage.removeItem(data);
  //     return [];
  //   }
  // });
const [data, setdata] = useState(() => {
  const saveddata = localStorage.getItem("data");

  if (!saveddata) {
    return [];
  }

  try {
    const parsedData = JSON.parse(saveddata);

    if (Array.isArray(parsedData)) {
      return parsedData;
    }

    localStorage.removeItem("data");
    return [];
  } catch {
    localStorage.removeItem("data");
    return [];
  }
});

  console.log("data from app",data);
// let arr=[1,2,4,5,6,7,8,4,5,3,2,1];
// console.log(arr.sort().reverse());
// console.log("sorted data",data.sort((a, b) => a.amount - b.amount).reverse());


  return (
    <div className="px-24 py-10 flex gap-10 md:flex-row flex-col">
      <ExpenseInput data={data} setdata={setdata} />
      <Expensedata data={data} setdata={setdata} />
    </div>
  );
};
export default App;
