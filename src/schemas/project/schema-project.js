const joi = require("joi");

const createProjectSchema = {
  createProject: joi.object({
    title: joi.string().required(),
    tags: joi.string().required(),
    link: joi.string().required(),
    description: joi.string().required(),
    projectCover: joi.string(),
  }),
};

module.exports = createProjectSchema;
