const express = require("express");
const userRouter = express.Router();

const validateBody = require("../middlewares/validate-body");
const createUserSchema = require("../schemas/user/schema-user");
const createUserController = require("../controllers/user/create-user-controller");
const listUserDataController = require("../controllers/user/user-data-controller");
const tokenAutentication = require("../middlewares/token-autenticate");
const uploadUserImageController = require("../controllers/user/user-image-controller");
const multer = require("multer");
const uploadConfig = require("../config/multer");

const upload = multer(uploadConfig);

userRouter.post(
  "/register",
  validateBody(createUserSchema.user),
  createUserController
);

userRouter.get("/userData", tokenAutentication, listUserDataController);

userRouter.put(
  "/uploadImage",
  tokenAutentication,
  upload.single("file"),
  uploadUserImageController
);

module.exports = userRouter;
