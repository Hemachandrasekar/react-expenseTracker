import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { rupee } from '../../utils/icon'

import { useGlobalContext } from '../../context/globalContext'
import IncomeItems from '../IncomeItems'
import ExpenseForm from './ExpenseForm'



const Expenses = () => {

    const { getExpenses, expenses, deleteExpense, totalExpenseVal } = useGlobalContext()
    console.log("get Expense", expenses)


    useEffect(() => {
        getExpenses();
        // const total = totalIncome()
        // setTotal(total)
    }, [getExpenses]
    )


    return (
        <ExpensesStyle>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-income">Total Expenses : <span>{rupee}{totalExpenseVal}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {expenses.map((expense) => {
                            const { _id, title, amount, date, description, category, type } = expense
                            return <IncomeItems
                                key={_id}
                                id={_id}
                                type={type}
                                title={title}
                                amount={amount}
                                date={date}
                                description={description}
                                category={category}
                                indicatorcolor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpensesStyle>
    )
}

const ExpensesStyle = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background:#FCF6F9;
        border: 2px solid #fff;
        border-radius: 20px;
        box-shadow:0px 1px 15px rgba(0, 0, 0, 0.06)
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.3rem;
            font-weight:800;
            color: var(--color-green)
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }

`

export default Expenses