const express = require("express");
const loginRouter = express.Router();

const validateBody = require("../middlewares/validate-body");
const loginSchema = require("../schemas/user/schema-login");
const loginController = require("../controllers/user/auth-user-controller");
const createUserByGoogleController = require("../controllers/user/create-user-by-google-controller");
const loginUserByGoogleSchema = require("../schemas/user/schema-google-login");
const uploadConfig = require("../config/multer");
const multer = require("multer");
const upload = multer(uploadConfig);

loginRouter.post("/login", validateBody(loginSchema.login), loginController);

loginRouter.post(
  "/googleLogin",
  upload.single("file"),
  validateBody(loginUserByGoogleSchema.googleLogin),
  createUserByGoogleController
);

module.exports = loginRouter;
