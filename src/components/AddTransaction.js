import React,{useContext, useState} from 'react'
import { AppContext } from '../context/AppContext'

export const AddTransaction = () => {
  const  {dispatch}=useContext(AppContext)
  const [input,setInput]=useState('')
  const [amount,setAmount]=useState(0)

    const onSubmit=(event)=>{
      event.preventDefault()
      
      const transaction={
        id: Math.random(), 
       Naam:input,
        cost:parseInt(amount)
      }
       dispatch({
         type:"Add_Expense",
         payload: transaction
       })
      
    }
return (
  <>
  <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" placeholder="Enter text..." 
         value={input}
         onChange={(e)=>setInput(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input type="number"   placeholder="Enter amount..." 
        value={amount}
         onChange={(e) => setAmount(e.target.value)}/>
      </div>
      <button className="btn">Add transaction</button>
    </form>
  </>
)
}

