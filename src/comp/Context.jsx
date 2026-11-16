import React from "react";

const Context = ({ position, setPosition, clickedid,data,setdata }) => {
    console.log(clickedid);
  return (
    <div
      className="fixed bg-white border shadow-md p-2 cursor-pointer"
      style={{
        left: position.x,
        top: position.y,
      }}
      onClick={() => {
        const newData = data.filter(
          (item) => item.id !== clickedid
        );

        setdata(newData);

        localStorage.setItem(
          "data",
          JSON.stringify(newData)
        );
      }}
    >
      Delete
    </div>
  );
};

export default Context;
