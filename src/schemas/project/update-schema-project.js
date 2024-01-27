const joi = require("joi");

const updateProjectSchema = {
  updateProject: joi.object({
    title: joi.string().required(),
    tags: joi.string().required(),
    link: joi.string().required(),
    description: joi.string().required(),
    projectCover: joi.string(),
  }),
};

module.exports = updateProjectSchema;
