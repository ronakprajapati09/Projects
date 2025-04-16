const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({

    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles"
    },
    password:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    // resetPasswordToken:{

    // type:String,
    // },

// resetPasswordExpires:{
// type:Date,
// },

    mobile:{
        type:Number,
        unique:true
    }
})

module.exports = mongoose.model("users",UserSchema)