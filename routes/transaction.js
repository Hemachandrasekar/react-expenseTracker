const {  addExpense, deleteExpense, getExpenses } = require('../controllers/expense')
const { addIncome, deleteIncome, getIncome } = require('../controllers/income')

const router = require('express').Router()

router.post('/add-income',addIncome)
        .get('/get-incomes',getIncome)
        .delete('/delete-income/:id',deleteIncome)
        .post('/add-expense',addExpense)
        .get('/get-expenses',getExpenses)
        .delete('/delete-expense/:id',deleteExpense)

module.exports = router