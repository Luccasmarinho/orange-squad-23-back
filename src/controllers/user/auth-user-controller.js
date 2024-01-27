const loginService = require("../../services/user/auth-user-service");

const loginController = async (req, res) => {
  try {
    const login = await loginService(req.body);
    return res.status(200).send(login);
  } catch (error) {
    return res.status(401).send(error);
  }
};
module.exports = loginController;
