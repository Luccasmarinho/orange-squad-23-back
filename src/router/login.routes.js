const express = require("express");
const loginRouter = express.Router();

const controller = require("../controllers/user/auth-user-controller");
const validateBody = require("../middlewares/validate-body");
const loginSchema = require("../schemas/user/schema-login");
const tokenAutentication = require("../middlewares/token-autenticate");

loginRouter.post(
    "/login",
     tokenAutentication, 
     validateBody(loginSchema.login), 
     controller.login
);

module.exports = loginRouter;
