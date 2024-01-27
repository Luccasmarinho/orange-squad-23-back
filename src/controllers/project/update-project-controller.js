const { AppError } = require("../../errors/app-errors");
const updateProjectService = require("../../services/project/update-project-service");

const updateProjectController = async (req, res) => {
  const userId = req.userId;

  if (!req.file) {
    throw new AppError.AppError("Error no image");
  } else {
    try {
      await updateProjectService(userId, Number(req.params.id), req.body);
      return res.status(200).send({ msg: "Project updated sucessfully" });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

module.exports = updateProjectController;
