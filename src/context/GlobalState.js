import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial State
const initialState = {
  transactions: []
};

//Creating context and exporting it so others inside provider can access it
export const GlobalContext = createContext(initialState);

//creating and exporting the Provider Component. Children are the componets around whom it will be wrapped
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions, Which will be dispatched/ make calls to the reducer
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TXN",
      payload: id,
    });
  }

  function addTransaction(transaction) {
      dispatch({
          type: "ADD_TXN",
          payload: transaction
      })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        //gotta pass down deleteTransaction function so children are able to use it
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
