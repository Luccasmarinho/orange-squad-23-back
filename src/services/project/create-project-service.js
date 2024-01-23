const prismaClient = require("../../prisma/prisma-client");

const createProjectService = async (data) => {
  const newProject = await prismaClient.projects.create({
    data,
  });

  return newProject;
};

module.exports = createProjectService;
