const express = require("express");
const { farmValidation } = require("../validations");
const { farmController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Farm */
router.post(
  "/create-Farm",
  validate(farmValidation.createFarmList),
  farmController.createFarm
);

/** Get Farm list */
router.get(
  "/Farm-list",
  farmController.getFarmList
);

/** Delete Farm */
router.delete(
  "/delete-Farm/:FarmId",
  farmController.deleteFarm
);

/** Update Farm */
router.put(
  "/update-Farm/:FarmId",
  validate(farmValidation.createFarmList),
  farmController.updateFarm
);

module.exports = router;
