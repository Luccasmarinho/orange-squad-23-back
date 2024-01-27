const loginService = require("../../services/user/auth-user-service");

const loginController = async (req, res) => {
  try {
    const login = await loginService(req.body);
    res.status(200).send(login);
  } catch (error) {
    res.status(401).send(error);
  }
};
module.exports = loginController;
