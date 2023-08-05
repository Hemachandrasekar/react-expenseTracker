import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import Chart from '../Chart'
import { rupee } from '../../utils/icon'
import axios from 'axios'
import { BASE_URL, useGlobalContext } from '../../context/globalContext'
import History from '../History'



const Dashboard = () => {
    const { totalIncomeVal, totalExpenseVal, getIncomes, getExpenses, totalBalanceVal, incomes, expenses } = useGlobalContext()

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []
    )

    return (
        <DashboardStyle>
            <InnerLayout>
                <h1>All Transaction</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>{rupee} {totalIncomeVal} </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>{rupee} {totalExpenseVal}</p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>{rupee} {totalBalanceVal}</p>
                            </div>
                        </div>
                    </div>
                    <div className="histroy">
                        <History />
                        <h2 className="salary-title">
                            Min
                            <span>Salary</span>
                            Max
                        </h2>
                        <div className="salary-item">
                            <p>{Math.min(...incomes.map((item) => (item.amount)))}</p>
                            <p>{Math.max(...incomes.map((item) => (item.amount)))}</p>
                        </div>

                        <h2 className="salary-title">
                            Min
                            <span>Expense</span>
                            Max
                        </h2>
                        <div className="salary-item">
                            <p>{Math.min(...expenses.map((item) => (item.amount)))}</p>
                            <p>{Math.max(...expenses.map((item) => (item.amount)))}</p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyle>
    )
}

const DashboardStyle = styled.div`
    .stats-con{
        display:grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1/4;
            height:400px;
            .amount-con{
                display:grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background:#FCF6F9;
                    border:2px solid #fff;
                    border-radius: 20px;
                    box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;

                    }
                }
                .balance{
                    grid-column: 2/4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    p{
                        opacity:0.6;
                        font-size:4.5rem;
                        color: var(--color-green)
                    }
                }
            }
        }

        .histroy{
            grid-column: 4/-1;
            h2{
                margin:1rem 0; 
                display: flex;
                align-items: center;
                justify-content: space-between;
                .salary-title{
                    font-size: 1.2rem;
                    span{
                        font-size:1.8rem; 
                    }
                }
                
            }
            .salary-item{
                background:#FCF6F9;
                border:2px solid #fff;
                border-radius: 20px;
                box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
                padding: 1rem; 
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
`
export default Dashboard