const express = require("express");
const userRouter = express.Router();

const validateBody = require("../middlewares/validate-body");
const createUserSchema = require("../schemas/user/schema-user");
const createUserController = require("../controllers/user/create-user-controller");
const listUserDataController = require("../controllers/user/user-data-controller");
const tokenAutentication = require("../middlewares/token-autenticate");

userRouter.post(
  "/register",
  validateBody(createUserSchema.user),
  createUserController
);

userRouter.get("/userData", tokenAutentication, listUserDataController);

module.exports = userRouter;
