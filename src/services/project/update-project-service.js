const prismaClient = require("../../prisma/prisma-client");

const updateProjectService = async (id, data) => {
  const updateProject = await prismaClient.projects.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      title: true,
      tags: true,
      link: true,
      description: true,
      projectCover: true,
    },
  });

  return updateProject;
};

module.exports = updateProjectService;
