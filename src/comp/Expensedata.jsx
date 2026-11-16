import React, { useState } from "react";
import { ArrowDownUp } from "lucide-react";
import Context from "./Context";
const Expensedata = ({ data, setdata }) => {
  // console.log("data from data", data);
  let [fil, setFil] = useState(false);
  let [showmenu, setShowmenu] = useState(false);
  let [name, setname] = useState([]);
  let [clickedid,setID]=useState(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  function filter(value) {
    setname(
      data.filter((e) => {
        return e.category == value;
      }),
    );
  }
  console.log("data:", data);
console.log("is array:", Array.isArray(data));
console.log("type:", typeof data);

  let totalmoney = data.reduce((p, r) => {
    return p + r.amount;
  }, 0);

  return (
    <div className="md:w-1/2 databox relative overflow-y-scroll" onClick={()=>setShowmenu(false)}>
      <table className=" relative ">

        <thead>
          <tr className="  bb">
            <th className=" bb">Title</th>
            <th className="flex justify-between  w-full h-full bb">
              {/* <label htmlFor="">All</label> */}
              <select
                name=""
                id=""
                className="outline-none w-full h-full"
                onChange={(e) => {
                  if (e.target.value === "") {
                    setFil(false);
                  } else {
                    filter(e.target.value);
                    setFil(true);
                  }
                }}
              >
                <option value="" default>
                  All
                </option>
                <option value="Grocery">Grocery</option>
                <option value="Shopping">Shopping</option>
                <option value="Education">Education</option>
                <option value="Hospital">Hospital</option>
                <option value="Food">Food</option>
              </select>
            </th>
            <th className="bbs w-auto">
              <select
                name=""
                id=""
                className="outline-none w-full  h-full"
                onChange={(e) => {
                  if (e.target.value === "high") {
                    setdata(
                      [...data].sort(
                        (a, b) => Number(b.amount) - Number(a.amount),
                      ),
                    );
                  }

                  if (e.target.value === "low") {
                    setdata(
                      [...data].sort(
                        (a, b) => Number(a.amount) - Number(b.amount),
                      ),
                    );
                  }
                }}
              >
                <option value="" hidden>
                  Amount
                </option>
                <option onClick={() => {}} value="high">
                  HIGH
                </option>
                <option onClick={() => {}} value="low">
                  LOW
                </option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody className="max-h-[300px] l">
          {fil
            ? name.map((el, idx) => {
                return (
                  <tr
                    key={idx}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setPosition({
                        x: e.clientX,
                        y: e.clientY,
                      });
                      setID(el.id);
                      setShowmenu(true);
                    }}
                  >
                    <td className="left">{el.title}</td>
                    <td>{el.category}</td>
                    <td className="right">${el.amount}</td>
                  </tr>
                );
              })
            : data.map((el, idx) => {
                return (
                  <tr
                    key={idx}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setPosition({
                        x: e.clientX,
                        y: e.clientY,
                      });
                       setID(el.id);
                      setShowmenu(true);
                    }}
                  >
                    <td className="left">{el.title}</td>
                    <td>{el.category}</td>
                    <td className="right">${el.amount}</td>
                  </tr>
                );
              })}
        </tbody>

      </table>
                      {showmenu && <Context position={position} clickedid={clickedid} setID={setID} setPosition={setPosition} data={data} setdata={setdata}/>
        
      }

      <div className="flex justify-between px-4 font-medium w-full top-[90%] bg-[#f2f2f2] sticky py-2">
        <p className="px-4">Total</p>
        <p className="px-4">${totalmoney}</p>{" "}
      </div>
    </div>
  );
};

export default Expensedata;
