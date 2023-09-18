const express = require("express");
const { foodValidation } = require("../validations");
const { foodController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Food */
router.post(
  "/create-Food",
  validate(foodValidation.createFoodList),
  foodController.createFood
);

/** Get Food list */
router.get(
  "/Food-list",
  foodController.getFoodList
);

/** Delete Food */
router.delete(
  "/delete-Food/:FoodId",
  foodController.deleteFood
);

/** Update Food */
router.put(
  "/update-Food/:FoodId",
  validate(foodValidation.createFoodList),
  foodController.updateFood
);

module.exports = router;
