
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense');

const router = require('express').Router();

router.post('/add-income', addIncome)
      .get('/get-incomes', getIncomes)
      .delete('/delete-incomes/:id', deleteIncome)
      .post('/add-expense', addExpense)
      .get('/get-expenses', getExpenses)
      .delete('/delete-expenses/:id', deleteExpense)

module.exports = router