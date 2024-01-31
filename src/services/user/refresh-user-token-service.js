const jwt = require("jsonwebtoken");

const refreshUserTokenService = async (refreshToken) => {
  const { id } = await jwt.verify(refreshToken, process.env.SECRET_KEY);
  const newToken = jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });

  return newToken;
};

module.exports = refreshUserTokenService;
