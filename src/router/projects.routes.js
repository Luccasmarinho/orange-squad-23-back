const express = require("express");
const projectRouter = express.Router();
const createProjectController = require("../controllers/project/create-project-controller");
const listAllProjectsController = require("../controllers/project/list-project-controller");
const updateProjectController = require("../controllers/project/update-project-controller");
const deleteProjectController = require("../controllers/project/remove-project-controller");
const validateBody = require("../middlewares/validate-body");
const createProjectSchema = require("../schemas/project/schema-project");
const tokenAutentication = require("../middlewares/token-autenticate");
const updateProjectSchema = require("../schemas/project/update-schema-project");
const multer = require("multer");
const uploadConfig = require("../config/multer");

const upload = multer(uploadConfig);

projectRouter.post(
  "/project",
  tokenAutentication,
  upload.single("file"),
  validateBody(createProjectSchema.createProject),
  createProjectController
);
projectRouter.get(
  "/user/projects",
  tokenAutentication,
  listAllProjectsController
);
projectRouter.put(
  "/project/:id",
  tokenAutentication,
  validateBody(updateProjectSchema.updateProject),
  updateProjectController
);
projectRouter.delete(
  "/project/:id",
  tokenAutentication,
  deleteProjectController
);

module.exports = projectRouter;
