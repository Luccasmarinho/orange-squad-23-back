const { messageJson } = require("../utils/utils");
const jwt = require("jsonwebtoken");

const tokenAutentication = async (req, res, next) => {
    const { headers: { authorization } } = req;

    if(!authorization) return messageJson(res, 401, "Unauthorized");

    const token = authorization.split(" ")[1];
    try {
        const { id } = await jwt.verify(token, process.env.SECRET_KEY);

        req.userId = id

        next()
    } catch (error) {
        if (error.message == "invalid signature") {
            return messageJson(res, 401, "Unauthorized");
        } else {
            return messageJson(res, 401, "Unauthorized");
        };
    };
};

module.exports = tokenAutentication