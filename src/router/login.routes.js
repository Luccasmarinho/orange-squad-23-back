const express = require("express");
const loginRouter = express.Router();

const validateBody = require("../middlewares/validate-body");
const loginSchema = require("../schemas/user/schema-login");
const loginController = require("../controllers/user/auth-user-controller");

loginRouter.post("/login", validateBody(loginSchema.login), loginController);

module.exports = loginRouter;
