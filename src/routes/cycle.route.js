const express = require("express");
const { cycleValidation } = require("../validations");
const { cycleController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Cycle */
router.post(
  "/create-Cycle",
  validate(cycleValidation.createCycleList),
  cycleController.createCycle
);

/** Get Cycle list */
router.get(
  "/Cycle-list",
  cycleController.getCycleList
);

/** Delete Cycle */
router.delete(
  "/delete-Cycle/:CycleId",
  cycleController.deleteCycle
);

/** Update Cycle */
router.put(
  "/update-Cycle/:CycleId",
  validate(cycleValidation.createCycleList),
  cycleController.updateCycle
);

module.exports = router;
