import React, { useState } from 'react'
import { styled } from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../../context/globalContext'
import Button from '../Button'
import { plus } from '../../utils/icon'

const ExpenseForm = () => {
    const { addExpense, getExpenses } = useGlobalContext()
    const [expenseState, setExpenseState] = useState({
        title: '',
        amount: '',
        description: '',
        date: '',
        category: ''
    })

    const { title, amount, description, date, category, error, setError } = expenseState;
    const handleInput = name => e => {
        setExpenseState({
            ...expenseState,
            [name]: e.target.value
        })
        setError('')

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addExpense(expenseState)
        getExpenses()
        setExpenseState({
            title: '',
            amount: '',
            description: '',
            date: '',
            category: ''
        })
    }
    return (
        <ExpenseFromStyle onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}

            <div className="input-control">
                <input type="text" value={title} name={title}
                    placeholder='Expense Title' onChange={handleInput('title')} />
            </div>
            <div className="input-control">
                <input type="text" value={amount} name={amount}
                    placeholder='Expense Amount' onChange={handleInput('amount')} />
            </div>
            <div className="input-control">
                <DatePicker id="date" placeholderText='Enter a Date' selected={date} dateFormat="dd/MM/yyy" onChange={(date) => {
                    setExpenseState({
                        ...expenseState, date: date
                    })
                }} />
            </div>
            <div className="input-control selects">
                <select required value={category} name='category' id='category' onChange={handleInput('category')}>
                    <option value="" disabled>Select option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaway">Takeaway</option>
                    <option value="clothing">Clothing</option>
                    <option value="travelling">Travelling</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" placeholder='Add a Reference' value={description} id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button name={'Add Expense'} icon={plus} bpadding={'.8rem 1.6rem'} bradius={'30px'} bg={'var(--color-accent)'} color={'#fff'} />
            </div>
        </ExpenseFromStyle>
    )
}
const ExpenseFromStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding : .5rem 1rem;
        border-radius: 5px;
        border:2px solid #fff;
        background: transparent;
        resize:none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34,96, 0.4);

        }

    }
    .input-control{
       input{
        width: 100% !important;
       }
      
    }
    .selects{
        display: flex;
        justify-content:  flex-end;
        select{
            color: rgba(34, 34,96, 0.4);
            
            &:focus, &:active{
                color: rgba(34, 34,96, 1) !important;
            }
        }
    }
    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background-color:var(--color-green) !important;
            }
        }
       
    }
    .react-datepicker-wrapper {
        display : inherits !important;
   }
 `
export default ExpenseForm 