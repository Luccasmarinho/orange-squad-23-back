const express = require("express");
const userRouter = express.Router();

const validateBody = require("../middlewares/validate-body");
const createUserSchema = require("../schemas/user/schema-user");
const createUserController = require("../controllers/user/create-user-controller");

userRouter.post(
  "/register",
  validateBody(createUserSchema.user),
  createUserController
);

module.exports = userRouter;
