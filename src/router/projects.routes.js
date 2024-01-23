const express = require("express");
const projectRouter = express.Router();
const createProjectController = require("../controllers/project/create-project-controller");
const listAllProjectsController = require("../controllers/project/list-project-controller");

projectRouter.post("/project", createProjectController);
projectRouter.get("/projects", listAllProjectsController);

module.exports = projectRouter;
