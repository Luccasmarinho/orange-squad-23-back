const createProjectService = require("../../services/project/create-project-service");

const createProjectController = async (req, res) => {
  try {
    const newProject = await createProjectService(req.body);
    res.status(201).send(newProject);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = createProjectController;
