import React, { useRef, useState } from "react";

const ExpenseInput = ({ data, setdata }) => {
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [amount, setamount] = useState("");
  const titleref = useRef();
  const categoryref = useRef();
  const amountref = useRef();

  let [checktitle, setChecktitle] = useState(false);
  let [checkcategory, setCheckcategory] = useState(false);
  let [checkamount, setCheckamount] = useState(false);

  function handlesubmit(e) {
    e.preventDefault();
    if (!titleref.current.value) {
      // console.log("title not set");
      setChecktitle(true);
    }
    if (!category) {
      setCheckcategory(true);
    }
    if (!amountref.current.value) {
      setCheckamount(true);
    }

    if (
      !titleref.current.value ||
      !categoryref.current.value ||
      !amountref.current.value
    ) {
      return;
    }
    let newdata = {
      id: crypto.randomUUID(),
      title: title,
      category: category,
      amount: amount,
    };
    setdata((prev) => {
      let value = [...prev, newdata];
      localStorage.setItem("data", JSON.stringify(value));
      return value;
    });
    setamount("");
    setcategory("");
    settitle("");
    // console.log(

    //   categoryref.current.value,
    //   amountref.current.value,
    // );
    setCheckamount(false);
    setCheckcategory(false);
    setChecktitle(false);
  }

  return (
    <div className="md:w-1/2">
      <form
        className="flex flex-col gap-7"
        action=""
        onSubmit={(e) => {
          handlesubmit(e);
        }}
      >
        <h1 className="text-3xl font-medium">Track Your Expense</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <label htmlFor="title">Title</label>
            <input
              ref={titleref}
              type="text"
              className="border-1 border-black outline-none rounded"
              id="title"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
                setChecktitle(false);
              }}
            />
            <p
              className={`text-red-600 px-1 absolute   top-[95%] ${checktitle ? "block" : "hidden"}`}
            >
              Please enter Title!
            </p>
          </div>
          <div className="flex flex-col relative mt-2">
            {/* <label htmlFor="category">Category</label> */}
            {/* <input
              ref={categoryref}
              type="text"
              className="border-1 border-black outline-none rounded"
              id="category"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
                setCheckcategory(false);
              }}
            /> */}
            <select
              value={category}
              name=""
              ref={categoryref}
              id=""
              className="border-1 border-black outline-none rounded py-0.5"
              onChange={(e) => {
                setcategory(e.target.value);
                setCheckcategory(false);
              }}
            >
              <option value="" hidden>
                All Category
              </option>
              <option value="Grocery">Grocery</option>
              <option value="Shopping">Shopping</option>
              <option value="Education">Education</option>
              <option value="Hospital">Hospital</option>
              <option value="Food">Food</option>
            </select>
            <p
              className={`text-red-600 px-1 absolute   top-[95%] ${checkcategory ? "block" : "hidden"}`}
            >
              Please enter Category!
            </p>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="amount">Amount</label>
            <input
              ref={amountref}
              type="text"
              className="border-1 border-black outline-none rounded"
              id="amount"
              value={amount}
              onChange={(e) => {
                setamount(Number(e.target.value));
                setCheckamount(false);
              }}
            />
            <p
              className={`text-red-600 px-1 absolute   top-[95%] ${checkamount ? "block" : "hidden"}`}
            >
              Please enter Amount!
            </p>
          </div>
        </div>
        <button
          className="bg-gray-200 opacity-90 p-1 rounded"
          onClick={() => {}}
        >
          Add
        </button>
      </form>
      <button
        className="p-2 px-3 bg-red-600 rounded my-10"
        onClick={() => {
          localStorage.removeItem("data");
          setdata([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
};

export default ExpenseInput;
