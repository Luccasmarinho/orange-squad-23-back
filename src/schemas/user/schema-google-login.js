const joi = require("joi");

const loginUserByGoogleSchema = {
  googleLogin: joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    userImage: joi.string(),
  }),
};

module.exports = loginUserByGoogleSchema;
