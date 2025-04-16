const routes = require('express').Router()
const incomeController = require('../controllers/IncomeController')

routes.post('/addincome',incomeController.addIncome)
routes.get('/getincome',incomeController.getIncome)
routes.get('/getincomeByUserId/:userId',incomeController.getAllIncomeByUserId)
module.exports = routes;