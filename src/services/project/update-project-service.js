const AppError = require("../../errors/app-errors");
const prismaClient = require("../../prisma/prisma-client");

const updateProjectService = async (userId, id, data, projectCover) => {
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
    data: {
      title: data.title,
      tags: data.tags,
      link: data.link,
      description: data.description,
      projectCover: `/tmp/${projectCover}`,
    },
    select: {
      id: true,
      title: true,
      tags: true,
      link: true,
      description: true,
      projectCover: `/tmp/${projectCover}`,
    },
  });

  return updateProject;
};

module.exports = updateProjectService;
