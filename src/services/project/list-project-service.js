const prismaClient = require("../../prisma/prisma-client");

const listAllUserProjectsService = async (userId) => {
  const allUserProjects = await prismaClient.projects.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      title: true,
      tags: true,
      link: true,
      description: true,
      projectCover: true,
    },
  });

  return allUserProjects;
};

module.exports = listAllUserProjectsService;
