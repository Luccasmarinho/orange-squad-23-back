const updateProjectService = require("../../services/project/update-project-service");

const updateProjectController = async (req, res) => {
  const userId = req.userId;

  try {
    const updatedProject = await updateProjectService(
      userId,
      Number(req.params.id),
      req.body
    );
    res.status(200).send(updatedProject);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = updateProjectController;
