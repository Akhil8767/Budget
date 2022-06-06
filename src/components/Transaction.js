import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Transaction = ({transaction}) => {
  const {dispatch}=useContext(AppContext)
  
   const handleDeleteExpense=()=>{
     dispatch({
            type:"Delete_Expense"
            ,payload:transaction.id
     })
   }

  const sign = transaction.cost<0? "-":"+";
  return (
    <li className={transaction.cost<0?"minus":"plus"}>
          {transaction.Naam} <span>{sign}${Math.abs(transaction.cost)}</span><button onClick={handleDeleteExpense} className="delete-btn">x</button>
        </li>
  )
}

export default Transaction