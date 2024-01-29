const AppError = require("../../errors/app-errors");
const prismaClient = require("../../prisma/prisma-client");

const uploadUserImageService = async (userId, userImage) => {
  const checkIfUserExist = await prismaClient.users.findFirst({
    where: {
      id: userId,
    },
  });

  if (!checkIfUserExist) {
    throw new AppError.AppError("User not found");
  }

  const uploadedImage = await prismaClient.users.update({
    where: {
      id: userId,
    },
    data: {
      userImage: `/tmp/${userImage}`,
    },
  });

  return uploadedImage;
};

module.exports = uploadUserImageService;
