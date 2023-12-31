import React from 'react'
import { styled } from 'styled-components'
import { bitcoin, book, calendar, card, circle, clothing, comment, food, freelance, medical, money, piggy, rupee, stocks, takeaway, trash, tv, yt } from '../../utils/icon'
import Button from '../Button'
import { dateFormat } from '../../utils/dateFormat'

const IncomeItems = ({ id, title, amount, date, category, description, deleteItem, indicatorcolor, type }) => {
    console.log("Expense typr", type)
    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'stocks':
                return stocks;
            case 'investments':
                return stocks;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return '';
        }
    }

    const expenseCategoryIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscription':
                return tv;
            case 'takeaway':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return '';
        }
    }
    return (
        <IncomeStyled indicator={indicatorcolor}>
            <div className="icon">
                {type === 'expense' ? expenseCategoryIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{rupee} {amount}</p>
                        <p>{calendar} {dateFormat(date)}</p>
                        <p>{comment} {description}</p>
                    </div>
                    <div className="btn-con">
                        <Button iColor={'#fff'} hColor={'var(--color-green)'}
                            icon={trash} bpadding={'1rem'} bradius={'50%'} bg={'var(--primary-color)'} color={'#fff'}
                            onClick={() => deleteItem(id)}
                        />

                    </div>
                </div>
            </div>
        </IncomeStyled>
    )
}
const IncomeStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #fff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100 %;
    color: #222260;
    .icon{
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
        i{
        font-size: 2.6rem;
    }
}

    .content{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .2rem
      
        h5{
        font-size: 1.3rem;
        padding-left: 2rem;
        position: relative;            
            &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 50 %;
            transform: translateY(-50 %);
            width: .8rem;
            height: .8rem;
            border-radius: 50 %;
            background: ${props => props.indicatorcolor}
        }
    }

        .inner-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
            .text{
            display: flex;
            align-items: center;
            gap: 1.5rem;
                p{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--primary-color);
                opacity: 0.8;
                font-size: 15px;
            }
        }
    }
}


`
export default IncomeItems