const prismaClient = require("../../prisma/prisma-client");
const { compare } = require("bcryptjs");
const AppError = require("../../errors/app-errors");
const jwt = require("jsonwebtoken");

const loginService = async (data) => {
  const { email, password } = data;

  const checkEmailExist = await prismaClient.users.findFirst({
    where: {
      email,
    },
  });

  if (!checkEmailExist) {
    throw new AppError("A user with this email does not exist");
  } else {
    const truePassword = await compare(password, checkEmailExist.password);

    if(!truePassword) {
        throw new AppError("Incorret password");
    }
  };

  const payload = { id: checkEmailExist.id }
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });

  delete checkEmailExist.password

  const userLogin = {
    user: checkEmailExist,
    token
  }

  return userLogin
};

module.exports = loginService;
