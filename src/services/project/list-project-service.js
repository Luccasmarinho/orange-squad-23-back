const prismaClient = require("../../prisma/prisma-client");

const listAllProjectsService = async () => {
  const allProjects = await prismaClient.projects.findMany({
    select: {
      id: true,
      title: true,
      tags: true,
      link: true,
      description: true,
      projectCover: true,
    },
  });

  return allProjects;
};

module.exports = listAllProjectsService;
