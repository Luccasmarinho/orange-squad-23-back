const deleteProjectService = require("../../services/project/remove-project-service");

const deleteProjectController = async (req, res) => {
  const userId = req.userId;

  try {
    const deletedProject = await deleteProjectService(
      userId,
      Number(req.params.id)
    );
    res.status(204).send(deletedProject);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = deleteProjectController;
