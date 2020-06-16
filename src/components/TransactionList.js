import React, { useContext } from "react";
import Transaction from '../components/Transaction'
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
    //destructuring an object with array of transction objects
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
