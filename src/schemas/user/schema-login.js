const joi = require("joi");

const loginSchema = {
  login: joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
};

module.exports = loginSchema;
