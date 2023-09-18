const express = require("express");
const { celebrityValidation } = require("../validations");
const { celebrityController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Celebrity */
router.post(
  "/create-Celebrity",
  validate(celebrityValidation.createCelebrityList),
  celebrityController.createCelebrity
);

/** Get Celebrity list */
router.get(
  "/Celebrity-list",
  celebrityController.getCelebrityList
);

/** Delete Celebrity */
router.delete(
  "/delete-Celebrity/:CelebrityId",
  celebrityController.deleteCelebrity
);

/** Update Celebrity */
router.put(
  "/update-Celebrity/:CelebrityId",
  validate(celebrityValidation.createCelebrityList),
  celebrityController.updateCelebrity
);

module.exports = router;
