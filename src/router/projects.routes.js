const express = require("express");
const projectRouter = express.Router();
const createProjectController = require("../controllers/project/create-project-controller");
const listAllProjectsController = require("../controllers/project/list-project-controller");
const updateProjectController = require("../controllers/project/update-project-controller");
const deleteProjectController = require("../controllers/project/remove-project-controller");

projectRouter.post("/project", createProjectController);
projectRouter.get("/projects", listAllProjectsController);
projectRouter.put("/project/:id", updateProjectController);
projectRouter.delete("/project/:id", deleteProjectController);

module.exports = projectRouter;
