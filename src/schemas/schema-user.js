const joi = require("joi");

const schema = {
    user: joi.object({
        name: joi.string().required().messages({
            "string.empty": `O campo nome não pode estar vazio`,
            "any.required": `O campo nome é obrigatório`,
        }),
        secondName: joi.string().required().messages({
            "string.empty": `O campo sobrenome não pode estar vazio`,
            "any.required": `O campo sobrenome é obrigatório`,
        }),
        email: joi.string().email().required().messages({
            "string.empty": `O campo email não pode estar vazio`,
            "any.required": `O campo email é obrigatório`,
            "string.email": `Digite um email válido`,
        }),
        password: joi.string().min(8).max(50).required().messages({
            "string.empty": `O campo senha não pode estar vazio`,
            "any.required": `O campo senha é obrigatório`,
            "string.min": `O campo senha precisa ter no mínimo 8 caracteres`,
            "string.max": `O campo senha precisa ter no máximo`,
        })
    })
};

module.exports = schema	