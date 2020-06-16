import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
const Balance = () => {
    //storing transactions object array from global context in same name variable
    const {transactions} = useContext(GlobalContext);
    //storing total amount of all transactions in variable. Get amounts into an array
    const amounts = transactions.map(transaction => transaction.amount);//returns an array of only the amounts
    //loop amount array and add  each one
    //accumulater is the sum variable. initial acc value is 0. on each iteration, add item to acc. 
    //Finally, round number to 2 decimal figure. 
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return (
        <div>
            <h4>Your Balance</h4>
    <h1 id="balance">${total}</h1>
        </div>
    )
}

export default Balance;
