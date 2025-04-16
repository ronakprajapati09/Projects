const routes = require('express').Router()
const expenseController = require('../controllers/ExpenseController')

routes.post('/addexpense',expenseController.addExpense)
routes.get('/getexpense',expenseController.getExpense)
routes.post('/addWithfile', expenseController.addExpenseWithFile);
routes.get('/getexpenseUserId/:userId',expenseController.getAllExpenseByUserId)

module.exports = routes;