import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  //this is the local state. We need to keep track of text and amount before storing it in global state...
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  // destructuring and using addTransaction function from the GlobalContext
  const { addTransaction } = useContext(GlobalContext);

  const handleChangeText = (event) => {
    setText(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Input Transaction</label>
          <input
            required
            type="text"
            id="text"
            value={text}
            placeholder="Enter transaction here..."
            onChange={handleChangeText}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            //value={amount}
            onChange={handleChangeAmount}
            placeholder="Enter amount..."
          ></input>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
