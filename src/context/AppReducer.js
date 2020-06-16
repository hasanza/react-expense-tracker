export default (state, action) => {
  switch (action.type) {
    case "DELETE_TXN":
      return {
        //return state as received with the difference that transaction array doesnt have txn with this id
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TXN":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
