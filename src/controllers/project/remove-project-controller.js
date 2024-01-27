const deleteProjectService = require("../../services/project/remove-project-service");

const deleteProjectController = async (req, res) => {
  const userId = req.userId;

  try {
    const deletedProject = await deleteProjectService(
      userId,
      Number(req.params.id)
    );
    return res.status(204).send(deletedProject);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = deleteProjectController;
