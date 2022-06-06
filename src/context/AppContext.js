import { createContext, useReducer } from "react"

const AppReducer=(state,action)=>{
    switch(action.type){
        case "Add_Expense":
            return {
                ...state,
                transaction: [...state.transaction,action.payload]
            }
            case "Delete_Expense":
                return{
                    ...state,
                    transaction: state.transaction.filter(
                        (transaction) => transaction.id !== action.payload 
                    )
                }
        default:
            return state;
    }
}


const initialState={
   transaction: [
       {id:12, Naam:"shopping",cost:-40},
       {id:13, Naam:"holiday",cost:-500},
       {id:14, Naam:"salary",cost:1000},
       {id:15, Naam:"rent",cost:-400},
   ] 
}

export const AppContext=createContext();

export const AppProvider = ({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)


    return(<AppContext.Provider value={{
        transaction: state.transaction,
        dispatch
    }}>
           {children}
    </AppContext.Provider>)
}