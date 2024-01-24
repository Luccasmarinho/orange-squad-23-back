const express = require("express");
const router = express.Router();

const controller = require("../controllers/user/auth-user-controller");
const validateBody = require("../middlewares/validate-body");
const loginSchema = require("../schemas/user/schema-login");

router.post("/login", validateBody(loginSchema.login), controller.login);

module.exports = router;
