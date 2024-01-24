const { messageJson } = require("../../utils/utils");
const createUserService = require("../../services/user/create-user-service");

const controller = {
    createUser: async (req, res) => {
        try {
            const createUser = await createUserService(req.body)
            return messageJson(res, 200, createUser)
        } catch (error) {
            console.log(error)
            return messageJson(res, 500, "Erro interno do servidor")
        }
    }
};

module.exports = controller