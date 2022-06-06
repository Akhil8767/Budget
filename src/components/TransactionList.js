import React, { useContext } from 'react'
import Transaction from './Transaction'
import { AppContext } from '../context/AppContext'

const TransactionList = () => {
  const {transaction}=useContext(AppContext)
  // console.log(transaction)
  return (
      <>
      <h3>History</h3>
      <ul  className="list">
        {transaction.map(transaction=>( <Transaction id={transaction.id} key={transaction.id} transaction={transaction}/>))}
         
      </ul></>
  )
}

export default TransactionList