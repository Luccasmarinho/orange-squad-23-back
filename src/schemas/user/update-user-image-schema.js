const joi = require("joi");

const updateUserImageSchema = {
  updateUserImage: joi.object({
    userImage: joi.string(),
  }),
};

module.exports = updateUserImageSchema;
