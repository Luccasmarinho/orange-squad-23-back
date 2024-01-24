const loginService = require("../../services/user/auth-user-service");

const controller = {
    login: async (req, res) => {
        try {
            const login = await loginService(req.body)
            res.status(400).send(login);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
};

module.exports = controller