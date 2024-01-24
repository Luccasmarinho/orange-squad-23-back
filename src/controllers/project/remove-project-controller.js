const deleteProjectService = require("../../services/project/remove-project-service");

const deleteProjectController = async (req, res) => {
  try {
    const deletedProject = await deleteProjectService(Number(req.params.id));
    res.status(204).send(deletedProject);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = deleteProjectController;
