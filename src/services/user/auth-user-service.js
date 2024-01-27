const prismaClient = require("../../prisma/prisma-client");
const { compare } = require("bcryptjs");
const AppError = require("../../errors/app-errors");
const jwt = require("jsonwebtoken");

const loginService = async (data) => {
  const { email, password } = data;

  const checkIfUserExist = await prismaClient.users.findFirst({
    where: {
      email,
    },
  });

  if (!checkIfUserExist) {
    throw new AppError.UnauthorizedError(
      "A user with this email does not exist"
    );
  } else {
    const truePassword = await compare(password, checkIfUserExist.password);

    if (!truePassword) {
      throw new AppError.UnauthorizedError("Incorrect email or password");
    }
  }

  const payload = { id: checkIfUserExist.id };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });

  delete checkIfUserExist.password;

  const userLogin = {
    token,
  };

  return userLogin;
};

module.exports = loginService;
