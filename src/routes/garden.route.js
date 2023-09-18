const express = require("express");
const { gardenValidation } = require("../validations");
const { gardenController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Garden */
router.post(
  "/create-Garden",
  validate(gardenValidation.createGardenList),
  gardenController.createGarden
);

/** Get Garden list */
router.get(
  "/Garden-list",
  gardenController.getGardenList
);

/** Delete Garden */
router.delete(
  "/delete-Garden/:GardenId",
  gardenController.deleteGarden
);

/** Update Garden */
router.put(
  "/update-Garden/:GardenId",
  validate(gardenValidation.createGardenList),
  gardenController.updateGarden
);

module.exports = router;
