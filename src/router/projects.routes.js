const express = require("express");
const projectRouter = express.Router();
const createProjectController = require("../controllers/project/create-project-controller");
const listAllProjectsController = require("../controllers/project/list-project-controller");
const updateProjectController = require("../controllers/project/update-project-controller");
const deleteProjectController = require("../controllers/project/remove-project-controller");
const validateBody = require("../middlewares/validate-body");
const createProjectSchema = require("../schemas/project/schema-project");

projectRouter.post(
  "/project",
  validateBody(createProjectSchema.project),
  createProjectController
);
projectRouter.get("/projects", listAllProjectsController);
projectRouter.put("/project/:id", updateProjectController);
projectRouter.delete("/project/:id", deleteProjectController);

module.exports = projectRouter;
