import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { useGlobalContext } from '../../context/globalContext'
import Form from '../Form'
import IncomeItems from '../IncomeItems'
import { rupee } from '../../utils/icon'


const Income = () => {

    const { incomes, getIncomes, deleteIncome, totalIncomeVal } = useGlobalContext()


    useEffect(() => {
        getIncomes();
        // const total = totalIncome()
        // setTotal(total)
    }, [getIncomes]
    )

    return (
        <IncomesStyle>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income : <span>{rupee}{totalIncomeVal}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const { _id, title, amount, date, description, category, type } = income
                            return <IncomeItems
                                key={_id}
                                id={_id}
                                title={title}
                                amount={amount}
                                date={date}
                                description={description}
                                category={category}
                                type={type}
                                indicatorcolor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomesStyle>
    )
}

const IncomesStyle = styled.div`
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
export default Income