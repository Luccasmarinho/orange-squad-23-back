const express = require("express");
const userRouter = express.Router();

const controller = require("../controllers/user/create-user-controller");
const validateBody = require("../middlewares/validate-body");
const createUserSchema = require("../schemas/user/schema-user");

userRouter.post(
  "/register",
  validateBody(createUserSchema.user),
  controller.createUser
);

module.exports = userRouter;
