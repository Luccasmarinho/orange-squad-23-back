const joi = require("joi");

const createUserSchema = {
  user: joi.object({
    name: joi.string().required(),
    secondName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(50).required(),
  }),
};

module.exports = createUserSchema;
