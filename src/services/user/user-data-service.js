const prismaClient = require("../../prisma/prisma-client");

const listUserDataService = async (userId) => {
  const userData = await prismaClient.users.findFirst({
    where: {
      id: userId,
    },
    select: {
      name: true,
      userImage: true,
    },
  });

  return userData;
};

module.exports = listUserDataService;
