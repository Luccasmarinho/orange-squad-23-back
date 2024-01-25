const prismaClient = require("../../prisma/prisma-client");

const deleteProjectService = async (userId, id) => {
  const deletedProject = await prismaClient.projects.delete({
    where: {
      id,
      userId: userId,
    },
  });

  return deletedProject;
};

module.exports = deleteProjectService;
