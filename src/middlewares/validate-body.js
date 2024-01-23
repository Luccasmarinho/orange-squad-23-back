const { messageJson } = require("../utils/utils");

const validateBody = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body)
        return next()
    } catch (error) {
        return messageJson(res, 400, error.message);
    }
};

module.exports = validateBody
