const joi = require("joi");

const updateProjectSchema = {
  updateProject: joi.object({
    userId: joi.number().required(),
    title: joi.string().required(),
    tags: joi.string().required(),
    link: joi.string().required(),
    description: joi.string().required(),
    projectCover: joi.string().required(),
  }),
};

module.exports = updateProjectSchema;
