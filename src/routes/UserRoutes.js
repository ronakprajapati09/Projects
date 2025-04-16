const routes = require("express").Router()
const usercontroller = require("../controllers/UserController")
routes.post("/user", usercontroller.addUser)
routes.get("/users",usercontroller.getUsers)
routes.post("/signup", usercontroller.signup)
routes.delete("/users/:id", usercontroller.deleteUser)
routes.get("/users/:id", usercontroller.getUserById)
routes.post("/user/login",usercontroller.loginUser)

routes.post("/user/forgotpassword", usercontroller.forgotPassword)
routes.post("/user/resetpassword", usercontroller.resetpassword)

// routes.post("/forgot-password", usercontroller.forgotPassword);
// routes.post("/reset-password/:token", usercontroller.resetPassword);

// routes.post("/user/forgot-password", usercontroller.forgotPassword);
// routes.post("/user/reset-password/:token", usercontroller.resetPassword);


module.exports = routes