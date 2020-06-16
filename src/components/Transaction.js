import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    //GlobalContext returns an abject with deleteTxn function. So, we set this variable to property of same name in the returned object
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={() => {deleteTransaction(transaction.id)}}>x</button>
      </li>
    )
}

export default Transaction;

