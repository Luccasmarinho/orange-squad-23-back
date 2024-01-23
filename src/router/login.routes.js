const express = require("express");
const router = express.Router();

const controller = require("../controllers/user/auth-user-controller");
const validateBody = require("../middlewares/validate-body");
const schema = require("../schemas/schema-login");

router.post(
    "/login", 
    validateBody(schema.login),
    controller.login,
);

module.exports = router