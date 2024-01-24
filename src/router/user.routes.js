const express = require("express");
const routerUser = express.Router();

const controller = require("../controllers/user/create-user-controller");
const validateBody = require("../middlewares/validate-body");
const schema = require("../schemas/schema-user");

routerUser.post(
    "/registers",
    validateBody(schema.user),
    controller.createUser,
)

module.exports = routerUser