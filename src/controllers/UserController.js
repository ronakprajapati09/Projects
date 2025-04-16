const usermodel = require("../models/UserModel")
const bcrypt = require("bcrypt");
const mailUtil = require("../utils/MailUtil");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken")

const secret = "ak  "

const loginUser = async (req, res) => {


    const email = req.body.email;
    const password = req.body.password;

    //const foundUserFromEmail = userModel.findOne({email:req.body.email})

    const foundUserFromEmail = await usermodel.findOne({ email: email }).populate("roleId")
    console.log(foundUserFromEmail);

    //check if email is exist or not//

    if (foundUserFromEmail != null) {

        // console.log(password)
        // console.log(foundUserFromEmail.password)



        const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password);
        // console.log(isMatch)
        if (isMatch != null) {
            res.status(200).json({
                message: "login sucessful",
                data: foundUserFromEmail,
            });
        }
        else {
            res.status(404).json({
                message: "invalid credntials",
            });
        }
    } else {
        res.status(404).json({
            message: "email not found",
        });
    }
};

const signup = async (req, res) => {
    //try catch if else...

    try {
        ////password encrupt..
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hashedPassword;
        console.log(req.body.password);

        const createdUser = await usermodel.create(req.body)
        //mailpart
        // const mailResponse = await mailUtil.sendingMail(createdUser.email, "welcome to eadvertisement", "this is welcome mail")
        await mailUtil.sendingMail(createdUser.email, "welcome to budget buddy", "this is welcome mail")
        res.status(201).json({
            message: "user created",
            data: createdUser
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "error",
            data: "err",
        })
    }
}

const addUser = async (req, res) => {

    const adduserr = await usermodel.create(req.body)

    res.json({
        message: "user fetched successfully",
        data: adduserr,
    })
}

const getUsers = async (req, res) => {
    const getUser = await usermodel.find().populate("roleId")

    res.json({
        message: "user fetched successfully.....",
        data: getUser,
    })
}

const deleteUser = async (req, res) => {
    const userDeleted = await usermodel.findByIdAndDelete(req.params.id)

    res.json({
        message: "user deleted successfully..",
        data: userDeleted
    })
}

const getUserById = async (req, res) => {
    const getUserId = await usermodel.findById(req.params.id)

    res.json({
        message: "get user successfully..",
        data: getUserId
    })
}

const forgotPassword = async (req, res) => {

    const email = req.body.email;
    const foundUser = await UserModel.findOne({ email: email })

    if (foundUser) {

        const token = jwt.sign(foundUser.toObject(), secret)
        console.log(token);
        const url = `http://localhost:5173/resetpassword/${token}`;
        const mailContent = `<html>
                                <a href ="${url}">reset password</a>
                             </html>`;

        await mailUtil.sendingMail(foundUser.email, "reset password", mailContent)
        res.json({
            message: "reset password link sent to mail.",
        });

    } else {
        res.json({
            message: "user not found register first..",
        })
    }


}

const resetpassword = async (req, res) => {
    const token = req.body.token; //decode --> email | id
    const newPassword = req.body.password;

    const userFromToken = jwt.verify(token, secret);
    //object -->email,id..
    //password encrypt...
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);

    const updatedUser = await UserModel.findByIdAndUpdate(userFromToken._id, {
        password: hashedPassword,
    });
    res.json({
        message: "password updated successfully..",
    });
};

module.exports = {
    addUser, getUsers, deleteUser, getUserById, signup, loginUser , forgotPassword , resetpassword
}


// jvsyfufefyi