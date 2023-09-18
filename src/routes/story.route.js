const express = require("express");
const { storyValidation } = require("../validations");
const { storyController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Story */
router.post(
  "/create-Story",
  validate(storyValidation.createStoryList),
  storyController.createStory
);

/** Get Story list */
router.get(
  "/Story-list",
  storyController.getStoryList
);

/** Delete Story */
router.delete(
  "/delete-Story/:StoryId",
  storyController.deleteStory
);

/** Update Story */
router.put(
  "/update-Story/:StoryId",
  validate(storyValidation.createStoryList),
  storyController.updateStory
);

module.exports = router;
