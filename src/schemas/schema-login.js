const joi = require("joi");

const schema = {
    login: joi.object({
        email: joi.string().email().required().messages({
            "string.empty": `O campo email não pode estar vazio`,
            "string.email": `Digite um email válido`,
            "any.required": `O campo email é obrigatório`,
        }),
        password: joi.string().required().messages({
            "string.empty": `O campo senha não pode estar vazio`,
            "string.min": `O campo senha precisa ter no mínimo 8 caracteres`,
            "string.max": `O campo senha precisa ter no máximo`,
        }),
    }),
};

module.exports = schema	