const joi = require("joi");

const creteProjectSchema = {
  project: joi.object({
    title: joi.string().required().messages({
      "string.title": `O campo titulo não pode ser vazio`,
      "any.required": `O campo titulo é obrigatório`,
    }),
    tags: joi.string().required().messages({
      "string.title": `O campo tags não pode ser vazio`,
      "any.required": `O campo tags é obrigatório`,
    }),
    link: joi.string().required().messages({
      "string.title": `O campo link não pode ser vazio`,
      "any.required": `O campo link é obrigatório`,
    }),
    description: joi.string().required().messages({
      "string.title": `O campo description não pode ser vazio`,
      "any.required": `O campo description é obrigatório`,
    }),
    projectCover: joi.string().required().messages({
      "string.title": `O campo projectCover não pode ser vazio`,
      "any.required": `O campo projectCover é obrigatório`,
    }),
  }),
};
