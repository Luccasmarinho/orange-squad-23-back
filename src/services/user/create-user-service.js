const AppError = require("../../errors/app-errors");
const prismaClient = require("../../prisma/prisma-client");
const { hash } = require("bcryptjs");

const createUserService = async (data) => {
  const { password, secondName, email, name, userImage } = data;

  const checkIfUserExist = await prismaClient.users.findFirst({
    where: {
      email,
    },
  });

  if (checkIfUserExist) {
    throw new AppError.AppError("A user with this email already exist");
  }

  const passwordEncrypted = await hash(password, 10);

  const createUser = await prismaClient.users.create({
    data: {
      password: passwordEncrypted,
      secondName,
      email,
      name,
      userImage,
    },
  });

  return createUser;
};

module.exports = createUserService;
