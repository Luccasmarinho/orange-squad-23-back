const listAllProjectsService = require("../../services/project/list-project-service");

const listAllProjectsController = async (req, res) => {
  try {
    const listAllProjects = await listAllProjectsService();
    res.status(200).send(listAllProjects);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = listAllProjectsController;
