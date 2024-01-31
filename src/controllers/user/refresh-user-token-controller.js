const refreshUserTokenService = require("../../services/user/refresh-user-token-service");

const refreshUserTokenController = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    const newToken = await refreshUserTokenService(refreshToken);
    return res.status(200).send({ newToken });
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = refreshUserTokenController;
