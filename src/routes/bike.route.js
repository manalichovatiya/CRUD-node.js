const express = require("express");
const { bikeValidation } = require("../validations");
const { bikeController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Bike */
router.post(
  "/create-Bike",
  validate(bikeValidation.createBikeList),
  bikeController.createBike
);

/** Get Bike list */
router.get(
  "/Bike-list",
  bikeController.getBikeList
);

/** Delete Bike */
router.delete(
  "/delete-Bike/:BikeId",
  bikeController.deleteBike
);

/** Update Bike */
router.put(
  "/update-Bike/:BikeId",
  validate(bikeValidation.createBikeList),
  bikeController.updateBike
);

module.exports = router;
