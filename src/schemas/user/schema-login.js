const joi = require("joi");

const loginSchema = {
  login: joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(50).required(),
  }),
};

module.exports = loginSchema;
