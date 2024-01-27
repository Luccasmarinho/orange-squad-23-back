const AppError = require("../../errors/app-errors");
const prismaClient = require("../../prisma/prisma-client");

const updateProjectService = async (userId, id, data) => {
  const checkIfProjectExist = await prismaClient.projects.findFirst({
    where: {
      id,
      userId: userId,
    },
  });

  if (!checkIfProjectExist) {
    throw new AppError.AppError("Project not found to update");
  }

  const updateProject = await prismaClient.projects.update({
    where: {
      id,
      userId: userId,
    },
    data,
    select: {
      id: true,
      title: true,
      tags: true,
      link: true,
      description: true,
      projectCover: `/tmp/${data.projectCover}`,
    },
  });

  return updateProject;
};

module.exports = updateProjectService;
