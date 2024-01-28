const prismaClient = require("../../prisma/prisma-client");

const uploadUserImageService = async (userId, userImage) => {
  const uploadedImage = await prismaClient.users.update({
    where: {
      id: userId,
    },
    data: {
      userImage: userImage ? `/tmp/${userImage}` : null,
    },
  });

  return uploadedImage;
};

module.exports = uploadUserImageService;
