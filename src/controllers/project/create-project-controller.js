const AppError = require("../../errors/app-errors");
const createProjectService = require("../../services/project/create-project-service");

const createProjectController = async (req, res) => {
  const userId = req.userId;

  if (!req.file) {
    throw new AppError.AppError("Error no image");
  } else {
    const { originalname, filename: projectCover } = req.file;

    try {
      await createProjectService(userId, req.body, projectCover);
      return res.status(201).send({ msg: "Project created sucessfully" });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

module.exports = createProjectController;
