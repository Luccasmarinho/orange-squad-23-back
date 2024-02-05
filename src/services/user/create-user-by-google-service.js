const AppError = require("../../errors/app-errors");
const prismaClient = require("../../prisma/prisma-client");

const createUserByGoogleService = async (data, userImage) => {
  const checkIfUserExist = await prismaClient.users.findFirst({
    where: {
      email: data.email,
    },
  });

  if (checkIfUserExist) {
    throw new AppError.AppError("A user with this email already exist");
  }

  const createUser = await prismaClient.users.create({
    data: {
      name: data.name,
      email: data.email,
      userImage: `/tmp/${userImage}`,
    },
  });

  return createUser;
};

module.exports = createUserByGoogleService;
