const AppError = require("../../errors/app-errors");
const prismaClient = require("../../prisma/prisma-client");

const updateProjectService = async (id, data) => {
  const checkIfProjectExist = await prismaClient.projects.findFirst({
    where: {
      id,
    },
  });

  if (!checkIfProjectExist) {
    throw new AppError("Project not found to update");
  }

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
