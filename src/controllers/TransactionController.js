// const Transaction = require("../models/Transaction");
// const cloudinary = require("cloudinary").v2;
// const multer = require("multer");

// // Configure Cloudinary
// cloudinary.config({
//     cloud_name: "dq2bbyfd1",
//     api_key: "363254229495726",
//     api_secret: "deJIU1bL-zPyoyndY0KXksh4FyM"
// });

// // Multer setup for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // Add Transaction with Image Upload
// const addTransactionWithFile = async (req, res) => {
//     try {
//         const { category, type, amount, period, userId } = req.body;

//         if (!req.file) {
//             return res.status(400).json({ message: "Missing required parameter - file" });
//         }

//         // Upload image to Cloudinary
//         const result = await cloudinary.uploader.upload_stream(
//             { resource_type: "image" },
//             async (error, uploadedFile) => {
//                 if (error) {
//                     return res.status(500).json({ message: "Cloudinary upload failed", error });
//                 }

//                 // Create transaction in MongoDB
//                 const transaction = new Transaction({
//                     category,
//                     type,
//                     amount,
//                     period,
//                     userId,
//                     imageUrl: uploadedFile.secure_url, // Store the Cloudinary URL
//                 });

//                 await transaction.save();
//                 res.status(201).json({ message: "Transaction added successfully", transaction });
//             }
//         ).end(req.file.buffer);

//     } catch (error) {
//         res.status(500).json({ message: "Server error", error });
//     }
// };

// // Get all Transactions
// const getTransactions = async (req, res) => {
//     try {
//         const transactions = await Transaction.find();
//         res.json(transactions);
//     } catch (error) {
//         res.status(500).json({ message: "Failed to fetch transactions", error });
//     }
// };

// const getTransactionsById = async (req, res) => {
//     try{
//         const getTransactionsById = await Transaction.findById({id : req.params.id})
//         res.status(201).json({
//             message : "Transactions fetched successfully",
//             data : getTransactionsById
//         })
//     }
//     catch(err) {
//         res.status(500).json({ message : err.message})
//     }
// }

// module.exports = { addTransactionWithFile, getTransactions, upload, getTransactionsById };


const transactioModel = require('../models/TransactionModel');



const multer = require('multer');

const path = require('path');

const cloudinaryUtil = require('../utils/CloudinaryUtil')





const storage = multer.diskStorage({

    destination: "./uploads",

    filename: function (req, file, cb) {

        cb(null, file.originalname);

    },

});



const upload = multer({

    storage: storage,

    //fileFilter:

}).single("image");



const addtransaction = async (req, res) => {

    try {

        const savedtransaction = await transactioModel.create(req.body);

        res.status(201).json({

            message: "transaction added successfully",

            data: savedtransaction

        });

    } catch (err) {

        res.status(500).json({ message: err });

    }

};



const gettransaction = async (req, res) => {

    try {

        const transaction = await transactioModel.find();

        res.status(200).json({

            message: "All transaction",

            data: transaction,

        });

    } catch (err) {

        res.status(500).json({ message: err });

    }

};



const 

getAlltransactionByUserId = async (req, res) => {

    try {

        const transactions = await transactioModel

            .find({ userId: req.params.userId })



            // .populate("stateId cityId areaId userId");

        if (transactions.length === 0) {

            res.status(404).json({ message: "No  transactions found", data:[] });

        } else {

            res.status(200).json({

                message: "transactions found successfully",

                data: transactions,

            });

        }

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};



const addTransactionWithFile = async (req, res) => {

    upload(req, res, async (err) => {

        if (err) {

            console.log(err);

            res.status(500).json({

                message: err.message,

            });

        } else {

            const cloundinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);

            console.log("cr.....",cloundinaryResponse);

            console.log(req.body);

            //store data in database

            req.body.imageURL = cloundinaryResponse
            console.log("body.....",req.body)

            const savedreceipt = await transactioModel.create(req.body);

            res.status(200).json({

                message: "receipt  saved successfully",

                data: savedreceipt

            });

        }

    });

};



const updateTransaction = async (req, res) => {

  

    try {

        const updatedTransaction = await transactioModel.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.status(200).json({

            message: "Transaction updated successfully",

            data: updatedTransaction,

        });

    } catch (err) {

        res.status(500).json({

            message: "error while update Transaction",

            err: err,

        });

    }

};





// Export the functions

module.exports = {

    addtransaction,

    gettransaction,

    addTransactionWithFile,

    getAlltransactionByUserId,

    updateTransaction

}