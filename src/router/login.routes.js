const express = require("express");
const loginRouter = express.Router();

const controller = require("../controllers/user/auth-user-controller");
const validateBody = require("../middlewares/validate-body");
const loginSchema = require("../schemas/user/schema-login");

loginRouter.post("/login", validateBody(loginSchema.login), controller.login);

module.exports = loginRouter;
