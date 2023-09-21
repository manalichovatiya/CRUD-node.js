const express = require("express");
const { projectValidation } = require("../validations");
const { projectController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Project */
router.post(
  "/create-Project",
  validate(projectValidation.createProjectList),
  projectController.createProject
);

/** Get Project list */
router.get(
  "/Project-list",
  projectController.getProjectList
);

/** Delete Project */
router.delete(
  "/delete-Project/:ProjectId",
  projectController.deleteProject
);

/** Update Project */
router.put(
  "/update-Project/:ProjectId",
  validate(projectValidation.createProjectList),
  projectController.updateProject
);

module.exports = router;
