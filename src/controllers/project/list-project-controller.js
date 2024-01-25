const listAllUserProjectsService = require("../../services/project/list-project-service");

const listAllUserProjectsController = async (req, res) => {
  const userId = req.userId;

  try {
    const listAllUserProjects = await listAllUserProjectsService(userId);
    res.status(200).send(listAllUserProjects);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = listAllUserProjectsController;
