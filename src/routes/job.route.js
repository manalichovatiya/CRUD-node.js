const express = require("express");
const { jobValidation } = require("../validations");
const { jobController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Job */
router.post(
  "/create-Job",
  validate(jobValidation.createJobList),
  jobController.createJob
);

/** Get Job list */
router.get(
  "/Job-list",
  jobController.getJobList
);

/** Delete Job */
router.delete(
  "/delete-Job/:JobId",
  jobController.deleteJob
);

/** Update Job */
router.put(
  "/update-Job/:JobId",
  validate(jobValidation.createJobList),
  jobController.updateJob
);

module.exports = router;
