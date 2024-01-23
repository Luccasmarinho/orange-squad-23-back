const express = require("express");
const projectRouter = express.Router();
const createProjectController = require("../controllers/project/create-project-controller");

projectRouter.post("/projects", createProjectController);

module.exports = projectRouter;
