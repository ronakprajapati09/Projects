// // // const routes = require('express').Router();
//  const transactionController = require("../controllers/TransactionController");

// // // // routes.post('/addtransaction', transactionController.addtransaction);
// // // routes.post('/addtransaction', transactionController.addtransaction);
// // // routes.get('/gettransaction', transactionController.gettransaction);
// // // // routes.post('addtransactionWithfile', transactionController.addTransactionWithFile);
// // // routes.post('/addtransactionWithfile', transactionController.addTransactionWithFile);


// // // module.exports = routes;


// // const routes = require('express').Router();
// // const transactionController = require("../controllers/TransactionController");

// // routes.post('/addtransaction', transactionController.addtransaction);
// // routes.get('/gettransaction', transactionController.gettransaction);
// // routes.post('/addtransactionWithfile', transactionController.addTransactionWithFile); // Fixed missing "/"
// // // router.get("/gettransactionbyuser/:userId", TransactionController.getTransactionByUser);

// // module.exports = routes;

// const express = require("express");
// const { addTransactionWithFile, getTransactions, upload } = require("../controllers/TransactionController");

// const router = express.Router();

// router.get("/gettransaction", getTransactions);
// router.get("/gettransaction/:id", getTransactions);
// router.post("/addtransactionWithfile", upload.single("image"), addTransactionWithFile);
// router.get("/gettransactiobyid", transactionController.getTransactionsById)

// module.exports = router;


const routes = require('express').Router();
const transactionController = require("../controllers/TransactionController");

routes.post('/addtransaction', transactionController.addtransaction);
routes.get('/gettransaction', transactionController.gettransaction)
routes.get('/gettransactionbyuserid/:userId', transactionController.getAlltransactionByUserId)
routes.post('/addtransactionwithfile', transactionController.addTransactionWithFile)
routes.put("/updatetransaction/:id", transactionController.updateTransaction)

module.exports = routes;