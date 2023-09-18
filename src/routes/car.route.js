const express = require("express");
const { carValidation } = require("../validations");
const { carController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Car */
router.post(
  "/create-Car",
  validate(carValidation.createCarList),
  carController.createCar
);

/** Get Car list */
router.get(
  "/Car-list",
  carController.getCarList
);

/** Delete Car */
router.delete(
  "/delete-Car/:CarId",
  carController.deleteCar
);

/** Update Car */
router.put(
  "/update-Car/:CarId",
  validate(carValidation.createCarList),
  carController.updateCar
);

module.exports = router;
