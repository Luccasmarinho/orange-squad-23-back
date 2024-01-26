const AppError = require("../../errors/app-errors");
const createProjectService = require("../../services/project/create-project-service");

const createProjectController = async (req, res) => {
  const userId = req.userId;

  if (!req.file) {
    throw new AppError("Error no image");
  } else {
    const { originalname, filename: projectCover } = req.file;

    try {
      const newProject = await createProjectService(
        userId,
        req.body,
        projectCover
      );
      res.status(201).send(newProject);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};

module.exports = createProjectController;
