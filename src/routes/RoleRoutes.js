const routes = require("express").Router()
const roleController = require("../controllers/RoleController")
routes.get("/roles", roleController.getAllRole)
routes.post("/role",roleController.addRole)
routes.delete("/role/:id",roleController.deletedRole)
routes.get("role/:id",roleController.getRoleById)
module.exports = routes