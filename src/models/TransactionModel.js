const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const transactionSchema = new Schema({



    category: {

        type: String,

        required: true

    },

    type: {
        type: String,

        required: true
    },

    amount: {

        type: Number,

        required: true

    },

    period: {

        type: Date,

        required: true

    },

    userId: {

        type: Schema.Types.ObjectId,

        ref: "user",

    },
    imageURL: {
        type: String
    }



},

    {

        timestamps: true

    }

)



module.exports = mongoose.model('transaction', transactionSchema)