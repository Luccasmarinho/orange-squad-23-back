const AppError = require("../../errors/app-errors");
const prismaClient = require("../../prisma/prisma-client");

const createProjectService = async (userId, data, projectCover) => {
  const { tags } = data;

  const checkIfProjectExist = await prismaClient.projects.findFirst({
    where: {
      tags,
    },
  });

  if (checkIfProjectExist) {
    throw new AppError("A project with this tag already exist");
  }

  const newProject = await prismaClient.projects.create({
    data: {
      userId: userId,
      title: data.title,
      tags: data.tags,
      link: data.link,
      description: data.description,
      projectCover: `/tmp/${projectCover}`,
    },
  });

  return newProject;
};

module.exports = createProjectService;
