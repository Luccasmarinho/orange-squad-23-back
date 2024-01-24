const prismaClient = require("../../prisma/prisma-client");

const deleteProjectService = async (id) => {
  const deletedProject = await prismaClient.projects.delete({
    where: {
      id,
    },
  });

  return deletedProject;
};

module.exports = deleteProjectService;
