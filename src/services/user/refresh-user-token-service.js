const jwt = require("jsonwebtoken");

const refreshUserTokenService = async (refreshToken) => {
  const decode = await jwt.verify(refreshToken, process.env.SECRET_KEY);
  const userId = decode.id;
  const newToken = jwt.sign({ id: userId }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });

  return newToken;
};

module.exports = refreshUserTokenService;
