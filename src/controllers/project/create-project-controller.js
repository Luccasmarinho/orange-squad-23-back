const createProjectService = require("../../services/project/create-project-service");

const createProjectController = async (req, res) => {
  const userId = req.userId;

  try {
    const newProject = await createProjectService(userId, req.body);
    res.status(201).send(newProject);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = createProjectController;
