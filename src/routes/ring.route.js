const express = require("express");
const { ringValidation } = require("../validations");
const { ringController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Ring */
router.post(
  "/create-Ring",
  validate(ringValidation.createRingList),
  ringController.createRing
);

/** Get Ring list */
router.get(
  "/Ring-list",
  ringController.getRingList
);

/** Delete Ring */
router.delete(
  "/delete-Ring/:RingId",
  ringController.deleteRing
);

/** Update Ring */
router.put(
  "/update-Ring/:RingId",
  validate(ringValidation.createRingList),
  ringController.updateRing
);

module.exports = router;
