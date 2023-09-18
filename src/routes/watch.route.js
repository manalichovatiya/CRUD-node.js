const express = require("express");
const { watchValidation } = require("../validations");
const { watchController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Watch */
router.post(
  "/create-Watch",
  validate(watchValidation.createWatchList),
  watchController.createWatch
);

/** Get Watch list */
router.get(
  "/Watch-list",
  watchController.getWatchList
);

/** Delete Watch */
router.delete(
  "/delete-Watch/:WatchId",
  watchController.deleteWatch
);

/** Update Watch */
router.put(
  "/update-Watch/:WatchId",
  validate(watchValidation.createWatchList),
  watchController.updateWatch
);

module.exports = router;
