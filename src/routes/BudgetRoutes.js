const routes = require('express').Router();
const budgetController = require('../controllers/BudgetController')

routes.post('/addbudget',budgetController.addBudget)
routes.get('/getbudget',budgetController.getBudget)
// routes.post('/addWithFile', budgetController.addBudgetWithFile)
routes.get('/getbudgetUserId/:userId' ,budgetController.getAllBudgetByUserId )

module.exports = routes;