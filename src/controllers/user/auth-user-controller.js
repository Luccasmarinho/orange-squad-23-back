const { messageJson } = require("../../utils/utils");

const controller = {
    login: async (req, res) => {
        try {
            messageJson(res, 200, "ok")
        } catch (error) {
            messageJson(res, 500, "Erro interno do servidor")
        }
    }
};

module.exports = controller