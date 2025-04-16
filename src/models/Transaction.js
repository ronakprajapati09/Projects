const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    category: { type: String, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    period: { type: Date, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    imageUrl: { type: String },  // Field to store Cloudinary image URL
}, { timestamps: true });

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
