import React, { useState } from 'react'
import { styled } from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../../context/globalContext'
import Button from '../Button'
import { plus } from '../../utils/icon'

const Form = () => {
    const { addIncome, getIncomes, error, setError } = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        description: '',
        date: '',
        category: ''
    })

    const { title, amount, description, date, category } = inputState;
    const handleInput = name => e => {
        setInputState({
            ...inputState,
            [name]: e.target.value
        })
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addIncome(inputState)
        getIncomes()
        setInputState({
            title: '',
            amount: '',
            description: '',
            date: '',
            category: ''
        })
    }
    return (
        <FromStyle onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input type="text" value={title} name={title}
                    placeholder='Salary Title' onChange={handleInput('title')} />
            </div>
            <div className="input-control">
                <input type="text" value={amount} name={amount}
                    placeholder='Salary Amount' onChange={handleInput('amount')} />
            </div>
            <div className="input-control">
                <DatePicker style={{ width: '100%' }} id="date" placeholderText='Enter a Date' selected={date} dateFormat="dd/MM/yyy" onChange={(date) => {
                    setInputState({
                        ...inputState, date: date
                    })
                }} />
            </div>
            <div className="input-control selects">
                <select required value={category} name='category' id='category' onChange={handleInput('category')}>
                    <option value="" disabled>Select option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="youtube">Youtube</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" placeholder='Add a Reference' value={description} id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button name={'Add Income'} icon={plus} bpadding={'.8rem 1.6rem'} bradius={'30px'} bg={'var(--color-accent)'} color={'#fff'} />
            </div>
        </FromStyle>
    )
}
const FromStyle = styled.form`
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
export default Form