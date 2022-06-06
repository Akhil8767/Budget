import React from 'react'
import  "./App.css"
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpences from './components/IncomeExpences'
import TransactionList from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
// import  {GlobalProvider}  from './context/GlobalContext'
import { AppProvider } from './context/AppContext'

const App = () => {
  return (
   <AppProvider>
    <Header/>
    <div className="container">
      <Balance/>
    </div>
    <IncomeExpences/>
    <TransactionList/>
    <AddTransaction/>
    </AppProvider>
  )
}

export default App