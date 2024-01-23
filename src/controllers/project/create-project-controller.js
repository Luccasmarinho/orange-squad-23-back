const createProjectService = require("../../services/project/create-project-service");
const { messageJson } = require("../../utils/utils");

const createProjectController = async (req, res) => {
  try {
    const newProject = await createProjectService(req.body);
    messageJson(res, 201, newProject)
  } catch (error) {
    messageJson(res, 400, error)
  }
};

module.exports = createProjectController;
