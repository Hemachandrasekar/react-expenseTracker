import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/"

const GlobalContext =React.createContext()

export const GlobalProvider = ({children}) =>{

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    const [totalIncomeVal, setTotalIncomeVal] = useState(0)
    const [totalExpenseVal, setTotalExpenseVal] = useState(0)
    const [totalBalanceVal, setTotalBalanceVal] = useState(0)

   useEffect(() => {
    totalIncome()
    totalExpense()
    totalBalance()
   }, [incomes, expenses, totalIncome, totalExpense, totalBalance])
   
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
        .then((data) => {console.log("response data",data)})
        .catch((err) => {
            setError(err.response.data.message)
        })
        console.log("Response",response)
        getIncomes()
    }

    const getIncomes = async() => {
        const response=await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
       getIncomes()
    }

    const totalIncome = () => {
        let total = 0;
        incomes.forEach((income) => {
            total +=  income.amount
        })
       
         setTotalIncomeVal(total)
    }


    //expense methods
    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
        .then((data) => {console.log("response data",data)})
        .catch((err) => {
            setError(err.response.data.message)
        })
        console.log("Response",response)
        getExpenses()
    }

    const getExpenses = async() => {
        const response=await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-expense/${id}`)
       getExpenses()
    }

    const totalExpense = () => {
        let total = 0;
        expenses.forEach((expense) => {
            total +=  expense.amount
        })
       
         setTotalExpenseVal(total)
    }

    const totalBalance =  () => {
        setTotalBalanceVal(totalIncomeVal - totalExpenseVal)      
    }

    const transactionHistory = () =>{
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0,3)
    }

  return (  
    <GlobalContext.Provider value={{
        addIncome,
        getIncomes,incomes,
        deleteIncome,
        totalIncomeVal,
        addExpense,
        getExpenses,expenses,
        deleteExpense,
        totalExpenseVal,
        totalBalanceVal,
        transactionHistory,
        error,setError
    }}>
        {children}
    </GlobalContext.Provider> 
  )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}